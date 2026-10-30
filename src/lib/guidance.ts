// Browser-safe helpers for source typing, stage badges and next-step guidance.
import type { Evidence } from "./portal-data";

export type SourceKind = "Hakemli yayın / DOI" | "Klinik çalışma kaydı" | "Resmî kurum" | "Hasta örgütü" | "Geliştirici duyurusu" | "Diğer kaynak";

export function sourceKind(url: string): SourceKind {
  const u = url.toLowerCase();
  if (/doi\.org|pubmed|ncbi\.nlm|nejm|thelancet|jamanetwork|springer|wiley|sciencedirect|nature\.com/.test(u)) return "Hakemli yayın / DOI";
  if (/clinicaltrials\.gov|clinicaltrialsregister|euclinicaltrials|who\.int\/clinical-trials/.test(u)) return "Klinik çalışma kaydı";
  if (/fda\.gov|ema\.europa|europa\.eu|titck|saglik\.gov|nih\.gov|sec\.gov/.test(u)) return "Resmî kurum";
  if (/curefa|fara|ataxia|movementdisorders/.test(u)) return "Hasta örgütü";
  if (/investors|\bir\.|news-release|globenewswire|businesswire|prnewswire|trials\.|lexeo|designtx|solidbio|larimar|ptcbio|neurocrine|minoryx/.test(u)) return "Geliştirici duyurusu";
  return "Diğer kaynak";
}

export function sourceKinds(urls: string[]): SourceKind[] {
  return [...new Set(urls.map(sourceKind))];
}

export type StageBadge = { label: string; tone: Evidence };

/** Maps existing phase / category text to a standard stage badge without inventing data. */
export function stageBadge(phase: string, category?: string): StageBadge {
  if (category === "ruhsatli") return { label: "Onaylı (bazı ülkelerde)", tone: "green" };
  if (category === "semptomatik") return { label: "Başka endikasyonda onaylı · destekleyici", tone: "green" };
  if (category === "kanitlanmamis") return { label: "Etkisi kanıtlanmamış", tone: "gray" };
  const p = phase.toLowerCase();
  if (/inceleme|review/.test(p)) return { label: "Düzenleyici inceleme", tone: "yellow" };
  if (/faz 3|kayıt amaçlı|pivotal/.test(p)) return { label: "Faz 3 / kayıt amaçlı", tone: "blue" };
  if (/faz 2/.test(p)) return { label: "Faz 2", tone: "blue" };
  if (/faz 1/.test(p)) return { label: "Faz 1", tone: "blue" };
  if (/preklinik|laboratuvar|ind/.test(p)) return { label: "Preklinik", tone: "gray" };
  return { label: "Aşama doğrulanıyor", tone: "gray" };
}

export const stageLegend: StageBadge[] = [
  { label: "Preklinik", tone: "gray" },
  { label: "Faz 1", tone: "blue" },
  { label: "Faz 2", tone: "blue" },
  { label: "Faz 3", tone: "blue" },
  { label: "Düzenleyici inceleme", tone: "yellow" },
  { label: "Onaylı", tone: "green" },
];

export const doctorQuestions = [
  "Bu tedavi veya araştırma benim durumum için neden uygun olabilir ya da olmayabilir?",
  "Katılım için yaş, yürüme durumu veya kalp bulguları gibi bilinen koşullar neler?",
  "Mevcut ilaçlarım çalışma veya tedaviyle etkileşebilir mi?",
  "Hangi tetkikler (genetik test sonucu, EKG, ekokardiyografi, kan şekeri) güncel olmalı?",
  "Olası riskler, izlem ziyaretleri ve seyahat yükü nasıl olur?",
];

export const specialties = [
  { name: "Nöroloji", text: "Denge, yürüme, koordinasyon ve mFARS gibi değerlendirmeler için ana takip uzmanlığıdır." },
  { name: "Tıbbi genetik", text: "Tanının genetik testle doğrulanması, GAA tekrar sonuçlarının yorumu ve aile danışmanlığı için." },
  { name: "Kardiyoloji", text: "Kalp kası kalınlaşması ve ritim bozuklukları FA'da sık izlenir; kalbe yönelik çalışmalarda önemlidir." },
  { name: "Endokrinoloji", text: "Diyabet ve kan şekeri takibi için." },
  { name: "Fizik tedavi ve rehabilitasyon", text: "Egzersiz, denge, kas sertliği ve yardımcı cihazlar için." },
  { name: "Çocuk nörolojisi", text: "18 yaş altı hastaların takibi ve çocuklara açık çalışmalar için." },
];

export const contactChecklist = [
  "Genetik test raporu (FA tanısını gösteren)",
  "Yakın tarihli nöroloji muayene notu ve kullanılan ilaçların listesi",
  "Varsa EKG, ekokardiyografi ve kan tahlili sonuçları",
  "Çalışmanın kayıt numarası (ör. NCT ile başlayan ClinicalTrials.gov numarası)",
  "Seyahat edebileceğiniz ülkeler ve iletişim dili",
];

export const turkeyGuidance = [
  "Türkiye'de çalışma merkezi olup olmadığını ClinicalTrials.gov'da çalışma kaydının 'Locations' bölümünden kontrol edin; merkez listeleri değişebilir.",
  "Yurt dışındaki çalışmalar genellikle düzenli ziyaret gerektirir; seyahat ve konaklama koşullarını araştırma ekibine sorun.",
  "Ruhsat ve geri ödeme durumu için Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) duyuruları ve hekiminiz esas alınmalıdır.",
  "Hasta dernekleri ve FARA gibi uluslararası kuruluşlar çalışma duyurularını takip etmenize yardımcı olabilir.",
];

