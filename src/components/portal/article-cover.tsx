import type { ArticleCover as Cover } from "@/lib/portal-data";

export function ArticleCover({ cover, priority = false }: { cover: Cover; priority?: boolean }) {
  return (
    <img
      src={cover.src}
      alt={cover.alt}
      width={cover.width}
      height={cover.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
