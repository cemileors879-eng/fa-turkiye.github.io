// Browser-safe, sourced candidate profiles shared by calendar and drug details.
export type ResearchCandidate = {
  slug: string;
  name: string;
  aliases: string;
  checked?: string;
  developer: string;
  type: string;
  goal: string;
  mechanism: string;
  phase: string;
  activity: "active" | "inactive";
  status: string;
  humanData: string;
  note?: string;
  studies?: { name: string; phase: string; status: string; url: string }[];
  events: { date?: string; label: string; url: string }[];
  sources: { label: string; url: string }[];
};
export const pipelineChecked = "8 Ekim 2026";
export const pipelineCandidates: ResearchCandidate[] = [
{
  "slug": "ati-105",
  "name": "ATI-105",
  "aliases": "Adjuvia astaksantin ATI-105-101",
  "developer": "Adjuvia Therapeutics",
  "type": "Oral botanik ilaç / nanopartikül formülasyonu",
  "goal": "Oksidatif stres ve mitokondriyal işlev bozukluğunu hedeflemek.",
  "mechanism": "Astaksantin içeren oral nanopartikül formülasyonu; biyolojik gerekçe ve şirketin preklinik bulguları FA’da insan yararı değildir.",
  "phase": "Faz 1",
  "activity": "active",
  "checked": "29 Ekim 2026",
  "status": "Sağlıklı gönüllü Faz 1 — FA hastası almıyor. NCT07869654 son yayımı 9 Ekim 2026: Not yet recruiting; 29 Ekim şirket açıklaması ilk dozlamayı bildiriyor, sicil kesiti daha eski.",
  "humanData": "Henüz FA’da klinik sonuç açıklanmadı. FA belirtileri, mFARS, frataxin ve kalp sonucu yok; sağlıklı yetişkinlerde güvenlilik, tolerabilite ve farmakokinetik araştırılıyor.",
  "note": "60 sağlıklı gönüllü, 18–60 yaş, Quotient Sciences (Miami/ABD). Türkiye merkezi yok; bu katılım bilgisi FA hastaları için geçerli değil. 2027 FA Faz 1/2 hedefi şirket planıdır, garanti değildir.",
  "studies": [
    {
      "name": "ATI-105-101 — NCT07869654, sağlıklı gönüllüler",
      "phase": "Faz 1",
      "status": "Not yet recruiting (9 Ekim sicili); şirket 29 Ekim’de ilk dozlamayı bildirdi. FA hastası almıyor.",
      "url": "https://clinicaltrials.gov/study/NCT07869654"
    }
  ],
  "events": [],
  "sources": [
    {
      "label": "ClinicalTrials.gov — NCT07869654",
      "url": "https://clinicaltrials.gov/study/NCT07869654"
    },
    {
      "label": "Resmi geliştirici — Adjuvia Therapeutics",
      "url": "https://adjuvia.com/"
    },
    {
      "label": "Adjuvia — 29 Ekim 2026 şirket duyurusu (Business Wire / BioSpace)",
      "url": "https://www.biospace.com/press-releases/adjuvia-therapeutics-initiates-phase-1-clinical-trial-of-ati-105-for-friedreichs-ataxia"
    }
  ]
},
  {
    "slug": "sgt-212",
    "name": "SGT-212",
    "aliases": "FA-212 FALCON",
    "developer": "Solid Biosciences",
    "type": "AAV gen ekleme",
    "goal": "Beyincik dentat çekirdeği ve kalpte frataksin üretimini artırmak.",
    "mechanism": "AAV taşıyıcısı ile işlevsel FXN geni aktarımı; MR rehberliğinde dentat çekirdeğe ve damar içine ikili uygulama araştırılıyor.",
    "phase": "Faz 1b",
    "activity": "active",
    "status": "FALCON: kayıt hasta alımını sürdürüyor (29 Eylül 2026 kayıt güncellemesi).",
    "humanData": "26 Ekim 2026 şirket açıklamasında beş katılımcı dozlandığı ve 5 Ekim kesiminde tedaviyle ilişkili ciddi advers olay bildirilmediği belirtiliyor. Beş kişilik erken güvenlilik/tolerabilite bilgisi genel güvenliliği veya etkinliği kanıtlamaz; mFARS, frataxin, kalp ve nörolojik sonuç yok. İlk veriler Q1 2027 şirket beklentisidir.",
    "checked": "29 Ekim 2026",
    "events": [
      {
        "date": "22 Ekim 2025",
        "label": "FALCON başlangıcı — kayıtta gerçekleşmiş tarih",
        "url": "https://clinicaltrials.gov/study/NCT07180355"
      },
      {
        "date": "Ocak 2026",
        "label": "İlk katılımcı dozlaması — şirket duyurusu",
        "url": "https://investors.solidbio.com/news-releases/news-release-details/solid-biosciences-doses-first-participant-first-class-phase-1b"
      },
      {
        "date": "2027 ilk çeyrek · beklenti",
        "label": "İlk klinik veri paylaşımı; kesin tarih değil",
        "url": "https://investors.solidbio.com/news-releases/news-release-details/solid-biosciences-reports-second-quarter-2026-financial-results"
      }
    ],
    "sources": [
      {
        "label": "FARA — SGT-212",
        "url": "https://www.curefa.org/drug-development/sgt-212/"
      },
      {
        "label": "ClinicalTrials.gov — NCT07180355",
        "url": "https://clinicaltrials.gov/study/NCT07180355"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://www.solidbio.com/our-pipeline/"
      }
    ]
  },
  {
    "slug": "lx2006",
    "name": "LX2006",
    "aliases": "SUNRISE-FA SUNRISE-FA 2",
    "developer": "Lexeo Therapeutics",
    "type": "AAV gen ekleme",
    "goal": "FA kardiyomiyopatisinde kalp hücrelerine işlevsel FXN geni ulaştırmak.",
    "mechanism": "Damar içi AAV gen aktarımıyla kalp dokusunda frataksin üretiminin artırılması amaçlanıyor.",
    "phase": "Faz 2",
    "activity": "active",
    "status": "SUNRISE-FA: Faz 1/2, aktif ancak hasta almıyor. SUNRISE-FA 2: kayıt amaçlı Faz 2, hasta alıyor.",
    "humanData": "SUNRISE-FA erken, küçük ve kontrolsüz bir çalışmadır; kalp yapısı ve nörolojik ölçümlerde sinyaller bildirildi. SUNRISE-FA 2 için henüz klinik sonuç açıklanmadı. LVMI bir vekil ölçüttür; azalması yaşam süresi veya günlük işlevde yarar kanıtlamaz.",
    "studies": [
      { "name": "SUNRISE-FA", "phase": "Faz 1/2", "status": "Aktif ancak hasta almıyor", "url": "https://clinicaltrials.gov/study/NCT05445323" },
      { "name": "SUNRISE-FA 2", "phase": "Faz 2", "status": "Kayıt amaçlı çalışma; hasta alıyor", "url": "https://clinicaltrials.gov/study/NCT07721025" }
    ],
    "events": [
      {
        "date": "15 Haziran 2026",
        "label": "SUNRISE-FA 2 protokol ve analiz planı duyurusu",
        "url": "https://www.sec.gov/Archives/edgar/data/1907108/000119312526270275/lxeo-ex99_1.htm"
      },
      {
        "date": "25 Haziran 2026",
        "label": "SUNRISE-FA 2 başlangıcı — gerçekleşmiş kayıt tarihi",
        "url": "https://clinicaltrials.gov/study/NCT07721025"
      },
      {
        "label": "SUNRISE-FA 2 sonuç paylaşımı için kesin tarih doğrulanmadı",
        "url": "https://clinicaltrials.gov/study/NCT07721025"
      }
    ],
    "sources": [
      {
        "label": "FARA — LX2006",
        "url": "https://www.curefa.org/drug-development/lx2006-gene-therapy/"
      },
      {
        "label": "ClinicalTrials.gov — NCT05445323",
        "url": "https://clinicaltrials.gov/study/NCT05445323"
      },
      {
        "label": "ClinicalTrials.gov — NCT07721025",
        "url": "https://clinicaltrials.gov/study/NCT07721025"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://trials.lexeotx.com/clinical-trials/sunrise-fa2/"
      }
    ],
    "note": "FARA Faz II, ClinicalTrials.gov SUNRISE-FA 2 için Faz 2 bildiriyor. Kayıt amaçlı (pivotal) olmak Faz 3 veya onay anlamına gelmez."
  },
  {
    "slug": "dt-216p2",
    "name": "DT-216P2",
    "aliases": "DT-216 RESTORE-FA GeneTAC",
    "developer": "Design Therapeutics",
    "type": "Gen ifadesini artıran küçük molekül",
    "goal": "Mevcut FXN geninin okunmasını ve vücudun kendi frataksin üretimini artırmak.",
    "mechanism": "GeneTAC yaklaşımı genişlemiş GAA tekrarlarına bağlanıp hücrenin transkripsiyon mekanizmasını harekete geçirmeyi amaçlar; gen ekleme tedavisi değildir.",
    "phase": "Faz 1/2",
    "activity": "active",
    "status": "RESTORE-FA: kayıtta hasta alıyor; sicilin son güncellemesi 18 Mayıs 2025 olduğu için güncel alım durumu çalışma ekibiyle teyit edilmeli.",
    "humanData": "18 Mayıs 2026 duyurusunda dört haftalık, 16 katılımcılı açık etiketli veriler paylaşıldı. Öne çıkan dört kişilik kohortta biyobelirteç ve klinik sinyaller bildirildi; eşzamanlı plasebo olmaması, küçük örneklem ve kısa takip kesin yarar çıkarımını sınırlar.",
    "events": [
      {
        "date": "18 Mayıs 2026",
        "label": "Dört haftalık RESTORE-FA veri duyurusu",
        "url": "https://investors.designtx.com/news-releases/news-release-details/design-therapeutics-announces-four-week-iv-data-restore-fa-trial"
      },
      {
        "date": "Aralık 2026 · tahmini",
        "label": "Sicilde birincil tamamlanma; sonuç açıklama tarihi değildir",
        "url": "https://clinicaltrials.gov/study/NCT06874010"
      },
      {
        "date": "2027 ilk çeyrek · doğrulanıyor",
        "label": "Mevcut portalda beklenen 12 haftalık veri paylaşımı; kesin tarih teyit edilmedi",
        "url": "https://www.curefa.org/drug-development/dt-216p2/"
      }
    ],
    "sources": [
      {
        "label": "FARA — DT-216P2",
        "url": "https://www.curefa.org/drug-development/dt-216p2/"
      },
      {
        "label": "ClinicalTrials.gov — NCT06874010",
        "url": "https://clinicaltrials.gov/study/NCT06874010"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://www.designtx.com/our-programs/#friedreich-ataxia-program"
      }
    ],
    "note": "DT-216 ilk nesildir; enjeksiyon yeri tolerabilitesi sorunları nedeniyle durduruldu. DT-216P2 ikinci nesil geliştirme adayıdır; iki ayrı aktif program gibi sayılmamalıdır."
  },
  {
    "slug": "nomlabofusp-cti-1601",
    "name": "Nomlabofusp (CTI-1601)",
    "aliases": "Larimar nomla FORWARD-FA",
    "developer": "Larimar Therapeutics",
    "type": "Frataksin protein replasmanı",
    "goal": "Hücrelere ve mitokondrilere frataksin proteini ulaştırıp protein eksikliğini gidermek.",
    "mechanism": "Hücreye geçiş sağlayan peptit ve mitokondri hedefleme dizisi ile birleştirilmiş frataksin proteini, deri altı uygulama sonrası hücre ve mitokondriye taşınmak üzere tasarlanmıştır.",
    "phase": "Faz 3",
    "activity": "active",
    "status": "FORWARD-FA: hasta alıyor (9 Ekim 2026 kayıt güncellemesi). Açık etiketli takip ve kademeli FDA başvurusu sürüyor; ruhsatlı değil.",
    "humanData": "Erken çalışmalarda doku frataksin artışı bildirildi. Açık etiketli klinik eğilimler doğal seyir gruplarıyla karşılaştırılmıştır; randomize eşzamanlı kontrol değildir. Anafilaksi riski bildirilmiştir. FORWARD-FA için henüz klinik sonuç açıklanmadı.",
    "events": [
      {
        "date": "20 Mart 2026",
        "label": "FARA/Larimar klinik program bilgilendirme toplantısı",
        "url": "https://www.curefa.org/drug-development/nomlabofusp/"
      },
      {
        "date": "29 Haziran 2026",
        "label": "Kademeli BLA başvurusunun ilk bölümü ve açık etiketli veriler",
        "url": "https://investors.larimartx.com/news-releases/news-release-details/larimar-therapeutics-reports-positive-open-label-data-and"
      },
      {
        "date": "5 Ağustos 2026 · tahmini",
        "label": "FORWARD-FA başlangıcı; sicilde tahmini, gerçekleşmiş kabul edilmez",
        "url": "https://clinicaltrials.gov/study/NCT07778836"
      },
      {
        "date": "Temmuz 2029 · tahmini",
        "label": "FORWARD-FA birincil tamamlanma; sonuç duyurusu değil",
        "url": "https://clinicaltrials.gov/study/NCT07778836"
      }
    ],
    "sources": [
      {
        "label": "FARA — Nomlabofusp (CTI-1601)",
        "url": "https://www.curefa.org/drug-development/nomlabofusp/"
      },
      {
        "label": "ClinicalTrials.gov — NCT07778836",
        "url": "https://clinicaltrials.gov/study/NCT07778836"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://larimartx.com/our-programs/cti-1601/"
      }
    ],
    "note": "Larimar ilaç adı değil, geliştirici şirketin adıdır. FA adayı nomlabofusp, eski adı CTI-1601’dir; leriglitazone ile aynı molekül değildir. BLA başvurusu, onay anlamına gelmez."
  },
  {
    "slug": "vatiquinone",
    "name": "Vatiquinone (PTC-743)",
    "aliases": "PTC743 EPI-743 PROVE-FA MOVE-FA",
    "developer": "PTC Therapeutics",
    "type": "Oksidatif stresi hedefleyen küçük molekül",
    "goal": "Mitokondriyal işlevi korumak; oksidatif stres ve ferroptozla ilişkili hasarı azaltmak.",
    "mechanism": "Ağızdan alınan küçük molekül 15-lipoksijenaz yolunu inhibe ederek lipid oksidasyonu ve demire bağımlı hücre ölümünü azaltmayı amaçlıyor.",
    "phase": "Faz 3",
    "activity": "active",
    "status": "PROVE-FA: 14 Ağustos 2026 tarihli son sicil kaydına göre henüz hasta almıyor. Aktif geliştirme, ruhsatlı değil.",
    "humanData": "MOVE-FA birincil mFARS sonlanım noktasını karşılamadı. FDA Ağustos 2025’te ek etkinlik verisi isteyen tam yanıt mektubu verdi. PROVE-FA için henüz klinik sonuç açıklanmadı; açık etiketli ve doğal seyir karşılaştırmalı tasarımın sınırlılıkları vardır.",
    "events": [
      {
        "date": "22 Haziran 2026",
        "label": "FARA/PTC PROVE-FA bilgilendirme toplantısı",
        "url": "https://www.curefa.org/drug-development/vatiquinone-ptc-743/"
      },
      {
        "date": "15 Ağustos 2026 · tahmini",
        "label": "PROVE-FA planlanan başlangıcı; sicilde henüz hasta almıyor",
        "url": "https://clinicaltrials.gov/study/NCT07681713"
      },
      {
        "date": "15 Mart 2029 · tahmini",
        "label": "PROVE-FA birincil tamamlanma; sonuç duyurusu değil",
        "url": "https://clinicaltrials.gov/study/NCT07681713"
      }
    ],
    "sources": [
      {
        "label": "FARA — Vatiquinone (PTC-743)",
        "url": "https://www.curefa.org/drug-development/vatiquinone-ptc-743/"
      },
      {
        "label": "ClinicalTrials.gov — NCT04577352",
        "url": "https://clinicaltrials.gov/study/NCT04577352"
      },
      {
        "label": "ClinicalTrials.gov — NCT07681713",
        "url": "https://clinicaltrials.gov/study/NCT07681713"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://www.ptcbio.com/our-science/ferroptosis-and-inflammation/"
      }
    ],
    "note": "Faz 3 araştırma aşamasıdır; FDA onayı değildir. Geçmiş bir planlanan başlangıç tarihi, çalışmanın başladığını tek başına göstermez."
  },
  {
    "slug": "nbib-223",
    "name": "NBIB-223 (frataksin)",
    "aliases": "FACET Neurocrine Voyager",
    "developer": "Neurocrine Biosciences / Voyager Therapeutics",
    "type": "AAV gen ekleme",
    "goal": "Beyin ve kalp dahil FA’dan etkilenen dokulara işlevsel FXN geni taşımak.",
    "mechanism": "Voyager’ın değiştirilmiş AAV TRACER kapsidi ile damar içi gen aktarımı araştırılıyor.",
    "phase": "Faz 1",
    "activity": "active",
    "status": "FARA Faz I listeliyor; FACET ilk klinik çalışma olarak duyuruldu. İlk dozlama ve hasta alımı sicil kaydı bu kontrolde doğrulanmadı.",
    "humanData": "Henüz klinik sonuç açıklanmadı. Preklinik bulgular insanlarda etkinlik veya güvenlilik kanıtı değildir.",
    "events": [
      {
        "date": "7 Ekim 2026",
        "label": "FACET ilk klinik çalışma duyurusu",
        "url": "https://www.curefa.org/news/community-statement-neurocrine-biosciences-announces-the-first-clinical-study-of-nbib-223-the-facet-study-an-investigational-gene-therapy-for-fa/"
      },
      {
        "label": "İlk dozlama ve klinik sonuç paylaşım tarihi doğrulanmadı",
        "url": "https://www.curefa.org/drug-development/neurocrine-biosciences-voyager-therapeutics-aav-gene-therapy/"
      }
    ],
    "sources": [
      {
        "label": "FARA — NBIB-223 (frataksin)",
        "url": "https://www.curefa.org/drug-development/neurocrine-biosciences-voyager-therapeutics-aav-gene-therapy/"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://www.voyagertherapeutics.com/pipeline-overview/"
      }
    ],
    "note": "Doğrulanmış NCT numarası bulunmadığı için bir kayıt numarası veya çalışma başlangıç tarihi eklenmedi."
  },
  {
    "slug": "gv101",
    "name": "GV101 (ROCK2 inhibitörü)",
    "aliases": "Graviton",
    "developer": "Graviton BioScience",
    "type": "Gen ifadesini artıran küçük molekül",
    "goal": "ROCK2 inhibisyonuyla frataksin üretimini artırmak.",
    "mechanism": "Ağızdan alınan selektif ROCK2 inhibitörü; gen ifadesi, inflamasyon ve metabolizma yollarını düzenlemeyi amaçlar.",
    "phase": "Faz 2",
    "activity": "active",
    "status": "FDA IND izni 7 Ağustos 2026 (Graviton duyurusu 11 Ağustos 2026); planlanan 12 haftalık, randomize, plasebo kontrollü Faz 2 (en fazla 48 kişi). ClinicalTrials.gov kaydı NCT07870590 13 Ekim 2026’da yayımlandı: Faz 2, Not yet recruiting, 48 hedef katılımcı, 16–40 yaş, tek merkez CLINiLABS (Eatontown, New Jersey). Son kontrol 14 Ekim 2026; açık katılım yok.",
    "humanData": "Henüz FA’ya özgü klinik sonuç açıklanmadı. FA dışı insan çalışmalarındaki tolerabilite ve kan hücresinde frataksin bulguları FA’da klinik yarar kanıtı değildir.",
    "events": [
      {
        "date": "13 Ağustos 2026",
        "label": "FA için IND izni duyurusu",
        "url": "https://www.curefa.org/drug-development/gv101-rock2-inhibitor/"
      },
      {
        "date": "13 Ekim 2026",
        "label": "ClinicalTrials.gov Faz 2 kaydı yayımlandı (NCT07870590, Not yet recruiting)",
        "url": "https://clinicaltrials.gov/study/NCT07870590"
      },
      {
        "label": "Beklenen: Faz 2 hasta alımı başlangıcı 2027 ilk çeyrek (şirket beklentisi, kesin değil)",
        "url": "https://gravitoncorp.com/news/fda-fa-ind"
      }
    ],
    "sources": [
      {
        "label": "FARA — GV101 (ROCK2 inhibitörü)",
        "url": "https://www.curefa.org/drug-development/gv101-rock2-inhibitor/"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://gravitoncorp.com/pipeline"
      },
      {
        "label": "ClinicalTrials.gov — NCT07870590",
        "url": "https://clinicaltrials.gov/study/NCT07870590"
      },
      {
        "label": "Graviton BioScience — IND izni basın duyurusu, 11 Ağustos 2026",
        "url": "https://gravitoncorp.com/news/fda-fa-ind"
      },
      {
        "label": "Hakemli makale — ROCK1/ROCK2 inhibisyonu ve FXN (PubMed 40404357)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40404357/"
      }
    ],
    "note": "NCT06979505 obezite çalışmasıdır; FA çalışması gibi gösterilmez."
  },
  {
    "slug": "ppl-001",
    "name": "PPL-001",
    "aliases": "Papillon CRISPR HSPC",
    "developer": "Papillon Therapeutics",
    "type": "Gen düzenlenmiş hücre tedavisi",
    "goal": "Hastanın kan yapıcı kök/öncül hücrelerinde FXN mutasyonunu düzeltmek.",
    "mechanism": "Gen düzenlenmiş hematopoietik kök ve öncül hücre yaklaşımı; işlenmiş hücrelerin nakliyle dokularda işlevsel frataksin desteği araştırılıyor.",
    "phase": "Preklinik",
    "activity": "active",
    "status": "FARA aktif preklinik; IND öncesi çalışmalar sürüyor.",
    "humanData": "Henüz insanlarda klinik sonuç açıklanmadı. 15 Ekim 2026 JCI yayını (10.1172/JCI209546), mPPL-001 fare analoğunda 13 tedavi ve 11 mock HSPC fare ile dokusal frataxin artışı ve motor/serebellar/kalp/pankreas bulguları bildirdi; WT ve tedavisiz kontroller 9’ar fareydi. Miyeloablatif hazırlık, nakil ve gen düzenlemenin insan güvenliliği veya etkililiği gösterilmedi.",
    "checked": "29 Ekim 2026",
    "events": [
      {
        "date": "21 Temmuz 2026",
        "label": "PPL-001 üretiminin otomasyonu için iş birliği duyurusu",
        "url": "https://www.curefa.org/drug-development/ppl-001/"
      },
      {
        "label": "İlk insan çalışması ve veri paylaşımı tarihi açıklanmadı",
        "url": "https://www.curefa.org/drug-development/ppl-001/"
      }
    ],
    "sources": [
      { "label": "JCI — hakemli preklinik yayın, 15 Ekim 2026; DOI 10.1172/JCI209546", "url": "https://www.jci.org/articles/view/209546" },
      {
        "label": "FARA — PPL-001",
        "url": "https://www.curefa.org/drug-development/ppl-001/"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://www.papillon-tx.com/"
      }
    ]
  },
  {
    "slug": "leriglitazone-min-102",
    "name": "Leriglitazone (MIN-102)",
    "aliases": "Minoryx FRAMES",
    "developer": "Minoryx Therapeutics",
    "type": "Oksidatif stresi hedefleyen küçük molekül",
    "goal": "Tarihsel FA programında mitokondriyal işlev ve nörolojik hasarı hedeflemek.",
    "mechanism": "Ağızdan alınan PPAR-gama agonisti; hücresel metabolizma ve antioksidan yanıtları düzenlemeyi amaçlamıştır.",
    "phase": "Tarihsel Faz 2",
    "activity": "inactive",
    "status": "FARA: INACTIVE / pasif FA programı. Aktif FA Faz 3 değildir.",
    "humanData": "FRAMES: 39 katılımcı, 32 tamamlayan; randomize plasebo kontrollü Faz 2. MR ile ölçülen servikal omurilik değişimi birincil sonlanım noktasında gruplar arasında fark yoktu. İkincil sinyaller kesin klinik yarar kanıtlamaz; ödem ve kilo artışı bildirildi.",
    "events": [
      {
        "date": "Aralık 2020",
        "label": "FRAMES ilk sonuçları",
        "url": "https://www.curefa.org/drug-development/leriglitazone-min-102/"
      },
      {
        "label": "FA için yeni aktif çalışma veya yaklaşan etkinlik doğrulanmadı",
        "url": "https://www.curefa.org/drug-development/leriglitazone-min-102/"
      }
    ],
    "sources": [
      {
        "label": "FARA — Leriglitazone (MIN-102)",
        "url": "https://www.curefa.org/drug-development/leriglitazone-min-102/"
      },
      {
        "label": "ClinicalTrials.gov — NCT03917225",
        "url": "https://clinicaltrials.gov/study/NCT03917225"
      },
      {
        "label": "Resmi geliştirici — program bilgileri",
        "url": "https://www.minoryx.com/our-pipeline-overview/"
      }
    ],
    "note": "Larimar/nomlabofusp ile karıştırılmamalıdır. Leriglitazone’un başka hastalıklar için Faz 3 çalışmaları, aktif FA Faz 3 programı anlamına gelmez."
  }
];
