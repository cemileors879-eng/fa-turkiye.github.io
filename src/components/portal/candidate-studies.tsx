import { SponsorContact } from "./sponsor-contact";
import { EuropeSitesSummary } from "./europe-sites";
import type { ResearchCandidate } from "@/lib/research-pipeline";

export function CandidateStudies({ candidate }: { candidate: ResearchCandidate }) {
  if (!candidate.studies?.length) return <><SponsorContact slug={candidate.slug} /><EuropeSitesSummary slug={candidate.slug} /></>;
  return <><section className="mt-4 border-t border-border pt-3" aria-label={`${candidate.name} klinik çalışmaları`}>
    <h3 className="text-sm font-bold text-primary">Klinik çalışmalar</h3>
    <ul className="divide-y divide-border text-xs leading-6">
      {candidate.studies.map(study => <li key={study.url} className="py-2">
        <a href={study.url} target="_blank" rel="noreferrer" className="font-bold text-brand">{study.name} ↗</a>
        <p>{study.phase} · {study.status}</p>
      </li>)}
    </ul>
  </section><SponsorContact slug={candidate.slug} /><EuropeSitesSummary slug={candidate.slug} /></>;
}
