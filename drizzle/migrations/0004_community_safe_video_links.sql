ALTER TABLE public.community_posts ADD COLUMN video_url text, ADD COLUMN video_status text NOT NULL DEFAULT 'pending' CHECK (video_status IN ('pending','approved','hidden','rejected'));
GRANT SELECT (video_url,video_status) ON public.community_posts TO anon, authenticated;
ALTER TABLE public.community_reports DROP CONSTRAINT IF EXISTS community_reports_reason_check;
ALTER TABLE public.community_reports ADD CONSTRAINT community_reports_reason_check CHECK (reason IN ('hakaret','spam','tehlikeli_tibbi','gizlilik','uygunsuz_gorsel','uygunsuz_video','diger'));
CREATE VIEW public.community_moderation_queue WITH (security_invoker=true) AS SELECT p.*, CASE WHEN EXISTS (SELECT 1 FROM public.community_reports r WHERE r.post_id=p.id AND r.status='pending') THEN 'raporlanan' WHEN p.status='pending' THEN 'onay_bekleyen' WHEN p.status='approved' THEN 'yayinda' ELSE p.status END AS queue_status FROM public.community_posts p;
REVOKE ALL ON public.community_moderation_queue FROM anon, authenticated;
GRANT SELECT ON public.community_moderation_queue TO service_role;
COMMENT ON COLUMN public.community_posts.video_status IS 'Moderators independently approve/hide/reject videos; clear video_url to delete video reference. Only approved videos on approved posts are displayed. External videos may change: reports require renewed review.';
