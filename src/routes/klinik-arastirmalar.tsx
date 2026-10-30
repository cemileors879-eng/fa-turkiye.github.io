import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageTitle, EvidenceLegend } from "@/components/portal/portal";
import { ResearchPipeline } from "@/components/portal/research-pipeline";
import { EligibilityNotice, NextSteps } from "@/components/portal/guidance";
import { pageHead } from "@/lib/portal-data";
export const Route = createFileRoute("/klinik-arastirmalar")({
  head: () =>
    pageHead(
      "Klinik Araştırmalar",
      "Friedreich ataksisi klinik araştırmaları: hasta sayıları, fazlar, erken bulgular ve sınırlılıklar.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle title="Klinik Araştırmalar" description="Geliştirilmekte olan ilaçlar, gen tedavileri ve diğer araştırma yaklaşımları; doğrulanmış aşamaları, ayrıntılı haberleri ve resmi kaynaklarıyla. Preklinik ve tarihsel programlar ayrıca işaretlenmiştir; onaylı tedavi değildir." />
      <nav aria-label="Araştırma araçları" className="grid sm:grid-cols-2 gap-4 mb-6">
        <Link to="/arastirma-takvimi" className="quick-card"><strong>Araştırma Takvimi →</strong><span>Mevcut aday takvimleri, açıklanan tarihler ve beklenen veri paylaşımları.</span></Link>
        <Link to="/arastirma-takip-merkezi" className="quick-card"><strong>Araştırma Takip Merkezi →</strong><span>Katılımcı alımı, Türkiye’den katılım ve resmi iletişim yolları.</span></Link>
      </nav>
      <EligibilityNotice />
      <ResearchPipeline includeNews />
      <EvidenceLegend />
      <NextSteps />
    </main>
  ),
});

