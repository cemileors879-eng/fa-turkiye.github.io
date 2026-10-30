import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageTitle, TreatmentCenter } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
import { NextSteps } from "@/components/portal/guidance";
export const Route = createFileRoute("/tedaviler")({
  head: () =>
    pageHead(
      "Tedaviler — Skyclarys",
      "FA’ya yönelik onaylı Skyclarys (omaveloksolon): klinik kanıt, güvenlilik, ülkeye göre ruhsat ve Türkiye’de erişim belirsizlikleri.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="Tedaviler"
        description="FA’ya yönelik mevcut / onaylı ilaç: Skyclarys (omaveloksolon). Onay ülkeye ve yaşa göre değişir; Türkiye’deki erişim ayrıca doğrulanmalıdır. Kür veya kişisel tedavi önerisi değildir."
      />
      <TreatmentCenter />
      <div className="mt-7 border-y border-border py-5 text-sm leading-7">
        <Link to="/klinik-arastirmalar" className="text-brand font-bold">Geliştirilmekte olan ilaçlar ve gen tedavileri → Klinik Araştırmalar</Link>
        <p className="mt-2"><Link to="/ilac-kutuphanesi" className="text-brand font-bold">İlaç ve Tedavi Kütüphanesi</Link> içinde belirtilere yönelik destekleyici yaklaşımları ve tüm ayrıntılı kayıtları inceleyebilirsiniz.</p>
      </div>
      <NextSteps />
    </main>
  ),
});

