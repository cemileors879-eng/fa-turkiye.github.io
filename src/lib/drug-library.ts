// Drug & treatment library. Only verifiable, hedged statements; no doses or
// individual prescriptions. Uncertain facts are explicitly marked "doğrulanıyor".
import { pipelineCandidates, pipelineChecked } from "./research-pipeline";
import { drugLibraryDetails } from "./drug-library-details";
export type DrugCategory = "ruhsatli" | "semptomatik" | "kanitlanmamis" | "gelistirme";
export type DrugEntry = {
  slug: string;
  name: string;
  brand: string;
  category: DrugCategory;
  target: string;
  mechanism: string;
  evidence: string;
  phase: string;
  statusDate: string;
  benefits: string;
  risks: string;
  uncertain?: string;
  sources: { label: string; url: string }[];
};

export const lastChecked = "8 Ekim 2026";

export const categoryInfo: Record<DrugCategory, { label: string; short: string; tone: string; note: string }> = {
  ruhsatli: {
    label: "1 · FA'ya yönelik ruhsatlı tedavi",
    short: "Ruhsatlı",
    tone: "green",
    note: "Hastalığın kendisine yönelik ruhsat almış tedavi. Ruhsat ülkeye ve yaşa göre değişir; Türkiye durumu ayrıca doğrulanmalıdır.",
  },
  semptomatik: {
    label: "2 · Belirti ve komplikasyon tedavileri (destekleyici)",
    short: "Destekleyici",
    tone: "blue",
    note: "Bu ilaçlar FA'yı tedavi etmez; kalp, şeker, kas sertliği, ağrı veya ruh sağlığı gibi sorunlar için hekim tarafından kişiye göre seçilir.",
  },
  kanitlanmamis: {
    label: "3 · Araştırılmış, etkisi kanıtlanmamış",
    short: "Kanıtlanmamış",
    tone: "gray",
    note: "Çalışılmış ancak kontrollü çalışmalarda FA'da tutarlı nörolojik yarar göstermemiş; standart olarak önerilmez.",
  },
  gelistirme: {
    label: "4 · Geliştirilmekte olan adaylar (deneysel)",
    short: "Deneysel",
    tone: "yellow",
    note: "Henüz ruhsatlı değil. Yalnızca klinik çalışmalar kapsamında kullanılır; erken sonuçlar etkinlik kanıtı değildir.",
  },
};

