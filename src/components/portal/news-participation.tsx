import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import type { Article } from "@/lib/portal-data";

export function NewsParticipation({ article }: { article: Article }) {
  const participation = article.participation;
  if (!participation) return null;
  return <section className="border-t border-border mt-4 pt-4 text-xs leading-6" aria-label={`${article.treatment} — Türkiye’den katılım`}>
    <h3 className="font-bold text-primary flex items-center gap-1"><MapPin size={14} />Türkiye’den katılım</h3>
    <p className="mt-2">{participation.guidance}</p>
    <p className="mt-2"><strong>Katılımcı alımı:</strong> {participation.status}</p>
    <p><strong>Merkez/ülke:</strong> {participation.countries.join(", ")}</p>
    <p><strong>Kayıt güncellemesi:</strong> {participation.registryUpdated} · <strong>Kontrol:</strong> {participation.checked}</p>
    <p className="mt-2 font-bold text-primary">Resmi kayıt iletişimi: {participation.contactName}</p>
    {participation.email ? <a className="flex items-center gap-1 text-brand break-all" href={`mailto:${participation.email}`}><Mail size={13} className="shrink-0" />{participation.email}</a> : <p>Resmi kayıtta iletişim e-postası belirtilmemiş</p>}
    {participation.phone && <p className="flex items-center gap-1"><Phone size={13} className="shrink-0" />{participation.phone}</p>}
    <a className="inline-flex items-center gap-1 text-brand font-bold mt-2" href={participation.registryUrl} target="_blank" rel="noreferrer">Resmi çalışma kaydı — {participation.studyId}<ExternalLink size={13} className="shrink-0" /></a>
    <p className="mt-2 text-muted-foreground">Nihai uygunluğu yalnızca araştırma ekibi tarama sürecinde belirler; iletişime geçmek kabul veya tedavi vaadi değildir.</p>
  </section>;
}
