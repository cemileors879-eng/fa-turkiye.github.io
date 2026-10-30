import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Friedreich Ataksisi Haber Merkezi",
      "FA Türkiye: Friedreich ataksisi araştırmaları, tedavi geliştirme haberleri ve klinik çalışmalar. Bilimsel, anlaşılır ve temkinli Türkçe haberler.",
    ),
  component: Home,
});

