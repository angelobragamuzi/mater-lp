import { ArrowRight } from "lucide-react";
import { images } from "@/data/clinic";
import { lifePhases } from "@/data/specialties";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";

export function WomensHealth() {
  return (
    <section className="relative overflow-hidden bg-blush/60 py-24 lg:py-36">
      <Shapes variant="d" top="b3" bottom="b4" />
      <div className="shell relative">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display max-w-[14ch] text-[clamp(2.7rem,5.4vw,5rem)] text-wine">
              Cada fase tem suas próprias{" "}
              <em className="font-light">necessidades.</em>
            </h2>
            <p className="mt-7 max-w-md leading-[1.8] text-graphite/80">
              Os temas abaixo ajudam a localizar por onde começar. Cada um
              indica a área da Mater mais próxima do assunto; a equipe orienta
              o agendamento pelo WhatsApp.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mx-auto w-full max-w-xs lg:col-span-4 lg:col-start-9 lg:max-w-none"
          >
            <PhotoSlot
              src={images.phases}
              alt="Atendimento na Mater Medicina Feminina"
              label="Fotografia institucional"
              tone="wine"
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="petal aspect-[4/5] w-full"
            />
          </Reveal>
        </div>

        {/* linha do tempo: horizontal no desktop, vertical no mobile */}
        <ol className="mt-16 grid border-l border-wine/25 lg:mt-24 lg:grid-cols-6 lg:border-l-0 lg:border-t">
          {lifePhases.map((phase, i) => (
            <li key={phase.theme} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[4.5px] top-9 size-2 rounded-full bg-wine lg:-top-[4.5px] lg:left-0"
              />
              <Reveal delay={i * 0.06}>
                <a
                  href="#especialidades"
                  className="group block py-6 pl-7 pr-2 lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-9"
                >
                  <h3 className="font-serif text-[1.65rem] leading-[1.1] text-wine lg:text-[1.75rem]">
                    {phase.theme}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-graphite/75 transition-colors duration-300 group-hover:text-wine">
                    {phase.related}
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
