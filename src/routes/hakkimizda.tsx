import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/hakkimizda")({
  head: () =>
    pageHead(
      "Hakkımızda ve Yayın İlkeleri",
      "FA Türkiye’nin amacı, bilimsel şeffaflık, kaynak seçimi ve temkinli sağlık haberciliği ilkeleri.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="Hakkımızda"
        description="Bilgiyi paylaş. Araştırmayı takip et. Umudu bilimle büyüt."
      />
      <article className="article-body max-w-3xl">
        <h2>FA Türkiye’nin amacı</h2>
        <p>
          FA Türkiye – Friedreich Ataksisi Haber Merkezi, hastalar ve aileleri için
          araştırma ve tedavi geliştirme haberlerini anlaşılır Türkçe ile sunmayı amaçlar. Umudu,
          bilimsel belirsizlikleri gizlemeden paylaşır.
        </p>
        <p>
          FA Türkiye bir araştırma kurumu, ilaç şirketi veya klinik merkez değildir; klinik
          araştırma yürütmez ve ilaç geliştirmez. Sitede yer alan klinik çalışmalar ve bilimsel
          gelişmeler, bağımsız araştırma ekipleri, üniversiteler, ilaç şirketleri ve klinik
          merkezler tarafından yürütülen çalışmalar hakkında bilgilendirme ve haber içeriğidir.
        </p>
        <h2>Dernek</h2>
        <p>
          Friedreich ataksisi ile yaşayanlar ve aileleri için dernek bilgileri:{" "}
          <a href="https://fadern.com.tr/index.php" target="_blank" rel="noreferrer">FADERN resmi sitesi</a>. FA Türkiye bu sitede dernek başvurusu almaz; üyelik ve iletişim için derneğin kendi sitesini kullanın.
        </p>
        <h2>Yayın ilkelerimiz</h2>
        <ul>
          <li>Erken sinyalleri kesin etkinlik, kür veya onay olarak sunmayız.</li>
          <li>
            Hasta sayısını, klinik aşamayı, takip süresini ve kontrol grubu sınırlılıklarını
            belirtiriz.
          </li>
          <li>
            FARA, araştırma kayıtları, bilimsel yayınlar, kongre materyalleri ve resmi düzenleyici
            açıklamaları önceliklendiririz.
          </li>
          <li>Geliştirici şirketin duyurusunu bağımsız hakemli kanıttan ayırırız.</li>
          <li>Kaynak metinlerini kopyalamadan özgün Türkçe özetler hazırlarız.</li>
          <li>Doğrulanmamış güncel iddiaları “durum güncelleniyor” olarak işaretleriz.</li>
        </ul>
        <h2>Şeffaflık</h2>
        <p>
          Bu portal bir araştırma haber kaynağıdır; sağlık hizmeti sunmaz, araştırma yürütmez ve
          tedavi geliştirmez. Haberlerde adı geçen çalışmaların sorumluluğu ilgili araştırma
          ekiplerine, şirketlere ve merkezlere aittir. Araştırma beklentileri
          değişebilir. “En Çok Okunanlar” bölümü gerçek okuma verileri oluşana kadar açıkça
          işaretlenmiş editör seçkisidir. Laboratuvar görselleri temsilidir.
        </p>
        <div className="notice mt-7">Bu site bilgilendirme amaçlıdır; tıbbi tavsiye değildir.</div>
      </article>
    </main>
  ),
});

