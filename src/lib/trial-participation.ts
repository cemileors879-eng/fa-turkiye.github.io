// Official ClinicalTrials.gov API v2 facts, copied verbatim for contacts/sites.
// Never invent contacts, sites, studies or open slots. Checked on participationChecked.
export const participationChecked = "13 Ekim 2026";
export const NO_CONTACT = "Resmi iletişim bilgisi yayımlanmamış; ClinicalTrials.gov kaydından kontrol edin";

export type TrialSite = { facility: string; city: string; country: string; status?: string };
export type ParticipationTrial = {
  nct: string; name: string; phase: string; status: string; open: boolean;
  enrollment?: number; ages: string; criteria: string[]; registryUpdated: string;
  contact?: { name: string; email?: string; phone?: string };
  sites: TrialSite[];
};
export type CandidateParticipation = { checked?: string; sponsor: string; officialLink: { label: string; url: string }; trials: ParticipationTrial[]; note?: string;
  // General company/press contact copied from an official company release; NOT a trial enrolment contact.
  companyContact?: { name: string; email: string; source: string } };
export const UNVERIFIED_CONTACT = "Resmî araştırma iletişimi doğrulanamadı";

const R = "Hasta alıyor (RECRUITING)";
export const SITE_UNSTATED = "Merkez alım durumu kayıtta belirtilmemiş";

