import { describe, expect, it } from "vitest";
import { articles, existingDateSortKey, latestUpdates } from "./portal-data";

describe("news chronology", () => {
  it("lists newest first, ATI-105 currently on top", () => {
    expect(latestUpdates[0]?.slug).toBe("ati-105-saglikli-gonulluler-faz-1");
    for (let i = 1; i < latestUpdates.length; i++) {
      const previous = latestUpdates[i - 1];
      const current = latestUpdates[i];
      if (!previous || !current) throw new Error("Missing chronological record");
      expect(existingDateSortKey(previous)).toBeGreaterThanOrEqual(existingDateSortKey(current));
    }
  });
  it("puts a newer article first and day-less dates after dated ones of the same year", () => {
    const base = articles[0];
    if (!base) throw new Error("Missing article fixture");
    const newer = { ...base, slug: "x", date: "13 Ekim 2026", year: "2026" };
    const vague = { ...base, slug: "y", date: "MDS 2026", year: "2026" };
    const dated = { ...base, slug: "z", date: "2 Ocak 2026", year: "2026" };
    const sorted = [vague, dated, newer].sort((a, b) => existingDateSortKey(b) - existingDateSortKey(a));
    expect(sorted.map(a => a.slug)).toEqual(["x", "z", "y"]);
  });
});

