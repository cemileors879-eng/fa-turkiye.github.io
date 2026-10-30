import { z } from "zod";
import { normalizeCommunityVideo } from "./community-video";

const plainText = (min: number, max: number) => z.string().trim().min(min, `En az ${min} karakter yazın.`).max(max, `En fazla ${max} karakter yazın.`)
  .refine((value) => !/[<>\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(value), "Yalnızca düz metin kullanın.");
export const communitySchema = z.object({
  title: plainText(3, 120),
  anonymous: z.boolean(),
  displayName: plainText(0, 40),
  message: plainText(10, 2000).refine((value) => !/(https?:\/\/|www\.|[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:\+?\d[\s()-]*){10,})/iu.test(value), "Bağlantı, e-posta, telefon veya kimlik numarası paylaşmayın."),
  memberLabel: z.enum(["", "hasta", "hasta_yakini"]),
  consent: z.literal(true, { errorMap: () => ({ message: "Gizlilik ve paylaşım kurallarını kabul edin." }) }),
  website: z.string().max(0, "Gönderim doğrulanamadı."),
  imageBase64: z.string().max(4194304).regex(/^[A-Za-z0-9+/]*={0,2}$/).optional(),
  images: z.array(z.string().max(4194304).regex(/^[A-Za-z0-9+/]*={0,2}$/)).max(4, "En fazla 4 fotoğraf ekleyin.").optional(),
  videoUrl: z.string().trim().max(300, "Video bağlantısı en fazla 300 karakter olabilir.").refine(value => !value || Boolean(normalizeCommunityVideo(value)), "HTTPS YouTube veya Vimeo video bağlantısı ekleyin.").optional(),
}).strict().refine((value) => value.anonymous || value.displayName.length >= 2, { path: ["displayName"], message: "En az 2 karakterlik bir rumuz yazın." });
export const reportSchema = z.object({
  postId: z.string().uuid(),
  targetType: z.enum(["post", "comment", "image", "video"]).default("post"),
  targetId: z.string().uuid().optional(),
  reason: z.enum(["hakaret", "spam", "tehlikeli_tibbi", "gizlilik", "uygunsuz_gorsel", "uygunsuz_video", "diger"]),
  details: plainText(0, 500),
  website: z.string().max(0),
}).strict();
export type CommunityInput = z.infer<typeof communitySchema>;
export const commentSchema = z.object({
  postId: z.string().uuid(), parentId: z.string().uuid().nullable(),
  anonymous: z.boolean(), displayName: plainText(0, 40),
  message: plainText(2, 1000).refine(value => !/(https?:\/\/|www\.|[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:\+?\d[\s()-]*){10,})/iu.test(value), "İletişim bilgisi veya bağlantı paylaşmayın."),
  memberLabel: z.enum(["", "hasta", "hasta_yakini"]),
  consent: z.literal(true), website: z.string().max(0),
}).strict().refine(value => value.anonymous || value.displayName.length >= 2, "En az 2 karakterlik rumuz yazın.");
export type CommunityComment = { id: string; post_id: string; parent_id: string | null; display_name: string; message: string; member_label: string | null; created_at: string; depth: number };
export type CommunityPost = { id: string; title: string; display_name: string; message: string; member_label: string | null; created_at: string; hasImage: boolean; images: string[]; videoUrl: string | null; comments: CommunityComment[] };
