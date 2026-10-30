import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ALERT_CONSENT, subscribeResearchAlerts } from "@/lib/research-alerts.functions";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { NO_EMAIL, stageOrder, stageTone, trackedStudies, trackerChecked, type TrackedStudy, type TrackerStage } from "@/lib/research-tracker";
import { EvidenceBadge, StoryCard } from "./portal";
import { researchNews } from "@/lib/portal-data";

export function ResearchNews() {
  return <section className="mb-8" aria-labelledby="research-news-title">
    <h2 id="research-news-title" className="text-xl font-bold text-primary mb-5">Güncel araştırma haberleri</h2>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{researchNews.map(article => <StoryCard key={article.slug} article={article} />)}</div>
  </section>;
}

function TurkeyParticipation({ s }: { s: TrackedStudy }) {
  let text: string;
  if (s.healthyVolunteers) text = "Sağlıklı gönüllü Faz 1 — FA hastası almıyor. Bu katılım bilgisi FA hastaları için geçerli değildir; Türkiye merkezi ve yurtdışından kabul doğrulanmadı.";
  else if (s.stage === "Onaylı") text = "Bu bir araştırma değil, ruhsatlı bir ilaçtır. Türkiye'de erişim ve ruhsat durumu için nöroloji hekiminize danışın.";
  else if (!s.registryUrl) text = "Resmi kayıtlı bir insan çalışması bulunmadığı için şu anda başvuru yolu yok.";
  else if (s.turkeySite) text = "Resmi kayıtta Türkiye'de merkez bulunuyor. Nöroloji hekiminizle görüşüp kayıttaki Türkiye merkeziyle iletişime geçebilirsiniz.";
  else if (!s.recruiting) text = "Resmi kayıtta Türkiye merkezi yok ve çalışma şu anda hasta almıyor. Durum değişikliklerini kayıt bağlantısından takip edebilirsiniz.";
  else text = `Resmi kayıtta Türkiye merkezi yok. Çalışma yalnızca ${s.countries.join(", ")} merkezlerinde yürütülüyor; kayıt yurtdışından katılım için açık bir yol belirtmiyor. Merak ediyorsanız sponsora yazarak yurtdışından başvurunun mümkün olup olmadığını sorabilirsiniz: (1) hekiminizden genetik tanı ve son muayene özetinizi isteyin, (2) aşağıdaki resmi iletişim adresine kısa bir İngilizce e-posta gönderin, (3) seyahat, konaklama ve takip vizitlerinin sıklığını sorun.`;
  return <div className="mt-4 rounded-md border border-border bg-muted/50 p-3">
    <h4 className="text-xs font-bold text-primary flex items-center gap-1"><MapPin size={13} /> Türkiye'den katılım</h4>
    <p className="text-xs leading-6 mt-1">{text}</p>
  </div>;
}

