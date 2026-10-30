import consultation from "@/assets/healthcare-consultation-photo.jpg";
import medicine from "@/assets/medicine-editorial-photo.jpg";
import rehabilitation from "@/assets/physical-therapy-photo.jpg";
import type { ArticleCover } from "./portal-data";

export const consultationCover: ArticleCover = {
  src: consultation,
  alt: "Sağlık danışmanlığı görüşmesi canlandırması",
  width: 1536,
  height: 1024,
};
export const libraryPhotography: Record<string, { cover: ArticleCover }> = {
  "omaveloksolon-skyclarys": {
    cover: { src: medicine, alt: "Etiketsiz ilaç şişesi ve kapsüller", width: 1536, height: 1024 },
  },
  "spastisite-tedavisi": {
    cover: { src: rehabilitation, alt: "Fizyoterapist eşliğinde denge egzersizi canlandırması", width: 1536, height: 1024 },
  },
};
