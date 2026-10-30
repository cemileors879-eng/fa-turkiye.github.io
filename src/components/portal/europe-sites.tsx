import { ExternalLink } from "lucide-react";
import { europeSites, europeChecked, EU_NO_CONTACT, EU_NONE, type EuStudy } from "@/lib/europe-sites";

const kindLabel: Record<EuStudy["kind"], string> = { aktif: "Güncel çalışma", uzatma: "Uzatma çalışması — yalnızca önceki katılımcılar", gozlemsel: "Gözlemsel çalışma — kısıtlı katılım", tarihsel: "Tarihsel / tamamlanmış" };

function StudyBlock({ s }: { s: EuStudy }) {
  return <article className="mt-4 border-t border-border pt-3">
    <h4 className="font-bold text-primary text-sm">{s.title}</h4>
    <p className="text-xs mt-1"><strong>{s.id}</strong> · {s.registry} · <span className="font-bold">{kindLabel[s.kind]}</span></p>
    <p className="text-xs mt-1">Durum: {s.status}</p>
    {s.restriction && <p className="text-xs mt-1 font-bold">{s.restriction}</p>}
    <ul className="mt-2 divide-y divide-border text-xs leading-6">
      {s.sites.map(x => <li key={x.facility + x.city} className="py-2">
        <strong>{x.country} · {x.city}</strong> — {x.facility}<br /><em>{x.status}</em>
        {x.person && <span> · Kayıtlı sorumlu: {x.person}</span>}
        <br />{x.email || x.phone ? <>{x.email && <a className="text-brand break-all" href={`mailto:${x.email}`}>{x.email}</a>}{x.email && x.phone && " · "}{x.phone && <a className="text-brand" href={`tel:${x.phone.replace(/[^+\d]/g, "")}`}>{x.phone}</a>}</> : EU_NO_CONTACT}
        <span className="text-muted-foreground"> · Merkezin resmi iletişim sayfası doğrulanmadı; resmi kayda bakın.</span>
      </li>)}
    </ul>
    <a href={s.url} target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground">Resmi kayda git ({s.registry}) <ExternalLink size={14} /></a>
  </article>;
}

export function EuropeSites({ slug }: { slug: string }) {
  const e = europeSites[slug];
  const current = e?.studies.filter(s => s.kind !== "tarihsel") ?? [];
  const past = e?.studies.filter(s => s.kind === "tarihsel") ?? [];
  return <section aria-labelledby="eu-sites" className="mt-8 rounded-lg border border-border bg-card p-4 sm:p-6">
    <h2 id="eu-sites" className="text-xl font-extrabold text-primary">Avrupa'daki klinik araştırma merkezleri ve iletişim</h2>
    <p className="text-xs mt-2 leading-6">Yalnızca bu ilaca ait resmi kayıtlarda listelenen merkezler gösterilir. Son kontrol: {europeChecked}. Durumlar değişebilir; merkezden teyit edin. Uygunluğa yalnızca araştırma ekibi karar verir.</p>
    {!current.length && <p className="text-sm mt-3 font-bold">{EU_NONE}</p>}
    {current.map(s => <StudyBlock key={s.id} s={s} />)}
    {past.length > 0 && <details className="mt-5"><summary className="cursor-pointer text-sm font-bold text-primary">Tarihsel / tamamlanmış Avrupa çalışmaları ({past.length})</summary>{past.map(s => <StudyBlock key={s.id} s={s} />)}</details>}
  </section>;
}

export function EuropeSitesSummary({ slug }: { slug: string }) {
  const e = europeSites[slug];
  const cur = e?.studies.filter(s => s.kind !== "tarihsel") ?? [];
  const n = new Set(cur.flatMap(s => s.sites.map(x => x.facility))).size;
  return <p className="text-xs leading-6 mt-2"><strong>Avrupa merkezleri:</strong> {cur.length ? `${n} merkez, ${cur.map(s => s.id).join(", ")}${cur.some(s => s.kind === "uzatma") ? " (uzatma: yalnızca önceki katılımcılar)" : ""} — ayrıntılar detay sayfasında` : "Doğrulanmış güncel Avrupa merkezi yok"}</p>;
}

