import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { Finder } from "@/components/portal/guidance";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/benim-icin")({
  head: () =>
    pageHead(
      "Benim İçin Ne Var?",
      "Yaş, ülke ve ilgi alanınıza göre uygun olabilecek Friedreich ataksisi araştırmalarını ve tedavi bilgilerini görün; kesin uygunluk hekim ve araştırma merkezince belirlenir.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="Benim için ne var?"
        description="Dört kısa soruyla ilginizi çekebilecek araştırmaları ve tedavi bilgilerini filtreleyin. Sonuçlar 'uygun olabilir' niteliğindedir; nihai değerlendirme hekiminize ve araştırma merkezine aittir."
      />
      <Finder />
    </main>
  ),
});

