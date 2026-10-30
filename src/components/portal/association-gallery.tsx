import { Images } from "lucide-react";

export function AssociationGallery() {
  return <section className="mt-10 border-t border-border py-8" aria-labelledby="association-gallery-title">
    <span className="eyebrow">Dernek yaşamı</span>
    <h2 id="association-gallery-title" className="mt-2 text-xl font-bold text-primary">Dernekten Kareler</h2>
    <div className="mt-5 flex items-start gap-4 border-y border-border bg-muted px-4 py-6">
      <Images size={28} className="shrink-0 text-brand" aria-hidden="true" />
      <div><h3 className="font-semibold text-primary">Henüz fotoğraf veya video yayınlanmadı.</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">Derneğin etkinliklerinden, paylaşım izni alınmış fotoğraf ve videolar bu alanda yer alacak.</p></div>
    </div>
  </section>;
}
