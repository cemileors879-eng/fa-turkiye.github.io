import { createFileRoute, notFound } from "@tanstack/react-router";
import { DrugDetail } from "@/components/portal/drug-library";
import { drugs } from "@/lib/drug-library";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/ilac-kutuphanesi/$slug")({
  loader: ({ params }) => {
    const drug = drugs.find((d) => d.slug === params.slug);
    if (!drug) throw notFound();
    return drug;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(loaderData.name + " — İlaç Kütüphanesi", `${loaderData.name}: hedef, mekanizma, kanıt düzeyi, riskler ve kaynaklar.`)
      : { meta: [{ title: "Kayıt bulunamadı | FA Türkiye" }, { name: "robots", content: "noindex" }] },
  component: () => <DrugDetail drug={Route.useLoaderData()} />,
});

