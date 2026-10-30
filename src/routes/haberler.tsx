import { createFileRoute } from "@tanstack/react-router";
import { Listing } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/haberler")({
  validateSearch: (search: Record<string, unknown>): { q?: string } =>
    typeof search["q"] === "string" ? { q: search["q"] } : {},
  head: () =>
    pageHead(
      "Son Haberler",
      "Friedreich ataksisi araştırmalarındaki son gelişmeler. Tedavi, klinik aşama ve yıla göre haberleri arayın.",
    ),
  component: News,
});
function News() {
  const { q } = Route.useSearch();
  return <Listing key={q ?? ""} initialQuery={q ?? ""} />;
}

