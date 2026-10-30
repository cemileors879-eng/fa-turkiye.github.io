import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { communitySchema, commentSchema, reportSchema, type CommunityPost } from "./community-schema";
import { sanitizeCommunityJpeg } from "./community-image";
import { normalizeCommunityVideo } from "./community-video";

export const listCommunityPosts = createServerFn({ method: "GET" }).handler(async (): Promise<{ posts: CommunityPost[]; unavailable: boolean }> => {
  try {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) return { posts: [], unavailable: true };
    const client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      } },
    });
    const { data, error } = await client.from("community_public_posts").select("id,title,display_name,message,member_label,created_at,image_path,image_status,video_url,video_status").order("created_at", { ascending: false }).limit(50);
    const ids = (data ?? []).map(p => p.id);
    const [media, comments] = ids.length ? await Promise.all([
      client.from("community_public_media").select("id,post_id,position").in("post_id", ids).order("position"),
      client.from("community_public_comments").select("*").in("post_id", ids).order("created_at").limit(1000),
    ]) : [{ data: [], error: null }, { data: [], error: null }];
    if (error || media.error || comments.error) return { posts: [], unavailable: true };
    return { posts: (data ?? []).map(({ image_path, image_status, video_url, video_status, ...post }) => ({ ...post, hasImage: Boolean(image_path && image_status === "approved"), images: (media.data ?? []).filter(m => m.post_id === post.id).map(m => m.id), comments: (comments.data ?? []).filter(c => c.post_id === post.id), videoUrl: video_url && video_status === "approved" ? normalizeCommunityVideo(video_url) : null })), unavailable: false };
  } catch { return { posts: [], unavailable: true }; }
});

// Public, narrowly scoped write: validation is repeated on the server, and
// status/creation date can never be supplied by the visitor. No public writes
// are granted on either table; all submissions require human review.
export const submitCommunityPost = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => communitySchema.parse(input))
  .handler(async ({ data }) => {
    const uploaded: string[] = [];
    let postId: string | null = null;
    try {
      const sources = [...(data.images ?? []), ...(data.imageBase64 ? [data.imageBase64] : [])];
      if (sources.length > 4) return { ok: false };
      const images = sources.map(source => sanitizeCommunityJpeg(Uint8Array.from(atob(source), c => c.charCodeAt(0))));
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      for (const image of images) {
        const imagePath = `${crypto.randomUUID()}.jpg`;
        const { error } = await supabaseAdmin.storage.from("community-images").upload(imagePath, image, { contentType: "image/jpeg", upsert: false });
        if (error) throw new Error("Upload failed");
        uploaded.push(imagePath);
      }
      const { data: post, error } = await supabaseAdmin.from("community_posts").insert({
        title: data.title,
        display_name: data.anonymous ? "Anonim" : data.displayName,
        message: data.message,
        member_label: data.memberLabel || null,
        status: "pending",
        image_path: null,
        image_status: "pending",
        video_url: data.videoUrl ? normalizeCommunityVideo(data.videoUrl) : null,
        video_status: "pending",
      }).select("id").single();
      if (error || !post) throw new Error("Post failed");
      postId = post.id;
      if (uploaded.length) {
        const result = await supabaseAdmin.from("community_media").insert(uploaded.map((image_path, position) => ({ post_id: post.id, image_path, position, status: "pending" })));
        if (result.error) throw new Error("Media failed");
      }
      return { ok: true };
    } catch {
      if (uploaded.length || postId) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        if (postId) await supabaseAdmin.from("community_posts").delete().eq("id", postId);
        if (uploaded.length) await supabaseAdmin.storage.from("community-images").remove(uploaded);
      }
      return { ok: false };
    }
  });

export const reportCommunityPost = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => reportSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: post, error: lookupError } = await supabaseAdmin.from("community_posts").select("id").eq("id", data.postId).eq("status", "approved").maybeSingle();
      if (lookupError || !post) return { ok: false };
      if (data.targetType === "comment" || (data.targetType === "image" && data.targetId)) {
        if (!data.targetId) return { ok: false };
        const view = data.targetType === "comment" ? "community_public_comments" : "community_public_media";
        const target = await supabaseAdmin.from(view).select("id").eq("id", data.targetId).eq("post_id", post.id).maybeSingle();
        if (!target.data || target.error) return { ok: false };
      }
      if (data.targetType === "video" || (data.targetType === "image" && !data.targetId)) {
        const target = await supabaseAdmin.from("community_posts").select("image_path,image_status,video_url,video_status").eq("id", post.id).single();
        if (data.targetType === "video" ? !target.data?.video_url || target.data.video_status !== "approved" : !target.data?.image_path || target.data.image_status !== "approved") return { ok: false };
      }
      const { error } = await supabaseAdmin.from("community_reports").insert({ post_id: post.id, reason: data.reason, details: data.details, status: "pending", target_type: data.targetType, comment_id: data.targetType === "comment" ? data.targetId ?? null : null, media_id: data.targetType === "image" ? data.targetId ?? null : null });
      return { ok: !error };
    } catch { return { ok: false }; }
  });

export const submitCommunityComment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => commentSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const post = await supabaseAdmin.from("community_posts").select("id").eq("id", data.postId).eq("status", "approved").maybeSingle();
      if (!post.data || post.error) return { ok: false };
      if (data.parentId) {
        const parent = await supabaseAdmin.from("community_public_comments").select("depth").eq("id", data.parentId).eq("post_id", data.postId).maybeSingle();
        if (!parent.data || parent.error || parent.data.depth === null || parent.data.depth >= 5) return { ok: false };
      }
      const result = await supabaseAdmin.from("community_comments").insert({ post_id: data.postId, parent_id: data.parentId, display_name: data.anonymous ? "Anonim" : data.displayName, message: data.message, member_label: data.memberLabel || null, status: "pending" });
      return { ok: !result.error };
    } catch { return { ok: false }; }
  });
