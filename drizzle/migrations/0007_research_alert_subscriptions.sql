CREATE TABLE public.research_alert_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE CHECK (char_length(email) BETWEEN 5 AND 254),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','unsubscribed')),
  confirm_token uuid NOT NULL DEFAULT gen_random_uuid(),
  unsubscribe_token uuid NOT NULL DEFAULT gen_random_uuid(),
  consent_text text NOT NULL,
  consent_at timestamptz NOT NULL DEFAULT now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.research_alert_subscriptions TO service_role;
ALTER TABLE public.research_alert_subscriptions ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.research_alert_subscriptions IS 'Double opt-in research alert list. Server-only; no public policies. Only confirmed rows may receive alerts.';

CREATE TABLE public.research_alert_outbox (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  study_id text NOT NULL,
  change_summary text NOT NULL CHECK (char_length(change_summary) BETWEEN 3 AND 500),
  created_at timestamptz NOT NULL DEFAULT now(),
  sent_at timestamptz
);
GRANT ALL ON public.research_alert_outbox TO service_role;
ALTER TABLE public.research_alert_outbox ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.research_alert_outbox IS 'Editor-queued research updates awaiting a connected email provider; nothing sends until then.';
