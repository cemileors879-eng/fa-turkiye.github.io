import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ExternalLink, Search } from "lucide-react";
import { pipelineCandidates, pipelineChecked, type ResearchCandidate } from "@/lib/research-pipeline";
import { EvidenceBadge } from "./portal";
import { CandidateStudies } from "./candidate-studies";
import { articles } from "@/lib/portal-data";

export function CandidateFacts({ candidate: c }: { candidate: ResearchCandidate }) {
  const rows = [
    ["Geliştirici firma/kurum", c.developer], ["Tedavi türü", c.type],
    ["Firma neyi hedefliyor?", c.goal], ["Nasıl çalışması amaçlanıyor?", c.mechanism],
    ["Hangi aşamada?", `${c.phase} · ${c.status}`],
    ["Açıklanan insan verileri ve sınırları", c.humanData],
    ["Son güncelleme", `${c.checked ?? pipelineChecked} · kaynak kontrolü; çalışma sonucu tarihi değildir`],
  ];
  return <section className="mt-6">
    <h2 className="text-xl font-bold text-primary">Araştırma adayı profili</h2>
    {c.note && <p className="notice mt-4 text-sm leading-7">{c.note}</p>}
    <dl className="divide-y divide-border border-y border-border mt-4">
      {rows.map(([label, text]) => <div key={label} className="py-4 sm:grid sm:grid-cols-[200px_1fr] gap-4">
        <dt className="text-xs font-bold text-primary">{label}</dt>
        <dd className="text-sm leading-7 mt-1 sm:mt-0">{text}</dd>
      </div>)}
    </dl>
    <CandidateStudies candidate={c} />
    <h3 className="font-bold text-primary mt-5">Önemli tarihler ve yaklaşan etkinlikler</h3>
    <ul className="mt-3 space-y-3 text-sm leading-7">
      {c.events.map((e) => <li key={e.label}><strong>{e.date ?? "Tarih açıklanmadı"}</strong> · {e.label} <a href={e.url} target="_blank" rel="noreferrer" className="text-brand inline-flex items-center gap-1">Kaynak <ExternalLink size={12} /></a></li>)}
    </ul>
  </section>;
}

export function ResearchPipeline({ includeNews = false }: { includeNews?: boolean }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [phase, setPhase] = useState("");
  const [status, setStatus] = useState("");
  const items = pipelineCandidates.filter(c => (!type || c.type === type) && (!phase || c.phase === phase) && (!status || c.activity === status) && [c.name, c.developer, c.goal, c.aliases].join(" ").toLocaleLowerCase("tr").includes(q.toLocaleLowerCase("tr")));
  return <section className="mt-9">
    <h2 className="text-2xl font-extrabold text-primary">FA araştırma ve geliştirme hattı</h2>
    <p className="text-xs text-muted-foreground leading-6 mt-2">Son kaynak kontrolü: {pipelineChecked}. Aktif ve tarihsel programlar ayrı işaretlenmiştir. Faz, etkinlik veya ruhsat anlamına gelmez.</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
      <label className="flex items-center border border-border rounded-md px-3 gap-2"><Search size={16} className="text-muted-foreground shrink-0" /><input aria-label="Araştırma adayı ara" value={q} onChange={e => setQ(e.target.value)} placeholder="Aday veya geliştirici ara…" className="w-full min-w-0 py-3 bg-transparent outline-none text-xs" /></label>
      <select aria-label="Tedavi türü filtresi" className="filter-select w-full" value={type} onChange={e => setType(e.target.value)}><option value="">Tüm tedavi türleri</option>{[...new Set(pipelineCandidates.map(c => c.type))].map(t => <option key={t}>{t}</option>)}</select>
      <select aria-label="Araştırma fazı filtresi" className="filter-select w-full" value={phase} onChange={e => setPhase(e.target.value)}><option value="">Tüm fazlar</option>{[...new Set(pipelineCandidates.map(c => c.phase))].map(p => <option key={p}>{p}</option>)}</select>
      <select aria-label="Program durumu filtresi" className="filter-select w-full" value={status} onChange={e => setStatus(e.target.value)}><option value="">Tüm programlar</option><option value="active">Aktif geliştirme</option><option value="inactive">Tarihsel / pasif</option></select>
    </div>
    <p className="text-xs text-muted-foreground mb-4">{items.length} aday</p>
    <div className="grid md:grid-cols-2 gap-5">
      {items.map(c => <article key={c.slug} className="article-card clickable-card p-5">
        <div className="flex flex-wrap gap-2"><EvidenceBadge kind={c.activity === "inactive" ? "gray" : "blue"}>{c.activity === "inactive" ? "Tarihsel / pasif" : "Deneysel · ruhsatlı değil"}</EvidenceBadge><span className="text-xs font-bold text-primary">{c.phase}</span></div>
        <Link to="/ilac-kutuphanesi/$slug" params={{slug: c.slug}} className="card-main-link block mt-3 text-xl font-extrabold text-primary">{c.name}</Link>
        <p className="text-xs text-muted-foreground mt-1">{c.developer}</p>
        <p className="text-xs font-bold text-brand mt-3">{c.type}</p>
        <p className="text-sm leading-7 mt-2"><strong>Hedef:</strong> {c.goal}</p>
        <p className="text-xs leading-6 mt-2"><strong>Durum:</strong> {c.status}</p>
        {c.note && <p className="text-xs leading-6 mt-2 text-muted-foreground">{c.note}</p>}
        <CandidateStudies candidate={c} />
        {includeNews && articles.some(a => a.treatment.toLocaleLowerCase("tr") === c.name.toLocaleLowerCase("tr")) && <div className="border-t border-border mt-4 pt-3">
          <h3 className="text-sm font-bold text-primary">İlgili araştırma haberleri ve ayrıntılı veriler</h3>
          <ul className="divide-y divide-border">{articles.filter(a => a.treatment.toLocaleLowerCase("tr") === c.name.toLocaleLowerCase("tr")).map(a => <li key={a.slug} className="py-3">
            <p className="text-xs text-muted-foreground">{a.date} · {a.phase}</p>
            <Link to="/haber/$slug" params={{ slug: a.slug }} className="text-sm font-bold text-brand leading-6">{a.title}</Link>
          </li>)}</ul>
        </div>}
        <ul className="border-t border-border mt-4 pt-3 space-y-2 text-xs leading-6">{c.events.map(e => <li key={e.label}><strong>{e.date ?? "Tarih açıklanmadı"}</strong> · {e.label}</li>)}</ul>
        <Link to="/ilac-kutuphanesi/$slug" params={{slug: c.slug}} className="text-xs font-bold text-brand flex items-center gap-1 mt-4">Aday detayları ve kaynaklar <ChevronRight size={14} /></Link>
      </article>)}
    </div>
    {!items.length && <p className="text-muted-foreground py-10 text-center">Eşleşen aday bulunamadı.</p>}
    <div className="flex flex-wrap gap-5 mt-6 text-xs text-brand"><a href="https://www.curefa.org/drug-development/" target="_blank" rel="noreferrer">FARA geliştirme hattı ↗</a><a href="https://www.curefa.org/clinical-studies/" target="_blank" rel="noreferrer">FARA klinik araştırmalar ↗</a></div>
  </section>;
}