const ct = (term: string) => ({ label: `ClinicalTrials.gov — ${term} araması`, url: `https://clinicaltrials.gov/search?cond=Friedreich%20Ataxia&term=${encodeURIComponent(term)}` });
const pm = (term: string) => ({ label: `PubMed — ${term} (hakemli yayın araması)`, url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(term + " Friedreich ataxia")}` });
const guide = { label: "FA klinik bakım kılavuzu (Corben ve ark., 2022) — PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Clinical+management+guidelines+for+Friedreich+ataxia+best+practice+in+rare+diseases" };
const fara = { label: "FARA — Friedreich's Ataxia Research Alliance", url: "https://www.curefa.org/" };

const symptomatic = (slug: string, name: string, target: string, mechanism: string, risks: string, term: string): DrugEntry => ({
  slug, name, brand: "Birçok marka / jenerik", category: "semptomatik", target, mechanism,
  evidence: "Genel tıp kılavuzlarına ve FA klinik bakım kılavuzunun uzman önerilerine dayanır; FA'ya özgü randomize çalışma verisi sınırlıdır.",
  phase: "Diğer endikasyonlarda ruhsatlı; FA'da destekleyici kullanım",
  statusDate: "Kılavuz: 2022 · son kontrol " + lastChecked,
  benefits: "İlgili belirti veya komplikasyonun kontrolüne yardımcı olabilir. Ataksinin ilerleyişini değiştirdiği gösterilmemiştir.",
  risks, sources: [guide, pm(term), fara],
});

export const drugs: DrugEntry[] = [
  {
    slug: "omaveloksolon-skyclarys",
    name: "Omaveloksolon",
    brand: "Skyclarys (Biogen; ilk geliştirici Reata)",
    category: "ruhsatli",
    target: "FA'nın nörolojik bulguları (ataksi ve fonksiyon kaybı)",
    mechanism: "Nrf2 yolunu etkinleştirerek hücrenin antioksidan ve mitokondriyal savunma yanıtını artırması amaçlanır. Frataxin eksikliğini doğrudan düzeltmez.",
    evidence: "Randomize, plasebo kontrollü MOXIe çalışması (Faz 2, 2. bölüm): 48. haftada mFARS'ta plaseboya göre anlamlı fark bildirildi (Lynch ve ark., Ann Neurol 2021). Uzun dönem açık etiketli verileri destekleyicidir ancak kontrolsüzdür.",
    phase: "Ruhsatlı — ABD (FDA, Şubat 2023) ve AB (Avrupa Komisyonu, 2024); 16 yaş ve üzeri",
    statusDate: "FDA: 28 Şubat 2023 · AB: 2024 · son kontrol " + lastChecked,
    benefits: "Kontrollü çalışmada nörolojik kötüleşmede plaseboya göre yavaşlama. Etki ılımlıdır; kür değildir ve herkes yanıt vermeyebilir.",
    risks: "Karaciğer enzimlerinde (ALT/AST) yükselme, BNP yükselmesi, kolesterol (LDL) değişiklikleri, kilo kaybı ve önemli ilaç etkileşimleri (CYP3A4) bildirilmiştir. Ruhsat bilgisinde düzenli karaciğer, BNP ve lipid izlemi önerilir; kalp yetmezliği olanlarda dikkat gerekir.",
    uncertain: "Türkiye'de TİTCK ruhsatı, geri ödeme ve isimli hasta/özel ithalat yoluyla erişim durumu bu portalda doğrulanmadı. 16 yaş altı için ruhsat yoktur; pediatrik çalışmalar sürüyor olabilir. Güncel durumu hekiminize ve TİTCK'ye danışın.",
    sources: [
      { label: "EMA — Skyclarys Avrupa Kamu Değerlendirme Raporu (EPAR)", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/skyclarys" },
      { label: "FDA — Drugs@FDA, Skyclarys ruhsat ve prospektüs", url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=BasicSearch.process&searchterm=skyclarys" },
      { label: "ClinicalTrials.gov — MOXIe, NCT02255435", url: "https://clinicaltrials.gov/study/NCT02255435" },
      pm("omaveloxolone MOXIe"),
      { label: "TİTCK — Türkiye İlaç ve Tıbbi Cihaz Kurumu", url: "https://www.titck.gov.tr/" },
    ],
  },
  symptomatic("kardiyomiyopati-kalp-yetmezligi", "Kalp yetmezliği / kardiyomiyopati ilaçları", "Kalp kası (hipertrofik kardiyomiyopati, kalp yetmezliği)",
    "Beta blokerler, ACE inhibitörleri/ARB'ler, diüretikler ve diğer kalp yetmezliği ilaçları kalbin yükünü azaltmak ve sıvı dengesini sağlamak için kardiyolog tarafından seçilebilir.",
    "Düşük tansiyon, yavaş nabız, böbrek fonksiyonu ve potasyum değişiklikleri görülebilir. Düzenli EKG, ekokardiyografi ve kan testleriyle kardiyoloji izlemi gerekir.", "cardiomyopathy treatment"),
  symptomatic("aritmi-tedavisi", "Aritmi tedavileri ve antikoagülanlar", "Kalp ritmi (ör. atriyal fibrilasyon)",
    "Ritim veya hız kontrolü ilaçları, inme riskine göre kan sulandırıcılar; gerekirse kateter ablasyonu veya implante cihazlar (ICD/pacemaker) kardiyolog tarafından değerlendirilir.",
    "Kanama riski, ilaç etkileşimleri ve bazı antiaritmiklerde ritim bozukluğunu artırma riski vardır. Ritim takibi (Holter vb.) ve kanama izlemi gerekir.", "arrhythmia atrial fibrillation"),
  symptomatic("diyabet-tedavisi", "Diyabet tedavileri", "Kan şekeri (FA ile ilişkili diyabet)",
    "Beslenme düzenlemesi, ağızdan alınan şeker düşürücüler veya insülin; FA'da insülin eksikliği ve direnci birlikte görülebildiğinden seçim endokrinolog tarafından yapılır.",
    "Hipoglisemi (şeker düşmesi), kilo değişiklikleri ve ilaca özgü yan etkiler. HbA1c ve şeker ölçümleriyle düzenli izlem gerekir.", "diabetes"),
  symptomatic("spastisite-tedavisi", "Spastisite tedavileri", "Kaslar (sertlik, kramp, spazm)",
    "Fizyoterapi ve germe temel yaklaşımdır. Hekim baklofen, tizanidin gibi kas gevşeticileri veya lokal botulinum toksini enjeksiyonunu değerlendirebilir.",
    "Uyku hali, halsizlik ve kas güçsüzlüğü; bu durum FA'da dengeyi ve yürümeyi kötüleştirebilir. Baklofenin aniden kesilmesi tehlikelidir.", "spasticity"),
  symptomatic("agri-tedavisi", "Ağrı tedavileri", "Nöropatik ağrı, kas-iskelet ağrısı, skolyoz ağrısı",
    "Ağrının türüne göre fizyoterapi, nöropatik ağrı ilaçları veya diğer analjezikler hekim tarafından planlanır.",
    "Uyku hali, baş dönmesi, düşme riski ve bağımlılık potansiyeli olan ilaçlar bulunur. Böbrek, karaciğer ve mide etkileri izlenmelidir.", "pain management"),
  symptomatic("depresyon-ruh-sagligi", "Depresyon ve anksiyete tedavileri", "Ruh sağlığı (depresyon, kaygı)",
    "Psikoterapi ve psikososyal destek temel yaklaşımlardır; gerekirse psikiyatrist antidepresan tedavi önerebilir.",
    "Bulantı, uyku değişiklikleri, ilaç etkileşimleri; gençlerde başlangıç döneminde dikkatli izlem gerekir. Bazı ilaçlar kalp ritmini etkileyebilir.", "depression"),
  symptomatic("mesane-ve-diger", "Mesane, yorgunluk ve diğer destekleyici yaklaşımlar", "Mesane işlevi, yorgunluk, yutma, skolyoz",
    "Üroloji, fizik tedavi, ergoterapi, konuşma-yutma terapisi ve ortopedik yaklaşımlar belirtilere göre multidisipliner ekipçe planlanır.",
    "Mesane ilaçlarının ağız kuruluğu, kabızlık gibi yan etkileri olabilir; cerrahi kararlar ayrıca risk değerlendirmesi gerektirir.", "multidisciplinary care"),
  {
    slug: "idebenon",
    name: "İdebenon",
    brand: "Ülkeye göre değişir (FA için ruhsatlı değil)",
    category: "kanitlanmamis",
    target: "Kalp ve nörolojik bulgular (araştırıldı)",
    mechanism: "Koenzim Q10 benzeri kısa zincirli bir antioksidan; mitokondriyal elektron taşınmasını desteklemesi amaçlanmıştır.",
    evidence: "Erken küçük çalışmalarda kalp duvar kalınlığında azalma bildirildi; daha büyük randomize plasebo kontrollü çalışmalar (ör. NICOSIA, MICONOS, IONIA) birincil nörolojik sonlanım noktalarında anlamlı yarar göstermedi.",
    phase: "FA için ruhsat yok; kontrollü çalışmalar tamamlandı",
    statusDate: "Çalışmalar 2000'ler–2010'lar · son kontrol " + lastChecked,
    benefits: "Tutarlı nörolojik yarar gösterilmedi. Kalp üzerine etkisi tartışmalıdır.",
    risks: "Genellikle iyi tolere edildiği bildirilmiştir; mide-bağırsak yakınmaları görülebilir. Kanıtlanmış tedavilerin yerine kullanılmamalıdır.",
    uncertain: "Bazı ülkelerdeki önceki koşullu erişim/ruhsat geçmişi bu portalda ayrıntılı doğrulanmadı.",
    sources: [pm("idebenone randomized"), ct("idebenone"), guide],
  },
  {
    slug: "koenzim-q10-e-vitamini",
    name: "Koenzim Q10 ve E vitamini",
    brand: "Takviye ürünleri (FA için ruhsatlı ilaç değil)",
    category: "kanitlanmamis",
    target: "Mitokondriyal işlev, oksidatif stres (araştırıldı)",
    mechanism: "Antioksidan etki ve mitokondriyal enerji üretimini destekleme hipotezi.",
    evidence: "Küçük randomize çalışmada (Cooper ve ark., 2008) yüksek ve düşük doz kombinasyon arasında birincil sonuçta anlamlı fark gösterilmedi; kontrollü kanıt sınırlıdır.",
    phase: "FA için ruhsat yok",
    statusDate: "Çalışma 2008 · son kontrol " + lastChecked,
    benefits: "FA'da kanıtlanmış nörolojik yarar yok.",
    risks: "Takviyeler de ilaç etkileşimine yol açabilir (ör. yüksek doz E vitamini ve kan sulandırıcılar). Hekiminize kullandığınız tüm takviyeleri bildirin.",
    sources: [pm("coenzyme Q10 vitamin E"), guide],
  },
  {
    slug: "diger-antioksidan-takviyeler",
    name: "Diğer denenmiş ajanlar (ör. deferipron, eritropoetin, interferon gama, L-karnitin)",
    brand: "FA için ruhsatlı değil",
    category: "kanitlanmamis",
    target: "Demir birikimi, frataxin düzeyi, oksidatif stres (araştırıldı)",
    mechanism: "Ajan başına farklıdır: demir bağlama, frataxin artırma veya antioksidan etki hipotezleri.",
    evidence: "Küçük ve/veya kontrollü çalışmalarda tutarlı klinik yarar gösterilmedi; bazılarında (ör. yüksek doz deferipron) kötüleşme sinyali bildirildi.",
    phase: "FA için ruhsat yok",
    statusDate: "Son kontrol " + lastChecked,
    benefits: "Kanıtlanmış yarar yok.",
    risks: "Ajan başına ciddi riskler olabilir (ör. deferipronda kan hücresi azalması). Çalışma dışı kullanım önerilmez.",
    sources: [pm("deferiprone"), pm("interferon gamma"), guide],
  },
  {
    slug: "lx2006",
    name: "LX2006",
    brand: "Marka yok (Lexeo Therapeutics)",
    category: "gelistirme",
    target: "Kalp (FA kardiyomiyopatisi) — nörolojik ölçümler de takip ediliyor",
    mechanism: "AAV taşıyıcısıyla FXN geninin hücrelere taşınması ve frataxin üretiminin artırılması amaçlanır.",
    evidence: "SUNRISE-FA (Faz 1/2) çalışmasında erken, küçük ve kontrolsüz insan verisi. Şirket, sol ventrikül kütle indeksinde (LVMI) azalma bildirdi. Kayıt amaçlı SUNRISE-FA 2 çalışması (NCT07721025) açık etiketlidir ve birincil sonlanım noktası LVMI'dir.",
    phase: "Faz 1/2 tamamlandı · kayıt amaçlı SUNRISE-FA 2 başlıyor (araştırma; ruhsatlı değil)",
    statusDate: "15 Haziran 2026 şirket duyurusu · son kontrol " + lastChecked,
    benefits: "Kalp yapısına ilişkin erken sinyaller bildirildi; kesin klinik yarar gösterilmedi.",
    risks: "Gen tedavilerinde bağışıklık yanıtı, karaciğer etkileri ve bilinmeyen uzun dönem riskler değerlendirilir.",
    uncertain: "Şirketin 2028 hızlandırılmış onay başvurusu hedefi bir plandır; onay veya takvim garantisi değildir.",
    sources: [{ label: "ClinicalTrials.gov — SUNRISE-FA 2, NCT07721025", url: "https://clinicaltrials.gov/study/NCT07721025" }, { label: "Lexeo — 15 Haziran 2026 düzenleyici güncelleme (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1907108/000119312526270275/lxeo-ex99_1.htm" }, { label: "Lexeo — 7 Ekim 2025 ara veriler (PDF)", url: "https://ir.lexeotx.com/node/8381/pdf" }],
  },
  {
    slug: "nomlabofusp-cti-1601",
    name: "Nomlabofusp (CTI-1601)",
    brand: "Marka yok (Larimar Therapeutics)",
    category: "gelistirme",
    target: "Frataxin eksikliği (sistemik)",
    mechanism: "Hücre içine girebilen bir taşıyıcı peptide bağlı insan frataxin proteini; deri altı enjeksiyonla frataxin yerine koymayı amaçlar.",
    evidence: "Açık etiketli uzatma çalışmasında 1. yılda deri frataxin düzeylerinde artış (9/9 katılımcı) bildirildi. Klinik ölçeklerdeki 'yönsel iyileşme' (n=13) eşzamanlı kontrolle değil, doğal seyir referansıyla karşılaştırıldı.",
    phase: "Açık etiketli uzatma · FDA'ya kademeli BLA başvurusu başladı (araştırma; ruhsatlı değil) · Faz 3 doğrulama çalışması planlı",
    statusDate: "29 Haziran 2026 şirket duyurusu · son kontrol " + lastChecked,
    benefits: "Biyobelirteç (frataxin düzeyi) sinyalleri; klinik yarar kanıtlanmadı.",
    risks: "Şirket duyurusuna göre 43 hastanın 10'unda anafilaksi gelişti (10'undan 9'u daha önce ilaca maruz kalmıştı). Enjeksiyon bölgesi reaksiyonları bildirildi.",
    uncertain: "BLA'nın kalan bölümleri 2026 ikinci yarısında bekleniyor; FDA kararı bilinmiyor.",
    sources: [{ label: "Larimar — 29 Haziran 2026 duyurusu", url: "https://investors.larimartx.com/news-releases/news-release-details/larimar-therapeutics-reports-positive-open-label-data-and" }, ct("nomlabofusp"), pm("CTI-1601 frataxin")],
  },
  {
    slug: "vatiquinone",
    name: "Vatiquinone (PTC743, EPI-743)",
    brand: "Marka yok (PTC Therapeutics)",
    category: "gelistirme",
    target: "Oksidatif stres / nörolojik bulgular",
    mechanism: "15-lipoksijenaz inhibitörü olarak oksidatif stres ve ferroptozu azaltması amaçlanır.",
    evidence: "Randomize plasebo kontrollü MOVE-FA çalışmasında birincil sonlanım noktası (mFARS) karşılanmadı (2023). FDA, Ağustos 2025'te etkinlik verisinin yetersizliği gerekçesiyle tam yanıt mektubu (CRL) verdi.",
    phase: "Ruhsatlı değil · yeni Faz 3 PROVE-FA (NCT07681713) henüz hasta almıyor",
    statusDate: "FDA CRL: Ağustos 2025 · PROVE-FA planlanan başlangıç: Ağustos 2026 · son kontrol " + lastChecked,
    benefits: "Birincil sonuçta kanıtlanmış yarar yok.",
    risks: "Kontrollü çalışmalarda genel tolerabilite bildirilmiştir; ayrıntılı güvenlilik değerlendirmesi düzenleyici incelemeye bağlıdır.",
    uncertain: "PROVE-FA tek kollu, açık etiketli bir çalışmadır; kayıt durumu değişebilir.",
    sources: [{ label: "ClinicalTrials.gov — PROVE-FA, NCT07681713", url: "https://clinicaltrials.gov/study/NCT07681713" }, { label: "ClinicalTrials.gov — MOVE-FA, NCT04577352", url: "https://clinicaltrials.gov/study/NCT04577352" }, { label: "AJMC — FDA vatiquinone CRL haberi (19 Ağustos 2025)", url: "https://www.ajmc.com/view/fda-issues-crl-for-vatiquinone-in-friedreich-ataxia-requests-more-efficacy-data" }],
  },
  {
    slug: "dt-216p2",
    name: "DT-216P2",
    brand: "Marka yok (Design Therapeutics)",
    category: "gelistirme",
    target: "FXN gen ifadesi (frataxin üretimi)",
    mechanism: "GeneTAC yaklaşımı: genişlemiş GAA tekrarı bölgesine bağlanarak FXN geninin okunmasını artırmayı amaçlar.",
    evidence: "Açık etiketli, plasebosuz, küçük örneklemli erken insan verisi (RESTORE-FA).",
    phase: "Faz 1/2",
    statusDate: "18 Mayıs 2026 · son kontrol " + lastChecked,
    benefits: "Biyobelirteç ve erken klinik sinyaller bildirildi; etkinlik kanıtlanmadı.",
    risks: "Önceki formülasyonda (DT-216) enjeksiyon bölgesi sorunları nedeniyle yeniden formülasyon yapılmıştı; uzun dönem güvenlilik bilinmiyor.",
    sources: [{ label: "ClinicalTrials.gov — RESTORE-FA, NCT06874010", url: "https://clinicaltrials.gov/study/NCT06874010" }, { label: "Design Therapeutics — 18 Mayıs 2026 duyurusu", url: "https://investors.designtx.com/news-releases/news-release-details/design-therapeutics-announces-four-week-iv-data-restore-fa-trial" }],
  },
  {
    slug: "sgt-212",
    name: "SGT-212",
    brand: "Marka yok (Solid Biosciences)",
    category: "gelistirme",
    target: "Beyincik (dentat çekirdek) ve kalp",
    mechanism: "AAV gen tedavisi; sistemik IV ve dentat çekirdeğe doğrudan uygulamanın birlikte araştırılması.",
    evidence: "26 Ekim şirket bildirimi: beş katılımcı dozlandı; 5 Ekim kesiminde tedaviyle ilişkili ciddi advers olay bildirilmedi. Genel güvenlilik veya etkinlik kanıtı değil; mFARS, frataxin, kalp ve nörolojik sonuç yok.",
    phase: "Faz 1b (FALCON)",
    statusDate: "AB kararı: 19 Ekim 2026 · şirket güvenlilik güncellemesi: 26 Ekim 2026 · kontrol: 29 Ekim 2026",
    benefits: "Bilinmiyor; ilk klinik verilerin 2027 Q1'de paylaşılması bekleniyor.",
    risks: "Beyin cerrahisi gerektiren uygulama ve gen tedavisine özgü riskler; kısa takip.",
    uncertain: "EU/3/26/3310: COMP görüşü 10 Eylül 2026; Avrupa Komisyonu kararı 19 Ekim 2026, olumlu ve aktif. AB sicil sponsorluğu Voisin Consulting Life Sciences; geliştirici Solid Biosciences. Yetim ilaç tayini ruhsat veya yeni klinik yarar kanıtı değildir; çalışma takip bilgisi değişmemiştir.",
    sources: [{ label: "ClinicalTrials.gov — FALCON, NCT07180355 (hasta alımı sürüyor)", url: "https://clinicaltrials.gov/study/NCT07180355" }, { label: "Solid Biosciences — 6 Ağustos 2026 güncellemesi", url: "https://investors.solidbio.com/news-releases/news-release-details/solid-biosciences-reports-second-quarter-2026-financial-results" }, { label: "EMA IRIS — Public Orphan Register, EU/3/26/3310", url: "https://iris.ema.europa.eu/odpublicregister/" }],
  },
  {
    slug: "diger-gen-tedavisi-adaylari",
    name: "Diğer ciddi adaylar (ör. AAV gen tedavileri, frataxin artırıcılar)",
    brand: "Çeşitli geliştiriciler",
    category: "gelistirme",
    target: "Frataxin eksikliği, kalp ve sinir sistemi",
    mechanism: "Gen yerine koyma, gen düzenleme, epigenetik modülasyon ve mitokondriyal hedefli yaklaşımlar.",
    evidence: "Çoğu preklinik veya erken klinik aşamadadır; güncel liste için FARA ilaç geliştirme hattı izlenmelidir.",
    phase: "Preklinik – Faz 1/2",
    statusDate: "Son kontrol " + lastChecked,
    benefits: "Henüz insanlarda kanıtlanmış yarar yok.",
    risks: "Yaklaşıma göre değişir; çoğu için uzun dönem güvenlilik bilinmiyor.",
    uncertain: "Bu kart tek tek aday listelemez; doğrulanmamış takvimler eklenmemiştir.",
    sources: [{ label: "FARA — Tedavi geliştirme hattı (pipeline)", url: "https://www.curefa.org/pipeline" }, ct("gene therapy")],
  },
];

// Add individually verified candidates without removing existing library records.
for (const candidate of pipelineCandidates) {
  if (drugs.some(drug => drug.slug === candidate.slug)) continue;
  drugs.push({
    slug: candidate.slug, name: candidate.name, brand: candidate.developer,
    category: candidate.activity === "inactive" ? "kanitlanmamis" : "gelistirme",
    target: candidate.goal, mechanism: candidate.mechanism,
    evidence: candidate.humanData, phase: `${candidate.phase} · ${candidate.status}`,
    statusDate: `Kaynak kontrolü: ${candidate.checked ?? pipelineChecked}`,
    benefits: "FA'da kesin klinik yarar veya kür iddiası içermez.",
    risks: "Araştırma yaklaşımına özgü riskler ve uzun dönem güvenlilik uzman ekipçe değerlendirilmelidir; kişisel tedavi önerisi değildir.",
    ...(candidate.note ? { uncertain: candidate.note } : {}), sources: candidate.sources,
  });
}

// All detail pages require a complete narrative; never substitute a generic summary.
for (const drug of drugs) {
  const detail = drugLibraryDetails[drug.slug];
  if (!detail) throw new Error(`Ayrıntılı kütüphane metni gerekli: ${drug.slug}`);
  drug.sources = [...new Map([...drug.sources, ...detail.sources].map(source => [source.url, source])).values()];
}

