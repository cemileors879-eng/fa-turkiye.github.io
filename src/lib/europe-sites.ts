// European study sites per library entry, copied from ClinicalTrials.gov API v2 / EU CTIS public records.
// Only drug-specific sites; never general FA clinics. Never invent contacts or centre web pages.
export const europeChecked = "11 Ekim 2026";
export const EU_NO_CONTACT = "Resmi kayıtta iletişim yayımlanmamış";

export type EuSite = { country: string; city: string; facility: string; status: string; email?: string; phone?: string; person?: string };
export type EuStudy = { id: string; registry: "ClinicalTrials.gov" | "EU CTIS"; url: string; title: string; status: string;
  kind: "aktif" | "uzatma" | "gozlemsel" | "tarihsel"; restriction?: string; sites: EuSite[] };

const ct = (n: string) => `https://clinicaltrials.gov/study/${n}`;
const ctis = (n: string) => `https://euclinicaltrials.eu/ctis-public/view/${n}`;
const NR = "Henüz hasta almıyor (NOT_YET_RECRUITING)", R = "Hasta alıyor (RECRUITING)", U = "Merkez durumu kayıtta belirtilmemiş";

const vatiqExtSites = (s: string): EuSite[] => [
  { country: "Fransa", city: "Paris", facility: "Hôpital Pitié-Salpêtrière, Institut du Cerveau (Paris Brain Institute)", status: s },
  { country: "Almanya", city: "Tübingen", facility: "Department of Neurology and Hertie-Institute for Clinical Brain Research, DZNE", status: s },
  { country: "İtalya", city: "Roma", facility: "Ospedale Pediatrico Bambino Gesù IRCCS", status: s },
  { country: "İspanya", city: "Barselona", facility: "Hospital Sant Joan de Déu Barcelona, Unidad de Enfermedades Neuromusculares", status: s },
];
const done = "Tamamlandı (COMPLETED)";

