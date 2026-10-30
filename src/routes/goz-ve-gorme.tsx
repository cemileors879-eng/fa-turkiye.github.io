import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/goz-ve-gorme")({
  head: () =>
    pageHead(
      "FA’da Göz ve Görme",
      "Friedreich ataksisinde görme ve göz sağlığı: olası değişiklikler, ne zaman uzmana başvurmalı, pratik destekler ve araştırma geçmişi.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="FA’da Göz ve Görme"
        description="Friedreich ataksisinde görme değişiklikleri hakkında hastalar ve aileler için anlaşılır ve ihtiyatlı bir bilgilendirme."
      />
      <article className="article-body max-w-3xl">
        <h2>Herkeste görme kaybı olur mu?</h2>
        <p>
          Hayır. Friedreich ataksisi olan herkeste belirti veren görme kaybı gelişmez. Araştırmalar,
          görme siniri (optik sinir) tutulumunun FA’da sık olabildiğini, ancak çoğu zaman hiç belirti
          vermeden, yalnızca özel göz muayenelerinde saptanabildiğini gösteriyor. Buna “klinik altı”
          (subklinik) tutulum denir. Şiddetli görme kaybı ise FA’da seyrektir.
        </p>
        <h2>Hangi değişiklikler görülebilir?</h2>
        <p>FA’da bildirilen görme ve göz hareketi değişiklikleri şunları içerebilir:</p>
        <ul>
          <li>Düşük kontrastlı görüntüleri ayırt etmede güçlük (kontrast duyarlılığında azalma).</li>
          <li>Renk görmede değişiklikler.</li>
          <li>Çevresel (yan) görme alanında daralma.</li>
          <li>Merkezi görmede azalma (daha seyrek).</li>
          <li>
            Bakışı sabit tutmada güçlük ve göz hareketlerinde düzensizlikler (örneğin istem dışı göz
            hareketleri).
          </li>
        </ul>
        <p>
          Bu değişikliklerin varlığı ve şiddeti kişiden kişiye çok değişir; bir kişide görülen
          bulgular başka bir kişide görülmeyebilir.
        </p>
        <h2>Ne zaman göz hekimine başvurmalı?</h2>
        <p>
          Yeni başlayan veya hızla kötüleşen bir görme değişikliği fark ederseniz beklemeden bir göz
          hekimine (oftalmolog) başvurun. Görme değişiklikleri her zaman FA’ya bağlı olmayabilir;
          diyabete bağlı göz hastalığı, katarakt ve glokom (göz tansiyonu) gibi tedavi edilebilir
          başka nedenlerin de değerlendirilmesi önemlidir. FA’da diyabet eşlik edebildiğinden düzenli
          göz kontrolleri ayrıca değerlidir.
        </p>
        <h2>Pratikte neler yapılabilir?</h2>
        <ul>
          <li>Düzenli göz muayenesi ve oftalmoloji takibi.</li>
          <li>Uygunsa gözlük veya mercek ile kırma kusurlarının düzeltilmesi.</li>
          <li>Kontrastı artıran ve büyütme sağlayan yardımcı araçlar.</li>
          <li>Gerektiğinde az görenler rehabilitasyonu (low-vision) uzmanına yönlendirme.</li>
        </ul>
        <p>
          Önemli: Şu anda FA’ya özgü, görme kaybını geri döndürdüğü kanıtlanmış onaylı bir tedavi
          yoktur. Skyclarys (omaveloxolone) dahil mevcut onaylı tedavilerin görme kaybını tedavi
          ettiği kanıtlanmamıştır; bu sayfadaki bilgiler herhangi bir ilacın görme üzerine etkisi
          olduğu anlamına gelmez.
        </p>
        <h2>Araştırma geçmişi</h2>
        <div className="notice mt-4">
          <strong>Elamipretide çalışması (tamamlandı):</strong> FARA ve Children’s Hospital of
          Philadelphia (CHOP) destekli, araştırmacı girişimli bir Faz I/II pilot çalışması, ileri
          evre FA belirtileri arasında görme kaybını da hedefleyerek elamipretide adlı araştırma
          ilacını değerlendirdi. Çalışma tamamlanmıştır ve hasta alımı kapanmıştır; bu bir tedavi
          seçeneği değildir.
        </div>
        <p>
          Yayımlanan sonuçlarda yüksek doz grubunda, görme keskinliği dahil ölçülen sonuçlarda olumlu
          bir sinyal bildirildi. Ancak katılımcıların yaklaşık yarısı çalışmadan ayrıldı ve 104.
          haftada yalnızca 9 katılımcının ölçülebilir verisi vardı. Bu küçük ve eksik verili çalışma,
          elamipretidin FA’da etkili olduğunu kanıtlamaz. FARA, FA’ya yönelik elamipretide programını
          “aktif değil” (inactive) olarak listeliyor.
        </p>
        <p>
          Önemli ayrım: Elamipretide (Forzinity), ABD’de FDA tarafından <strong>Barth sendromu</strong>{" "}
          için (30 kg ve üzeri hastalarda) hızlandırılmış onay almıştır. Bu onay Friedreich ataksisi
          veya FA’ya bağlı görme kaybı için geçerli değildir; ilaç FA için onaylı veya erişilebilir
          bir tedavi değildir. Bu bilgiler tedavi önerisi olarak yorumlanmamalıdır.
        </p>
        <div className="notice mt-7">
          Bu sayfa bilgilendirme amaçlıdır; tıbbi tavsiye değildir. Görme ile ilgili tüm kararları
          göz hekiminiz ve nöroloğunuzla birlikte değerlendirin.
        </div>
        <h2>Orijinal Kaynaklar</h2>
        <a
          className="text-brand underline"
          href="https://frdaguidelines.org/3-7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FRDA Klinik Yönetim Kılavuzu — Görme bölümü
        </a>
        <br />
        <a
          className="text-brand underline"
          href="https://www.curefa.org/clinical-studies/a-pilot-investigator-initiated-study-to-evaluate-the-safety-tolerability-and-efficacy-of-elamipretide-in-the-treatment-of-advanced-symptoms-of-friedreich-ataxia-frda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FARA — Elamipretide pilot çalışması (Faz I/II, tamamlandı)
        </a>
        <br />
        <a
          className="text-brand underline"
          href="https://www.curefa.org/drug-development/elamipretide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FARA — Elamipretide ilaç geliştirme sayfası (FA programı: aktif değil)
        </a>
        <br />
        <a
          className="text-brand underline"
          href="https://www.fda.gov/news-events/press-announcements/fda-grants-accelerated-approval-first-treatment-barth-syndrome"
          target="_blank"
          rel="noopener noreferrer"
        >
          FDA — Forzinity (elamipretide) Barth sendromu hızlandırılmış onayı
        </a>
      </article>
    </main>
  ),
});

