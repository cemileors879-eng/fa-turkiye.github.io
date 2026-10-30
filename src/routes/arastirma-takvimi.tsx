import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, CalendarList } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
import { Info } from "lucide-react";
import { EligibilityNotice, NextSteps } from "@/components/portal/guidance";
import { ResearchPipeline } from "@/components/portal/research-pipeline";
export const Route = createFileRoute("/arastirma-takvimi")({
  head: () =>
    pageHead(
      "Araştırma Takvimi",
       "FA araştırma hattı: SGT-212, LX2006, DT-216P2, nomlabofusp, vatiquinone, NBIB-223, GV101 ve PPL-001; kaynaklı fazlar, tarihler ve pasif programlar.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="Araştırma Takvimi"
        description="Araştırma adayları için duyurulan bir sonraki veri paylaşımı ve takip dönemleri."
      />
      <EligibilityNotice />
      <ResearchPipeline />
      <div className="max-w-3xl">
        <h2 className="text-lg font-bold border-b border-border pb-4 mt-10">
          2027 · Beklenen veri paylaşımları
        </h2>
        <CalendarList />
        <div className="notice mt-7 flex gap-3">
          <Info size={18} className="shrink-0 mt-1" />
          <p>
            Bu tarihler geliştirici şirketlerin beklentileridir; kesinleşmiş takvim veya
            gerçekleşmiş sonuç değildir. Kayıt, takip ve analiz süreçlerine göre değişebilir.
          </p>
        </div>
        <NextSteps />
      </div>
    </main>
  ),
});

