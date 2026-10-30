import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, ChevronRight, ExternalLink, Search } from "lucide-react";
import { categoryInfo, drugs, lastChecked, type DrugCategory, type DrugEntry } from "@/lib/drug-library";
import { EvidenceBadge, PageTitle } from "./portal";
import type { Evidence } from "@/lib/portal-data";
import { libraryPhotography } from "@/lib/editorial-photography";
import { ArticleCover } from "./article-cover";
import { pipelineCandidates, pipelineChecked, type ResearchCandidate } from "@/lib/research-pipeline";
import { CandidateFacts } from "./research-pipeline";
import { EligibilityNotice, NextSteps, SourceList, TrustPanel } from "./guidance";
import { drugLibraryDetails } from "@/lib/drug-library-details";
import { DrugOverview } from "./drug-overview";
import { ArrowLeft } from "lucide-react";
import { TrialParticipation } from "./trial-participation";
import { SponsorContact } from "./sponsor-contact";
import { EuropeSites } from "./europe-sites";

function LibraryPhoto({ slug, detailed = false }: { slug: string; detailed?: boolean }) {
  const photo = libraryPhotography[slug];
  if (!photo) return null;
  if (!detailed) return <div className="research-thumb aspect-[1.9]"><ArticleCover cover={photo.cover} /></div>;
  return <figure className="mt-6">
    <div className="research-thumb aspect-[1.9] rounded-md"><ArticleCover cover={photo.cover} /></div>
  </figure>;
}

function Warning() {
  return (
    <div className="notice flex gap-2 text-xs leading-6">
      <AlertTriangle size={16} className="shrink-0 mt-1" />
      <span><strong>Kendi başınıza başlamayın, bırakmayın veya doz değiştirmeyin.</strong> Bu bilgiler genel bilgilendirme amaçlıdır; doz veya kişisel reçete içermez. Tüm kararları hekiminizle verin.</span>
    </div>
  );
}

