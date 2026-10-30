import { queryOptions } from "@tanstack/react-query";
import { listCommunityPosts } from "./community.functions";

export const communityQueryOptions = queryOptions({
  queryKey: ["community", "approved"],
  queryFn: () => listCommunityPosts(),
  staleTime: 15_000,
});
