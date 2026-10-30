import { describe, expect, it } from "vitest";
import { pipelineCandidates } from "./research-pipeline";
import { drugs } from "./drug-library";

describe("verified research pipeline", () => {
  it("lists LX2006 once with both trials under its single candidate", () => {
    const entries = pipelineCandidates.filter(c => c.slug === "lx2006");
    expect(entries).toHaveLength(1);
    expect(entries[0]?.studies?.map(s => s.name)).toEqual(["SUNRISE-FA", "SUNRISE-FA 2"]);
    expect(entries[0]?.studies?.map(s => s.url)).toEqual([
      "https://clinicaltrials.gov/study/NCT05445323", "https://clinicaltrials.gov/study/NCT07721025",
    ]);
  });
  it("retains the library and provides a unique detail entry for all ten candidates", () => {
    expect(drugs).toHaveLength(22);
    expect(pipelineCandidates).toHaveLength(10);
    expect(new Set(drugs.map(d => d.slug)).size).toBe(drugs.length);
    for (const c of pipelineCandidates) expect(drugs.some(d => d.slug === c.slug)).toBe(true);
  });
  it("distinguishes Larimar's protein therapy from inactive Minoryx research", () => {
    const nomla = pipelineCandidates.find(c => c.slug === "nomlabofusp-cti-1601");
    const min102 = pipelineCandidates.find(c => c.slug === "leriglitazone-min-102");
    expect(nomla?.developer).toBe("Larimar Therapeutics");
    expect(nomla?.phase).toBe("Faz 3");
    expect(min102?.activity).toBe("inactive");
    expect(min102?.phase).toBe("Tarihsel Faz 2");
  });
  it("preserves uncertainty rather than treating estimated dates as actual starts", () => {
    expect(pipelineCandidates.find(c => c.slug === "vatiquinone")?.status).toContain("henüz hasta almıyor");
    expect(pipelineCandidates.find(c => c.slug === "nomlabofusp-cti-1601")?.events.find(e => e.date?.startsWith("5 Ağustos"))?.date).toContain("tahmini");
    expect(pipelineCandidates.find(c => c.slug === "lx2006")?.phase).toBe("Faz 2");
  });
  it("requires complete profiles, direct sources and explicit undated milestones", () => {
    for (const c of pipelineCandidates) {
      for (const value of [c.developer, c.type, c.goal, c.mechanism, c.phase, c.status, c.humanData]) expect(value.trim().length).toBeGreaterThan(0);
      expect(c.sources.some(s => s.url.startsWith("https://www.curefa.org/drug-development/") || s.url === "https://clinicaltrials.gov/study/NCT07869654")).toBe(true);
      expect(c.sources.some(s => s.label.startsWith("Resmi geliştirici"))).toBe(true);
      if (c.slug !== "ati-105") expect(c.events.length).toBeGreaterThan(0);
    }
    expect(pipelineCandidates.find(c => c.slug === "ppl-001")?.events.some(e => e.date === undefined)).toBe(true);
  });
});
