import { professionals } from "@/data/professionals";
import { whatsappMessages } from "@/lib/whatsapp";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Professionals() {
  return (
    <section
      id="profissionais"
      className="relative overflow-hidden bg-white py-24 lg:py-36"
    >
      <Shapes variant="b" top="b2" bottom="b3" />
      <div className="shell relative">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <h2 className="display text-[clamp(2.6rem,4.6vw,4.25rem)] text-wine lg:col-span-7">
            Profissionais da Mater
          </h2>
          <p className="max-w-sm leading-[1.8] text-muted lg:col-span-5 lg:justify-self-end lg:pb-2">
            Quem atende na clínica, com especialidade e área de atuação.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-12">
          {professionals.map((p, i) => (
            <li key={p.name} className={i % 3 === 1 ? "lg:mt-20" : ""}>
              <Reveal delay={i * 0.08}>
                <article>
                  <PhotoSlot
                    src={p.photo}
                    alt={`${p.name}, ${p.specialty}${p.illustrative ? " (imagem ilustrativa)" : ""}`}
                    label={p.name}
                    tone="blush"
                    focus={p.focus}
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                    className="aspect-[3/4] w-full"
                  />
                  <h3 className="mt-6 font-serif text-[1.9rem] leading-tight text-wine">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] text-graphite">
                    {p.specialty}
                  </p>
                  {(p.registry || p.rqe) && (
                    <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {[p.registry, p.rqe].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {p.bio && (
                    <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-muted">
                      {p.bio}
                    </p>
                  )}
                  <div className="mt-5">
                    <WhatsAppButton
                      variant="text"
                      message={whatsappMessages.professional(p.name)}
                    >
                      Agendar consulta
                    </WhatsAppButton>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-14 max-w-xl text-[0.78rem] leading-relaxed text-muted">
          Perfis e fotografias desta seção são fictícios, apenas para
          demonstração do layout. Serão substituídos pela equipe real da
          clínica.
        </p>
      </div>
    </section>
  );
}