export function DrugLibrary() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<"" | DrugCategory>("");
  const [type, setType] = useState("");
  const [phase, setPhase] = useState("");
  const [activity, setActivity] = useState("");
  const items = drugs.filter(
    (d) => {
      const candidate = pipelineCandidates.find(c => c.slug === d.slug);
      return (!cat || d.category === cat) && (!type || candidate?.type === type) &&
        (!phase || candidate?.phase === phase) && (!activity || candidate?.activity === activity) &&
        [d.name, d.brand, d.target, candidate?.aliases].join(" ").toLocaleLowerCase("tr").includes(q.toLocaleLowerCase("tr"));
    },
  );
  const cats = Object.keys(categoryInfo) as DrugCategory[];
  return (
    <main className="page-width py-9">
      <PageTitle title="İlaç ve Tedavi Kütüphanesi" description={`Ruhsatlı, destekleyici, kanıtlanmamış ve deneysel tedavileri ayrı ayrı inceleyin. Son kontrol: ${lastChecked}.`} />
      <Warning />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <button type="button" onClick={() => setCat(cat === "ruhsatli" ? "" : "ruhsatli")} aria-pressed={cat === "ruhsatli"} className="quick-card text-left"><strong>Mevcut / onaylı tedaviler</strong><span>FA için ruhsatlı tek ilaç (omaveloksolon) ve hekimlerin belirtiler için kullandığı destekleyici tedaviler. Ruhsat durumu ülkeye göre değişir.</span></button>
        <button type="button" onClick={() => setCat(cat === "gelistirme" ? "" : "gelistirme")} aria-pressed={cat === "gelistirme"} className="quick-card text-left"><strong>Araştırma aşamasındaki yaklaşımlar</strong><span>Gen tedavileri, protein replasmanı ve küçük moleküller. Hiçbiri onaylı değildir; yalnızca klinik çalışma kapsamında uygulanır.</span></button>
      </div>
      <div className="flex flex-wrap gap-3 my-6">
        <label className="flex flex-1 min-w-52 items-center gap-2 border border-border rounded-md px-3">
          <Search size={16} className="text-muted-foreground" />
          <input aria-label="Kütüphanede ara" placeholder="İlaç, marka veya belirti ara…" value={q} onChange={(e) => setQ(e.target.value)} className="bg-transparent outline-none py-3 w-full text-xs" />
        </label>
        <select className="filter-select w-full sm:w-auto" aria-label="Kategori filtresi" value={cat} onChange={(e) => setCat(e.target.value as DrugCategory | "")}>
          <option value="">Tüm kategoriler</option>
          {cats.map((c) => <option key={c} value={c}>{categoryInfo[c].label}</option>)}
        </select>
        <select aria-label="Tedavi türü filtresi" className="filter-select w-full sm:w-auto" value={type} onChange={e => setType(e.target.value)}><option value="">Tüm tedavi türleri</option>{[...new Set(pipelineCandidates.map(c => c.type))].map(t => <option key={t}>{t}</option>)}</select>
        <select aria-label="Araştırma fazı filtresi" className="filter-select w-full sm:w-auto" value={phase} onChange={e => setPhase(e.target.value)}><option value="">Tüm fazlar</option>{[...new Set(pipelineCandidates.map(c => c.phase))].map(p => <option key={p}>{p}</option>)}</select>
        <select aria-label="Program durumu filtresi" className="filter-select w-full sm:w-auto" value={activity} onChange={e => setActivity(e.target.value)}><option value="">Tüm programlar</option><option value="active">Aktif geliştirme</option><option value="inactive">Tarihsel / pasif</option></select>
      </div>
      <p className="text-xs text-muted-foreground mb-5">{items.length} kayıt</p>
      {cats.filter((c) => items.some((d) => d.category === c)).map((c) => (
        <section key={c} className="mb-10">
          <h2 className="font-extrabold text-xl text-primary">{categoryInfo[c].label}</h2>
          <p className="text-xs text-muted-foreground mt-1 mb-4 max-w-3xl leading-6">{categoryInfo[c].note}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.filter((d) => d.category === c).map((d) => (
              <div key={d.slug} className="article-card clickable-card block relative">
                <LibraryPhoto slug={d.slug} />
                <div className="p-5">
                <EvidenceBadge kind={categoryInfo[d.category].tone as Evidence}>{categoryInfo[d.category].short}</EvidenceBadge>
                <h3 className="mt-3 font-bold text-primary"><Link to="/ilac-kutuphanesi/$slug" params={{ slug: d.slug }} className="card-main-link">{d.name}</Link></h3>
                <p className="text-[11px] text-muted-foreground mt-1">{d.brand}</p>
                <p className="text-xs mt-3 leading-6"><strong>Hedef:</strong> {d.target}</p>
                {pipelineCandidates.find(c => c.slug === d.slug) && <p className="text-xs text-brand font-bold mt-2">{pipelineCandidates.find(c => c.slug === d.slug)?.type}</p>}
                <p className="text-xs mt-1 leading-6"><strong>Durum:</strong> {pipelineCandidates.find(c => c.slug === d.slug) ? `${pipelineCandidates.find(c => c.slug === d.slug)?.phase} · ${pipelineCandidates.find(c => c.slug === d.slug)?.status}` : d.phase}</p>
                <SponsorContact slug={d.slug} />
                <span className="mt-3 flex items-center gap-1 text-[11px] font-bold text-brand">Ayrıntılar <ChevronRight size={12} /></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      {!items.length && <p className="py-16 text-center text-muted-foreground">Eşleşen kayıt bulunamadı.</p>}
    </main>
  );
}

export function DrugDetail({ drug: d }: { drug: DrugEntry }) {
  const info = categoryInfo[d.category];
  const detail = drugLibraryDetails[d.slug];
  if (!detail) throw new Error(`Ayrıntılı kütüphane metni bulunamadı: ${d.slug}`);
  const candidate = pipelineCandidates.find(c => c.slug === d.slug);
  const profile: ResearchCandidate | undefined = candidate ?? (d.category === "gelistirme" ? {
    slug: d.slug, name: d.name, aliases: "", developer: d.brand,
    type: "Çeşitli araştırma yaklaşımları", goal: d.target, mechanism: d.mechanism,
    phase: d.phase, activity: "active", status: "Genel başvuru kaydı; tek bir klinik program değildir.",
    humanData: "Henüz klinik sonuç açıklanmadı. Bu kayıt birden çok yaklaşımın genel özetidir; tek bir adayın insan verisini temsil etmez.",
    events: [{ label: "Tek tek adayların doğrulanmış takvimleri araştırma hattında gösterilir", url: "https://www.curefa.org/drug-development/" }], sources: d.sources,
  } : undefined);
  const sources = [...new Map([...d.sources, ...(profile?.sources ?? [])].map(s => [s.url, s])).values()];
  const rows: [string, string][] = [
    ["Etken madde / aday", d.name], ["Marka / geliştirici", d.brand], ["Hedeflenen belirti / organ", d.target],
    ["Etki mekanizması", d.mechanism], ["Kanıt düzeyi", d.evidence], ["Çalışma fazı / ruhsat durumu", candidate ? `${candidate.phase} · ${candidate.status}` : d.phase],
    ["Durum tarihi", d.statusDate], ["Yarar / olumsuz sonuç", d.benefits], ["Önemli riskler ve izlem", d.risks],
  ];
  return (
    <main className="page-width py-9 max-w-3xl">
      <div className="detail-back-bar"><Link to={d.category === "gelistirme" ? "/klinik-arastirmalar" : "/ilac-kutuphanesi"} className="detail-back-button"><ArrowLeft size={16} aria-hidden="true" />Geri dön</Link></div>
      <nav className="text-[11px] text-muted-foreground flex items-center gap-1 mb-4">
        <Link to="/">Ana sayfa</Link><ChevronRight size={12} /><Link to="/ilac-kutuphanesi">İlaç Kütüphanesi</Link>
      </nav>
      <EvidenceBadge kind={info.tone as Evidence}>{info.label}</EvidenceBadge>
      <h1 className="font-extrabold text-3xl text-primary mt-3">{d.name}</h1>
      <p className="record-update-date mt-4 text-xs">Son kontrol tarihi · {lastChecked}</p>
      <p className="text-xs text-muted-foreground mt-2">Ayrıntılı içerik güncellemesi · 9 Ekim 2026. Kaynakların sonuç ve sicil tarihleri aşağıda ayrı belirtilmiştir.</p>
      <DrugOverview drug={d} candidate={candidate} detail={detail} sources={sources} updated={lastChecked} />
      <TrustPanel updated={lastChecked} evidence={d.evidence} phase={candidate?.phase ?? d.phase} category={d.category} sources={sources} />
      <p className="text-xs text-muted-foreground my-4 leading-6">{info.note}</p>
      <Warning />
      <LibraryPhoto slug={d.slug} detailed />
      <div className="article-body">
        {detail.sections.map(section => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
      </div>
      {profile && <><p className="notice mt-5 text-xs leading-6">{profile.activity === "inactive" ? "Tarihsel / pasif FA programı. Aktif geliştirme olarak sunulmaz." : "Deneysel / henüz onaylı değil. Araştırma aşaması kesin yarar veya ruhsat anlamına gelmez."}</p><CandidateFacts candidate={profile} /><Link to="/arastirma-takvimi" className="inline-flex gap-1 items-center text-xs font-bold text-brand mt-5">Araştırma Takvimi <ChevronRight size={13} /></Link></>}
      <TrialParticipation slug={d.slug} />
      <details className="mt-8 border-y border-border py-4">
      <summary className="cursor-pointer text-sm font-bold text-primary">Önceki kütüphane kaydı ve tarihsel açıklamalar</summary>
      <p className="text-xs text-muted-foreground mt-3 leading-6">Eski kayıtlar silinmeden korunmuştur; tarihsel plan ifadeleri güncel alım durumu değildir. Güncel değerlendirme için yukarıdaki ayrıntılı içerik ve {pipelineChecked} tarihli araştırma profiliyle birlikte ilgili resmi kaydı inceleyin.</p>
      <dl className="mt-6 divide-y divide-border border-y border-border">
        {rows.map(([k, v]) => (
          <div key={k} className="py-3 sm:grid sm:grid-cols-[200px_1fr] gap-4">
            <dt className="text-xs font-bold text-primary">{k}</dt>
            <dd className="text-sm leading-7 mt-1 sm:mt-0">{v}</dd>
          </div>
        ))}
        {d.uncertain && (
          <div className="py-3 sm:grid sm:grid-cols-[200px_1fr] gap-4">
            <dt className="text-xs font-bold text-primary">Belirsiz / doğrulanıyor</dt>
            <dd className="text-sm leading-7 mt-1 sm:mt-0">{d.uncertain}</dd>
          </div>
        )}
      </dl>
      </details>
      <h2 className="font-extrabold text-xl text-primary mt-8 mb-3">Kaynaklar</h2>
      <SourceList sources={sources} />
      {d.category === "gelistirme" && <EligibilityNotice />}
      <NextSteps />
      <EuropeSites slug={d.slug} />
    </main>
  );
}

