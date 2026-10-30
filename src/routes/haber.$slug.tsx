import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticlePage } from "@/components/portal/portal";
import { articles, pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/haber/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData?.title ?? "Haber bulunamadı",
      loaderData?.description ?? "İstenen araştırma haberi bulunamadı.",
    ),
  component: ArticleView,
});
function ArticleView() {
  const a = Route.useLoaderData();
  return <ArticlePage article={a} />;
}

