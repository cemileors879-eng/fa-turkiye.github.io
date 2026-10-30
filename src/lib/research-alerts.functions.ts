import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const ALERT_CONSENT =
  "Yeni FA araştırmaları ve kayıt güncellemeleri hakkında e-posta almayı kabul ediyorum. Yalnızca e-posta adresim saklanır; istediğim an abonelikten çıkabilirim.";

const subscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  website: z.string().max(0).optional(), // honeypot
});

// Same neutral response for new, existing and unsubscribed addresses: no enumeration.
export const subscribeResearchAlerts = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => subscribeSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: existing } = await supabaseAdmin.from("research_alert_subscriptions").select("id,status").eq("email", data.email).maybeSingle();
    if (!existing) {
      const { error } = await supabaseAdmin.from("research_alert_subscriptions").insert({ email: data.email, consent_text: ALERT_CONSENT });
      if (error) throw new Error("Abonelik kaydedilemedi. Lütfen daha sonra tekrar deneyin.");
    } else if (existing.status === "unsubscribed") {
      await supabaseAdmin.from("research_alert_subscriptions").update({
        status: "pending", consent_text: ALERT_CONSENT, consent_at: new Date().toISOString(),
        confirm_token: crypto.randomUUID(), unsubscribed_at: null, confirmed_at: null,
      }).eq("id", existing.id);
    }
    return { ok: true };
  });

const tokenSchema = z.object({ token: z.string().uuid() });

export const confirmResearchAlerts = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => tokenSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows } = await supabaseAdmin.from("research_alert_subscriptions")
      .update({ status: "confirmed", confirmed_at: new Date().toISOString() })
      .eq("confirm_token", data.token).eq("status", "pending").select("id");
    return { ok: !!rows?.length };
  });

export const unsubscribeResearchAlerts = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => tokenSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows } = await supabaseAdmin.from("research_alert_subscriptions")
      .update({ status: "unsubscribed", unsubscribed_at: new Date().toISOString() })
      .eq("unsubscribe_token", data.token).neq("status", "unsubscribed").select("id");
    return { ok: !!rows?.length };
  });

