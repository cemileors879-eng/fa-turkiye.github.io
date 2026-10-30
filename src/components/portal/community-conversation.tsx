import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Flag, Reply, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { commentSchema, reportSchema, type CommunityPost, type CommunityComment } from "@/lib/community-schema";
import { submitCommunityComment, reportCommunityPost } from "@/lib/community.functions";

export const communityField = "w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-brand";
export const communityDate = (value: string) => new Date(value).toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", day: "numeric", month: "long", year: "numeric" });
export function ReportControl({ postId, targetType = "post", targetId, label = "Raporla" }: { postId: string; targetType?: "post" | "comment" | "image" | "video"; targetId?: string; label?: string }) {
  const report = useServerFn(reportCommunityPost);
  const [open, setOpen] = useState(false), [busy, setBusy] = useState(false), [notice, setNotice] = useState(""), [error, setError] = useState("");
  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const values = new FormData(event.currentTarget);
    const parsed = reportSchema.safeParse({ postId, targetType, ...(targetId ? { targetId } : {}), reason: values.get("reason"), details: values.get("details"), website: "" });
    if (!parsed.success) { setError("Rapor alanlarını kontrol edin."); return; }
    setBusy(true); setError("");
    try { const result = await report({ data: parsed.data }); if (!result.ok) { setError("Rapor gönderilemedi. Tekrar deneyin."); return; } setOpen(false); setNotice("Raporunuz özel moderasyon kuyruğuna alındı."); }
    catch { setError("Rapor gönderilemedi. Tekrar deneyin."); } finally { setBusy(false); }
  }
  return <div className="min-w-0"><Button variant="ghost" size="sm" aria-expanded={open} onClick={() => { setOpen(!open); setNotice(""); }} className="text-muted-foreground"><Flag size={14} />{label}</Button>
    {notice && <p role="status" className="text-xs leading-6 text-brand">{notice}</p>}
    {open && <form onSubmit={send} className="mt-2 space-y-3 border-t border-border pt-3">
      <label className="block text-sm">Rapor nedeni<select name="reason" className={`${communityField} mt-1`} defaultValue={targetType === "image" ? "uygunsuz_gorsel" : targetType === "video" ? "uygunsuz_video" : "diger"}>
        <option value="diger">Diğer</option><option value="hakaret">Hakaret / ayrımcılık</option><option value="spam">Spam / reklam</option><option value="tehlikeli_tibbi">Tehlikeli tıbbi yönlendirme</option><option value="gizlilik">Kişisel veri / gizlilik</option><option value="uygunsuz_gorsel">Uygunsuz fotoğraf</option><option value="uygunsuz_video">Uygunsuz video</option>
      </select></label>
      <label className="block text-sm">Açıklama (isteğe bağlı)<textarea name="details" maxLength={500} rows={2} className={`${communityField} mt-1`} /></label><p className="text-xs text-muted-foreground">Raporu yalnızca yöneticiler görür. Kişisel bilgi eklemeyin.</p>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <div className="flex gap-2"><Button size="sm" disabled={busy}>{busy ? "Gönderiliyor…" : "Raporu gönder"}</Button><Button type="button" size="sm" variant="ghost" onClick={() => setOpen(false)}>Vazgeç</Button></div>
    </form>}
  </div>;
}

