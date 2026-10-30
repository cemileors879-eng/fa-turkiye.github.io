import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/fa-nedir")({
  head: () =>
    pageHead(
      "Friedreich Ataksisi Nedir?",
      "Friedreich ataksisi, frataxin, kalıtım, belirtiler ve multidisipliner bakım hakkında anlaşılır temel bilgiler.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="Friedreich Ataksisi Nedir?"
        description="Hastalar ve aileler için bilimsel temellere dayanan bir başlangıç rehberi."
      />
      <article className="article-body max-w-3xl">
        <h2>Friedreich ataksisi (FA)</h2>
        <p>
          Friedreich ataksisi, hareket koordinasyonunu etkileyen, kalıtsal ve ilerleyici bir
          hastalıktır. Çoğu kişide FXN genindeki GAA tekrarlarının artışı, frataxin adlı proteinin
          azalmasına yol açar. Frataxin hücrelerin enerji üretiminde görev alan mitokondriler için
          önemlidir.
        </p>
        <h2>Hangi belirtiler görülebilir?</h2>
        <p>
          Denge ve yürüme güçlüğü, konuşma ve koordinasyon değişiklikleri görülebilir. Kalp kası
          etkilenmesi, skolyoz ve diyabet de hastalığa eşlik edebilir. Başlangıç yaşı ve ilerleme
          hızı kişiden kişiye değişir; bir araştırmadaki ortalama sonuç herkesin hastalık seyrini
          yansıtmaz.
        </p>
        <h2>Kalıtım ve tanı</h2>
        <p>
          FA genellikle otozomal resesif kalıtılır. Tanı klinik değerlendirme ve genetik testlerle
          konur. Aile üyelerinin riskleri ve taşıyıcılık için genetik danışmanlık önemlidir.
        </p>
        <h2>Bakım ve araştırma</h2>
        <p>
          Nöroloji, kardiyoloji, rehabilitasyon ve ihtiyaç duyulan diğer uzmanlıkların ortak takibi
          önemlidir. Deneysel tedaviler ile onaylı tedaviler farklıdır; ülkeler arasında onay ve
          erişim koşulları değişebilir. Araştırma haberleri kişisel bakım planının yerine geçmez.
        </p>
        <div className="notice mt-7">
          Bu site bilgilendirme amaçlıdır; tıbbi tavsiye değildir. Tanı ve tedavi kararlarını uzman
          hekiminizle değerlendirin.
        </div>
        <h2>Orijinal Kaynaklar</h2>
        <a
          className="text-brand underline"
          href="https://www.curefa.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FARA — Friedreich ataksisi hakkında
        </a>
        <br />
        <a
          className="text-brand underline"
          href="https://www.ninds.nih.gov/health-information/disorders/friedreich-ataxia"
          target="_blank"
          rel="noopener noreferrer"
        >
          NINDS — Friedreich Ataxia
        </a>
      </article>
    </main>
  ),
});

