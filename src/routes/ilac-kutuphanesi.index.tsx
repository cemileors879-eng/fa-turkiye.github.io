import { createFileRoute } from "@tanstack/react-router";
import { DrugLibrary } from "@/components/portal/drug-library";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/ilac-kutuphanesi/")({
  head: () =>
    pageHead(
      "İlaç ve Tedavi Kütüphanesi",
      "Friedreich ataksisinde ruhsatlı, destekleyici, kanıtlanmamış ve deneysel tedaviler; kanıt düzeyi, riskler ve kaynaklarla.",
    ),
  component: DrugLibrary,
});

