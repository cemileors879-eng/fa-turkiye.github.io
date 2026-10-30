import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, EvidenceLegend } from "@/components/portal/portal";
import { pageHead } from "@/lib/portal-data";
import { ExternalLink } from "lucide-react";
const sources = [
  {
    name: "FARA",
    text: "Friedreich ataksisi araştırmaları, klinik çalışmalar ve hasta topluluğu kaynakları.",
    url: "https://www.curefa.org/",
  },
  {
    name: "ClinicalTrials.gov",
    text: "Çalışma tasarımı, katılım ölçütleri, merkezler ve resmi araştırma kayıtları. Kayıtlı olması etkinliğin kanıtlandığı anlamına gelmez.",
    url: "https://clinicaltrials.gov/search?cond=Friedreich%20Ataxia",
  },
  {
    name: "PubMed",
    text: "Hakemli bilimsel yayınları ve araştırma özetlerini incelemek için literatür araması.",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Friedreich+ataxia",
  },
  {
    name: "FDA",
    text: "ABD düzenleyici kurumunun ilaç onayları ve güvenlilik açıklamaları.",
    url: "https://www.fda.gov/",
  },
  {
    name: "EMA",
    text: "Avrupa İlaç Ajansının değerlendirmeleri ve resmi ilaç bilgileri.",
    url: "https://www.ema.europa.eu/",
  },
  {
    name: "TİTCK",
    text: "Türkiye’de düzenleyici durum ve resmi ilaç bilgileri için yetkili kurum.",
    url: "https://www.titck.gov.tr/",
  },
];
export const Route = createFileRoute("/bilimsel-kaynaklar")({
  head: () =>
    pageHead(
      "Bilimsel Kaynaklar",
      "FARA, ClinicalTrials.gov, bilimsel yayınlar ve düzenleyici kurumlar. FA araştırma haberlerini değerlendirmek için kaynak rehberi.",
    ),
  component: () => (
    <main className="page-width py-9">
      <PageTitle
        title="Bilimsel Kaynaklar"
        description="Birincil kaynaklara ulaşın; çalışma kayıtları, yayınlar ve resmi açıklamaları birlikte değerlendirin."
      />
      <div className="grid sm:grid-cols-2 gap-x-10">
        {sources.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-border py-6"
          >
            <h2 className="font-bold text-lg text-primary flex justify-between">
              {s.name}
              <ExternalLink size={17} className="text-brand" />
            </h2>
            <p className="text-sm text-muted-foreground leading-7 mt-2">{s.text}</p>
          </a>
        ))}
      </div>
      <EvidenceLegend />
      <p className="mt-6 text-sm leading-7 text-muted-foreground">
        Şirket duyuruları erken bilgi sağlayabilir ancak çıkar çatışması içerir. Kongre özeti, tam
        hakemli yayınla aynı ayrıntıyı sunmaz. Kontrol grubu, hasta sayısı ve takip süresi her zaman
        dikkate alınmalıdır.
      </p>
    </main>
  ),
});