export const europeSites: Record<string, { studies: EuStudy[]; none?: string }> = {
  "omaveloksolon-skyclarys": { studies: [
    { id: "NCT06623890", registry: "ClinicalTrials.gov", url: ct("NCT06623890"), title: "Omaveloksolonun uzun dönem güvenliliği — kendi hekimince reçete edilen hastalar", status: R, kind: "gozlemsel",
      restriction: "Gözlemsel çalışma: ilaç çalışma kapsamında verilmez; yalnızca onaylı etikete göre Skyclarys reçete edilen, 16 yaş ve üzerinde tedaviye başlamış hastalar.",
      sites: [
        { country: "Avusturya", city: "Innsbruck", facility: "Medizinische Universität Innsbruck", status: R, email: "wolfgang.nachbauer@i-med.ac.at", phone: "0043 512 504 81196", person: "Sylvia Boesch" },
        { country: "Belçika", city: "Brüksel", facility: "HUB-Hôpital Erasme", status: NR, email: "gilles.naeije@hubruxelles.be", phone: "3225558196", person: "Naeije Gilles" },
        { country: "Çekya", city: "Motol (Prag)", facility: "Center for hereditary ataxias, Motol", status: R, email: "martin.vyhnalek@fnmotol.cz", phone: "+420-702001921", person: "Martin Vyhnalek" },
        { country: "Almanya", city: "Tübingen", facility: "Universitätsklinikum Tübingen", status: R, phone: "+4970712980445", person: "Ludger Schöls" },
        { country: "Almanya", city: "Aachen", facility: "University Hospital Aachen", status: NR, email: "kreetz@ukaachen.de", phone: "+49 241 80 89609", person: "Kathrin Reetz" },
        { country: "Almanya", city: "Münih", facility: "Klinikum der Universität München", status: NR, email: "thomas.klopstock@med.uni-muenchen.de", phone: "+49 89 4400 57400", person: "Thomas Klopstock" },
        { country: "İtalya", city: "Conegliano", facility: "Scientific Institute, IRCCS E. Medea", status: NR, email: "gabriella.paparella@lanostrafamiglia.it", phone: "+393383065324", person: "Gabriella Paparella" },
        { country: "İtalya", city: "Milano", facility: "Fondazione I.R.C.C.S. Istituto Neurologico C. Besta", status: NR, email: "caterina.mariotti@istituto-besta.it", phone: "+39 02 23942269", person: "Caterina Mariotti" },
        { country: "İtalya", city: "Roma", facility: "Ospedale Pediatrico Bambino Gesu", status: NR, email: "gessica.vasco@opbg.net", phone: "+390668593461", person: "Gessica Vasco" },
        { country: "Hollanda", city: "Nijmegen", facility: "Stichting Radboud universitair medisch centrum", status: NR, email: "bart.vandewarrenburg@radboudumc.nl", phone: "+31 (0)24-3613396", person: "Bart van de Warrenburg" },
      ] },
    { id: "NCT07013292", registry: "ClinicalTrials.gov", url: ct("NCT07013292"), title: "Fransız FA hastalarında omaveloksolonun yutma güçlüğüne etkisi", status: R, kind: "gozlemsel",
      restriction: "Yalnızca Şubat 2024–Mayıs 2025 arasında en az 6 ay omaveloksolon almış, 16 yaş ve üzeri Fransa'daki hastalar.",
      sites: [{ country: "Fransa", city: "Nice", facility: "CHU Nice", status: R, email: "slioui.a@chu-nice.fr", phone: "0492038953", person: "Abderhmane Slioui" }] },
    { id: "NCT06953583", registry: "ClinicalTrials.gov", url: ct("NCT06953583"), title: "BRAVE — çocuk ve ergenlerde omaveloksolon (Faz 3)", status: "Aktif, yeni hasta almıyor (ACTIVE_NOT_RECRUITING)", kind: "aktif",
      sites: [
        ["Avusturya","Innsbruck","Universitätsklinikum Innsbruck"],["Danimarka","Kopenhag","Rigshospitalet - Juliane Marie Centret (JMC)"],["Fransa","Montpellier","CHU de Montpellier - Hôpital Gui De Chauliac"],["Fransa","Paris","AP-HP - Hôpital Armand Trousseau"],["Almanya","Aachen","Universitätsklinikum Aachen"],["Almanya","Giessen","UKGM - Universitätsklinikum Giessen und Marburg, Standort Gießen"],["Almanya","Hamburg","Universitätsklinikum Hamburg Eppendorf"],["İrlanda","Dublin","CHI at Temple Street"],["İtalya","Roma","Ospedale Pediatrico Bambino Gesù IRCCS"],["İtalya","Conegliano","IRCCS Eugenio Medea - Polo Scientifico Veneto"],["İtalya","Milano","Fondazione IRCCS Istituto Neurologico Carlo Besta"],["Hollanda","Nijmegen","Radboud Universitair Medisch Centrum"],["İspanya","Esplugues de Llobregat","Hospital Sant Joan de Deu - PIN"],["İspanya","Madrid","Hospital Universitario La Paz - PPDS"],["Birleşik Krallık","Londra","University College Hospital - PPDS"],["Birleşik Krallık","Oxford","John Radcliffe Hospital"],["Birleşik Krallık","Sheffield","Sheffield Children's Hospital - PPDS"],
      ].map(([country, city, facility]) => ({ country: country!, city: city!, facility: facility!, status: U })) },
    { id: "NCT02255435", registry: "ClinicalTrials.gov", url: ct("NCT02255435"), title: "MOXIe — RTA 408 (omaveloksolon)", status: done, kind: "tarihsel", sites: [
      { country: "Avusturya", city: "Innsbruck", facility: "Medical University Innsbruck", status: done },
      { country: "İtalya", city: "Milano", facility: "Neurological Institute Carlo Besta", status: done },
      { country: "Birleşik Krallık", city: "Londra", facility: "University College of London", status: done }] },
  ] },
  vatiquinone: { studies: [
    { id: "NCT07681713", registry: "ClinicalTrials.gov", url: ct("NCT07681713"), title: "PROVE-FA (Faz 3)", status: "Henüz hasta almaya başlamadı (NOT_YET_RECRUITING)", kind: "aktif", sites: [
      { country: "Belçika", city: "Brüksel", facility: "Hôpital Érasme (Hôpital Universitaire de Bruxelles)", status: U, person: "Gilles Naeije" },
      { country: "Fransa", city: "Paris", facility: "Institut du Cerveau et de la Moelle Epinière", status: U, person: "Alexandra Durr" },
      { country: "İspanya", city: "Barselona", facility: "Hospital Sant Joan de Deu", status: U, person: "Alejandra Darling" }] },
    { id: "2024-516505-23-00 (NCT05515536)", registry: "EU CTIS", url: ctis("2024-516505-23-00"), title: "Vatiquinone uzun dönem güvenlilik/etkinlik uzatma çalışması", status: "CTIS: Almanya, Fransa, İspanya, İtalya 'Ongoing, recruiting'; ClinicalTrials.gov: aktif, yeni hasta almıyor", kind: "uzatma",
      restriction: "UZATMA ÇALIŞMASI: yalnızca önceki bir vatiquinone çalışmasını tamamlayıp doğrudan geçen katılımcılar. Yeni hastalar başvuramaz.",
      sites: vatiqExtSites("CTIS'te ülke düzeyinde 'recruiting' (yalnızca önceki katılımcılar)") },
    { id: "NCT04577352", registry: "ClinicalTrials.gov", url: ct("NCT04577352"), title: "MOVE-FA (Faz 3)", status: done, kind: "tarihsel", sites: vatiqExtSites(done) },
  ] },
  "nomlabofusp-cti-1601": { studies: [
    { id: "2025-521628-31-00", registry: "EU CTIS", url: ctis("2025-521628-31-00"), title: "Nomlabofusp — Fransa", status: "Fransa: yetkilendirildi, hasta alımı beklemede (Authorised, recruitment pending; karar 16.04.2026)", kind: "aktif",
      sites: [{ country: "Fransa", city: "Doğrulanmadı", facility: "Merkez adı kamuya açık CTIS özetinde doğrulanamadı", status: "Alım beklemede" }] },
  ] },
  "leriglitazone-min-102": { studies: [
    { id: "NCT03917225", registry: "ClinicalTrials.gov", url: ct("NCT03917225"), title: "FRAMES (Faz 2)", status: done, kind: "tarihsel", sites: [
      ["Belçika","Brüksel","Hôpital Erasme-ULB"],["Fransa","Paris","ICM, Groupe Hospitalier Pitié Salpêtrière"],["Almanya","Aachen","Universitätsklinikum RWTH"],["İspanya","Barselona","Hospital Sant Joan de Déu"],["İspanya","Madrid","Hospital Universitario La Paz"],
    ].map(([country, city, facility]) => ({ country: country!, city: city!, facility: facility!, status: done })) }] },
  idebenon: { studies: [
    { id: "NCT00905268", registry: "ClinicalTrials.gov", url: ct("NCT00905268"), title: "MICONOS (idebenon)", status: done, kind: "tarihsel", sites: [
      ["Avusturya","Innsbruck","Universitätsklinik Innsbruck"],["Belçika","Brüksel","Hôpital Erasme - Université Libre de Bruxelles"],["Fransa","Paris","Hôpital de la Salpêtrière - INSERM U679"],["Almanya","Berlin","HELIOS Klinikum Berlin-Buch"],["Almanya","Bonn","Universitätsklinikum Bonn"],["Almanya","Freiburg","Universitätsklinik Freiburg, Neuropädiatrie"],["Almanya","Göttingen","Zentrum für Neurologische Medizin"],["Almanya","Hamburg","UKE Hamburg Neuropädiatrie"],["Almanya","Münih","Klinikum Grosshadern"],["Almanya","Tübingen","Neurologische Universitätsklinik"],["Hollanda","Groningen","University Medical Center Groningen"],["Birleşik Krallık","Londra","National Hospital for Neurology & Neurosurgery"],["Birleşik Krallık","Newcastle","University of Newcastle upon Tyne"],
    ].map(([country, city, facility]) => ({ country: country!, city: city!, facility: facility!, status: done })) },
    { id: "NCT01303406", registry: "ClinicalTrials.gov", url: ct("NCT01303406"), title: "PROTI (idebenon bırakma sonrası)", status: done, kind: "tarihsel", sites: [
      { country: "Birleşik Krallık", city: "Londra", facility: "The National Hospital, University College London", status: done },
      { country: "Avusturya / Almanya / Hollanda", city: "Innsbruck, Bonn, Münih, Tübingen, Groningen", facility: "Merkez adları kayıtta belirtilmemiş", status: done }] },
  ] },
};
export const EU_NONE = "Bu ilaç/aday için doğrulanmış bir Avrupa klinik araştırma merkezi bulunamadı (ClinicalTrials.gov ve EU CTIS, " + europeChecked + ").";

