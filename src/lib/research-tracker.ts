// Official registry facts (ClinicalTrials.gov API v2), checked on trackerChecked.
// Contacts are copied only from the official record; never invent contact data.
export const trackerChecked = "10 Ekim 2026";
export const NO_EMAIL = "Resmi kayıtta iletişim e-postası belirtilmemiş";

export type TrackerStage = "Onaylı" | "Faz 3" | "Faz 2" | "Faz 1" | "Preklinik" | "Gözlemsel";

export type TrackedStudy = {
  id: string;
  checked?: string;
  healthyVolunteers?: boolean;
  candidate: string;
  candidateSlug?: string;
  studyName: string;
  sponsor: string;
  stage: TrackerStage;
  phaseLabel: string;
  status: string;
  recruiting: boolean;
  ages: string;
  registryUpdated: string;
  minAge?: number | undefined;
  maxAge?: number | undefined;
  countries: string[];
  turkeySite: boolean;
  contact?: { name: string; email?: string; phone?: string };
  registryUrl?: string;
  summary: string;
};

export const trackedStudies: TrackedStudy[] = [
  { id: "NCT07869654", candidate: "ATI-105", candidateSlug: "ati-105", studyName: "ATI-105-101 — sağlıklı gönüllü Faz 1; FA hastası almıyor", sponsor: "Adjuvia Therapeutics, Inc.", stage: "Faz 1", phaseLabel: "Faz 1 · Sağlıklı gönüllüler", healthyVolunteers: true,
    status: "Not yet recruiting (9 Ekim sicili); şirket 29 Ekim’de ilk dozlamayı bildirdi", recruiting: false, ages: "18–60 yaş", minAge: 18, maxAge: 60, registryUpdated: "9 Ekim 2026", checked: "29 Ekim 2026", countries: ["ABD — Quotient Sciences, Miami, Florida"], turkeySite: false,
    contact: { name: "Laura Gonzalez — Quotient Sciences", email: "laura.gonzalez@quotientsciences.com", phone: "305-644-9903" }, registryUrl: "https://clinicaltrials.gov/study/NCT07869654",
    summary: "Tahmini 60 sağlıklı yetişkin; oral kapsül, tek/çoklu artan doz ve plasebo kontrolüyle güvenlilik, tolerabilite, farmakokinetik araştırılıyor. FA hastası almıyor; FA klinik veya biyobelirteç sonucu yok. Şirket bildirimi sicilden daha yeni; Türkiye merkezi veya yurtdışından kabul doğrulanmadı." },
  { id: "NCT07887828", candidate: "GCC FA doğal seyir çalışması", studyName: "Friedreich’s Ataxia Observational Study — ilaç denemesi değil", sponsor: "Biogen", stage: "Gözlemsel", phaseLabel: "Gözlemsel · klinik faz uygulanmaz",
    status: "Not yet recruiting — henüz katılımcı almıyor", recruiting: false, ages: "Çocuk ve yetişkinler; sayısal yaş sınırı kayıtta belirtilmemiş", registryUpdated: "21 Ekim 2026", checked: "29 Ekim 2026", countries: ["Körfez İşbirliği Konseyi (GCC) ülkeleri — tekil merkezler kayıtta yayımlanmamış"], turkeySite: false,
    contact: { name: "Global Biogen Clinical Trial Center", email: "clinicaltrials@biogen.com" }, registryUrl: "https://clinicaltrials.gov/study/NCT07887828",
    summary: "İlk yayım 21 Ekim 2026; tahmini 40 katılımcı, yaklaşık iki yıllık gözlem. FA doğal seyri, klinik özellikler, genetik profil, günlük yaşam ve bölgesel sıklık incelenir. Tıbbi bakım değiştirilmez; ilaç denemesi veya tedavi değildir. Klinik/genetik FA tanısı ve protokol ölçütleri gerekir. GCC bölgesine yöneliktir, Türkiye merkezi değildir; Türkiye’den kabul doğrulanmadı." },
  {
    id: "skyclarys", registryUpdated: "—", minAge: undefined, maxAge: undefined, candidate: "Omaveloksolon (Skyclarys)", candidateSlug: "omaveloksolon-skyclarys", studyName: "Ruhsatlı tedavi — klinik çalışma değil",
    sponsor: "Biogen", stage: "Onaylı", phaseLabel: "ABD (FDA) ve AB (EMA) onaylı", status: "Türkiye ruhsat durumu belirsiz; hekim ile değerlendirilmeli",
    recruiting: false, ages: "Onay kapsamı ülkeye göre değişir", countries: ["ABD", "Avrupa Birliği"], turkeySite: false,
    summary: "FA için ruhsat almış tek ilaç. Bir araştırma çalışması olmadığı için başvuru değil, hekim değerlendirmesi gerekir.",
  },
  {
    id: "NCT07778836", registryUpdated: "9 Ekim 2026", minAge: 12, maxAge: 40, candidate: "Nomlabofusp (eski adı CTI-1601)", candidateSlug: "nomlabofusp-cti-1601", studyName: "Deri altı nomlabofusp etkinlik ve güvenlilik çalışması",
    sponsor: "Larimar Therapeutics", stage: "Faz 3", phaseLabel: "Faz 3", status: "Hasta alıyor", recruiting: true, ages: "12–40 yaş",
    countries: ["ABD"], turkeySite: false, contact: { name: "Larimar Therapeutics, Inc.", email: "medicalinfo@larimartx.com", phone: "844-511-9056" },
    registryUrl: "https://clinicaltrials.gov/study/NCT07778836", summary: "Frataksin protein replasmanı yaklaşımı; plasebo kontrollü değerlendirme.",
  },
  {
    id: "NCT07681713", registryUpdated: "14 Ağustos 2026", minAge: 7, maxAge: 21, candidate: "Vatiquinone (PTC-743)", candidateSlug: "vatiquinone", studyName: "Vatiquinone uzun dönem etkinlik çalışması",
    sponsor: "PTC Therapeutics", stage: "Faz 3", phaseLabel: "Faz 3", status: "Henüz hasta almaya başlamadı", recruiting: false, ages: "7–21 yaş",
    countries: ["ABD", "Belçika", "Brezilya", "Fransa", "İspanya", "Kanada"], turkeySite: false,
    contact: { name: "Patient Advocacy", email: "medinfo@ptcbio.com", phone: "1-866-562-4620" },
    registryUrl: "https://clinicaltrials.gov/study/NCT07681713", summary: "Önceki Faz 3 (MOVE-FA) ana hedefini karşılamamıştı; yeni çalışma uzun dönem etkiyi inceliyor.",
  },
  {
    id: "NCT07721025", registryUpdated: "2 Eylül 2026", minAge: 6, maxAge: undefined, candidate: "LX2006", candidateSlug: "lx2006", studyName: "SUNRISE-FA 2",
    sponsor: "Lexeo Therapeutics", stage: "Faz 2", phaseLabel: "Faz 2", status: "Hasta alıyor", recruiting: true, ages: "6 yaş ve üzeri",
    countries: ["ABD"], turkeySite: false, contact: { name: "Lexeo Clinical Trials", email: "clinicaltrials@lexeotx.com", phone: "212-547-9879" },
    registryUrl: "https://clinicaltrials.gov/study/NCT07721025", summary: "FA kardiyomiyopatisine yönelik AAV gen tedavisi; tek LX2006 adayının kayıt amaçlı çalışması.",
  },
  {
    id: "NCT05445323", registryUpdated: "23 Aralık 2025", minAge: 18, maxAge: 50, candidate: "LX2006", candidateSlug: "lx2006", studyName: "SUNRISE-FA",
    sponsor: "Lexeo Therapeutics", stage: "Faz 2", phaseLabel: "Faz 1/2", status: "Aktif, yeni hasta almıyor", recruiting: false, ages: "18–50 yaş",
    countries: ["ABD"], turkeySite: false, registryUrl: "https://clinicaltrials.gov/study/NCT05445323",
    summary: "Aynı LX2006 adayının ilk insan çalışması; yeni katılımcı alımı yok.",
  },
  {
    id: "NCT06874010", registryUpdated: "18 Mayıs 2025", minAge: 18, maxAge: 65, candidate: "DT-216P2", candidateSlug: "dt-216p2", studyName: "Çoklu artan doz çalışması",
    sponsor: "Design Therapeutics", stage: "Faz 2", phaseLabel: "Faz 1/2", status: "Hasta alıyor", recruiting: true, ages: "18–65 yaş",
    countries: ["Avustralya"], turkeySite: false, contact: { name: "Varlli Scott", email: "varlli.scott@mcri.edu.au", phone: "+613 8341 6228" },
    registryUrl: "https://clinicaltrials.gov/study/NCT06874010", summary: "FXN gen susturmasını hedefleyen küçük molekül; erken doz ve güvenlilik aşaması.",
  },
  {
    id: "NCT07180355", registryUpdated: "29 Eylül 2026", minAge: 18, maxAge: 40, candidate: "SGT-212", candidateSlug: "sgt-212", studyName: "SGT-212 gen tedavisi çalışması",
    sponsor: "Solid Biosciences", stage: "Faz 1", phaseLabel: "Faz 1", status: "Hasta alıyor", recruiting: true, ages: "18–40 yaş",
    countries: ["ABD"], turkeySite: false, contact: { name: "Solid Biosciences Clinical Trials", email: "clinicaltrials@solidbio.com", phone: "+1617-337-4680" },
    registryUrl: "https://clinicaltrials.gov/study/NCT07180355", summary: "Kalp ve sinir sistemini hedefleyen AAV gen tedavisi; ilk insan güvenlilik çalışması.",
  },
  {
    id: "nbib-223", registryUpdated: "—", minAge: undefined, maxAge: undefined, candidate: "NBIB-223", studyName: "Doğrulanmış klinik kayıt yok",
    sponsor: "Neurocrine Biosciences / Voyager Therapeutics", stage: "Preklinik", phaseLabel: "Preklinik / erken geliştirme", status: "Kayıtlı insan çalışması bulunamadı",
    recruiting: false, ages: "—", countries: [], turkeySite: false,
    summary: "Resmi kayıtlı bir FA çalışması doğrulanmadığı için katılım yolu bulunmuyor.",
  },
];

export const stageOrder: TrackerStage[] = ["Onaylı", "Faz 3", "Faz 2", "Faz 1", "Preklinik", "Gözlemsel"];
export const stageTone: Record<TrackerStage, "green" | "yellow" | "blue" | "gray"> = {
  "Onaylı": "green", "Faz 3": "blue", "Faz 2": "blue", "Faz 1": "yellow", "Preklinik": "gray", "Gözlemsel": "gray",
};