function Contact({ s }: { s: TrackedStudy }) {
  if (!s.registryUrl) return null;
  return <div className="mt-3 text-xs leading-6">
    <h4 className="font-bold text-primary">Resmi iletişim (kayıttan)</h4>
    {s.contact && <p>{s.contact.name}</p>}
    <p className="flex items-center gap-1"><Mail size={12} />{s.contact?.email ? <a className="text-brand break-all" href={`mailto:${s.contact.email}`}>{s.contact.email}</a> : NO_EMAIL}</p>
    {s.contact?.phone && <p className="flex items-center gap-1"><Phone size={12} />{s.contact.phone}</p>}
    <p>Merkez/ülke: {s.countries.join(", ")}</p>
    <a href={s.registryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-brand mt-1">ClinicalTrials.gov — {s.id} <ExternalLink size={12} /></a>
  </div>;
}

export function StudyCard({ s }: { s: TrackedStudy }) {
  return <article className={`article-card p-5 ${s.candidateSlug ? "clickable-card" : ""}`}>
    <div className="flex flex-wrap gap-2 items-center">
      <EvidenceBadge kind={stageTone[s.stage]}>{s.stage}</EvidenceBadge>
      <span className="text-xs font-bold text-primary">{s.phaseLabel}</span>
    </div>
    <h3 className="mt-3 text-lg font-extrabold text-primary">{s.candidate}</h3>
    <p className="text-xs text-muted-foreground">{s.studyName} · {s.sponsor}</p>
    <p className="text-sm leading-7 mt-2">{s.summary}</p>
    <dl className="text-xs mt-2 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1"><dt className="font-bold">Katılımcı alımı:</dt><dd className={s.recruiting ? "text-brand font-bold" : ""}>{s.status}</dd><dt className="font-bold">Yaş (kayda göre):</dt><dd>{s.ages}</dd><dt className="font-bold">Kayıt son güncelleme:</dt><dd>{s.registryUpdated}{s.registryUrl ? " (ClinicalTrials.gov)" : ""}</dd><dt className="font-bold">Sitede kontrol:</dt><dd>{s.checked ?? trackerChecked}</dd></dl>
    <TurkeyParticipation s={s} />
    <Contact s={s} />
    {s.candidateSlug && <Link to="/ilac-kutuphanesi/$slug" params={{ slug: s.candidateSlug }} className="card-main-link text-xs font-bold text-brand flex items-center gap-1 mt-3">Ayrıntılı ilaç/aday bilgisi <ChevronRight size={13} /></Link>}
  </article>;
}

export function ResearchTracker() {
  const [stage, setStage] = useState<"" | TrackerStage>("");
  const [open, setOpen] = useState(false);
  const items = trackedStudies.filter(s => (!stage || s.stage === stage) && (!open || s.recruiting));
  return <section>
    <p className="notice text-xs leading-6"><strong>Uygunluk vaadi yoktur.</strong> Yaş ve ülke bilgisi yalnızca resmi kayıttaki genel çerçevedir. Bir çalışmaya katılıp katılamayacağınıza yalnızca araştırma ekibi kendi tarama sürecinde karar verir. Son kayıt kontrolü: {trackerChecked}.</p>
    <div className="flex flex-wrap gap-2 my-5" role="group" aria-label="Aşama filtresi">
      <button type="button" aria-pressed={!stage} onClick={() => setStage("")} className="filter-select !w-auto">Tümü</button>
      {stageOrder.map(st => <button key={st} type="button" aria-pressed={stage === st} onClick={() => setStage(stage === st ? "" : st)} className={`filter-select !w-auto ${stage === st ? "font-bold text-brand" : ""}`}>{st}</button>)}
      <label className="filter-select !w-auto flex items-center gap-2"><input type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)} /> Yalnız hasta alanlar</label>
    </div>
    <p className="text-xs text-muted-foreground mb-4">{items.length} kayıt</p>
    <div className="grid md:grid-cols-2 gap-5">{items.map(s => <StudyCard key={s.id} s={s} />)}</div>
    {!items.length && <p className="py-10 text-center text-muted-foreground">Eşleşen kayıt yok.</p>}
  </section>;
}

export function LatestResearch() {
  const recruiting = trackedStudies.filter(s => s.recruiting);
  return <section className="trust-panel !block mt-6" aria-labelledby="latest-research">
    <p className="text-[11px] font-bold text-brand uppercase tracking-wide">Araştırma Takip Merkezi</p>
    <h2 id="latest-research" className="text-xl font-bold text-primary mt-1">FA Araştırmalarında Son Gelişmeler</h2>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">{researchNews.map(article => <StoryCard key={article.slug} article={article} />)}</div>
    <p className="text-xs text-muted-foreground mt-1">Resmi kayıtlara göre şu anda {recruiting.length} çalışma hasta alıyor; hiçbirinde Türkiye merkezi yok. Kontrol: {trackerChecked}.</p>
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
      {recruiting.map(s => <li key={s.id} className="border border-border rounded-md p-3">
        <EvidenceBadge kind={stageTone[s.stage]}>{s.phaseLabel}</EvidenceBadge>
        <p className="font-bold text-primary text-sm mt-2">{s.candidate}</p>
        <p className="text-xs text-muted-foreground">{s.status} · {s.countries.join(", ")}</p>
      </li>)}
    </ul>
    <Link to="/arastirma-takip-merkezi" className="inline-flex items-center gap-1 text-xs font-bold text-brand mt-4">Araştırma Takip Merkezi'ne git <ChevronRight size={13} /></Link>
  </section>;
}

const countries = ["Türkiye", "ABD", "Avustralya", "Avrupa ülkeleri", "Diğer"] as const;

