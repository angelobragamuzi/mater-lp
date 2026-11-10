import { clinic, images } from "@/data/clinic";
import { external } from "@/lib/whatsapp";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";

/** Composição assimétrica: cada posição tem proporção e largura próprias. */
const layout = [
  { cell: "col-span-2 lg:col-span-5", ratio: "aspect-[4/5]", tone: "blush" },
  { cell: "col-span-2 lg:col-span-7 lg:self-end", ratio: "aspect-[16/10]", tone: "sand" },
  { cell: "col-span-1 lg:col-span-4", ratio: "aspect-[3/4] lg:aspect-square", tone: "sand" },
  { cell: "col-span-1 lg:col-span-3 lg:mt-16", ratio: "aspect-[3/4]", tone: "rose" },
  { cell: "col-span-2 lg:col-span-5", ratio: "aspect-[4/3]", tone: "blush" },
] as const;

export function Gallery() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Shapes variant="h" top="b4" bottom="b5" />
      <div className="shell relative">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display text-[clamp(2.6rem,4.6vw,4.25rem)] text-wine">
            A Mater por dentro
          </h2>
          <p className="max-w-sm leading-[1.8] text-muted lg:pb-2">
            O espaço e a equipe, em imagens. No dia a dia, a clínica também
            está no{" "}
            <a
              href={clinic.instagram.url}
              {...external}
              className="link-line text-wine"
            >
              Instagram
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {images.gallery.map((photo, i) => {
            const l = layout[i % layout.length];
            return (
              <Reveal key={photo.label} delay={(i % 3) * 0.08} className={l.cell}>
                <PhotoSlot
                  src={photo.src}
                  alt={photo.alt}
                  label={photo.label}
                  tone={l.tone}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`w-full ${l.ratio}`}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
