import { createFileRoute } from "@tanstack/react-router";
import { Community } from "@/components/portal/community";
import { communityQueryOptions } from "@/lib/community-queries";
import { pageHead } from "@/lib/portal-data";

export const Route = createFileRoute("/fa-toplulugu")({
  head: () => pageHead("FA Türkiye Topluluğu — Hayat Hikâyeleri ve Dayanışma", "FA hastaları ve yakınları için rumuzlu veya anonim hayat hikâyeleri, fotoğraflar ve yanıtlı sohbetler; gizliliğe saygılı, moderasyonlu topluluk."),
  loader: ({ context }) => context.queryClient.ensureQueryData(communityQueryOptions),
  component: Community,
});
