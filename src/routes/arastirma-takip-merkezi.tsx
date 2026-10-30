import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
import { AlertSignup, ResearchNews, ResearchTracker, StudyFinder } from "@/components/portal/research-tracker";
import { NextSteps } from "@/components/portal/guidance";

export const Route = createFileRoute("/arastirma-takip-merkezi")({
  head: () => pageHead(
    "FA Araştırma Takip Merkezi",
    "Friedreich ataksisi klinik çalışmaları: Onaylı, Faz 3, Faz 2, Faz 1 ve preklinik durumlar, Türkiye'den katılım bilgisi ve resmi iletişim kanalları.",
  ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle title="FA Araştırma Takip Merkezi" description="Klinik çalışmaları ve geliştirilmekte olan tedavileri aşamalarına göre izleyin; Türkiye'den katılım ve resmi iletişim bilgilerini görün." />
      <ResearchNews />
      <StudyFinder />
      <ResearchTracker />
      <AlertSignup />
      <div className="max-w-3xl"><NextSteps /></div>
    </main>
  ),
});

