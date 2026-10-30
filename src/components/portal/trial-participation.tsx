import { AlertTriangle, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { candidateParticipation, NO_CONTACT, participationChecked, SITE_UNSTATED } from "@/lib/trial-participation";

export function TrialParticipation({ slug, headingId = "participation-title", title = "Klinik araştırmaya katılım ve iletişim" }: { slug: string; headingId?: string; title?: string }) {
  const p = candidateParticipation[slug];
  if (!p) return null;
  return <section aria-labelledby={headingId} className="mt-8 rounded-lg border border-border bg-card p-4 sm:p-6">
    <h2 id={headingId} className="text-xl font-extrabold text-primary">{title}</h2>
    <p className="notice mt-3 flex gap-2 text-xs leading-6"><AlertTriangle size={16} className="shrink-0 mt-1" /><span>İlaç adayı ile klinik çalışma aynı şey değildir. Bilgiler resmi kayıtlardan {p.checked ?? participationChecked} tarihinde kontrol edildi; durumlar her an değişebilir, mutlaka araştırma merkezinden teyit edin. Hiçbir çalışmada Türkiye'de merkez yoktur; Türkiye'den başvuru kabulü varsayılmamalıdır. Nihai uygunluğu yalnızca araştırma ekibi belirler.</span></p>
    <p className="mt-3 text-sm"><strong>Sponsor / geliştirici:</strong> {p.sponsor} · <a className="text-brand font-bold" href={p.officialLink.url} target="_blank" rel="noreferrer">{p.officialLink.label} ↗</a></p>
    {p.companyContact && <p className="mt-2 text-xs leading-6"><strong>Genel firma iletişimi (klinik çalışma başvuru kanalı değildir):</strong> {p.companyContact.name} · <a className="text-brand break-all" href={`mailto:${p.companyContact.email}`}>{p.companyContact.email}</a> · <a className="text-brand" href={p.companyContact.source} target="_blank" rel="noreferrer">kaynak ↗</a></p>}
    {p.note && <p className="mt-3 text-xs leading-6 text-muted-foreground">{p.note}</p>}
    {!p.trials.length && <p className="mt-3 text-sm font-bold">Şu an bu aday için katılıma açık, resmi olarak kayıtlı bir klinik çalışma bulunmuyor.</p>}
    {p.trials.map(t => <article key={t.nct} className="mt-5 border-t border-border pt-4">
      <h3 className="font-bold text-primary leading-6">{t.name}</h3>
      <p className="text-xs mt-1"><strong>{t.nct}</strong> · {t.phase}{t.enrollment ? ` · Planlanan katılımcı: ${t.enrollment}` : ""}</p>
      <p className={`mt-2 inline-block rounded px-2 py-1 text-xs font-bold ${t.open ? "bg-brand text-primary-foreground" : "bg-muted"}`}>{t.status}</p>
      <dl className="mt-3 text-xs leading-6 space-y-1">
        <div><dt className="inline font-bold">Yaş: </dt><dd className="inline">{t.ages}</dd></div>
        <div><dt className="inline font-bold">Kayıt son güncelleme: </dt><dd className="inline">{t.registryUpdated} · Sitede kontrol: {p.checked ?? participationChecked}</dd></div>
      </dl>
      <p className="mt-3 text-xs font-bold">Temel dahil edilme kriterleri (özet; tam liste kayıtta)</p>
      <ul className="list-disc pl-5 text-xs leading-6">{t.criteria.map(c => <li key={c}>{c}</li>)}</ul>
      {t.sites.length > 0 && <><p className="mt-3 text-xs font-bold">Merkezler ve merkez bazında alım durumu</p>
        <ul className="text-xs leading-6 divide-y divide-border">{t.sites.map(s => <li key={s.facility + s.city} className="py-1 flex gap-1"><MapPin size={13} className="shrink-0 mt-1" /><span>{s.facility} — {s.city}, {s.country} · <em>{s.status ?? SITE_UNSTATED}</em></span></li>)}</ul></>}
      <p className="mt-3 text-xs font-bold">Resmi iletişim</p>
      {t.contact ? <div className="text-xs leading-6"><p>{t.contact.name}</p>
        {t.contact.email && <a href={`mailto:${t.contact.email}`} className="flex items-center gap-1 text-brand break-all"><Mail size={13} className="shrink-0" />{t.contact.email}</a>}
        {t.contact.phone && <a href={`tel:${t.contact.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1 text-brand"><Phone size={13} className="shrink-0" />{t.contact.phone}</a>}
      </div> : <p className="text-xs leading-6">{NO_CONTACT}</p>}
      {t.open && <p className="mt-3 text-xs leading-6"><strong>Başvuru adımları:</strong> Genetik test raporunuzu ve güncel klinik bilgilerinizi hekiminizle hazırlayın; resmi kayıttaki iletişim kanalına yazarak yurtdışından katılımın mümkün olup olmadığını, seyahat/konaklama koşullarını sorun. İletişime geçmek kabul anlamına gelmez.</p>}
      <a href={`https://clinicaltrials.gov/study/${t.nct}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground">Resmi araştırma kaydına git <ExternalLink size={14} /></a>
    </article>)}
    <p className="mt-5 text-[11px] text-muted-foreground">Kaynaklar: <a className="text-brand" href="https://clinicaltrials.gov/" target="_blank" rel="noreferrer">ClinicalTrials.gov</a> · <a className="text-brand" href="https://www.curefa.org/clinical-studies/" target="_blank" rel="noreferrer">FARA klinik çalışmalar</a></p>
  </section>;
}

