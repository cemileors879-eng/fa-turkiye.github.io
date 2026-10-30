import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink, ListChecks, Stethoscope, Compass } from "lucide-react";
import { EvidenceBadge } from "./portal";
import {
  contactChecklist, doctorQuestions, sourceKind, sourceKinds, specialties, stageBadge, turkeyGuidance,
} from "@/lib/guidance";
import { pipelineCandidates } from "@/lib/research-pipeline";
import { drugs, categoryInfo, type DrugCategory } from "@/lib/drug-library";
import type { Evidence } from "@/lib/portal-data";

type Src = { label: string; url: string };

export function TrustPanel({ updated, evidence, phase, category, sources }: {
  updated: string; evidence: string; phase: string; category?: string; sources: Src[];
}) {
  const badge = stageBadge(phase, category);
  const kinds = sourceKinds(sources.map((s) => s.url));
  return (
    <dl className="trust-panel" aria-label="Kaynak ve güncellik bilgisi">
      <div><dt>Son güncelleme</dt><dd>{updated}</dd></div>
      {(phase || category) && <div><dt>Aşama</dt><dd><EvidenceBadge kind={badge.tone}>{badge.label}</EvidenceBadge></dd></div>}
      <div><dt>Kanıt düzeyi</dt><dd>{evidence}</dd></div>
      <div><dt>Kaynak türü</dt><dd>{kinds.length ? kinds.join(" · ") : "Kaynak bekleniyor — bilgi kesin değildir"}</dd></div>
    </dl>
  );
}

