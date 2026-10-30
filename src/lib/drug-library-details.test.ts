import { describe, expect, it } from "vitest";
import { drugs } from "./drug-library";
import { drugLibraryDetails } from "./drug-library-details";
import { researchNewsDetails } from "./research-news-details";

describe("detailed treatment library", () => {
  it("keeps all 22 entries and requires individual complete narratives", () => {
    expect(drugs).toHaveLength(22);
    for (const drug of drugs) {
      const detail = drugLibraryDetails[drug.slug];
      expect(detail, drug.slug).toBeDefined();
      if (!detail) throw new Error(`Missing detailed text: ${drug.slug}`);
      expect(detail.sections.length).toBeGreaterThanOrEqual(6);
      expect(detail.sections.flatMap(section => section.paragraphs).join(" ").split(/\s+/).length).toBeGreaterThan(230);
      expect(detail.sources.length).toBeGreaterThan(0);
      expect(drug.sources.some(source => !source.url.includes("search"))).toBe(true);
    }
  });
  it("shares full verified evidence across news and the three matching drugs", () => {
    expect(drugLibraryDetails["lx2006"]).toBe(researchNewsDetails["lx2006-lexeo-mds-2026-guncellemesi"]);
    expect(drugLibraryDetails["nomlabofusp-cti-1601"]).toBe(researchNewsDetails["nomlabofusp-forward-fa-faz-3-guncel-durum"]);
    expect(drugLibraryDetails["vatiquinone"]).toBe(researchNewsDetails["vatiquinone-prove-fa-yeni-faz-3-plani"]);
  });
  it("retains approved, supportive, unproven and experimental separation", () => {
    expect(drugs.filter(drug => drug.category === "ruhsatli").map(drug => drug.slug)).toEqual(["omaveloksolon-skyclarys"]);
    expect(drugs.find(drug => drug.slug === "leriglitazone-min-102")?.category).toBe("kanitlanmamis");
    for (const slug of ["lx2006", "nomlabofusp-cti-1601", "vatiquinone"]) {
      expect(drugs.find(drug => drug.slug === slug)?.category).toBe("gelistirme");
    }
  });
});
