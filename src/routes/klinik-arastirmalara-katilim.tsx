import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
import { TrialParticipation } from "@/components/portal/trial-participation";
import { candidateParticipation, participationChecked } from "@/lib/trial-participation";

export const Route = createFileRoute("/klinik-arastirmalara-katilim")({
  head: () => pageHead(
    "Klinik Araştırmalara Katılım",
    "Friedreich ataksisi klinik çalışmalarına başvuru adımları, resmi çalışma kayıtları ve doğrulanmış sponsor iletişimleri tek sayfada.",
  ),
  component: Participation,
});

function Participation() {
  const slugs = Object.keys(candidateParticipation);
  return (
    <main className="page-width py-9 max-w-4xl">
      <PageTitle title="Klinik Araştırmalara Katılım" description="Başvuru adımları, resmi çalışma kayıtları ve yalnız resmi kaynaklarda yayımlanmış iletişim bilgileri." />
      <section aria-labelledby="steps-title" className="rounded-lg border border-border bg-card p-4 sm:p-6">
        <h2 id="steps-title" className="text-xl font-extrabold text-primary">Başvuru adımları</h2>
        <ol className="list-decimal pl-5 mt-3 text-sm leading-7">
          <li>Genetik test raporunuzu ve güncel klinik bilgilerinizi hekiminizle hazırlayın.</li>
          <li>Aşağıdan ilgili çalışmanın alım durumunu, yaş ve temel kriterlerini inceleyin.</li>
          <li>Resmi kayıttaki iletişim kanalına yazın; yurtdışından katılımın mümkün olup olmadığını ve seyahat koşullarını sorun.</li>
          <li>Nihai uygunluğu yalnız araştırma ekibi belirler; iletişime geçmek kabul anlamına gelmez.</li>
        </ol>
        <p className="text-xs text-muted-foreground mt-3">Bilgiler {participationChecked} tarihinde resmi kayıtlardan kontrol edildi. Avrupa merkezleri ve ayrıntılı ilaç bilgisi için <Link to="/ilac-kutuphanesi" className="text-brand font-bold">İlaç Kütüphanesi</Link> detay sayfalarına bakın.</p>
      </section>
      {slugs.map((slug) => <TrialParticipation key={slug} slug={slug} headingId={`participation-${slug}`} title={`${slug.replace(/-/g, " ").toUpperCase()} — katılım ve iletişim`} />)}
    </main>
  );
}