export function SourceList({ sources }: { sources: Src[] }) {
  if (!sources.length) return <p className="notice text-xs">Bu içerik için doğrulanmış kaynak henüz eklenmedi; bilgiler kesin kabul edilmemelidir.</p>;
  return (
    <ul className="divide-y divide-border border-y border-border">
      {sources.map((s) => (
        <li key={s.url} className="py-3">
          <span className="source-kind">{sourceKind(s.url)}</span>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-4 text-xs text-brand font-semibold mt-1">
            {s.label}<ExternalLink size={14} className="shrink-0" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function NextSteps() {
  return (
    <section className="next-steps" aria-labelledby="next-steps-title">
      <h2 id="next-steps-title"><Compass size={20} aria-hidden /> Şimdi ne yapabilirim?</h2>
      <p className="text-sm leading-7 text-muted-foreground">Bu bilgiler genel yönlendirmedir. Tedaviye başlama, bırakma veya çalışmaya katılma kararını hekiminizle birlikte verin. Acil bir durumda 112'yi arayın.</p>
      <div className="next-grid">
        <div>
          <h3><Stethoscope size={16} aria-hidden /> Doktorunuza sorabilecekleriniz</h3>
          <ul>{doctorQuestions.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
        <div>
          <h3><ListChecks size={16} aria-hidden /> Araştırma merkeziyle görüşmeden önce</h3>
          <ul>{contactChecklist.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
      </div>
      <h3 className="mt-6">Türkiye'de hangi uzmanlıkla görüşebilirsiniz?</h3>
      <ul className="specialty-list">
        {specialties.map((s) => <li key={s.name}><strong>{s.name}</strong><span>{s.text}</span></li>)}
      </ul>
      <h3 className="mt-6">Türkiye'den katılım için genel yönlendirme</h3>
      <ul>{turkeyGuidance.map((q) => <li key={q}>{q}</li>)}</ul>
      <p className="text-[11px] text-muted-foreground mt-4">Belirli bir kurum veya hekim önermiyoruz; listelenen uzmanlıklar genel bilgidir.</p>
    </section>
  );
}

export function ForYouCta() {
  return (
    <section className="for-you-cta" aria-labelledby="for-you-title">
      <div>
        <h2 id="for-you-title">Benim için ne var?</h2>
        <p>Birkaç kısa soruyu yanıtlayın; ilginizi çekebilecek araştırmaları, tedavi bilgilerini ve hekiminizle konuşmak için hazırlık listesini görün.</p>
      </div>
      <Link to="/benim-icin" className="for-you-button">Yönlendirmeyi başlat <ArrowRight size={16} aria-hidden /></Link>
    </section>
  );
}

const interests = [
  { id: "hepsi", label: "Hepsini göster" },
  { id: "gen", label: "Gen tedavisi" },
  { id: "molekul", label: "Küçük molekül / ilaç" },
  { id: "protein", label: "Protein replasmanı" },
  { id: "ruhsatli", label: "Ruhsatlı tedavi" },
  { id: "destek", label: "Belirtilere yönelik destek" },
] as const;
type Interest = (typeof interests)[number]["id"];

export function Finder() {
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [interest, setInterest] = useState<Interest>("hepsi");
  const [shown, setShown] = useState(false);
  const ready = age && country && diagnosis;

  const matchCandidate = (type: string) => {
    const t = type.toLowerCase();
    if (interest === "hepsi") return true;
    if (interest === "gen") return /gen tedav|gen ekle|gen düzen|aav|hücre/.test(t);
    if (interest === "molekul") return /molekül|oral|inhibit/.test(t);
    if (interest === "protein") return /protein/.test(t);
    return false;
  };
  const candidates = pipelineCandidates.filter((c) => c.activity === "active" && matchCandidate(c.type));
  const drugCats: DrugCategory[] = interest === "ruhsatli" ? ["ruhsatli"] : interest === "destek" ? ["semptomatik"] : interest === "hepsi" ? ["ruhsatli", "semptomatik"] : [];
  const libraryItems = drugs.filter((d) => drugCats.includes(d.category));

  const notes: string[] = [];
  if (diagnosis !== "evet") notes.push("Klinik araştırmalar genellikle genetik testle doğrulanmış FA tanısı ister. Önce nöroloji veya tıbbi genetik uzmanıyla tanı sürecini konuşmanız uygun olabilir.");
  if (age === "0-15") notes.push("Çocuklara açık çalışma sayısı daha azdır; bazı çalışmalar önce yetişkinleri, sonra çocukları alır. Omaveloksolon ABD ve Avrupa'da 16 yaş ve üzeri için onaylıdır.");
  if (age === "16-17" || age === "0-15") notes.push("18 yaş altı katılımcılar için ebeveyn/vasi onayı ve çocuk nörolojisi değerlendirmesi gerekir.");
  if (country === "tr") notes.push("Türkiye'de merkez bulunup bulunmadığı her çalışma için ayrıca kontrol edilmelidir; çoğu çalışma şu an yurt dışında yürütülmektedir.");

  return (
    <div className="max-w-4xl">
      <form className="finder-form" onSubmit={(e) => { e.preventDefault(); if (ready) setShown(true); }}>
        <p className="text-xs text-muted-foreground leading-6 sm:col-span-2">Ad, iletişim bilgisi veya sağlık kaydı istemiyoruz. Yanıtlarınız yalnızca bu sayfada, cihazınızda kullanılır ve kaydedilmez.</p>
        <label>Yaş aralığı
          <select className="filter-select" value={age} onChange={(e) => setAge(e.target.value)} required>
            <option value="">Seçin</option><option value="0-15">15 yaş ve altı</option><option value="16-17">16–17</option><option value="18-40">18–40</option><option value="41+">41 ve üzeri</option>
          </select>
        </label>
        <label>Ülke
          <select className="filter-select" value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Seçin</option><option value="tr">Türkiye</option><option value="eu">Avrupa ülkesi</option><option value="other">Diğer</option>
          </select>
        </label>
        <label>Genetik testle doğrulanmış FA tanısı var mı?
          <select className="filter-select" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} required>
            <option value="">Seçin</option><option value="evet">Evet</option><option value="hayir">Hayır</option><option value="emin">Emin değilim</option>
          </select>
        </label>
        <label>İlgilendiğim konu
          <select className="filter-select" value={interest} onChange={(e) => setInterest(e.target.value as Interest)}>
            {interests.map((i) => <option key={i.id} value={i.id}>{i.label}</option>)}
          </select>
        </label>
        <button type="submit" className="for-you-button sm:col-span-2 justify-center" disabled={!ready}>Uygun olabilecek içerikleri göster</button>
      </form>

      {shown && (
        <section aria-live="polite" className="mt-8">
          <h2 className="text-2xl font-extrabold text-primary">Sizin için uygun olabilecek içerikler</h2>
          <p className="notice mt-4 text-sm leading-7">Bu liste kesin uygunluk veya tıbbi tavsiye değildir. Bir çalışmaya katılıp katılamayacağınıza yalnızca araştırma merkezi, tedaviye ise hekiminiz karar verebilir.</p>
          {notes.length > 0 && <ul className="mt-4 space-y-2 text-sm leading-7 list-disc pl-5">{notes.map((n) => <li key={n}>{n}</li>)}</ul>}
          {candidates.length > 0 && <>
            <h3 className="font-bold text-lg text-primary mt-7 mb-3">Klinik araştırmalar</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {candidates.map((c) => { const b = stageBadge(c.phase); return (
                <Link key={c.slug} to="/ilac-kutuphanesi/$slug" params={{ slug: c.slug }} className="finder-result">
                  <EvidenceBadge kind={b.tone}>{b.label}</EvidenceBadge>
                  <strong>{c.name}</strong><span>{c.type}</span><span className="text-muted-foreground">{c.status}</span>
                </Link>); })}
            </div>
          </>}
          {libraryItems.length > 0 && <>
            <h3 className="font-bold text-lg text-primary mt-7 mb-3">Tedavi kütüphanesinden</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {libraryItems.map((d) => (
                <Link key={d.slug} to="/ilac-kutuphanesi/$slug" params={{ slug: d.slug }} className="finder-result">
                  <EvidenceBadge kind={categoryInfo[d.category].tone as Evidence}>{categoryInfo[d.category].label}</EvidenceBadge>
                  <strong>{d.name}</strong><span>{d.target}</span>
                </Link>
              ))}
            </div>
          </>}
          {!candidates.length && !libraryItems.length && <p className="mt-6 text-sm">Bu seçim için listelenmiş içerik yok. <Link to="/arastirma-takvimi" className="text-brand font-bold">Tüm araştırmalara bakın</Link>.</p>}
          <NextSteps />
        </section>
      )}
    </div>
  );
}

export function EligibilityNotice() {
  return (
    <div className="notice my-6 text-sm leading-7" role="note">
      <strong>Katılım kriterleri hakkında:</strong> Burada yer alan yaş, faz ve kayıt bilgileri genel özetlerdir. Bir çalışmaya katılıp katılamayacağınızı yalnızca araştırma merkezi, güncel kriterlere göre muayene ve tetkiklerle doğrulayabilir. Bu sayfa tıbbi tavsiye veya kesin uygunluk bildirimi değildir.
    </div>
  );
}

const quickLinks = [
  { to: "/haberler", title: "Son Haberler", text: "Kaynaklı, sade Türkçe araştırma haberleri; en yeni üstte." },
  { to: "/tedaviler", title: "Tedaviler", text: "FA için onaylı tedavi ve güvenlilik bilgisi." },
  { to: "/ilac-kutuphanesi", title: "İlaç Kütüphanesi", text: "Onaylı, destekleyici, kanıtlanmamış ve deneysel ilaçlar ayrı ayrı." },
  { to: "/klinik-arastirmalar", title: "Klinik Araştırmalar", text: "Geliştirilen ilaçlar ve gen tedavileri; faz ve geliştirici bilgisi." },
  { to: "/klinik-arastirmalara-katilim", title: "Klinik Araştırmalara Katılım", text: "Başvuru adımları, resmi çalışma kayıtları ve doğrulanmış iletişimler." },
  { to: "/arastirma-takvimi", title: "Araştırma Takvimi", text: "Doğrulanmış tarihler ve beklenen veri paylaşımları." },
  { to: "/nereden-baslamaliyim", title: "Nereden başlamalıyım?", text: "Tanı sonrası takip ve güvenilir bilgi yolları." },
  { to: "/hakkimizda", title: "Dernek", text: "FADERN bağlantısı ve sitemiz hakkında bilgi." },
] as const;

export function QuickAccess() {
  return (
    <nav aria-label="Hızlı erişim" className="quick-access">
      {quickLinks.map((l) => (
        <Link key={l.title} to={l.to} className="quick-card">
          <strong>{l.title}</strong><span>{l.text}</span>
          <ArrowRight size={15} aria-hidden className="text-brand mt-auto" />
        </Link>
      ))}
    </nav>
  );
}