export const candidateParticipation: Record<string, CandidateParticipation> = {
  "ati-105": { checked: "29 Ekim 2026", sponsor: "Adjuvia Therapeutics, Inc.", officialLink: { label: "ClinicalTrials.gov — NCT07869654", url: "https://clinicaltrials.gov/study/NCT07869654" },
    note: "Sağlıklı gönüllü Faz 1 — FA hastası almıyor. Türkiye merkezi yok; katılım bilgisi FA hastaları için geçerli değildir. 9 Ekim kaydı Not yet recruiting; 29 Ekim şirket duyurusu ilk dozlamayı bildiriyor. Bu fark nedeniyle sicil durumu otomatik değiştirilmedi; merkezden teyit gerekir.",
    trials: [{ nct: "NCT07869654", name: "ATI-105-101 — sağlıklı yetişkinlerde tek ve çoklu artan doz, plasebo kontrollü oral kapsül çalışması", phase: "Faz 1 · Sağlıklı gönüllüler", status: "Not yet recruiting (9 Ekim 2026 sicili) — FA hastası almıyor", open: false, enrollment: 60, ages: "18–60 yaş", registryUpdated: "9 Ekim 2026",
      criteria: ["Tıbbi değerlendirmede sağlıklı yetişkin gönüllüler; FA hastaları için değildir", "Kapsül yutabilme ve protokoldeki tüm sağlık ölçütleri; tam liste resmî kayıtta"],
      contact: { name: "Laura Gonzalez — Quotient Sciences (sağlıklı gönüllü çalışması)", email: "laura.gonzalez@quotientsciences.com", phone: "305-644-9903" },
      sites: [{ facility: "Quotient Sciences", city: "Miami, Florida", country: "ABD", status: SITE_UNSTATED }] }] },
  lx2006: { sponsor: "Lexeo Therapeutics", officialLink: { label: "ClinicalTrials.gov — NCT07721025", url: "https://clinicaltrials.gov/study/NCT07721025" }, trials: [
    { nct: "NCT07721025", name: "SUNRISE-FA 2 — Study of LX2006 Gene Therapy in Friedreich Ataxia Cardiomyopathy", phase: "Faz 2", status: R, open: true, enrollment: 26, ages: "6 yaş ve üzeri (üst sınır yok)", registryUpdated: "2 Eylül 2026",
      criteria: ["Klinik ve genetik (FXN GAA genişlemesi) olarak doğrulanmış FA tanısı", "FA başlangıcı 25 yaş veya öncesi", "Doğrulanmış sol ventrikül hipertrofisi ve anormal sol ventrikül kütle indeksi", "Sol ventrikül ejeksiyon fraksiyonu en az %30", "Anti-AAVrh.10 antikor düzeyi protokol sınırının altında", "Dışlama örnekleri: önceki gen/hücre tedavisi, organ nakli, kardiyak MR kontrendikasyonu, kontrolsüz diyabet (HbA1c ≥%8)"],
      contact: { name: "Lexeo Clinical Trials", email: "clinicaltrials@lexeotx.com", phone: "212-547-9879" },
      sites: [{ facility: "University of South Florida", city: "Tampa", country: "ABD", status: R }] },
    { nct: "NCT05445323", name: "SUNRISE-FA — Gene Therapy for Cardiomyopathy Associated With Friedreich's Ataxia", phase: "Faz 1/2", status: "Aktif, yeni hasta almıyor (ACTIVE_NOT_RECRUITING)", open: false, enrollment: 8, ages: "18–50 yaş", registryUpdated: "23 Aralık 2025",
      criteria: ["Genetik olarak doğrulanmış FA, başlangıç 25 yaş öncesi", "Protokolde tanımlı antikor ve FA kardiyomiyopatisi ölçütleri", "Yeni katılımcı alınmamaktadır"],
      sites: [
        { facility: "Ataxia Center and HD Center of Excellence, University of California", city: "Los Angeles", country: "ABD" },
        { facility: "University of South Florida", city: "Tampa", country: "ABD" },
        { facility: "Mayo Clinic", city: "Rochester", country: "ABD" }] },
  ] },
  "nomlabofusp-cti-1601": { sponsor: "Larimar Therapeutics", officialLink: { label: "ClinicalTrials.gov — NCT07778836", url: "https://clinicaltrials.gov/study/NCT07778836" }, trials: [
    { nct: "NCT07778836", name: "FORWARD-FA — Efficacy and Safety of Subcutaneous Nomlabofusp", phase: "Faz 3", status: R, open: true, enrollment: 150, ages: "12–40 yaş", registryUpdated: "9 Ekim 2026",
      criteria: ["Genetik olarak doğrulanmış FRDA, GAA genişlemesi açısından homozigot (genetik rapor gerekli)", "Taramada 25 fit yürüme testini (gerekirse yardımcı cihazla) 3 dakika içinde tamamlayabilmek", "mFARS E modülü dik durma maddelerinde protokolde tanımlı sınırlar"],
      contact: { name: "Larimar Therapeutics, Inc.", email: "medicalinfo@larimartx.com", phone: "844-511-9056" },
      sites: [
        { facility: "Morsani Center for Advanced Health Care, University of South Florida Health", city: "Tampa", country: "ABD", status: "Henüz hasta almıyor (NOT_YET_RECRUITING)" },
        { facility: "Northwestern Medical Group, Department of Neurology", city: "Chicago", country: "ABD", status: R },
        { facility: "Clinilabs", city: "Eatontown", country: "ABD", status: R },
        { facility: "University of Texas Southwestern Medical Center", city: "Dallas", country: "ABD", status: R }] },
  ] },
  vatiquinone: { sponsor: "PTC Therapeutics", officialLink: { label: "ClinicalTrials.gov — NCT07681713", url: "https://clinicaltrials.gov/study/NCT07681713" }, trials: [
    { nct: "NCT07681713", name: "PROVE-FA — Long-Term Efficacy Study of Vatiquinone", phase: "Faz 3", status: "Henüz hasta almaya başlamadı (NOT_YET_RECRUITING)", open: false, enrollment: 120, ages: "7–21 yaş", registryUpdated: "14 Ağustos 2026",
      criteria: ["Taramada ve başlangıçta mFARS 20–70 arası", "Yürüyebilir olmak (USS E7 skoru 4 veya altı)", "GAA uzunluğu iki alel için belgelenmiş, genetik olarak doğrulanmış FA", "Güçlü CYP3A4 indükleyici/inhibitörlerinden protokolde belirtilen süre kaçınabilmek"],
      contact: { name: "Patient Advocacy", email: "medinfo@ptcbio.com", phone: "1-866-562-4620" },
      sites: [
        { facility: "University of California Los Angeles", city: "Los Angeles", country: "ABD" },
        { facility: "University of South Florida", city: "Tampa", country: "ABD" },
        { facility: "University of Iowa", city: "Iowa City", country: "ABD" },
        { facility: "Children's Hospital of Philadelphia", city: "Philadelphia", country: "ABD" },
        { facility: "Hôpital Érasme (Hôpital Universitaire de Bruxelles)", city: "Brüksel", country: "Belçika" },
        { facility: "University of Campinas", city: "Campinas", country: "Brezilya" },
        { facility: "Centre Hospitalier de l'Universite de Montreal CHUM", city: "Montreal", country: "Kanada" },
        { facility: "Institut du Cerveau et de la Moelle Epinière", city: "Paris", country: "Fransa" },
        { facility: "Hospital Sant Joan de Deu", city: "Barselona", country: "İspanya" }] },
  ] },
  "dt-216p2": { sponsor: "Design Therapeutics", officialLink: { label: "ClinicalTrials.gov — NCT06874010", url: "https://clinicaltrials.gov/study/NCT06874010" }, trials: [
    { nct: "NCT06874010", name: "A Multiple Ascending Dose Study of DT-216P2 in Patients With Friedreich's Ataxia", phase: "Faz 1/2", status: R, open: true, enrollment: 20, ages: "18–65 yaş", registryUpdated: "18 Mayıs 2025",
      criteria: ["GAA genişlemesi açısından homozigot, genetik olarak doğrulanmış FA", "Taramada FSA evresi 5,5 veya altı", "VKİ 16–32 kg/m², kilo ≤100 kg", "Protokolde tanımlı doğum kontrolü"],
      contact: { name: "Varlli Scott", email: "varlli.scott@mcri.edu.au", phone: "+613 8341 6228" },
      sites: [
        { facility: "Scientia Clinical Research Ltd", city: "Sydney", country: "Avustralya", status: R },
        { facility: "Doherty Clinical Trials", city: "East Melbourne", country: "Avustralya", status: R },
        { facility: "Nucleus Network", city: "Melbourne", country: "Avustralya", status: R }] },
  ], note: "Resmi kaydın son güncellemesi Mayıs 2025'tir; alım durumunun güncelliği merkezden teyit edilmelidir." },
  "sgt-212": { sponsor: "Solid Biosciences", officialLink: { label: "ClinicalTrials.gov — NCT07180355", url: "https://clinicaltrials.gov/study/NCT07180355" }, trials: [
    { nct: "NCT07180355", name: "FALCON — A Study of SGT-212 Gene Therapy in Friedreich's Ataxia", phase: "Faz 1", status: R, open: true, enrollment: 10, ages: "18–40 yaş", registryUpdated: "29 Eylül 2026",
      criteria: ["FA belirti başlangıcı 25 yaş veya öncesi", "Klinik ve genetik FA tanısı", "FARS Fonksiyonel Engellilik Evresi ≥1 ve <6", "Omaveloksolon (Skyclarys) kullanımına ilişkin protokol kurallarını kabul etmek"],
      contact: { name: "Solid Biosciences Clinical Trials", email: "clinicaltrials@solidbio.com", phone: "+1617-337-4680" },
      sites: [
        { facility: "The University of California, Los Angeles (UCLA)", city: "Los Angeles", country: "ABD", status: R },
        { facility: "The Ohio State University", city: "Columbus", country: "ABD", status: R },
        { facility: "The Children's Hospital of Philadelphia (CHOP)", city: "Philadelphia", country: "ABD", status: R }] },
  ] },
  "leriglitazone-min-102": { sponsor: "Minoryx Therapeutics", officialLink: { label: "ClinicalTrials.gov — NCT03917225", url: "https://clinicaltrials.gov/study/NCT03917225" }, trials: [
    { nct: "NCT03917225", name: "MIN-102 FA ilerleme çalışması (FRAMES)", phase: "Faz 2", status: "Tamamlandı (COMPLETED) — tarihsel çalışma", open: false, ages: "Kayıttan kontrol edin", registryUpdated: "Kayıttan kontrol edin",
      criteria: ["Tamamlanmış çalışma; katılım mümkün değildir"], sites: [] },
  ], note: "FARA bu programı FA için pasif (INACTIVE) listeliyor. Açık katılım yoktur." },
  gv101: { sponsor: "Graviton BioScience", officialLink: { label: "ClinicalTrials.gov — NCT07870590", url: "https://clinicaltrials.gov/study/NCT07870590" }, trials: [
    { nct: "NCT07870590", name: "GV101 for Friedreich's Ataxia (FA) Treatment — Faz 2a, randomize, çift kör, plasebo kontrollü, açık etiketli uzatmalı", phase: "Faz 2", status: "Henüz hasta almaya başlamadı (NOT_YET_RECRUITING)", open: false, enrollment: 48, ages: "16–40 yaş", registryUpdated: "14 Ekim 2026 kontrolü",
      criteria: ["Ayrıntılı dahil edilme/dışlama kriterleri için resmi kayda bakın"],
      sites: [{ facility: "CLINiLABS", city: "Eatontown, New Jersey", country: "ABD", status: "Henüz hasta almıyor (NOT_YET_RECRUITING)" }] },
  ], companyContact: { name: "Melanie Glickman, Senior Associate, Operations Strategy (Graviton BioScience şirket iletişimi)", email: "Melanie.Glickman@gravitoncorp.com", source: "https://gravitoncorp.com/news/fda-fa-ind" }, note: "Son kontrol: 14 Ekim 2026. FDA IND izni 7 Ağustos 2026. ClinicalTrials.gov kaydı 13 Ekim 2026’da yayımlandı; hasta alımı henüz başlamadı. Türkiye’de merkez veya Türkiye’den katılım kabulü doğrulanmadı." },
  "ppl-001": { sponsor: "Papillon Therapeutics", officialLink: { label: "Papillon Therapeutics — resmi site", url: "https://www.papillon-tx.com/" }, trials: [], note: "Preklinik aşamada; kayıtlı insan çalışması yoktur." },
  "nbib-223": { sponsor: "Neurocrine Biosciences / Voyager Therapeutics", officialLink: { label: "Voyager Therapeutics — resmi pipeline sayfası", url: "https://www.voyagertherapeutics.com/pipeline-overview/" }, trials: [], note: "Kayıtlı insan çalışması bulunamadı." },
  "diger-gen-tedavisi-adaylari": { sponsor: "Çeşitli geliştiriciler", officialLink: { label: "FARA — klinik çalışmalar listesi", url: "https://www.curefa.org/clinical-studies/" }, trials: [], note: "Bu genel bir başvuru kaydıdır; tek tek adayların çalışmaları kendi sayfalarında listelenir." },
};

