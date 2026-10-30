import { describe, expect, it } from "vitest";
import { articles, latestUpdates } from "./portal-data";
import { drugs } from "./drug-library";
import { drugLibraryDetails } from "./drug-library-details";
import { sgt212EuDesignation } from "./sgt212-orphan-designation";

describe("SGT-212 regulatory update", () => {
  it("keeps one new dated story and preserves the separate August story", () => {
    expect(articles.filter(a => a.slug === "sgt-212-ab-yetim-ilac-tayini")).toHaveLength(1);
    expect(articles.find(a => a.slug === "sgt-212-ab-yetim-ilac-tayini")?.date).toBe("26 Ekim 2026");
    expect(articles.find(a => a.slug === "sgt-212-falcon-calismasi")?.date).toBe("6 Ağustos 2026");
  });
  it("records the two distinct regulatory dates and designation identity", () => {
    expect(sgt212EuDesignation).toEqual({ number: "EU/3/26/3310", opinionDate: "2026-09-10", decisionDate: "2026-10-19", sponsor: "Voisin Consulting Life Sciences", developer: "Solid Biosciences", phase: "Faz I", outcome: "Olumlu", status: "Aktif" });
  });
  it("shares the official EMA source with the existing library entry", () => {
    const url = "https://iris.ema.europa.eu/odpublicregister/";
    expect(drugs.find(d => d.slug === "sgt-212")?.sources.some(s => s.url === url)).toBe(true);
    expect(drugLibraryDetails["sgt-212"]?.sources.some(s => s.url === url)).toBe(true);
  });
});
