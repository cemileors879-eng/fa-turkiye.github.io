CREATE TABLE public.community_posts (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 display_name text NOT NULL DEFAULT 'Anonim' CHECK (char_length(display_name) BETWEEN 1 AND 40),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
 member_label text CHECK (member_label IN ('hasta','hasta_yakini')),
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','hidden')),
 created_at timestamptz NOT NULL DEFAULT now(),
 moderation_note text
);
GRANT SELECT (id,display_name,message,member_label,created_at,status) ON public.community_posts TO anon, authenticated;
GRANT ALL ON public.community_posts TO service_role;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Approved community posts are public" ON public.community_posts FOR SELECT TO anon, authenticated USING (status = 'approved');
CREATE INDEX community_posts_public_order ON public.community_posts(status,created_at DESC);
CREATE TABLE public.community_reports (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 post_id uuid NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
 reason text NOT NULL CHECK (reason IN ('hakaret','spam','tehlikeli_tibbi','gizlilik','diger')),
 details text NOT NULL DEFAULT '' CHECK (char_length(details) <= 500),
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','reviewed','dismissed')),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.community_reports TO service_role;
ALTER TABLE public.community_reports ENABLE ROW LEVEL SECURITY;
CREATE INDEX community_reports_review ON public.community_reports(status,created_at DESC);
COMMENT ON TABLE public.community_posts IS 'Premoderated community: only approved posts public. Cloud moderators set approved/rejected/hidden; private moderation notes are not publicly selectable.';
COMMENT ON TABLE public.community_reports IS 'Private abuse review queue, visible only to authorized Cloud editors; no anonymous or authenticated Data API access.';
