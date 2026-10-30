import { ExternalLink } from "lucide-react";
import type { DrugEntry } from "@/lib/drug-library";
import type { ResearchCandidate } from "@/lib/research-pipeline";
import type { DetailedEditorial } from "@/lib/editorial-detail-types";

const MISSING = "Veri bulunmuyor / henüz gösterilmemiş. Bu başlık için doğrulanmış ve ayrı özetlenmiş bilgi yok.";

function section(detail: DetailedEditorial, prefix: string) {
  return detail.sections.find(s => s.heading.startsWith(prefix))?.paragraphs.join(" ");
}

// Structured, consistent summary for every drug/candidate detail page.
// Only re-presents existing sourced fields; missing fields are stated explicitly.
export function DrugOverview({ drug: d, candidate, detail, sources, updated }: {
  drug: DrugEntry; candidate?: ResearchCandidate | undefined; detail: DetailedEditorial;
  sources: { label: string; url: string }[]; updated: string;
}) {
  const approved = d.category === "ruhsatli";
  const experimental = d.category === "gelistirme" || !!candidate;
  const otherNames = [d.brand, candidate?.aliases].filter(Boolean).join(" · ");
  const rows: [string, React.ReactNode | undefined][] = [
    ["İlaç / aday adı ve diğer adı", <><strong>{d.name}</strong>{otherNames && <> — {otherNames}</>}</>],
    ["Hedef(ler) ve etki mekanizması", <>{candidate?.goal ?? d.target} {candidate?.mechanism ?? d.mechanism}</>],
    ["FA'da neden araştırılıyor? (biyolojik gerekçe)", section(detail, "Etki mekanizması") ?? section(detail, "Ne işe yarar")],
    ["Gösterilmiş olumlu etkiler ve klinik sonuçlar", candidate ? candidate.humanData : d.benefits],
    ["Beklenen / teorik etkiler", experimental
      ? <><span className="font-bold">Henüz gösterilmemiş, amaçlanan etki:</span> {candidate?.goal ?? d.target} Bu bir beklentidir; klinik yarar kanıtı değildir.</>
      : undefined],
    ["Olumsuz / nötr sonuçlar ve sınırlılıklar", d.uncertain ?? section(detail, "Klinik kanıt")],
    ["Yan etkiler, güvenlilik ve önemli riskler", d.risks || section(detail, "Önemli güvenlilik")],
    ["Klinik geliştirme aşaması ve güncel durum", candidate ? `${candidate.phase} · ${candidate.status}` : d.phase],
    ["Çalışma ayrıntıları", candidate?.studies?.length
      ? <ul className="space-y-1">{candidate.studies.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer" className="font-bold text-brand">{s.name} ↗</a> · {s.phase} · {s.status}</li>)}</ul>
      : section(detail, "Klinik kanıt")],
    ["Bilimsel kaynaklar ve resmi kayıtlar", sources.length
      ? <ul className="space-y-1">{sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer" className="text-brand inline-flex items-start gap-1 break-words">{s.label} <ExternalLink size={12} className="shrink-0 mt-1" /></a></li>)}</ul>
      : undefined],
    ["Son güncelleme", `${updated} · kaynak kontrol tarihi (durum tarihi: ${d.statusDate})`],
  ];
  return <section aria-labelledby="drug-overview-title" className="mt-6 rounded-lg border border-border bg-card p-4 sm:p-6">
    <h2 id="drug-overview-title" className="text-xl font-extrabold text-primary">Özet bilgi kartı</h2>
    <p className={`mt-3 text-sm font-bold leading-6 ${approved ? "text-brand" : ""}`}>
      {approved ? "Onaylı tedavi: ABD (FDA) ve AB (EMA) tarafından 16 yaş ve üzeri FA hastaları için ruhsatlıdır. Türkiye ruhsat/erişim durumu doğrulanmadı."
        : experimental ? "Deneysel / henüz onaylı değil. Araştırma aşaması kesin yarar veya ruhsat anlamına gelmez."
        : "FA için ruhsatlı bir tedavi değildir; bilgiler genel bilgilendirme amaçlıdır."}
    </p>
    <dl className="mt-4 divide-y divide-border border-y border-border">
      {rows.map(([label, value]) => <div key={label} className="py-3 sm:grid sm:grid-cols-[210px_1fr] gap-4">
        <dt className="text-xs font-bold text-primary">{label}</dt>
        <dd className={`text-sm leading-7 mt-1 sm:mt-0 ${value ? "" : "text-muted-foreground italic"}`}>{value ?? MISSING}</dd>
      </div>)}
    </dl>
  </section>;
}

