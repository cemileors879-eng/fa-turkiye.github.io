import { describe, expect, it } from "vitest";
import { articles, researchNews } from "./portal-data";
import { trackedStudies } from "./research-tracker";

describe("official research news snapshots", () => {
  it("adds three distinct reports without deleting existing records", () => {
    expect(articles).toHaveLength(15);
    expect(researchNews.map(a => a.treatment)).toEqual(["LX2006", "Nomlabofusp", "Vatiquinone"]);
    expect(new Set(articles.map(a => a.slug)).size).toBe(15);
  });
  it("matches registry contacts and published update dates to the tracker", () => {
    for (const news of researchNews) {
      const p = news.participation;
      if (!p) throw new Error("Missing participation");
      const study = trackedStudies.find(s => s.id === p.studyId);
      expect(p.email).toBe(study?.contact?.email);
      expect(p.phone).toBe(study?.contact?.phone);
      expect(p.registryUpdated).toBe(study?.registryUpdated);
      expect(p.registryUrl).toBe(study?.registryUrl);
      expect(news.sources.some(source => source.url === p.registryUrl)).toBe(true);
      expect(p.guidance).toContain("Türkiye");
      expect(news.warning).toContain("henüz onaylı değil");
    }
  });
  it("does not present the vatiquinone plan as active recruitment or estimated enrollment as actual", () => {
    expect(researchNews.find(a => a.treatment === "Vatiquinone")?.participation?.status).toBe("Henüz hasta almaya başlamadı");
    for (const news of researchNews) expect(news.patients).toContain("hedefleniyor");
  });
  it("provides full reports with mechanisms, safety, contextual comments and next steps", () => {
    for (const news of researchNews) {
      expect(news.sections.length).toBeGreaterThanOrEqual(8);
      const text = news.sections.flatMap(section => section.paragraphs ?? []).join(" ");
      expect(text.split(/\s+/).length).toBeGreaterThan(850);
      expect(text).toContain("doğrudan alıntı değil");
      expect(text).toContain("Türkiye");
      expect(text.toLocaleLowerCase("tr")).toMatch(/nihai uygunlu|kesin uygunluk kararı/);
      expect(news.readTime).not.toBe("4 dk okuma");
    }
  });
});
