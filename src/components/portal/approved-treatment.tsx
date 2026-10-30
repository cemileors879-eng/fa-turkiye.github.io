import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { drugs } from "@/lib/drug-library";
import { libraryPhotography } from "@/lib/editorial-photography";
import { ArticleCover } from "./article-cover";

export function ApprovedTreatment() {
  const drug = drugs.find(entry => entry.slug === "omaveloksolon-skyclarys" && entry.category === "ruhsatli");
  if (!drug) return null;
  const photo = libraryPhotography[drug.slug];
  return <article aria-label="Skyclarys onaylı tedavi" className="article-card clickable-card grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
    {photo && <div className="research-thumb aspect-[1.9]"><ArticleCover cover={photo.cover} /></div>}
    <div className="p-5 min-w-0">
      <span className="evidence evidence-green">Onaylı · ABD / AB · 16 yaş ve üzeri</span>
      <h2 className="text-xl font-extrabold text-primary mt-3">Skyclarys (omaveloksolon / omaveloxolone)</h2>
      <p className="text-sm leading-7 mt-3">{drug.benefits}</p>
      <p className="text-xs leading-6 text-muted-foreground mt-2">Türkiye’de ruhsat, geri ödeme ve erişim durumu doğrulanmadı. Tedavi kararı ve güvenlilik izlemi hekim değerlendirmesi gerektirir.</p>
      <p className="text-xs text-muted-foreground mt-3">Son kaynak kontrolü: {drug.statusDate}</p>
      <Link to="/ilac-kutuphanesi/$slug" params={{ slug: drug.slug }} className="card-main-link inline-flex items-center gap-2 text-sm font-bold text-brand mt-4">Klinik kanıt, güvenlilik ve resmi kaynaklar <ArrowRight size={14} className="shrink-0" /></Link>
    </div>
  </article>;
}
