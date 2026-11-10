import { ArrowUpRight } from "lucide-react";
import { clinic, maps } from "@/data/clinic";
import { external } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Location() {
  const { address } = clinic;

  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-white py-24 lg:py-36"
    >
      <Shapes variant="c" top="b5" bottom="b6" />
      <div className="shell relative grid gap-y-14 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-5">
          <h2 className="display text-[clamp(2.6rem,4.6vw,4.25rem)] text-wine">
            Estamos no Centro de Caratinga.
          </h2>

          <address className="mt-10 border-t border-line pt-8 font-serif text-[1.7rem] not-italic leading-[1.25] text-graphite">
            {address.street}
            <br />
            {address.district} — {address.city}, {address.state}
            <br />
            <span className="text-muted">CEP {address.zip}</span>
          </address>

          {clinic.hours ? (
            <dl className="mt-8 space-y-2 text-[0.95rem]">
              {clinic.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-6 border-b border-line pb-2">
                  <dt className="text-muted">{h.label}</dt>
                  <dd className="text-graphite">{h.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-6 max-w-sm leading-[1.8] text-muted">
              Horários de atendimento e disponibilidade de agenda são
              informados pelo WhatsApp.
            </p>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <WhatsAppButton icon>Agendar pelo WhatsApp</WhatsAppButton>
            <a
              href={maps.directions}
              {...external}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-wine/30 px-7 text-[0.82rem] font-medium tracking-[0.04em] text-wine transition-colors duration-300 hover:border-wine hover:bg-wine hover:text-paper"
            >
              Como chegar
              <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only"> (abre o Google Maps em nova guia)</span>
            </a>
          </div>

          <a
            href={clinic.instagram.url}
            {...external}
            className="mt-8 inline-flex min-h-11 items-center gap-2.5 text-[0.88rem] text-wine"
          >
            <InstagramIcon className="size-[1.1rem]" />
            <span className="link-line">{clinic.instagram.handle}</span>
            <span className="sr-only"> (abre em nova guia)</span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-blush sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
            <iframe
              title={`Mapa — ${clinic.name}, ${address.street}, ${address.city}`}
              src={maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-tone absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
