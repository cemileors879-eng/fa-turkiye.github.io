import ati105Phase1 from "@/assets/ati105-phase1-news.jpg";
import ppl001Jci from "@/assets/ppl001-jci-news.jpg";
import geneExpression from "@/assets/dt-216p2-lab-photo.jpg";
import geneTherapy from "@/assets/lx2006-genetics-photo.jpg";
import clinicalResearch from "@/assets/sgt212-mri-photo.jpg";
import mitochondria from "@/assets/nomlabofusp-cell-lab-photo.jpg";
import drugDevelopment from "@/assets/vatiquinone-pharma-photo.jpg";
import lx2006Cardiac from "@/assets/lx2006-cardiac-photo.jpg";
import lx2006October from "@/assets/lx2006-october-news.jpg";
import nomlabofuspPhase3 from "@/assets/nomlabofusp-phase3-news.jpg";
import vatiquinonePhase3 from "@/assets/vatiquinone-phase3-news.jpg";
import nbib223Facet from "@/assets/nbib223-facet-news.jpg";
import gv101Ind from "@/assets/gv101-ind-news.jpg";
import autonomicNeuronModel from "@/assets/fa-autonomic-neuron-model.jpg";
import sgt212EuOrphan from "@/assets/sgt212-eu-orphan-news.jpg";
import { sgt212OrphanSections, sgt212OrphanSources } from "./sgt212-orphan-designation";
import { pipelineCandidates } from "./research-pipeline";
import { researchNewsDetails } from "./research-news-details";

