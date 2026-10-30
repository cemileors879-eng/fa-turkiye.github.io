import { useState } from "react";
import { useHydrated } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Users, Plus, ImagePlus, X, RefreshCw, Video, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { communityQueryOptions } from "@/lib/community-queries";
import { communitySchema } from "@/lib/community-schema";
import { submitCommunityPost } from "@/lib/community.functions";
import { prepareCommunityImage } from "@/lib/community-image";
import { AssociationGallery } from "./association-gallery";
import { CommunityConversation, ReportControl, communityDate, communityField } from "./community-conversation";

export function Community() {
  const ready = useHydrated();
  const { data, refetch, isFetching } = useSuspenseQuery(communityQueryOptions);
  const submit = useServerFn(submitCommunityPost);
  const [compose, setCompose] = useState(false), [anonymous, setAnonymous] = useState(true), [busy, setBusy] = useState(false);
  const [images, setImages] = useState<string[]>([]), [imageBusy, setImageBusy] = useState(false), [imageStatus, setImageStatus] = useState("");
  const [error, setError] = useState(""), [notice, setNotice] = useState("");
  async function chooseImages(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []); event.target.value = ""; setError("");
    if (files.length + images.length > 4) { setError("En fazla 4 fotoğraf ekleyebilirsiniz."); return; }
    setImageBusy(true);
    try {
      const prepared: string[] = [];
      for (const [i, file] of files.entries()) { setImageStatus(`${i + 1}/${files.length} fotoğraf hazırlanıyor…`); prepared.push(await prepareCommunityImage(file)); }
      setImages(previous => [...previous, ...prepared]); setImageStatus("Fotoğraflar hazır; hikâyenizle birlikte yüklenecek.");
    } catch (e) { setError(e instanceof Error ? e.message : "Fotoğraflar hazırlanamadı."); setImageStatus(""); }
    finally { setImageBusy(false); }
  }
  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const values = new FormData(form); setError(""); setNotice("");
    const parsed = communitySchema.safeParse({ title: String(values.get("title") ?? ""), anonymous, displayName: String(values.get("displayName") ?? ""), message: String(values.get("message") ?? ""), memberLabel: values.get("memberLabel"), consent: values.get("consent") === "on", website: String(values.get("website") ?? ""), images, videoUrl: String(values.get("videoUrl") ?? "") });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Alanları kontrol edin."); return; }
    setBusy(true);
    try { const result = await submit({ data: parsed.data }); if (!result.ok) { setError("Hikâyeniz gönderilemedi. Fotoğraflarınızı ve bağlantınızı kontrol edip tekrar deneyin."); return; } form.reset(); setImages([]); setImageStatus(""); setAnonymous(true); setCompose(false); setNotice("Onay bekliyor: Hayat hikâyeniz alındı. Hikâye, fotoğraflar ve video bağlantısı ayrı ayrı incelenir; yalnızca onaylanan içerikler yayınlanır."); }
    catch { setError("Hikâyeniz gönderilemedi. Lütfen tekrar deneyin."); } finally { setBusy(false); }
  }
  return <main className="page-width py-9">
    <header className="intro !pt-0"><span className="eyebrow flex items-center gap-2"><Users size={16} />Hayat hikâyeleri · Dayanışma · Sohbet</span><h1 className="mt-2">FA Türkiye Topluluğu</h1><p>FA hastaları ve yakınlarının hayat hikâyeleriyle buluştuğu, birbirini dinlediği ve dayanıştığı topluluk.</p></header>
    <div className="notice mb-3">Buradaki paylaşımlar kişisel deneyimlerdir, tıbbi tavsiye yerine geçmez.</div>
    <p className="mb-8 text-sm leading-7 text-muted-foreground">Gerçek adınızı, telefonunuzu, adresinizi, kimlik bilgilerinizi, tahlil sonuçlarını veya kişisel sağlık verilerinizi paylaşmayın. Fotoğraf ve videolarda görünen kişilerin iznini alın.</p>
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
      <section className="min-w-0" aria-labelledby="stories-title">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h2 id="stories-title" className="text-xl font-bold text-primary">Hayat hikâyelerimiz</h2><div className="flex gap-2"><Button variant="ghost" size="icon" aria-label="Paylaşımları yenile" title="Paylaşımları yenile" disabled={isFetching} onClick={() => refetch()}><RefreshCw size={16} /></Button><Button onClick={() => setCompose(!compose)} aria-expanded={compose}><Plus size={16} />Hikâyemi paylaş</Button></div></div>
        {notice && <p role="status" className="mb-5 bg-brand-soft p-4 text-sm leading-7">{notice}</p>}
        {compose && <section className="mb-7 border-y border-border py-6" aria-labelledby="compose-title"><h3 id="compose-title" className="mb-4 text-lg font-bold text-primary">Benim hayat hikâyem</h3>
          <form onSubmit={send} className="space-y-4">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} />Anonim paylaş</label>
            <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-semibold">Rumuz<input name="displayName" maxLength={40} disabled={anonymous} placeholder={anonymous ? "Anonim" : "Rumuzunuz"} className={`${communityField} mt-2`} autoComplete="off" /></label><label className="block text-sm font-semibold">Etiket (isteğe bağlı)<select name="memberLabel" className={`${communityField} mt-2`}><option value="">Etiket kullanma</option><option value="hasta">Hasta</option><option value="hasta_yakini">Hasta yakını</option></select></label></div>
            <label className="block text-sm font-semibold">Hikâye başlığı<input name="title" required minLength={3} maxLength={120} className={`${communityField} mt-2`} placeholder="Hikâyenize bir başlık verin" /></label>
            <label className="block text-sm font-semibold">Hayat hikâyeniz<textarea name="message" required minLength={10} maxLength={2000} rows={8} className={`${communityField} mt-2`} placeholder="Günlük hayatınız, sizi güçlendiren anlar ve paylaşmak istedikleriniz…" /><span className="mt-1 block text-xs font-normal text-muted-foreground">10–2000 karakter · Kişisel/sağlık bilgisi veya iletişim bilgisi eklemeyin.</span></label>
            <div className="space-y-2"><label htmlFor="community-image" className="block text-sm font-semibold">Fotoğraflar (isteğe bağlı)</label><Button type="button" variant="outline" disabled={busy || imageBusy || images.length >= 4} onClick={() => document.getElementById("community-image")?.click()}><ImagePlus size={16} />{imageBusy ? "Hazırlanıyor…" : `Fotoğraf ekle (${images.length}/4)`}</Button><input id="community-image" type="file" accept="image/jpeg,image/png,image/webp" multiple className="sr-only" onChange={chooseImages} disabled={busy || imageBusy} /><p className="text-xs leading-6 text-muted-foreground">En fazla 4 fotoğraf · JPEG, PNG veya WebP · Her biri en fazla 3 MB. Her fotoğraf ayrı onaylanır. Kimlik veya sağlık belgesi yüklemeyin.</p>
              <div className="grid grid-cols-2 gap-3">{images.map((image, index) => <div key={index} className="relative"><img src={`data:image/jpeg;base64,${image}`} alt={`Fotoğraf ${index + 1} önizlemesi`} className="aspect-[4/3] w-full rounded-md bg-muted object-contain" /><Button type="button" size="icon" variant="outline" className="absolute right-1 top-1" aria-label={`Fotoğraf ${index + 1} kaldır`} disabled={busy || imageBusy} onClick={() => setImages(previous => previous.filter((_, i) => i !== index))}><X size={14} /></Button></div>)}</div>{imageStatus && <p role="status" className="text-xs text-muted-foreground">{imageStatus}</p>}
            </div>
            <label className="block text-sm font-semibold">Video bağlantısı (isteğe bağlı)<input name="videoUrl" type="url" maxLength={300} placeholder="https://www.youtube.com/watch?v=…" className={`${communityField} mt-2`} /><span className="mt-1 block text-xs font-normal leading-6 text-muted-foreground">HTTPS YouTube veya Vimeo video sayfası. Video dosyası yüklenmez; bağlantı ayrıca onaylanır.</span></label>
            <label className="hidden" aria-hidden="true">Web sitesi<input name="website" tabIndex={-1} autoComplete="off" /></label><label className="flex items-start gap-2 text-xs leading-6"><input name="consent" type="checkbox" required className="mt-1.5" /><span>Kişisel/sağlık verisi paylaşmadığımı, fotoğraflar için izin aldığımı ve hikâyemin onaylanırsa herkese açık olacağını kabul ediyorum.</span></label>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}<div className="flex flex-wrap gap-2"><Button disabled={busy || imageBusy || !ready}>{busy ? "Fotoğraflar yükleniyor ve hikâye gönderiliyor…" : "Hikâyeyi incelemeye gönder"}</Button><Button type="button" variant="ghost" disabled={busy || imageBusy} onClick={() => setCompose(false)}>Vazgeç</Button></div>
          </form>
        </section>}
        {data.unavailable ? <p role="alert" className="text-sm text-muted-foreground">Hikâyeler şu an yüklenemiyor. Yenileyerek tekrar deneyin.</p> : !data.posts.length ? <div className="border-y border-border py-10"><Users size={28} className="mb-3 text-brand" /><h3 className="font-bold text-primary">Her hayat hikâyesi bir bağ kurar.</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Henüz yayınlanan bir hikâye yok.</p><Button className="mt-4" variant="outline" onClick={() => setCompose(true)}><Plus size={16} />İlk hikâyeyi paylaş</Button></div> : <div className="space-y-6">{data.posts.map(post => <article key={post.id} className="min-w-0 rounded-lg border border-border bg-card p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft font-bold text-brand" aria-hidden="true">{post.display_name.slice(0,1).toLocaleUpperCase("tr")}</span><strong className="break-all text-primary">{post.display_name}</strong>{post.member_label && <span className="evidence evidence-gray">{post.member_label === "hasta" ? "Hasta" : "Hasta yakını"}</span>}<span className="evidence evidence-green">Yayında</span><time className="text-muted-foreground sm:ml-auto" dateTime={post.created_at}>{communityDate(post.created_at)}</time></div>
          {post.title && <h3 className="mt-4 break-words text-xl font-bold text-primary">{post.title}</h3>}<p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7">{post.message}</p>
          {post.hasImage && <div className="mt-4"><a href={`/api/public/community-image/${post.id}`} target="_blank" rel="noopener noreferrer"><img src={`/api/public/community-image/${post.id}`} alt="Hikâyeye eklenen fotoğraf" className="w-full max-h-96 rounded-md bg-muted object-contain" loading="lazy" /></a><ReportControl postId={post.id} targetType="image" label="Fotoğrafı raporla" /></div>}
          {!!post.images.length && <div className="mt-4 grid gap-3 sm:grid-cols-2">{post.images.map((id, index) => <div key={id} className="min-w-0"><a href={`/api/public/community-image/${id}`} target="_blank" rel="noopener noreferrer"><img src={`/api/public/community-image/${id}`} alt={`Hikâyenin ${index + 1}. fotoğrafı`} className="aspect-[4/3] w-full rounded-md bg-muted object-contain" loading="lazy" /></a><ReportControl postId={post.id} targetType="image" targetId={id} label="Fotoğrafı raporla" /></div>)}</div>}
          {post.videoUrl && <div className="mt-4"><Button asChild variant="outline"><a href={post.videoUrl} target="_blank" rel="noopener noreferrer nofollow ugc" referrerPolicy="no-referrer"><Video size={16} />Videoyu aç<ExternalLink size={14} /></a></Button><p className="mt-2 text-xs text-muted-foreground">YouTube / Vimeo · Dış bağlantı; içerik sonradan değişebilir.</p><ReportControl postId={post.id} targetType="video" label="Videoyu raporla" /></div>}
          <div className="mt-3"><ReportControl postId={post.id} label="Gönderiyi raporla" /></div><CommunityConversation post={post} />
        </article>)}</div>}
        {data.posts.length === 50 && <p className="mt-4 text-xs text-muted-foreground">Son 50 onaylı hikâye gösteriliyor.</p>}
      </section>
      <aside className="border-t border-border pt-5 lg:border-t-0 lg:pt-0"><h2 className="flex items-center gap-2 text-lg font-bold text-primary"><ShieldCheck size={18} />Birbirimize iyi gelelim</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Rumuzla veya anonim olarak hikâyenizi anlatabilir, diğer hikâyelerin altında yorum yapıp yanıtlaşabilirsiniz.</p><h3 className="mt-5 text-sm font-bold text-primary">Güvenli bir topluluk</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Gönderiler, fotoğraflar, videolar ve yorumlar ayrı ayrı incelenir. Onay bekleyen içerikler görünmez. Raporlanan içerikler yöneticiler tarafından yeniden değerlendirilir; gizlenebilir veya silinebilir.</p><p className="mt-3 text-sm leading-7 text-muted-foreground">Hakaret, spam, kişisel veri, kesin tedavi vaatleri ve tehlikeli tıbbi yönlendirmelere yer verilmez.</p><p className="mt-5 border-t border-border pt-4 text-xs leading-6 text-muted-foreground">Bu alan acil destek hizmeti değildir. Acil durumda 112’yi arayın; kişisel tıbbi kararlar için hekiminize danışın.</p></aside>
    </div><AssociationGallery />
  </main>;
}

