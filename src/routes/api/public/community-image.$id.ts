import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/api/public/community-image/$id")({
  server: { handlers: { GET: async ({ params }) => {
    const id = z.string().uuid().safeParse(params.id);
    const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Content-Security-Policy": "default-src 'none'", "Cross-Origin-Resource-Policy": "same-origin" };
    if (!id.success) return new Response(null, { status: 404, headers });
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: media } = await supabaseAdmin.from("community_media").select("image_path,post_id").eq("id", id.data).eq("status", "approved").maybeSingle();
      let imagePath: string | null = null;
      if (media) {
        const parent = await supabaseAdmin.from("community_posts").select("id").eq("id", media.post_id).eq("status", "approved").maybeSingle();
        if (parent.data) imagePath = media.image_path;
      } else {
        const { data: post } = await supabaseAdmin.from("community_posts").select("image_path").eq("id", id.data).eq("status", "approved").eq("image_status", "approved").maybeSingle();
        imagePath = post?.image_path ?? null;
      }
      if (!imagePath) return new Response(null, { status: 404, headers });
      const { data: image, error } = await supabaseAdmin.storage.from("community-images").download(imagePath);
      if (error || !image) return new Response(null, { status: 404, headers });
      return new Response(image, { headers: { ...headers, "Content-Type": "image/jpeg", "Content-Disposition": "inline; filename=community.jpg" } });
    } catch { return new Response(null, { status: 503, headers }); }
  } } },
});
