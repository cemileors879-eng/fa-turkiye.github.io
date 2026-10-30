import { ExternalLink, Mail } from "lucide-react";
import { candidateParticipation, participationChecked, UNVERIFIED_CONTACT } from "@/lib/trial-participation";

// Compact, single-source sponsor/participation summary shared by library and calendar cards.
export function SponsorContact({ slug }: { slug: string }) {
  const p = candidateParticipation[slug];
  if (!p) return null;
  const open = p.trials.filter(t => t.open);
  const contact = (open[0] ?? p.trials.find(t => t.contact))?.contact;
  return <div className="mt-3 border-t border-border pt-3 text-xs leading-6">
    <p><strong>Sponsor / geliştirici:</strong> {p.sponsor}</p>
    <p><strong>Katılım:</strong> {open.length ? `Hasta alan çalışma: ${open.map(t => t.nct).join(", ")} (Türkiye'de merkez yok)` : p.trials.length ? "Şu an hasta alan çalışma yok" : "Kayıtlı klinik çalışma yok"}</p>
    <p className="font-bold">Araştırma kayıt iletişimi:</p>
    {contact?.email ? <a href={`mailto:${contact.email}`} className="flex items-center gap-1 text-brand break-all"><Mail size={13} className="shrink-0" />{contact.email}</a> : <p>{UNVERIFIED_CONTACT}</p>}
    {p.companyContact && <><p className="font-bold">Genel firma iletişimi (başvuru kanalı değildir):</p><a href={`mailto:${p.companyContact.email}`} className="flex items-center gap-1 text-brand break-all"><Mail size={13} className="shrink-0" />{p.companyContact.email}</a></>}
    <a href={p.officialLink.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-brand">{p.officialLink.label} <ExternalLink size={12} className="shrink-0" /></a>
    <p className="text-muted-foreground">Son kontrol: {participationChecked}</p>
  </div>;
}

