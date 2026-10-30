import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { PageTitle } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
import { confirmResearchAlerts, unsubscribeResearchAlerts } from "@/lib/research-alerts.functions";

export const Route = createFileRoute("/abonelik")({
  validateSearch: z.object({ islem: z.enum(["onay", "iptal"]).optional(), token: z.string().optional() }),
  head: () => ({ ...pageHead("Araştırma Bildirimi Aboneliği", "FA araştırma bildirimleri aboneliğinizi onaylayın veya abonelikten çıkın."), meta: [...pageHead("Araştırma Bildirimi Aboneliği", "FA araştırma bildirimleri aboneliğinizi onaylayın veya abonelikten çıkın.").meta, { name: "robots", content: "noindex" }] }),
  component: SubscriptionPage,
});

function SubscriptionPage() {
  const { islem, token } = Route.useSearch();
  const confirm = useServerFn(confirmResearchAlerts);
  const unsubscribe = useServerFn(unsubscribeResearchAlerts);
  const [state, setState] = useState<"idle" | "busy" | "done" | "fail">("idle");
  const valid = !!islem && !!token && /^[0-9a-f-]{36}$/i.test(token);
  async function run() {
    if (!valid) return;
    setState("busy");
    try {
      const r = islem === "onay" ? await confirm({ data: { token } }) : await unsubscribe({ data: { token } });
      setState(r.ok ? "done" : "fail");
    } catch { setState("fail"); }
  }
  const label = islem === "onay" ? "Aboneliğimi onayla" : "Abonelikten çık";
  return <main className="page-width py-9 max-w-2xl">
    <PageTitle title="Araştırma bildirimleri" description="Aboneliğinizi e-postanızdaki bağlantıyla yönetin." />
    {!valid && <p className="notice text-sm">Bu bağlantı eksik veya geçersiz. Lütfen e-postanızdaki bağlantıyı kullanın.</p>}
    {valid && state !== "done" && <button type="button" onClick={run} disabled={state === "busy"} className="bg-brand text-ink font-bold text-sm px-4 py-3 rounded-md">{state === "busy" ? "İşleniyor…" : label}</button>}
    {state === "done" && <p className="notice text-sm">{islem === "onay" ? "Aboneliğiniz onaylandı." : "Abonelikten çıktınız. Artık bildirim gönderilmeyecek."}</p>}
    {state === "fail" && <p className="notice text-sm mt-3">Bu bağlantı daha önce kullanılmış veya süresi geçmiş olabilir.</p>}
    <Link to="/arastirma-takip-merkezi" className="block mt-6 text-xs font-bold text-brand">Araştırma Takip Merkezi'ne dön</Link>
  </main>;
}