export function StudyFinder() {
  const [age, setAge] = useState("");
  const [dx, setDx] = useState("");
  const [country, setCountry] = useState("");
  const [shown, setShown] = useState(false);
  const n = Number(age);
  const okAge = age !== "" && Number.isFinite(n) && n >= 0 && n <= 110;
  const results = trackedStudies.filter(s => !s.healthyVolunteers && s.recruiting && s.registryUrl && (s.minAge === undefined || n >= s.minAge) && (s.maxAge === undefined || n <= s.maxAge));
  return <section className="trust-panel !block mb-8" aria-labelledby="finder-title">
    <h2 id="finder-title" className="text-xl font-bold text-primary">Bana Uygun Araştırmayı Bul</h2>
    <p className="text-xs text-muted-foreground mt-1 leading-6">Cevaplarınız kaydedilmez ve hiçbir yere gönderilmez. Bu araç uygunluk belirlemez; yalnızca incelemeye değer olabilecek çalışmaları listeler.</p>
    <form className="grid sm:grid-cols-3 gap-3 mt-4" onSubmit={e => { e.preventDefault(); setShown(true); }}>
      <label className="text-xs font-bold">Yaş<input inputMode="numeric" value={age} onChange={e => { setAge(e.target.value.replace(/\D/g, "").slice(0, 3)); setShown(false); }} className="filter-select w-full mt-1" placeholder="Örn. 24" required /></label>
      <label className="text-xs font-bold">FA tanısı<select required value={dx} onChange={e => { setDx(e.target.value); setShown(false); }} className="filter-select w-full mt-1"><option value="">Seçin</option><option value="genetik">Genetik testle doğrulandı</option><option value="klinik">Hekim şüphesi, genetik test yok</option><option value="yok">Tanı yok / bilmiyorum</option></select></label>
      <label className="text-xs font-bold">Yaşadığınız ülke<select required value={country} onChange={e => { setCountry(e.target.value); setShown(false); }} className="filter-select w-full mt-1"><option value="">Seçin</option>{countries.map(c => <option key={c}>{c}</option>)}</select></label>
      <button type="submit" className="sm:col-span-3 bg-brand text-ink font-bold text-sm px-4 py-3 rounded-md">İncelenebilecek çalışmaları göster</button>
    </form>
    {shown && okAge && dx && country && <div className="mt-5" aria-live="polite">
      <p className="notice text-xs leading-6"><strong>Bu bir uygunluk kararı değildir.</strong> Nihai uygunluğu yalnızca araştırma ekibi tarama vizitlerinde belirler; kayıtlarda burada sorulmayan birçok ölçüt (yürüme durumu, kalp bulguları, önceki tedaviler vb.) vardır.</p>
      {dx !== "genetik" && <p className="text-xs mt-3 leading-6">Kayıtlı FA çalışmaları genellikle <strong>genetik olarak doğrulanmış tanı</strong> ister. Önce nöroloji ve tıbbi genetik hekiminizle genetik test konusunu konuşmanız gerekebilir.</p>}
      {country === "Türkiye" && <p className="text-xs mt-3 leading-6">Resmi kayıtlarda şu anda Türkiye'de merkez yok. Aşağıdaki çalışmalar yurtdışındadır; yurtdışından katılımın kabul edilip edilmediği sponsora sorulmalıdır.</p>}
      <h3 className="font-bold text-primary text-sm mt-4">Yaş aralığınıza göre incelenebilecek, hasta alan çalışmalar ({results.length})</h3>
      {results.length ? <div className="grid md:grid-cols-2 gap-4 mt-3">{results.map(s => <StudyCard key={s.id} s={s} />)}</div> : <p className="text-xs mt-2">Yaşınız şu anda hasta alan çalışmaların kayıtlı yaş aralığına girmiyor. Kayıtlar değişebilir; bildirim aboneliğiyle haberdar olabilirsiniz.</p>}
    </div>}
  </section>;
}

export function AlertSignup() {
  const subscribe = useServerFn(subscribeResearchAlerts);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setState("busy");
    try { await subscribe({ data: { email, consent: true, website: hp } }); setState("done"); } catch { setState("error"); }
  }
  return <section className="trust-panel !block mt-10" aria-labelledby="alert-title">
    <h2 id="alert-title" className="text-xl font-bold text-primary">Yeni araştırmalardan haberdar ol</h2>
    <p className="text-xs text-muted-foreground mt-1 leading-6">Yalnızca e-posta adresinizi istiyoruz; sağlık bilgisi sorulmaz. Kayıttan sonra onay e-postasındaki bağlantıya tıklamadan bildirim gönderilmez; her e-postada abonelikten çıkma bağlantısı bulunur.</p>
    {state === "done" ? <p className="notice text-xs mt-4 leading-6" role="status">Talebiniz alındı. Bildirim gönderimi henüz etkin değil: e-posta hizmeti bağlandığında önce onay e-postası alacaksınız; onaylamazsanız size hiçbir bildirim gönderilmez.</p> :
    <form onSubmit={submit} className="mt-4 grid gap-3">
      <label className="text-xs font-bold">E-posta<input type="email" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} className="filter-select w-full mt-1" autoComplete="email" /></label>
      <input type="text" tabIndex={-1} aria-hidden="true" autoComplete="off" value={hp} onChange={e => setHp(e.target.value)} className="hidden" />
      <label className="flex gap-2 items-start text-xs leading-6"><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1" />{ALERT_CONSENT}</label>
      <button type="submit" disabled={state === "busy"} className="bg-brand text-ink font-bold text-sm px-4 py-3 rounded-md sm:w-fit">{state === "busy" ? "Kaydediliyor…" : "Abone ol"}</button>
      {state === "error" && <p role="alert" className="text-xs text-destructive">Kayıt yapılamadı. E-posta adresinizi kontrol edip tekrar deneyin.</p>}
    </form>}
  </section>;
}

