ALTER TABLE public.community_posts ADD COLUMN image_path text, ADD COLUMN image_status text NOT NULL DEFAULT 'pending' CHECK (image_status IN ('pending','approved','hidden','rejected'));
GRANT SELECT (image_path,image_status) ON public.community_posts TO anon, authenticated;
COMMENT ON COLUMN public.community_posts.image_status IS 'Cloud moderators approve image separately from post. Pending/hidden/rejected images never served publicly. Delete image files via Cloud Storage and clear image_path when permanently removing media.';
ALTER TABLE public.community_reports DROP CONSTRAINT IF EXISTS community_reports_reason_check;
ALTER TABLE public.community_reports ADD CONSTRAINT community_reports_reason_check CHECK (reason IN ('hakaret','spam','tehlikeli_tibbi','gizlilik','uygunsuz_gorsel','diger'));
