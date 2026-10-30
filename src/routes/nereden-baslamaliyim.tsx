import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { NextSteps, SourceList, TrustPanel } from "@/components/portal/guidance";
import { pageHead } from "@/lib/portal-data";

const sources = [
  { label: "Friedreich Ataksisi Klinik Bakım Kılavuzu (Corben ve ark., 2022) — Orphanet J Rare Dis, DOI", url: "https://doi.org/10.1186/s13023-022-02568-3" },
  { label: "FARA — Friedreich Ataxia Research Alliance", url: "https://www.curefa.org/" },
  { label: "ClinicalTrials.gov — Friedreich ataksisi çalışmaları", url: "https://clinicaltrials.gov/search?cond=Friedreich%20Ataxia" },
  { label: "EMA — Skyclarys (omaveloksolon) ürün bilgisi", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/skyclarys" },
];

export const Route = createFileRoute("/nereden-baslamaliyim")({
  head: () =>
    pageHead(
      "FA'ya Yeni Başlayanlar: Nereden Başlamalıyım?",
      "Friedreich ataksisi tanısından sonra takip başlıkları, görüşülebilecek uzmanlıklar ve araştırmaları güvenilir biçimde takip etme yolları.",
    ),
  component: Starter,
});

function Starter() {
  return (
    <main className="page-width py-9 max-w-3xl">
      <PageTitle
        title="FA'ya yeni başlayanlar: Nereden başlamalıyım?"
        description="Yeni tanı almış kişiler ve aileleri için sade bir başlangıç rehberi. Genel bilgi verir; kişisel takip planınızı hekiminizle birlikte oluşturun."
      />
      <TrustPanel updated="9 Ekim 2026" evidence="Uzman görüşüne dayalı klinik bakım kılavuzu" phase="" sources={sources} />
      <section className="starter-section">
        <h2>1. Tanıyı netleştirin</h2>
        <p>Friedreich ataksisi tanısı genetik testle doğrulanır. Test raporunuzu saklayın; hem takipte hem de klinik araştırmalara başvururken istenir. Aile planlaması ve kardeşler için tıbbi genetik uzmanıyla görüşmek yararlı olabilir.</p>
      </section>
      <section className="starter-section">
        <h2>2. Düzenli takip başlıkları</h2>
        <p>Uluslararası klinik bakım kılavuzu FA'nın birden çok organı etkileyebildiğini ve düzenli izlemin önemli olduğunu vurgular. Sıklığı ve kapsamı hekiminiz belirler:</p>
        <ul>
          <li><strong>Nörolojik takip:</strong> denge, yürüme, konuşma ve yutma.</li>
          <li><strong>Kalp:</strong> EKG ve ekokardiyografi ile kalp kası ve ritim takibi.</li>
          <li><strong>Kan şekeri:</strong> diyabet açısından düzenli kontrol.</li>
          <li><strong>Omurga ve ayak:</strong> skolyoz ve ayak şekil bozuklukları.</li>
          <li><strong>İşitme ve görme</strong> değişiklikleri.</li>
          <li><strong>Rehabilitasyon:</strong> fizyoterapi, ergoterapi ve gerektiğinde konuşma terapisi.</li>
          <li><strong>Ruh sağlığı:</strong> kaygı ve depresyon için destek almak tedavinin bir parçasıdır.</li>
        </ul>
      </section>
      <section className="starter-section">
        <h2>3. Tedavi seçeneklerini doğru kaynaktan öğrenin</h2>
        <p>Omaveloksolon (Skyclarys) ABD ve Avrupa'da 16 yaş ve üzeri için onaylıdır; Türkiye'deki ruhsat ve geri ödeme durumu hekiminiz ve TİTCK üzerinden doğrulanmalıdır. Diğer tedaviler belirtilere yöneliktir ya da araştırma aşamasındadır. Ayrıntılar için <Link to="/ilac-kutuphanesi" className="text-brand font-bold">İlaç ve Tedavi Kütüphanesi</Link>'ne bakın.</p>
      </section>
      <section className="starter-section">
        <h2>4. Araştırmaları güvenle takip edin</h2>
        <ul>
          <li>Çalışmaları ClinicalTrials.gov kayıt numarasıyla (NCT…) takip edin.</li>
          <li>FARA gibi hasta kuruluşlarının duyurularını izleyin.</li>
          <li>Şirket duyurularının hakemli yayınla aynı güçte olmadığını unutmayın.</li>
          <li>"Kesin tedavi" vaat eden, ücret isteyen veya kayıtsız uygulamalardan uzak durun.</li>
          <li>Sitemizdeki <Link to="/arastirma-takvimi" className="text-brand font-bold">Araştırma Takvimi</Link> ve <Link to="/benim-icin" className="text-brand font-bold">Benim için ne var?</Link> sayfaları başlangıç noktası olabilir.</li>
        </ul>
      </section>
      <section className="starter-section">
        <h2>Kaynaklar</h2>
        <SourceList sources={sources} />
      </section>
      <NextSteps />
    </main>
  );
}

