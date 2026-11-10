import { clinic } from "@/data/clinic";
import { external } from "@/lib/whatsapp";
import { Lotus } from "@/components/ui/Brand";
import { InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-wine text-paper">
      <Shapes variant="f" top="b6" bottom="b7" />
      {/* flor em traço, ancorada à base — referência ao logotipo */}
      <Lotus className="pointer-events-none absolute -bottom-[8%] right-[-18%] w-[95%] text-rose/30 sm:w-[70%] lg:right-[-4%] lg:w-[46%]" />

      <div className="shell relative grid gap-y-10 py-24 lg:grid-cols-12 lg:items-end lg:gap-x-12 lg:py-36">
        <Reveal className="lg:col-span-7">
          <h2 className="display text-[clamp(2.9rem,6vw,5.5rem)]">
            Seu próximo atendimento{" "}
            <em className="font-light text-blush">começa aqui.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:pb-3">
          <p className="max-w-md text-[1.02rem] leading-[1.8] text-paper/80">
            Entre em contato com a Mater para consultar especialidades,
            disponibilidade e agendamentos.
          </p>
          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <WhatsAppButton variant="light" icon>
              Conversar com a Mater
            </WhatsAppButton>
            <a
              href={clinic.instagram.url}
              {...external}
              className="inline-flex min-h-11 items-center gap-2.5 self-start text-[0.85rem] text-paper sm:self-center"
            >
              <InstagramIcon className="size-[1.1rem]" />
              <span className="link-line">Acompanhar no Instagram</span>
              <span className="sr-only"> (abre em nova guia)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
