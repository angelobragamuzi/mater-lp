import Image from "next/image";
import { clinic, images } from "@/data/clinic";
import { specialties } from "@/data/specialties";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * Hero em rosa Mater: logotipo e botões à esquerda; a fotografia da recepção
 * ocupa o lado direito em sangria total e se dissolve no rosa (máscara na
 * própria imagem, sem moldura). No celular, a foto abre a página.
 */
export function Hero() {
  return (
    <section id="inicio" className="relative bg-rose">
      <div className="relative lg:min-h-[max(44rem,100svh)]">
        {/* véu superior: leitura do menu sobre a foto */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-rose/90 to-transparent"
        />

        {/* fotografia */}
        <div className="relative h-[62svh] min-h-[24rem] w-full [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] lg:absolute lg:inset-y-0 lg:left-[38%] lg:right-0 lg:h-auto lg:w-auto lg:[mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.5)_14%,#000_50%)]">
          {images.hero && (
            <Image
              src={images.hero}
              alt="Recepção da Mater Medicina Feminina, com poltronas claras, parede de cobogós e o letreiro com a flor de lótus da marca"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-[92%_50%]"
            />
          )}
        </div>

        {/* logotipo + chamadas */}
        <div className="shell relative z-10 -mt-12 pb-14 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center lg:pb-0 lg:pt-16">
          <Reveal className="flex flex-col items-center lg:items-start">
            <h1>
              <Image
                src="/images/brand/mater-logo-branca.png"
                alt={`${clinic.name} — ${clinic.city}, ${clinic.state}`}
                width={907}
                height={931}
                priority
                sizes="(min-width: 1024px) 23rem, 70vw"
                quality={90}
                className="h-auto w-[min(70vw,17rem)] lg:w-[23rem]"
              />
            </h1>
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
              <WhatsAppButton>Agendar minha consulta</WhatsAppButton>
              <a
                href="#a-mater"
                className="text-[0.82rem] font-medium tracking-[0.04em] text-wine"
              >
                <span className="link-line">Conhecer a Mater</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* índice das áreas — linha editorial que fecha o hero */}
      <div className="hidden border-t border-wine/15 bg-paper md:block">
        <ul className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5">
          {specialties.map((s, i) => (
            <li key={s.slug}>
              <a
                href="#especialidades"
                className="flex items-baseline gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-wine"
              >
                <span className="text-rose-deep">0{i + 1}</span>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