export type ArticleCover = { src: string; alt: string; width: number; height: number };
export type Evidence = "yellow" | "blue" | "gray" | "green";
export type Article = {
  slug: string;
  treatment: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  date: string;
  year: string;
  phase: string;
  evidence: Evidence;
  evidenceText: string;
  patients: string;
  readTime: string;
  cover: ArticleCover;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  sources: { label: string; url: string }[];
  warning: string;
  participation?: {
    studyId: string; registryUrl: string; registryUpdated: string; checked: string;
    status: string; countries: string[]; contactName: string; email?: string; phone?: string;
    guidance: string;
  };
};
export const articles: [Article, Article, Article, ...Article[]] = [
  {
    slug: "dt-216p2-erken-klinik-veriler",
    treatment: "DT-216P2",
    category: "KLİNİK ARAŞTIRMA",
    title: "DT-216P2: İlk insan verilerinde frataxin artışı ve klinik iyileşme sinyali",
    shortTitle: "DT-216P2: İlk insan verilerinde erken sinyaller",
    description:
      "RESTORE-FA çalışmasının dört haftalık sonuçları ne söylüyor? Bulguları, küçük örneklemi ve kanıtın sınırlarını birlikte inceliyoruz.",
    date: "18 Mayıs 2026",
    year: "2026",
    phase: "Faz 1/2",
    evidence: "yellow",
    evidenceText: "Erken insan verisi",
    patients: "16 hasta · öne çıkan kohort: 4 kişi",
    readTime: "6 dk okuma",
    cover: {
      src: geneExpression,
      alt: "Laboratuvarda pipetle gen ifadesi araştırması canlandırması",
      width: 1536,
      height: 1024,
    },
    warning:
      "Deneysel / henüz onaylı değil. Bu sonuçlar tedavinin etkili olduğunu kanıtlamaz ve kişisel tedavi önerisi değildir.",
    sections: [
      {
        heading: "Çalışma neyi araştırıyor?",
        paragraphs: [
          "Design Therapeutics tarafından geliştirilen DT-216P2, GeneTAC yaklaşımıyla FXN geninin ifadesini ve frataxin üretimini artırmayı amaçlayan deneysel bir adaydır. RESTORE-FA (NCT06874010), güvenlilik, biyolojik etki ve erken klinik göstergeleri değerlendiren bir insan çalışmasıdır.",
          "Mayıs 2026 için bildirilen dört haftalık değerlendirmede, dört doz kohortunda toplam 16 hasta yer alıyor. Uygulama haftalık intravenöz (IV), yani damar yoluyla yapılıyor.",
        ],
      },
      {
        heading: "Dört haftalık bulgular",
        paragraphs: [
          "1 mg/kg doz alan dört kişilik kohortta başlangıca göre kan FXN mRNA düzeyinde %65, kas FXN mRNA düzeyinde %42 artış bildirildi. Son dozdan iki hafta sonra ölçülen kan frataxin protein düzeyleri %22–27 arttı. Bunlar ilacın biyolojik hedef üzerinde etkisi olabileceğine işaret eden ölçümlerdir; tek başlarına kalıcı klinik yarar anlamına gelmez.",
        ],
        bullets: [
          "Ortalama mFARS değişimi: −6,4 puan. Bu ölçekte daha düşük puan daha az nörolojik etkilenmeyi ifade eder.",
          "Upright Stability (dik duruş stabilitesi) alt ölçeği: −2,7 puan.",
          "PROMIS Fatigue değerlendirmesi: 5 puandan fazla iyileşme bildirildi. Bu ölçek hastanın bildirdiği yorgunluğu değerlendirir.",
        ],
      },
      {
        heading: "Bu sonuçları neden temkinli okumalıyız?",
        paragraphs: [
          "Çalışma açık etiketlidir: hem katılımcılar hem araştırmacılar tedavinin verildiğini bilir. Eşzamanlı plasebo grubu yoktur. Beklenti etkisi, ölçüm değişkenliği ve tekrar testine alışma gibi etkenler dışlanamaz.",
          "En dikkat çekici klinik sonuçlar yalnızca dört kişide, dört hafta sonunda elde edilmiştir. Toplam 16 katılımcı ile bu dört kişilik alt grubun sonuçları birbirine karıştırılmamalıdır. Uzun vadeli etkinlik ve güvenlilik, daha büyük ve kontrollü çalışmalarla değerlendirilmelidir.",
        ],
      },
      {
        heading: "Sırada ne var?",
        paragraphs: [
          "On iki haftalık yeni verilerin 2027’nin ilk çeyreğinde paylaşılması bekleniyor. Bu takvim bilgisi için güncel resmi duyuru doğrulaması bekleniyor; 18 Mayıs duyurusu yalnızca 2026 son çeyreğinde geliştirme planı güncellemesine işaret ediyor. Açıklama tarihi değişebilir. Henüz elde edilmemiş sonuçlar hakkında çıkarım yapılamaz.",
          "Kanıt düzeyi: erken insan verisi; araştırmayı sürdürmek için anlamlı. Biyolojik ve klinik sinyaller araştırmayı sürdürmek için anlamlıdır; onay, kür veya kesin yarar anlamına gelmez.",
        ],
      },
    ],
    sources: [
      {
        label: "ClinicalTrials.gov — RESTORE-FA, NCT06874010",
        url: "https://clinicaltrials.gov/study/NCT06874010",
      },
      {
        label: "Design Therapeutics — 18 Mayıs 2026, dört haftalık RESTORE-FA verileri",
        url: "https://investors.designtx.com/news-releases/news-release-details/design-therapeutics-announces-four-week-iv-data-restore-fa-trial",
      },
      { label: "FARA — araştırma bilgileri", url: "https://www.curefa.org/" },
    ],
  },
  {
    slug: "lx2006-gen-tedavisi",
    treatment: "LX2006",
    category: "GEN TEDAVİSİ",
    title: "LX2006: Gen tedavisinde nörolojik stabilizasyon sinyalleri",
    shortTitle: "LX2006: Gen tedavisinde yeni takip verileri",
    description:
      "MDS 2026 materyallerindeki erken bulgular, üst ekstremite koordinasyonu ve uzun dönem takibin önemi.",
    date: "MDS 2026",
    year: "2026",
    phase: "Faz 1/2",
    evidence: "yellow",
    evidenceText: "Erken insan verisi",
    patients: "17 yetişkin · mFARS analizinde 16 kişi",
    readTime: "5 dk okuma",
    cover: {
      src: geneTherapy,
      alt: "Genetik araştırma laboratuvarında örnek inceleyen araştırmacı canlandırması",
      width: 1536,
      height: 1024,
    },
    warning:
      "Deneysel / henüz onaylı değil. LX2006 bir kür olarak sunulamaz; küçük ve kontrolsüz veriler kesin etkinlik kanıtı değildir.",
    sections: [
      {
        heading: "LX2006 nedir?",
        paragraphs: [
          "Lexeo Therapeutics tarafından geliştirilen LX2006, AAV (adeno-ilişkili virüs) taşıyıcısı kullanan bir gen tedavisi adayıdır. Amaç, frataxin üretimini artırmaktır. Gen tedavisi yaklaşımı, tek başına tedavinin başarılı olacağı veya hastalığın tamamen ortadan kalkacağı anlamına gelmez.",
        ],
      },
      {
        heading: "MDS 2026 materyallerinde ne bildirildi?",
        paragraphs: [
          "MDS 2026 sunum duyurusu daha önce raporlanan nörolojik veriler ve yeni mFARS alt ölçek analizlerine işaret ediyor. 17 tedavi edilen yetişkin ve altı aydan uzun takipli 16 kişi sayıları, 7 Ekim 2025 tarihli resmi ara veri duyurusunda da yer alıyor; bunlar 2026’da eklenen yeni hasta sayıları olarak okunmamalıdır. Altı aydan uzun takipli 16 kişinin ayrıntılı mFARS analizinde nörolojik stabilizasyon veya iyileşme sinyalleri bildiriliyor. Sunum için üst ekstremite koordinasyonu değerlendirmeleri öne çıkarılıyor; alt ölçeğe ait ayrıntılı sayısal sonuçlar bu özette doğrulanmış yeni veri olarak sunulmuyor.",
          "Tedavi edilen toplam kişi sayısı ile belirli bir takip süresini tamamlamış analiz grubunun büyüklüğü farklıdır. Bu nedenle 17 ve 16 sayıları aynı sonuç kümesini temsil etmez.",
        ],
      },
      {
        heading: "Sınırlılıklar ve kanıt düzeyi",
        paragraphs: [
          "MDS duyurusunda UNIFAI doğal seyir verilerinden özellikleri eşleştirilmiş bir karşılaştırma grubu kullanıldığı belirtiliyor. Bu, randomize ve eşzamanlı kontrol grubuyla aynı değildir. Randomize, eşzamanlı bir kontrol grubu bulunmuyor. Katılımcı sayısı küçük; doğal hastalık seyri ile doğrudan ve güvenilir bir karşılaştırma sınırlıdır. Alt gruplarda görülen değişimler daha büyük hasta topluluğuna genellenemez.",
          "Nörolojik stabilizasyon sinyali önemlidir ancak kesin etkinlik veya uzun vadeli güvenlilik göstermez. Kanıt düzeyi erken insan verisidir. Daha uzun takip ve kontrollü araştırmalar gerekir.",
        ],
      },
      {
        heading: "Hastalar ve aileler için anlamı",
        paragraphs: [
          "Bu sonuçlar araştırma gelişimi olarak izlenmelidir. LX2006’nın kür olduğu, herkes için yararlı olduğu veya rutin kullanıma hazır olduğu çıkarımı yapılamaz. Çalışmaya katılım ve kişisel riskler uzman hekim ve araştırma ekibiyle değerlendirilmelidir.",
        ],
      },
    ],
    sources: [
      {
        label: "Lexeo — MDS 2026 sunum duyurusu, 1 Ekim 2026",
        url: "https://www.globenewswire.com/news-release/2026/10/01/3372931/0/en/lexeo-therapeutics-announces-oral-presentation-of-lx2006-at-the-international-congress-of-parkinson-s-disease-and-movement-disorders-2026-mds.html",
      },
      {
        label:
          "Lexeo — 17 tedavi edilen / 16 analiz edilen katılımcı, 7 Ekim 2025 ara verileri (PDF)",
        url: "https://ir.lexeotx.com/node/8381/pdf",
      },
      {
        label: "ClinicalTrials.gov — LX2006 çalışma araması",
        url: "https://clinicaltrials.gov/search?term=LX2006",
      },
      {
        label: "International Parkinson and Movement Disorder Society — kongre kaynakları",
        url: "https://www.movementdisorders.org/",
      },
    ],
  },
  {
    slug: "sgt-212-falcon-calismasi",
    treatment: "SGT-212",
    category: "KLİNİK ARAŞTIRMA",
    title: "SGT-212: FALCON çalışmasında ilk iki hastanın dozlanması bildirildi",
    shortTitle: "SGT-212: FALCON çalışmasında ilk hastalar",
    description:
      "Faz 1b çalışmasından güvenlilik güncellemesi. İlk klinik sonuçlar 2027’nin ilk çeyreğinde bekleniyor.",
    date: "6 Ağustos 2026",
    year: "2026",
    phase: "Faz 1b",
    evidence: "blue",
    evidenceText: "Klinik çalışma sürüyor",
    patients: "2 hasta dozlandı",
    readTime: "4 dk okuma",
    cover: {
      src: clinicalResearch,
      alt: "MR cihazı ve klinik araştırma hazırlığı canlandırması",
      width: 1536,
      height: 1024,
    },
    warning:
      "Deneysel / henüz onaylı değil. Henüz klinik etkinlik sonucu yoktur; ciddi olay bildirilmemesi tedavinin güvenli olduğunu kanıtlamaz.",
    sections: [
      {
        heading: "FALCON çalışmasının yaklaşımı",
        paragraphs: [
          "Solid Biosciences tarafından geliştirilen SGT-212, Faz 1b FALCON çalışmasında değerlendiriliyor. Araştırılan uygulama yaklaşımı sistemik damar içi (IV) uygulama ile beyincikteki dentat çekirdeğe uygulamayı birlikte içeriyor. Bu, araştırma merkezlerinde yürütülen deneysel bir yaklaşımdır.",
        ],
      },
      {
        heading: "4 Ağustos 2026 itibarıyla bilinenler",
        paragraphs: [
          "İlk hastanın Ocak 2026’da tedavi edildiği bildirildi. 6 Ağustos 2026 tarihli şirket duyurusunun 4 Ağustos itibarıyla verdiği bilgiye göre iki hasta dozlandı ve o tarihte tedaviyle ilişkili ciddi advers olay bildirilmedi.",
          "Bu ifade yalnızca duyurunun kapsadığı kısa takip ve küçük örneklem için geçerlidir. Tüm yan etkilerin yokluğu veya uzun vadeli güvenlilik anlamına gelmez.",
        ],
      },
      {
        heading: "Henüz neyi bilmiyoruz?",
        paragraphs: [
          "İlk klinik verilerin 2027’nin ilk çeyreğinde paylaşılması bekleniyor. Bu tarihe kadar etkinlik, nörolojik iyileşme veya kalıcı yarar konusunda yeni sonuç varmış gibi yorum yapılamaz.",
          "İki kişilik erken aşama bilgi, nadir yan etkileri değerlendirmek veya etkinliği belirlemek için yeterli değildir. Kanıt düzeyi: klinik çalışma sürüyor; henüz klinik etkinlik kanıtı bulunmuyor.",
        ],
      },
    ],
    sources: [
      {
        label: "Solid Biosciences — 6 Ağustos 2026 resmi güncellemesi",
        url: "https://investors.solidbio.com/news-releases/news-release-details/solid-biosciences-reports-second-quarter-2026-financial-results",
      },
      {
        label: "ClinicalTrials.gov — SGT-212 çalışma araması",
        url: "https://clinicaltrials.gov/search?term=SGT-212",
      },
      { label: "FARA — Friedreich ataksisi araştırmaları", url: "https://www.curefa.org/" },
    ],
  },
  {
    slug: "lx2006-sunrise-fa-2-kayit-amacli-calisma",
    treatment: "LX2006",
    category: "GEN TEDAVİSİ",
    title: "LX2006: SUNRISE-FA 2 kayıt amaçlı çalışmasının tasarımı açıklandı",
    shortTitle: "LX2006: SUNRISE-FA 2 çalışması başlıyor",
    description:
      "Lexeo, FA kardiyomiyopatisine odaklanan kayıt amaçlı çalışmanın tasarımını paylaştı. Çalışmanın neyi ölçeceğini ve neyi kanıtlamayacağını açıklıyoruz.",
    date: "15 Haziran 2026",
    year: "2026",
    phase: "Kayıt amaçlı çalışma",
    evidence: "blue",
    evidenceText: "Klinik çalışma sürüyor",
    patients: "Katılımcı sayısı kayıtta tahminidir · 16 yaş ve üzeri, ardından 6–16 yaş",
    readTime: "5 dk okuma",
    cover: {
      src: lx2006Cardiac,
      alt: "Kalp ultrason görüntüsünü inceleyen araştırmacı canlandırması",
      width: 1536,
      height: 1024,
    },
    warning:
      "Deneysel / henüz onaylı değil. Bu bir çalışma tasarımı haberidir; LX2006'nın etkili veya güvenli olduğunu göstermez.",
    sections: [
      {
        heading: "Ne açıklandı?",
        paragraphs: [
          "Lexeo Therapeutics, 15 Haziran 2026'da LX2006 için SUNRISE-FA 2 adlı kayıt amaçlı (pivotal) çalışmanın protokolünü ve istatistiksel analiz planını tamamladığını duyurdu. Çalışma ClinicalTrials.gov'da NCT07721025 numarasıyla kayıtlıdır. Şirket, ilk katılımcının Haziran 2026 sonuna kadar alınmasını beklediğini bildirdi.",
          "Şirketin amacı, sonuçlar uygun olursa ABD'de hızlandırılmış onay yolu üzerinden 2028'de başvuru yapmaktır. Bu bir şirket planıdır; onay veya takvim garantisi değildir.",
        ],
      },
      {
        heading: "Çalışma neyi ölçecek?",
        bullets: [
          "Birincil sonlanım noktası: sol ventrikül kütle indeksi (LVMI), yani kalp duvarı kalınlaşmasının bir ölçüsü.",
          "Katılım için başlangıçta LVMI'nin anormal olması gerekiyor; çalışma FA kardiyomiyopatisine odaklanıyor.",
          "İlk etkinlik analizi 6. ayda planlanıyor.",
          "Önce 16 yaş ve üzeri, ardından 6–16 yaş arası katılımcılar alınacak.",
        ],
      },
      {
        heading: "Temkinli okunması gerekenler",
        paragraphs: [
          "Çalışma açık etiketlidir; plasebo grubu yoktur. LVMI bir ara (vekil) ölçümdür: kalp kalınlığındaki azalmanın yaşam süresi, kalp yetmezliği veya günlük yaşamda iyileşme sağladığı bu çalışmayla doğrudan kanıtlanmış olmayacaktır.",
          "Önceki SUNRISE-FA (Faz 1/2) çalışmasındaki LVMI azalmaları küçük, kontrolsüz bir gruptan gelmektedir. Nörolojik bulgular bu çalışmanın birincil hedefi değildir.",
          "Kanıt düzeyi: klinik çalışma sürüyor. LX2006 ruhsatlı bir tedavi değildir ve yalnızca çalışma kapsamında uygulanır.",
        ],
      },
    ],
    sources: [
      {
        label: "ClinicalTrials.gov — SUNRISE-FA 2, NCT07721025",
        url: "https://clinicaltrials.gov/study/NCT07721025",
      },
      {
        label: "Lexeo — 15 Haziran 2026 düzenleyici güncelleme ve çalışma tasarımı (SEC)",
        url: "https://www.sec.gov/Archives/edgar/data/1907108/000119312526270275/lxeo-ex99_1.htm",
      },
      {
        label: "Lexeo — SUNRISE-FA 2 katılımcı bilgilendirme sayfası",
        url: "https://trials.lexeotx.com/clinical-trials/sunrise-fa2/",
      },
    ],
  },
  ...([
    { name: "Nomlabofusp", cover: { src: mitochondria, alt: "Mikroskopla hücresel biyoloji araştırması canlandırması", width: 1536, height: 1024 } },
    { name: "Vatiquinone", cover: { src: drugDevelopment, alt: "İlaç geliştirme laboratuvarında analiz örnekleri canlandırması", width: 1536, height: 1024 } },
  ] as const).map(({ name, cover }): Article => ({
    slug: name.toLowerCase() + "-durum",
    treatment: name,
    category: "TEDAVİ TAKİBİ",
    title: name + ": Araştırma durumu güncelleniyor",
    shortTitle: name + ": Durum güncelleniyor",
    description:
      "Güncel aşama ve sonuç bilgileri, resmi kaynakların doğrulanmasının ardından paylaşılacak.",
    date: "8 Ekim 2026 · editoryal not",
    year: "2026",
    phase: "Doğrulanıyor",
    evidence: "gray",
    evidenceText: "Kanıt değerlendirmesi bekleniyor",
    patients: "Güncel sayı doğrulanıyor",
    readTime: "2 dk okuma",
    cover,
    warning:
      "Bu sayfa bir etkinlik veya onay iddiası içermez. Güncel düzenleyici durum doğrulanmadan tedavi kararı verilmemelidir.",
    sections: [
      {
        heading: "Durum güncelleniyor",
        paragraphs: [
          name +
            " için güncel klinik aşama, hasta sayısı, araştırma sonuçları ve düzenleyici durum kaynak doğrulaması tamamlanmadan ayrıntılandırılmıyor. Bu sayfadaki gri gösterim, bu adayın preklinik olduğunu değil, portalın güncel kanıt değerlendirmesinin henüz tamamlanmadığını belirtir.",
        ],
      },
      {
        heading: "Nasıl güncellenecek?",
        paragraphs: [
          "Çalışma kayıtları, geliştiricinin resmi duyuruları, hakemli yayınlar ve düzenleyici kurumların açıklamaları karşılaştırılacak. Sonuçlar bildirildiğinde örneklem, kontrol grubu, takip süresi ve sınırlılıklar birlikte sunulacak.",
        ],
      },
    ],
    sources: [
      {
        label: "ClinicalTrials.gov — " + name + " çalışma araması",
        url: "https://clinicaltrials.gov/search?term=" + name,
      },
      { label: "FARA — araştırma ve tedavi geliştirme kaynakları", url: "https://www.curefa.org/" },
    ],
  })),
  {
    slug: "lx2006-lexeo-mds-2026-guncellemesi", treatment: "LX2006", category: "GEN TEDAVİSİ",
    title: "LX2006: Lexeo’nun MDS 2026 duyurusu ve SUNRISE-FA 2’nin güncel durumu",
    shortTitle: "LX2006: MDS 2026’dan nörolojik değerlendirme",
    description: "Lexeo’nun 1 Ekim duyurusu, erken nörolojik değerlendirmeyi ve yeni mFARS alt ölçek analizlerini konu alıyor. SUNRISE-FA 2 resmi kayıtta hasta alıyor; bulgular henüz kesin yarar kanıtı değil.",
    date: "9 Ekim 2026", year: "2026", phase: "Faz 2", evidence: "yellow", evidenceText: "Erken insan verisi",
    patients: "SUNRISE-FA 2: 26 kişi hedefleniyor; kongre duyurusu analiz sayısını belirtmiyor", readTime: "4 dk okuma",
    cover: { src: lx2006October, alt: "Klinik muayene odasında ekokardiyografi cihazı ve muayene yatağı", width: 1536, height: 1024 },
    warning: "Deneysel / henüz onaylı değil. Kongre ve şirket duyuruları kesin etkinlik, güvenlilik veya kür kanıtı değildir.",
    sections: [
      { heading: "Lexeo ne duyurdu?", paragraphs: ["Lexeo Therapeutics, 1 Ekim 2026’da LX2006 verilerinin 4–8 Ekim’de Seul’de düzenlenen MDS kongresinde sözlü sunuma kabul edildiğini açıkladı. Duyuruda sunum tarihi 7 Ekim olarak veriliyor. Bu haber, doğrulanmış şirket duyurusunu özetler; sunum sonrası tam sonuçların bağımsız doğrulandığı anlamına gelmez.", "Duyuru, daha önce bildirilen mFARS nörolojik ölçeğinde erken stabilizasyon veya iyileşme gözlemlerini ve yeni alt ölçek analizlerini konu alıyor. Karşılaştırma UNIFAI doğal seyir çalışmasından eşleştirilmiş bir grupla yapılmış; aynı çalışmada randomize edilmiş eşzamanlı kontrol değildir."] },
      { heading: "Aynı aday, farklı çalışma kayıtları", paragraphs: ["LX2006, frataxin üretimini artırmayı hedefleyen AAV temelli deneysel gen tedavisidir. SUNRISE-FA (NCT05445323) uzun dönem takipte; yeni katılımcı almıyor. SUNRISE-FA 2 (NCT07721025) aynı adayın Faz 2 kayıt amaçlı çalışmasıdır ve resmi kayıtta hasta alıyor.", "SUNRISE-FA 2 için tahmini katılımcı sayısı 26, genel yaş sınırı 6 yaş ve üzeridir. Çalışma FA kardiyomiyopatisini değerlendiriyor; bu yaş sınırı tek başına uygunluk sağlamaz. Kayıt, randomize kontrollü tasarım ve değerlendirmecilerin körlenmesini belirtir. Birincil ölçüm 26. haftadaki kalp MR’ında sol ventrikül kütle indeksi değişimidir."] },
      { heading: "Bulguların sınırı", paragraphs: ["Kongre duyurusunda değerlendirilen katılımcı sayısı ve tüm sayısal alt ölçek sonuçları verilmediği için bu haberde bunlar varsayılmıyor. Erken çalışmalar, dış kontrol karşılaştırmaları ve alt grup analizleri kalıcı klinik yararı tek başına kanıtlamaz. Kalp ölçümlerindeki değişim de günlük yaşam, yaşam süresi veya nörolojik iyileşmeyle eşdeğer değildir.", "Araştırmanın sürmesi somut bir gelişmedir; ruhsat veya tedavinin bulunacağı tarih hakkında garanti vermez. Haber kontrolü: 9 Ekim 2026; şirket duyurusu: 1 Ekim 2026; güncel kayıt yayımı: 2 Eylül 2026."] },
    ],
    sources: [
      { label: "Lexeo resmi şirket duyurusu — 1 Ekim 2026 (GlobeNewswire)", url: "https://www.globenewswire.com/news-release/2026/10/01/3372931/0/en/lexeo-therapeutics-announces-oral-presentation-of-lx2006-at-the-international-congress-of-parkinson-s-disease-and-movement-disorders-2026-mds.html" },
      { label: "ClinicalTrials.gov — SUNRISE-FA 2 (Faz 2), NCT07721025", url: "https://clinicaltrials.gov/study/NCT07721025" },
      { label: "ClinicalTrials.gov — SUNRISE-FA (Faz 1/2), NCT05445323", url: "https://clinicaltrials.gov/study/NCT05445323" },
    ],
    participation: {
      studyId: "NCT07721025", registryUrl: "https://clinicaltrials.gov/study/NCT07721025", registryUpdated: "2 Eylül 2026", checked: "9 Ekim 2026",
      status: "SUNRISE-FA 2 hasta alıyor; SUNRISE-FA yeni hasta almıyor", countries: ["ABD — Tampa, Florida"], contactName: "Lexeo Clinical Trials",
      email: "clinicaltrials@lexeotx.com", phone: "212-547-9879",
      guidance: "Türkiye merkezi yok. Resmi kayıt Türkiye’den veya yurtdışından gelen başvuruların kabulünü açıkça doğrulamıyor. Önce sponsora kısa bir İngilizce e-posta ile Türkiye’de ikamet edenlerin değerlendirilebilip değerlendirilemeyeceğini sorun. Olumlu yanıt varsa hekiminizle genetik tanı ve kalp değerlendirmesi özetini hazırlayın; belgeleri yalnızca ekibin güvenli kanalıyla iletin. Seyahat, takip vizitleri ve masrafları netleştirmeden plan yapmayın.",
    },
  },
  {
    slug: "nomlabofusp-forward-fa-faz-3-guncel-durum", treatment: "Nomlabofusp", category: "KLİNİK ARAŞTIRMA",
    title: "Nomlabofusp: FORWARD-FA Faz 3 çalışması resmi kayıtta hasta alıyor",
    shortTitle: "Nomlabofusp: FORWARD-FA Faz 3’ün güncel durumu",
    description: "Larimar’ın frataxin protein replasmanı adayı için Faz 3 kayıt durumu hasta alıyor olarak görünüyor. 150 kişilik hedef bir plandır; sonuç veya ruhsat anlamına gelmez.",
    date: "9 Ekim 2026", year: "2026", phase: "Faz 3", evidence: "blue", evidenceText: "Klinik çalışma sürüyor",
    patients: "Faz 3: 150 kişi hedefleniyor; gerçekleşen sayı açıklanmıyor", readTime: "4 dk okuma",
    cover: { src: nomlabofuspPhase3, alt: "Protein araştırma laboratuvarında kromatografi cihazı ve örnek şişeleri", width: 1536, height: 1024 },
    warning: "Deneysel / henüz onaylı değil. Faz 3 veya ruhsat başvurusu ilacın onaylandığı anlamına gelmez; kendi başınıza kullanmayın.",
    sections: [
      { heading: "Faz 3 kaydı ne söylüyor?", paragraphs: ["Nomlabofusp (eski adı CTI-1601), Larimar Therapeutics’in frataxin protein replasmanı adayıdır; Larimar bir şirket adıdır. FORWARD-FA (NCT07778836), deri altından uygulanan adayın etkinlik ve güvenliliğini değerlendiren randomize, plasebo kontrollü Faz 3 çalışmasıdır.", "9 Ekim 2026 kontrolünde resmi durum ‘hasta alıyor’. Kayıt 12–40 yaş aralığını ve tahmini 150 katılımcıyı gösteriyor. Son kayıt yayımı 9 Ekim 2026. Başlangıç tarihi kayıtta hâlâ tahmini olarak işaretlidir; bu nedenle ilk dozun uygulandığını yalnızca bu kayıttan kesinleştirmiyoruz."] },
      { heading: "Şirket duyurusu ve kanıt sınırı", paragraphs: ["Larimar, 29 Haziran 2026’da önceki açık etiketli çalışmasından frataxin artışı ve klinik ölçeklerde yönsel değişimler bildirdi; ilk ruhsat başvuru modülünü sunduğunu ve doğrulayıcı Faz 3’te ilk dozun 2026 üçüncü çeyreğinde planlandığını açıkladı. Bu takvim şirket beklentisidir, gerçekleşmiş sonuç veya onay değildir.", "Önceki açık etiketli veriler Faz 3 sonucu değildir. Eşzamanlı randomize kontrol olmaması, küçük analiz grupları ve biyobelirteçlerin günlük yaşamdaki yararla aynı şey olmaması nedeniyle kesin etkinlik çıkarımı yapılamaz. Şirket aynı duyuruda programın güvenlilik verilerinde anafilaksi bildirdi; ciddi alerjik reaksiyon riski araştırma ekibiyle değerlendirilmelidir."] },
      { heading: "Şimdi ne biliyoruz?", paragraphs: ["İnsanlarda araştırma sürüyor; bu önemli bir ilerleme olsa da FORWARD-FA’nın tamamlanmış etkinlik sonuçları bu kaynaklarda açıklanmış değil. Gerçekleşen toplam katılımcı sayısı ve Türkiye’den kabul yolu da doğrulanmış değil. Son haber kontrolü: 9 Ekim 2026."] },
    ],
    sources: [
      { label: "ClinicalTrials.gov — FORWARD-FA (Faz 3), NCT07778836", url: "https://clinicaltrials.gov/study/NCT07778836" },
      { label: "Larimar resmi duyurusu — açık etiketli veriler ve geliştirme planı, 29 Haziran 2026", url: "https://investors.larimartx.com/news-releases/news-release-details/larimar-therapeutics-reports-positive-open-label-data-and" },
    ],
    participation: {
      studyId: "NCT07778836", registryUrl: "https://clinicaltrials.gov/study/NCT07778836", registryUpdated: "9 Ekim 2026", checked: "9 Ekim 2026",
      status: "Hasta alıyor", countries: ["ABD — Chicago, Eatontown, Dallas (hasta alıyor); Tampa (henüz hasta almıyor)"], contactName: "Larimar Therapeutics, Inc.", email: "medicalinfo@larimartx.com", phone: "844-511-9056",
      guidance: "Türkiye merkezi yok; kayıtta yalnız ABD merkezleri yer alıyor. Türkiye’de ikamet edenlerin yurtdışından kabulü açıkça belirtilmemiş. İlk adım sponsora bunun mümkün olup olmadığını sormaktır; doğrudan kabul varsaymayın. Olumlu yanıt alınırsa hekiminizle genetik tanı ve takip özetini hazırlayın, belgelerin güvenli paylaşım yolunu, vizit sıklığını, seyahat ve masrafları sorun. Nihai değerlendirme araştırma merkezindedir.",
    },
  },
  {
    slug: "vatiquinone-prove-fa-yeni-faz-3-plani", treatment: "Vatiquinone", category: "KLİNİK ARAŞTIRMA",
    title: "Vatiquinone: yeni PROVE-FA Faz 3 planı; resmi kayıtta alım henüz başlamadı",
    shortTitle: "Vatiquinone: yeni PROVE-FA Faz 3 planı",
    description: "PTC’nin yeni Faz 3 çalışması 7–21 yaş grubunda 120 katılımcıyı hedefliyor. Şirket başlangıç planını duyurdu; kontrol edilen resmi kayıt henüz hasta alınmadığını gösteriyor.",
    date: "9 Ekim 2026", year: "2026", phase: "Faz 3", evidence: "blue", evidenceText: "Kayıtlı Faz 3 · alım başlamadı",
    patients: "120 kişi hedefleniyor; gerçekleşen katılım değil", readTime: "4 dk okuma",
    cover: { src: vatiquinonePhase3, alt: "Klinik çalışma hazırlık masasında dosya, stetoskop ve etiketsiz şişe", width: 1536, height: 1024 },
    warning: "Deneysel / henüz onaylı değil. Yeni çalışma planı olumlu sonuç veya ruhsat garantisi değildir; vatiquinone’u kendi başınıza kullanmayın.",
    sections: [
      { heading: "Yeni Faz 3 planı", paragraphs: ["PTC Therapeutics, 30 Temmuz 2026 duyurusunda PROVE-FA’nın vatiquinone için yeniden ruhsat başvurusunu desteklemek üzere 2026 üçüncü çeyreğinde başlamasını beklediğini bildirdi. Bu beklenti, hasta alımının gerçekten başladığının kanıtı değildir.", "PROVE-FA (NCT07681713) resmi kayıtta Faz 3, tek gruplu ve açık etiketli bir çalışma olarak yer alıyor. Genel yaş aralığı 7–21, tahmini katılımcı sayısı 120. 9 Ekim kontrolünde durum ‘henüz hasta almaya başlamadı’; kayıt son yayımı 14 Ağustos 2026. Eski tahmini başlangıç tarihi geçmiş olsa da durum değişmediği için alım başlamış gibi gösterilmiyor."] },
      { heading: "Önceki çalışma ve yeni planın sınırı", paragraphs: ["Önceki MOVE-FA Faz 3 çalışması tüm katılımcılar için ana hedefini karşılamamıştı. Yeni programın planlanması bu sonucu değiştirmez. PTC’nin topluluğa yönelik açıklaması yeni çalışmanın genç yaş grubuna odaklandığını ve UNIFAI doğal seyir verileriyle karşılaştırma planlandığını anlatıyor.", "Açık etiketli, tek gruplu tasarım eşzamanlı plasebo kontrollü çalışma değildir. Dış doğal seyir gruplarıyla karşılaştırmalar, gruplar arasındaki başlangıç ve takip farklarından etkilenebilir. PROVE-FA için tamamlanmış yeni etkinlik sonuçları bu kaynaklarda henüz açıklanmadı."] },
      { heading: "Başvuru için ne beklenmeli?", paragraphs: ["Çalışmada birden fazla ülkenin merkezi listelenmesi, Türkiye’den başvurunun otomatik kabul edileceği anlamına gelmez. Alımın başlaması, ilgili merkezlerin açılması ve kişisel uygunluk araştırma ekibince doğrulanmalıdır. Kaynakların kontrol tarihi: 9 Ekim 2026."] },
    ],
    sources: [
      { label: "ClinicalTrials.gov — PROVE-FA (Faz 3), NCT07681713", url: "https://clinicaltrials.gov/study/NCT07681713" },
      { label: "PTC resmi şirket güncellemesi — 30 Temmuz 2026", url: "https://ir.ptcbio.com/news-releases/news-release-details/ptc-therapeutics-provides-corporate-update-and-reports-second-4" },
      { label: "PTC FA topluluk mektubu — Mayıs 2026, önceki sonuçlar ve yeni çalışma planı", url: "https://www.ptcbio.com/wp-content/uploads/sites/2/2026/05/May-2026-PTC-FA-Community-Letter-updated.pdf" },
    ],
    participation: {
      studyId: "NCT07681713", registryUrl: "https://clinicaltrials.gov/study/NCT07681713", registryUpdated: "14 Ağustos 2026", checked: "9 Ekim 2026",
      status: "Henüz hasta almaya başlamadı", countries: ["ABD", "Belçika", "Brezilya", "Kanada", "Fransa", "İspanya"], contactName: "Patient Advocacy — PTC Therapeutics", email: "medinfo@ptcbio.com", phone: "1-866-562-4620",
      guidance: "Türkiye merkezi yok ve resmi kayıtta alım henüz başlamadı. Birden fazla ülkede merkez listelenmesi, Türkiye’de yaşayanların kabul edildiğini doğrulamaz. Şimdilik PTC’nin resmi iletişimine alımın ne zaman açılacağını ve yurtdışında ikamet edenlerin değerlendirilebilip değerlendirilemeyeceğini sorun; kayıt durumunu izleyin. Açılış ve kabul yolu doğrulanırsa hekiminizle tanı özetini hazırlayıp güvenli belge paylaşımı, takip vizitleri ve masrafları netleştirin.",
    },
  },
  {
    slug: "nbib-223-facet-ilk-klinik-calisma", treatment: "NBIB-223", category: "GEN TEDAVİSİ",
    title: "FA için yeni gen tedavisi adayı NBIB-223 ilk klinik çalışmasına geçti",
    shortTitle: "NBIB-223: FACET ilk klinik çalışması duyuruldu",
    description: "Friedreich ataksisinin temelindeki frataxin eksikliğini hedefleyen NBIB-223 için FACET adlı ilk klinik çalışma duyuruldu. Tek seferlik damar içi uygulama olarak tasarlanan bu aday, işlevsel frataxin genini FA’dan etkilenen dokulara ulaştırmayı amaçlıyor.",
    date: "12 Ekim 2026", year: "2026", phase: "Faz 1", evidence: "gray", evidenceText: "İlk insan çalışması · insan verisi yok",
    patients: "Açıklanmadı", readTime: "4 dk okuma",
    cover: { src: nbib223Facet, alt: "Klinik araştırma odasında infüzyon askısı ve boş tedavi koltuğu", width: 1536, height: 1024 },
    warning: "Deneysel / henüz onaylı değil. NBIB-223 için insanlarda güvenlilik veya etkililik sonucu açıklanmadı; onaylı tedavi veya kür değildir. Açık bir resmi kayıt doğrulanmadan hasta alımı veya katılım imkânı varsayılmamalıdır.",
    sections: [
      { heading: "Frataxin eksikliği", paragraphs: ["Friedreich ataksisi (FA), FXN genindeki değişiklikler nedeniyle frataxin proteininin yetersiz üretilmesiyle ilişkilidir. Frataxin, hücrelerin enerji üretiminde görev alan mitokondrilerin normal çalışması için önem taşır. Bu eksiklik özellikle sinir sistemi ve kalp gibi dokuları etkileyebilir."] },
      { heading: "NBIB-223 ve FACET çalışması", paragraphs: ["Bu biyolojik temeli hedefleyen yeni adaylardan NBIB-223, gen ekleme yaklaşımıyla geliştiriliyor. Tedavinin amacı, işlevsel bir FXN gen kopyasını hücrelere ulaştırarak frataxin üretimini desteklemek. Geliştirici Neurocrine Biosciences’ın açıklamasını aktaran Friedreich Ataxia Research Alliance (FARA), 7 Ekim 2026’da NBIB-223’ün ilk klinik çalışması FACET’i duyurdu. Aday, tek seferlik damar içi uygulama olarak tasarlandı; frataxin geninin beyin ve kalp dâhil FA’dan etkilenen dokulara ulaştırılması hedefleniyor.", "NBIB-223’ün damar yoluyla verilmesi için geliştirilen taşıyıcı, hücrelere genetik talimatı ulaştırmayı amaçlıyor. Araştırma programı, bu yaklaşımın sinir sistemi gibi ulaşılması güç dokulara erişebilmesine yönelik preklinik çalışmalara dayanıyor. Ancak laboratuvar ve hayvan çalışmalarındaki bulgular, insanlarda güvenlilik veya klinik fayda gösterildiği anlamına gelmez."] },
      { heading: "Faz 1: ilk insan çalışması ne anlama geliyor?", paragraphs: ["FACET, NBIB-223’ün insanlarda inceleneceği ilk klinik aşamadır (Faz 1). Bu erken aşamada temel amaç, aday tedavinin güvenliliği ve vücutta nasıl davrandığı hakkında bilgi toplamaktır. Henüz NBIB-223’ün FA belirtilerini iyileştirdiğini ya da hastalığın ilerlemesini yavaşlattığını gösteren insan verisi açıklanmış değildir. Bu nedenle aday şu an deneysel bir gen tedavisidir; onaylı tedavi veya kanıtlanmış kür değildir.", "Bu haberin hazırlandığı tarihte FACET için hasta alımı açık, doğrulanmış bir resmi kayıt bu sitede kontrol edilmemiştir. Katılım imkânı, merkezler veya uygunluk koşulları hakkında bilgi resmi kayıt yayımlandığında ve araştırma ekibince doğrulandığında netleşecektir."] },
      { heading: "Ölçülü bir umut", paragraphs: ["Yine de klinik aşamaya geçiş, FA araştırmaları açısından önemli ve umut verici bir dönüm noktasıdır: frataxin eksikliğinin temelindeki genetik mekanizmayı hedefleyen bir yaklaşım artık insanlarda araştırılabilecek aşamaya ulaşmıştır. Bundan sonraki çalışmaların sonuçları, güvenlilik, uygun doz ve olası klinik etkiler hakkında daha fazla bilgi sağlayacaktır. Bu yanıtlar zaman içinde ve klinik veriler biriktikçe netleşecektir.", "FA ile yaşayan kişiler için bu gelişme, araştırma alanının genişlediğini ve hastalığın biyolojik nedenine yönelik seçeneklerin incelendiğini gösteriyor. Umut verici olan, bu hedefe yönelik yeni bir adayın klinik araştırmaya taşınmasıdır; bilimsel olarak doğru beklenti ise sonuçları beklemek ve her yeni veriyi dikkatle değerlendirmektir."] },
    ],
    sources: [
      { label: "FARA — Neurocrine Biosciences’ın NBIB-223 / FACET duyurusu (7 Ekim 2026)", url: "https://www.curefa.org/news/community-statement-neurocrine-biosciences-announces-the-first-clinical-study-of-nbib-223-the-facet-study-an-investigational-gene-therapy-for-fa/" },
      { label: "Neurocrine Biosciences — Resmî ilaç geliştirme hattı", url: "https://www.neurocrine.com/pipeline/" },
    ],
  },
  {
    slug: "gv101-rock2-inhibitoru-fa-ind-izni", treatment: "GV101", category: "KLİNİK ARAŞTIRMA",
    title: "GV101: FA için ağızdan alınan ROCK2 inhibitörüne Faz 2 çalışma izni (IND)",
    shortTitle: "GV101: FA Faz 2 için IND izni",
    description: "Graviton BioScience, ağızdan alınan seçici ROCK2 inhibitörü GV101’in yeni kapsül formu için FDA’dan FA’da Faz 2 çalışma başlatma izni (IND) aldığını duyurdu. Hasta alımının 2027’nin ilk çeyreğinde başlaması bekleniyor; IND bir ilaç ruhsatı değildir. Çalışma 13 Ekim 2026’da ClinicalTrials.gov’da NCT07870590 numarasıyla kaydedildi; hasta alımı henüz başlamadı.",
    date: "13 Ekim 2026", year: "2026", phase: "Faz 2", evidence: "gray", evidenceText: "Kayıtlı Faz 2 · FA'da insan verisi yok",
    patients: "48 katılımcı hedefleniyor (tahmini); hasta alımı henüz başlamadı", readTime: "6 dk okuma",
    cover: { src: gv101Ind, alt: "Araştırma laboratuvarında etiketsiz kapsül blisterleri, hücre kültürü plakası ve pipet", width: 1536, height: 1024 },
    warning: "Deneysel / henüz onaylı değil. IND izni bir çalışmanın başlatılabilmesine izin verir; ilacın etkili veya güvenli olduğunu göstermez ve ruhsat değildir. FA hastalarında klinik sonuç açıklanmamıştır. Türkiye’de merkez veya Türkiye’den katılım kabulü doğrulanmamıştır.",
    sections: [
      { heading: "Ne duyuruldu?", paragraphs: [
        "Graviton BioScience, 11 Ağustos 2026 tarihli basın duyurusunda ABD Gıda ve İlaç Dairesi’nin (FDA), GV101’in yeni bir kapsül formu için Araştırma Amaçlı Yeni İlaç (IND) başvurusunu 7 Ağustos 2026’da onayladığını açıkladı. Friedreich Ataxia Research Alliance (FARA) bu duyuruyu 13 Ağustos 2026’da toplulukla paylaştı. Bu haber 13 Ekim 2026’da yayımlanmıştır; kaynak duyurunun tarihi ile haberin yayın tarihi farklıdır.",
        "IND izni, FDA’nın ABD’de insanlarda klinik çalışma yapılmasına itiraz etmediği anlamına gelir. Bu izin ilacın etkili olduğunu, güvenli olduğunu ya da reçeteyle kullanılabileceğini göstermez; ilaç ruhsatından tamamen farklı bir aşamadır."
      ] },
      { heading: "GV101 nedir, nasıl çalışması amaçlanıyor?", paragraphs: [
        "GV101, ağızdan alınan, ROCK2 adlı enzimi seçici olarak baskılamak üzere tasarlanmış küçük moleküllü bir ilaç adayıdır. ROCK2; inflamasyon, doku sertleşmesi (fibrozis), metabolizma ve gen ifadesiyle ilişkili hücresel yolları düzenleyen bir kinazdır. Graviton, GV101’i FA’da frataxin üretimini artırarak hastalığın altta yatan nedenine yönelik bir yaklaşım olarak geliştiriyor.",
        "Bu yaklaşım gen tedavisi değildir: hücreye yeni bir gen kopyası eklenmez. Amaç, FA’da baskılanmış olan kişinin kendi FXN geninden daha fazla frataxin üretilmesini sağlamaktır."
      ] },
      { heading: "Bilimsel arka plan: laboratuvar bulguları", paragraphs: [
        "FARA’ya göre University of Massachusetts Chan Medical School’daki araştırmacılar, FXN geninin baskılanmasında rol oynayan hücresel yolları incelerken ROCK1 ve ROCK2 kinazlarının frataxin düzeyini etkileyebileceğini buldu. Haziran 2025’te yayımlanan ve PubMed’de yer alan hakemli makalede araştırmacılar, kinazlara yönelik bir tarama ile ROCK1’i FXN baskılanmasında önemli bir faktör olarak tanımladı; ROCK1 veya ROCK2 düzeyi azaltıldığında FA hastalarından türetilmiş kök hücrelerde, nöronlarda ve kalp kası hücrelerinde FXN ifadesinin arttığını bildirdi.",
        "Aynı makalede, daha önce başka amaçlarla geliştirilmiş ROCK inhibitörlerinin bu hücre modellerinde FXN’i yeniden etkinleştirdiği ve bazı mitokondriyal bozuklukları hafiflettiği gösterildi. Makale GV101’in kendisini test eden bir klinik çalışma değildir; ROCK yolunu hedeflemenin bilimsel gerekçesini sunar. Hücre modellerindeki sonuçlar insanlarda aynı etkinin görüleceğini garanti etmez."
      ] },
      { heading: "Şirketin bildirdiği insan verileri ve sınırları", paragraphs: [
        "Graviton, FA hastalarından elde edilen B-lenfosit ve fibroblast hücrelerinde GV101’in frataxin mRNA’sını ve proteinini artırdığını bildiriyor. Şirket ayrıca obezite araştırmasına katılan kişilerden alınan kan hücrelerinde (PBMC) GV101 ile frataxin düzeyinin arttığını açıkladı. Bu katılımcılar FA hastası değildi; bu bulgu FA hastalarında klinik yarar kanıtı değildir.",
        "Şirkete göre GV101, FA dışındaki hastalık alanlarındaki klinik çalışmalarda 500’den fazla kişiye 24 haftaya kadar verilmiş, uzatma çalışmaları bir yılı aşmıştır; şirket bu çalışmalarda olumlu bir güvenlilik ve tolerabilite profili bildirmektedir. Bu bir şirket açıklamasıdır; FA hastalarına özgü yan etki türleri ve sıklıkları açıklanmamıştır ve bu sitede doğrulanmamıştır. Başka hastalıklardaki tolerabilite, FA’daki kalp tutulumu, eşlik eden ilaçlar veya yaş farklılıkları için otomatik olarak geçerli sayılamaz."
      ] },
      { heading: "Planlanan Faz 2 çalışması", paragraphs: [
        "Graviton’un duyurusuna göre planlanan çalışma 12 haftalık, randomize, plasebo kontrollü ve doz belirleme amaçlı bir Faz 2 çalışmasıdır; ABD’de ve uluslararası birden fazla merkezde en fazla 48 katılımcı alınması planlanıyor. Birincil hedef, katılımcıların hücrelerinde ölçülen frataxin düzeyinin başlangıca göre artmasıdır. Bu bir biyobelirteçtir; yürüme, denge veya günlük işlevde iyileşme ile aynı şey değildir.",
        "Çalışmayı tamamlayanlara açık etiketli uzatma döneminde etkin ilaç sunulması planlanıyor. Şirket, katılımcıların mevcut FDA onaylı standart tedavilerine devam edebileceğini belirtiyor. Kullanılacak kapsül formu, sağlıklı gönüllülerde yapılan Faz 1 çalışmasında daha iyi emilim gösterdiği bildirilen yeni bir formdur."
      ] },
      { heading: "Katılım: ne biliniyor, ne bilinmiyor?", paragraphs: [
        "GV101’in FA’daki Faz 2 çalışması, ClinicalTrials.gov’da NCT07870590 numarasıyla 13 Ekim 2026’da yayımlandı. Kayıtta çalışma; doz aralığı belirleyen, randomize, çift kör, plasebo kontrollü ve açık etiketli uzatma dönemi içeren bir Faz 2a çalışması olarak tanımlanıyor. 14 Ekim 2026 kontrolünde kayıt “Not yet recruiting” (hasta alımına henüz başlamadı) durumundaydı; tahmini 48 katılımcı ve 16–40 yaş aralığı belirtiliyordu. Listelenen tek merkez ABD’de, New Jersey’nin Eatontown şehrindeki CLINiLABS’tır.",
        "Şirketin açıklamasına göre hasta alımının 2027’nin ilk çeyreğinde başlaması bekleniyor; bu bir beklentidir ve değişebilir. Türkiye’de merkez bulunmamaktadır ve Türkiye’den katılım kabul edileceği doğrulanmamıştır. Çalışma kaydının açılması ruhsat, onay veya etkililik kanıtı değildir. Katılım koşullarını ve nihai uygunluğu yalnızca araştırma ekibi belirler; güncel durum için resmi kayda bakılmalıdır."
      ] },
      { heading: "Neden önemli, neden temkinli olmalı?", paragraphs: [
        "GV101, FA araştırmalarında frataxin üretimini ağızdan alınan bir ilaçla artırmayı hedefleyen yaklaşımlardan biri olarak dikkat çekiyor. Laboratuvar bulgularından planlı bir insan çalışmasına geçiş, araştırma alanı açısından somut bir adımdır.",
        "Bununla birlikte FA hastalarında henüz hiçbir güvenlilik veya etkililik sonucu yoktur. Faz 2 sonuçları, frataxin artışının gerçekleşip gerçekleşmediğini ve hangi dozların uygun olduğunu göstermeye yöneliktir; kalıcı klinik yarar daha büyük ve uzun çalışmalarla değerlendirilmelidir. GV101 onaylı bir tedavi veya kür değildir."
      ] },
    ],
    sources: [
      { label: "Graviton BioScience — IND izni basın duyurusu (11 Ağustos 2026)", url: "https://gravitoncorp.com/news/fda-fa-ind" },
      { label: "FARA — Graviton IND duyurusunun paylaşımı (13 Ağustos 2026)", url: "https://www.curefa.org/news/press-release-graviton-bioscience-announces-clearance-of-investigational-new-drug-ind-for-gv101-for-the-treatment-of-friedreichs-ataxia/" },
      { label: "FARA — GV101 (ROCK2 inhibitörü) program sayfası", url: "https://www.curefa.org/drug-development/gv101-rock2-inhibitor/" },
      { label: "Hakemli makale (Haziran 2025) — ROCK1 ve ROCK2 inhibisyonu ile FXN geninin yeniden etkinleştirilmesi (PubMed 40404357)", url: "https://pubmed.ncbi.nlm.nih.gov/40404357/" },
      { label: "Graviton BioScience — Resmi pipeline", url: "https://gravitoncorp.com/pipeline/" },
      { label: "ClinicalTrials.gov — NCT07870590 (GV101 for Friedreich's Ataxia Treatment)", url: "https://clinicaltrials.gov/study/NCT07870590" },
    ],
  },
  {
    slug: "friedreich-ataksi-otonom-noron-hiperuyarilabilirlik", treatment: "Temel araştırma", category: "BİLİMSEL ARAŞTIRMA",
    title: "FA’da otonom sinir hücrelerinde aşırı uyarılabilirlik: Yeni insan hücre modeli ne gösteriyor?",
    shortTitle: "FA’da otonom sinir hücreleri: Yeni hücre modeli",
    description: "FA hastalarından elde edilen ve CRISPR ile düzeltilmiş eşlenik kontrol hücreleri karşılaştırıldı. Araştırmacılar otonom sinir hücrelerinde artmış elektriksel uyarılabilirlik ve mitokondriyal stres bulguları bildirdi.",
    date: "11 Ekim 2026", year: "2026", phase: "Preklinik · Ön baskı", evidence: "gray", evidenceText: "Hakem değerlendirmesi bekleniyor",
    patients: "İnsan iPSC hücre modeli · 3 hasta-kontrol çifti", readTime: "5 dk okuma",
    cover: { src: autonomicNeuronModel, alt: "Hücre biyolojisi laboratuvarında mikroskop ve kültür örnekleri", width: 1536, height: 1024 },
    warning: "Bu çalışma insan hücreleri üzerinde yapılmış preklinik bir araştırmadır ve henüz hakem değerlendirmesinden geçmemiş bir bioRxiv ön baskısıdır. Bir ilacın etkisini, hastalarda klinik iyileşmeyi veya yeni bir tedavinin bulunduğunu göstermez.",
    sections: [
      { heading: "Araştırma neyi inceledi?", paragraphs: [
        "Friedreich ataksisi (FA) yalnızca denge ve koordinasyonu etkileyen bir hastalık değildir. Klinik çalışmalarda FA’lı kişilerde otonom sinir sistemiyle ilişkili bulgular da bildirilmiştir: istirahatte yüksek kalp hızı, kanda (plazmada) artmış katekolamin düzeyleri ve idrar, bağırsak ve cinsel işlevle ilgili belirtiler bunlar arasındadır. Otonom sinir sistemi kalp atışı, kan basıncı ve iç organların işleyişi gibi istem dışı işlevleri düzenler.",
        "Bu belirtilerin otonom sinir hücrelerinin kendisindeki bir sorundan mı, yoksa başka organlardaki değişikliklerin dolaylı sonucundan mı kaynaklandığı açık değildir. Yeni çalışma bu soruyu hücre düzeyinde ele aldı. Araştırmacılar FA hastalarından alınan hücreleri yeniden programlayarak indüklenmiş pluripotent kök hücreler (iPSC) elde etti ve bunlardan laboratuvarda otonom nöronlar üretti.",
        "Karşılaştırma için aynı kişilerin hücrelerinde CRISPR/Cas9 gen düzenleme yöntemiyle FA’ya yol açan GAA tekrar genişlemesi düzeltildi. Böylece her hasta hücresi, genetik arka planı neredeyse aynı olan ‘eşlenik’ (izojenik) bir kontrolle kıyaslanabildi. Bu tasarım, gözlenen farkların kişiler arası genetik çeşitlilikten değil, GAA genişlemesinden kaynaklanma olasılığını güçlendirir."
      ] },
      { heading: "Başlıca bulgular", paragraphs: [
        "Frataxin düzeyi: FA otonom nöronlarında frataxin mRNA’sı ve proteini, düzeltilmiş kontrollere göre düşük kaldı. Bu, laboratuvarda üretilen hücrelerin hastalığın temel moleküler özelliğini taşıdığını gösteriyor.",
        "Elektriksel uyarılabilirlik: Elektriksel ölçümlerde FA nöronlarının yaklaşık beş kat daha fazla spike (ateşleme) ürettiği, ateşlemeler arasındaki sürenin daha kısa olduğu ve ateşleme patlamalarının daha uzun sürdüğü bildirildi. Araştırmacılar bunu ‘aşırı uyarılabilirlik’ (hipereksitabilite) olarak tanımlıyor.",
        "Hücre sağlığı ve mitokondri: FA nöronlarında hücre ölümü ve mitokondriyal reaktif oksijen türleri arttı; mitokondri yapısında bozulma görüldü. Frataxin mitokondride görev yapan bir protein olduğundan bu bulgular hastalığın bilinen mekanizmasıyla uyumludur.",
        "Gen ifadesi: Üç hasta ve düzeltilmiş eşlenik kontrol çiftinin RNA dizilemesinde hücre dışı matriks ve hücre yapışmasıyla ilgili gen programlarında kayıp ve stres yanıt yollarında değişiklikler görüldü. MEG3 adlı uzun kodlamayan RNA üç çiftin hepsinde tutarlı biçimde yükseldi; 14q32 kromozom bölgesindeki DLK1-DIO3 alanında yer alan anne kökenli diğer kodlamayan transkriptlerin de birlikte arttığı bildirildi.",
        "Bu bulguların tamamı hücre ve biyobelirteç düzeyindedir. Laboratuvar kabındaki nöronlarda görülen elektriksel veya moleküler değişiklikler, hastalarda klinik iyileşme ya da kötüleşme ile aynı şey değildir ve herhangi bir tedavi test edilmemiştir."
      ] },
      { heading: "Araştırmacılar ve bağlam", paragraphs: [
        "bioRxiv sayfasına göre çalışmanın yazar ekibinde S. L. (Max) Shiang, Jarmon Lees, Haoxiang Zhang, Li Li, Mirella Dottori, Alice Pebay, Louise Corben, Martin Delatycki, Stephen Wilcox, Jeffrey Pullin, Jarny Choi, Davis McCarthy, Jill Napierala ve Marek Napierala yer alıyor.",
        "Ön baskı sayfasında yazar bağlantıları arasında St Vincent's Institute of Medical Research yer alıyor; ekip, FA alanında hücre modelleri, klinik araştırma ve genetik çalışmalar yürüten uluslararası araştırma ağlarıyla ilişkili isimlerden oluşuyor. Bu bölümde unvan veya görev bilgisi verilmemiştir; kaynak sayfasında doğrulanmayan ayrıntılar eklenmedi.",
        "Bu metin, ilgili araştırmacıların ön baskıda bildirdiği bulguların Türkçe özetidir; doğrudan alıntı değildir. Ham RNA dizileme verileri GEO veri tabanında GSE349562 numarasıyla paylaşılmıştır."
      ] },
      { heading: "Bu neden önemli olabilir?", paragraphs: [
        "Çalışma, FA’da kalbi ve diğer iç organları düzenleyen otonom sinir sisteminin hücre düzeyinde doğrudan etkilenebileceğine dair kontrollü bir insan hücre modeli sunuyor. Eşlenik kontrollerin kullanılması, bulguların FA’ya özgü genetik değişiklikle ilişkisini daha net incelemeyi sağlıyor.",
        "Bu model ileride otonom belirtilerin altında yatan mekanizmaları anlamaya ve olası araştırma hedeflerini (örneğin MEG3 ya da mitokondriyal stres yolları) laboratuvarda test etmeye yardımcı olabilir. Ancak bir hücre modelindeki bulgunun yeni bir tedaviye dönüşeceği garanti değildir; bu yol uzun ve belirsizdir."
      ] },
      { heading: "Sınırlamalar", paragraphs: [
        "Çalışma hastalarda yapılmadı; laboratuvarda üretilmiş bir hücre modelidir. Yalnızca üç hasta-kontrol çifti incelenmiştir.",
        "Bulgular doğrudan günlük belirtileri, kalp olaylarını veya tedavi yanıtını göstermez.",
        "Çalışma bir ön baskıdır; bağımsız hakem değerlendirmesi tamamlanmamıştır ve sonuçlar yayın sürecinde değişebilir.",
        "CRISPR ile düzeltilmiş izojenik kontroller nedensel yorumu güçlendirir; ancak küçük örneklem ve laboratuvar koşulları bulguların genellenebilirliğini sınırlar."
      ] },
    ],
    sources: [
      { label: "bioRxiv ön baskısı — resmi sayfa", url: "https://www.biorxiv.org/content/10.64898/2026.10.06.757136v1" },
      { label: "DOI: 10.64898/2026.10.06.757136", url: "https://doi.org/10.64898/2026.10.06.757136" },
      { label: "GEO veri seti GSE349562 (NCBI)", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE349562" },
    ],
  },
];
articles.push({
  slug: "sgt-212-ab-yetim-ilac-tayini",
  treatment: "SGT-212",
  category: "DÜZENLEYİCİ GELİŞME",
  title: "SGT-212 için AB yetim ilaç tayini verildi",
  shortTitle: "SGT-212: AB yetim ilaç tayini",
  description: "AB yetim ilaç tayini ve 26 Ekim şirket güncellemesi: FALCON’da beş katılımcı dozlandı. Erken güvenlilik bildirimi etkinlik kanıtı değil; 19 Ekim Komisyon kararı ruhsat değildir.",
  date: "26 Ekim 2026", year: "2026", phase: "Faz 1b · Yetim ilaç tayini",
  evidence: "blue", evidenceText: "Düzenleyici statü · etkinlik kanıtı değil",
  patients: "5 katılımcı dozlandı · şirketin erken güvenlilik bildirimi", readTime: "5 dk okuma",
  cover: { src: sgt212EuOrphan, alt: "Gen tedavisi araştırması bağlamında laboratuvarda pipet ve numune tüpleri", width: 1536, height: 1024 },
  warning: "Deneysel / henüz onaylı değil. Yetim ilaç tayini pazarlama ruhsatı, güvenlilik/etkililik onayı veya klinik iyileşme kanıtı değildir.",
  sections: sgt212OrphanSections,
  sources: sgt212OrphanSources,
});
articles.push({
  slug: "ati-105-saglikli-gonulluler-faz-1", treatment: "ATI-105", category: "KLİNİK ARAŞTIRMA",
  title: "ATI-105: Sağlıklı gönüllülerde Faz 1 çalışması başladı", shortTitle: "ATI-105: Sağlıklı gönüllülerde ilk dozlama",
  description: "Adjuvia ilk katılımcının dozlandığını bildirdi. NCT07869654 sağlıklı gönüllülerde güvenlilik araştırmasıdır; FA hastası almıyor ve FA’da klinik yarar sonucu yok.",
  date: "29 Ekim 2026", year: "2026", phase: "Faz 1 · Sağlıklı gönüllüler", evidence: "blue", evidenceText: "İlk dozlama · şirket duyurusu; FA sonucu yok",
  patients: "60 sağlıklı yetişkin hedefleniyor · 18–60 yaş", readTime: "6 dk okuma",
  cover: { src: ati105Phase1, alt: "İlaç geliştirme laboratuvarında etiketsiz numune şişeleri, kapsüller ve analiz cihazı", width: 1536, height: 1024 },
  warning: "Deneysel / henüz onaylı değil. Sağlıklı gönüllü Faz 1; FA hastası almıyor. Preklinik iddialar ve ilk dozlama FA’da güvenlilik, biyobelirteç artışı veya klinik yarar kanıtı değildir.",
  sections: researchNewsDetails["ati-105-saglikli-gonulluler-faz-1"]?.sections ?? [], sources: researchNewsDetails["ati-105-saglikli-gonulluler-faz-1"]?.sources ?? [],
}, {
  slug: "ppl-001-jci-gen-duzenlenmis-kok-hucre", treatment: "PPL-001", category: "BİLİMSEL ARAŞTIRMA",
  title: "Gen düzenlenmiş kök hücreler FA fare modelinde çoklu organ bulgularını iyileştirdi", shortTitle: "PPL-001: Gen düzenlenmiş hücrelerden fare modeli bulguları",
  description: "JCI’de yayımlanan mPPL-001 araştırması farelerde dokusal ve işlevsel bulgular bildirdi. Bu hakemli preklinik çalışma insanlarda tedavi sonucu veya onay değildir.",
  date: "15 Ekim 2026", year: "2026", phase: "Preklinik · Hakemli yayın", evidence: "gray", evidenceText: "Kontrollü hayvan modeli · insan verisi yok",
  patients: "mPPL-001: 13 fare · mock: 11 · WT ve tedavisiz: 9’ar", readTime: "6 dk okuma",
  cover: { src: ppl001Jci, alt: "Kök hücre araştırma laboratuvarında mikroskop, kültür plakası ve numune tüpleri", width: 1536, height: 1024 },
  warning: "Preklinik hayvan çalışmasıdır; insanlarda klinik sonuç değildir. PPL-001 onaylı tedavi veya kür değildir; nakil hazırlığı ve gen düzenlemenin insan güvenliliği/etkililiği burada gösterilmedi.",
  sections: researchNewsDetails["ppl-001-jci-gen-duzenlenmis-kok-hucre"]?.sections ?? [], sources: researchNewsDetails["ppl-001-jci-gen-duzenlenmis-kok-hucre"]?.sources ?? [],
});
export const researchNews = articles.filter(article => article.participation !== undefined);
for (const article of researchNews) {
  const detail = researchNewsDetails[article.slug];
  if (!detail) throw new Error(`Ayrıntılı haber metni gerekli: ${article.slug}`);
  article.sections = detail.sections;
  article.sources = [...new Map([...article.sources, ...detail.sources].map(source => [source.url, source])).values()];
  const words = detail.sections.flatMap(section => section.paragraphs).join(" ").split(/\s+/).length;
  article.readTime = `${Math.ceil(words / 170)} dk okuma`;
}
// Every new record must provide its own cover. Never silently substitute a
// common image: reject incomplete records and covers shared by different news.
export function validateArticleCovers(records: readonly Article[]): void {
  const used = new Set<string>();
  for (const article of records) {
    const cover = article.cover;
    if (!cover?.src.trim() || !cover.alt.trim() || cover.width <= 0 || cover.height <= 0) {
      throw new Error(`Haber için ayrı ve eksiksiz kapak gerekli: ${article.slug}`);
    }
    if (used.has(cover.src)) {
      throw new Error(`Kapak farklı haberlerde tekrar kullanılamaz: ${article.slug}`);
    }
    used.add(cover.src);
  }
}
validateArticleCovers(articles);
// Sort only dates already present in records. Year-only labels use the start
// of that year as a conservative sorting fallback, not an invented update date.
export function existingDateSortKey(article: Article): number {
  const months = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
  const match = /^(\d{1,2})\s+(\S+)\s+(\d{4})/.exec(article.date);
  if (match) {
    const month = months.indexOf((match[2] ?? "").toLocaleLowerCase("tr"));
    const day = Number(match[1]);
    const year = Number(match[3]);
    if (month >= 0 && day >= 1 && day <= 31) return Date.UTC(year, month, day);
  }
  const year = Number(article.year) || Number(/(\d{4})/.exec(article.date)?.[1]) || 0;
  return Date.UTC(year, 0, 1);
}
export const latestUpdates = [...articles].filter((a, i, all) => all.findIndex((b) => b.slug === a.slug) === i).sort(
  (a, b) => existingDateSortKey(b) - existingDateSortKey(a),
);

const originalTreatments = [
  {
    name: "LX2006",
    company: "Lexeo Therapeutics",
    type: "AAV gen tedavisi",
    phase: "Faz 1/2",
    stage: 2,
    evidence: "yellow" as Evidence,
    label: "Erken insan verisi",
    slug: "lx2006-gen-tedavisi",
  },
  {
    name: "DT-216P2",
    company: "Design Therapeutics",
    type: "GeneTAC yaklaşımı",
    phase: "Faz 1/2",
    stage: 2,
    evidence: "yellow" as Evidence,
    label: "Erken insan verisi",
    slug: "dt-216p2-erken-klinik-veriler",
  },
  {
    name: "SGT-212",
    company: "Solid Biosciences",
    type: "İkili uygulama · gen tedavisi",
    phase: "Faz 1b",
    stage: 1,
    evidence: "blue" as Evidence,
    label: "Klinik çalışma sürüyor",
    slug: "sgt-212-falcon-calismasi",
  },
  {
    name: "Nomlabofusp",
    company: "Araştırma durumu",
    type: "Durum güncelleniyor",
    phase: "Doğrulanıyor",
    stage: 0,
    evidence: "gray" as Evidence,
    label: "Değerlendirme bekleniyor",
    slug: "nomlabofusp-durum",
  },
  {
    name: "Vatiquinone",
    company: "Araştırma durumu",
    type: "Durum güncelleniyor",
    phase: "Doğrulanıyor",
    stage: 0,
    evidence: "gray" as Evidence,
    label: "Değerlendirme bekleniyor",
    slug: "vatiquinone-durum",
  },
];
export const treatments = originalTreatments.map(t => {
  const candidate = pipelineCandidates.find(c => c.name.startsWith(t.name));
  if (!candidate) return t;
  return { ...t, company: candidate.developer, type: candidate.type, phase: candidate.phase,
    stage: candidate.phase === "Faz 3" ? 3 : candidate.phase === "Faz 1b" ? 1 : 2,
    evidence: t.evidence === "gray" ? "blue" as Evidence : t.evidence,
    label: t.evidence === "gray" ? "Klinik araştırma · ruhsatlı değil" : t.label,
    candidateSlug: candidate.slug };
});
export const calendar = [
  {
    period: "Q1",
    year: "2027",
    name: "DT-216P2",
    text: "12 haftalık veriler · takvim doğrulanıyor",
    slug: articles[0].slug,
  },
  {
    period: "Q1",
    year: "2027",
    name: "SGT-212",
    text: "İlk klinik veriler",
    slug: articles[2].slug,
  },
];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: title + " | FA Türkiye" },
      { name: "description", content: description },
      { property: "og:title", content: title + " | FA Türkiye" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

