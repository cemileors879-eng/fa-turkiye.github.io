import { describe, expect, it } from "vitest";
import { articles, validateArticleCovers } from "./portal-data";

describe("article covers", () => {
  it("assigns a complete distinct cover to every existing record", () => {
    expect(articles).toHaveLength(15);
    expect(new Set(articles.map((article) => article.cover.src)).size).toBe(articles.length);
    expect(() => validateArticleCovers(articles)).not.toThrow();
  });

  it("rejects covers reused by different news records", () => {
    expect(() => validateArticleCovers([
      articles[0],
      { ...articles[1], cover: articles[0].cover },
    ])).toThrow("tekrar kullanılamaz");
  });

  it("rejects empty cover fields rather than assigning a shared default", () => {
    expect(() => validateArticleCovers([
      { ...articles[0], cover: { ...articles[0].cover, src: "" } },
    ])).toThrow("kapak gerekli");
  });
});