export function CommunityConversation({ post }: { post: CommunityPost }) {
  const submit = useServerFn(submitCommunityComment);
  const [expanded, setExpanded] = useState(false), [replyTo, setReplyTo] = useState<CommunityComment | null>(null), [anonymous, setAnonymous] = useState(true), [busy, setBusy] = useState(false), [notice, setNotice] = useState(""), [error, setError] = useState("");
  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const values = new FormData(form);
    const parsed = commentSchema.safeParse({ postId: post.id, parentId: replyTo?.id ?? null, anonymous, displayName: String(values.get("displayName") ?? ""), message: String(values.get("message") ?? ""), memberLabel: values.get("memberLabel"), consent: values.get("consent") === "on", website: String(values.get("website") ?? "") });
    setError(""); setNotice(""); if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Alanları kontrol edin."); return; }
    setBusy(true);
    try { const result = await submit({ data: parsed.data }); if (!result.ok) { setError("Yorum gönderilemedi. Gönderi veya yanıtladığınız yorum artık yayında olmayabilir."); return; } form.reset(); setReplyTo(null); setAnonymous(true); setNotice("Onay bekliyor: Yorumunuz incelendikten sonra uygun bulunursa sohbet içinde yayınlanacak."); }
    catch { setError("Yorum gönderilemedi. Tekrar deneyin."); } finally { setBusy(false); }
  }
  function thread(parent: string | null, level: number): React.ReactNode {
    return post.comments.filter(c => c.parent_id === parent).map(comment => <div key={comment.id} className={level ? "ml-2 border-l-2 border-border pl-3 sm:ml-4" : ""}>
      <div className="py-3"><div className="flex flex-wrap items-center gap-2 text-xs"><strong className="text-primary break-all">{comment.display_name}</strong>{comment.member_label && <span className="text-muted-foreground">{comment.member_label === "hasta" ? "Hasta" : "Hasta yakını"}</span>}<time dateTime={comment.created_at} className="text-muted-foreground">{communityDate(comment.created_at)}</time></div>
        <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-7">{comment.message}</p>
        <div className="flex flex-wrap gap-1">{comment.depth < 5 && <Button variant="ghost" size="sm" onClick={() => { setReplyTo(comment); setNotice(""); }}><Reply size={14} />Yanıtla</Button>}<ReportControl postId={post.id} targetType="comment" targetId={comment.id} label="Yorumu raporla" /></div>
      </div>{level < 5 && thread(comment.id, level + 1)}
    </div>);
  }
  return <section className="mt-4 border-t border-border pt-3" aria-label={`${post.title || "Hikâye"} yorumları`}>
    <Button variant="ghost" size="sm" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}><Reply size={16} />{post.comments.length} yorum · Sohbete katıl</Button>
    {expanded && <div className="mt-2">{thread(null, 0)}{!post.comments.length && <p className="py-3 text-sm text-muted-foreground">Bu hikâyeye ilk yorumu siz bırakabilirsiniz.</p>}
      <form onSubmit={send} className="space-y-3 border-t border-border pt-4">
        {replyTo && <div className="flex items-center justify-between gap-2 bg-muted p-2 text-xs"><span className="break-all">{replyTo.display_name} kişisine yanıt</span><Button type="button" variant="ghost" size="icon" aria-label="Yanıtı iptal et" onClick={() => setReplyTo(null)}><X size={14} /></Button></div>}
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} />Anonim yorum</label>
        <div className="grid gap-3 sm:grid-cols-2"><label className="block text-sm">Yorum rumuzu<input name="displayName" disabled={anonymous} maxLength={40} autoComplete="off" placeholder={anonymous ? "Anonim" : "Rumuzunuz"} className={`${communityField} mt-1`} /></label><label className="block text-sm">Yorum etiketi<select name="memberLabel" className={`${communityField} mt-1`}><option value="">Etiket kullanma</option><option value="hasta">Hasta</option><option value="hasta_yakini">Hasta yakını</option></select></label></div>
        <label className="block text-sm">{replyTo ? "Yanıtınız" : "Yorumunuz"}<textarea name="message" required minLength={2} maxLength={1000} rows={3} className={`${communityField} mt-1`} /></label>
        <label className="hidden" aria-hidden="true">Web sitesi<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label className="flex items-start gap-2 text-xs leading-6"><input name="consent" type="checkbox" required className="mt-1" /><span>Kişisel/sağlık verisi paylaşmadığımı ve yorumumun yalnızca onaylanırsa yayınlanacağını kabul ediyorum.</span></label>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button size="sm" disabled={busy}><Send size={14} />{busy ? "Gönderiliyor…" : replyTo ? "Yanıtı incelemeye gönder" : "Yorumu incelemeye gönder"}</Button>
        {notice && <p role="status" className="bg-brand-soft p-3 text-sm leading-6">{notice}</p>}
      </form>
    </div>}
  </section>;
}
