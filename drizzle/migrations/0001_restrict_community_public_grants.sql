REVOKE ALL ON TABLE public.community_posts FROM anon, authenticated;
REVOKE ALL ON TABLE public.community_reports FROM anon, authenticated;
GRANT SELECT (id,display_name,message,member_label,created_at,status) ON public.community_posts TO anon, authenticated;
GRANT ALL ON TABLE public.community_posts, public.community_reports TO service_role;
