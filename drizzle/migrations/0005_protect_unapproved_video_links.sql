REVOKE SELECT (video_url,video_status) ON public.community_posts FROM anon, authenticated;
CREATE VIEW public.community_public_posts WITH (security_barrier=true) AS SELECT id,display_name,message,member_label,created_at,image_path,image_status,CASE WHEN video_status='approved' THEN video_url ELSE NULL END AS video_url,CASE WHEN video_status='approved' THEN 'approved' ELSE NULL END AS video_status FROM public.community_posts WHERE status='approved';
GRANT SELECT ON public.community_public_posts TO anon,authenticated;
GRANT ALL ON public.community_public_posts TO service_role;
COMMENT ON VIEW public.community_public_posts IS 'Narrow public projection: approved posts only, no pending/hidden/rejected video URL, no moderation notes or reports. Owner-rights view deliberately restricts rows and columns.';
