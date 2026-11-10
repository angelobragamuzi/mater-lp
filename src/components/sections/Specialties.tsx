"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { specialties } from "@/data/specialties";
import { whatsappMessages } from "@/lib/whatsapp";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const ease = [0.22, 0.61, 0.36, 1] as const;

export function Specialties() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = specialties[active];

  return (
    <section
      id="especialidades"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Shapes variant="e" top="b1" bottom="b2" />

      <div className="shell relative">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <h2 className="display text-[clamp(2.6rem,4.6vw,4.25rem)] text-wine lg:col-span-7">
            Especialidades da Mater
          </h2>
          <p className="max-w-sm leading-[1.8] text-graphite/75 lg:col-span-5 lg:justify-self-end lg:pb-2">
            Diferentes áreas de atendimento reunidas em um só endereço.
          </p>
        </Reveal>

        {/* DESKTOP — painel horizontal: foto panorâmica, abas e descrição */}
        <div className="mt-16 hidden lg:block">
          <div className="relative aspect-[2.35/1] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0"
              >
                <PhotoSlot
                  src={current.image}
                  alt={`${current.name} na Mater Medicina Feminina (imagem ilustrativa)`}
                  label={current.name}
                  tone={active % 2 === 0 ? "blush" : "sand"}
                  focus={current.focus}
                  sizes="1216px"
                  className="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <ol className="grid grid-cols-7 border-b border-wine/15">
            {specialties.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`block h-full w-full border-t-2 pb-5 pr-3 pt-5 text-left transition-colors duration-300 ${
                      on ? "border-wine" : "border-transparent"
                    }`}
                  >
                    <span className="block text-[0.7rem] tracking-[0.18em] text-rose-deep">
                      0{i + 1}
                    </span>
                    <span
                      className={`mt-2 block font-serif text-[1.45rem] leading-[1.1] transition-colors duration-300 ${
                        on ? "text-wine" : "text-graphite/50"
                      }`}
                    >
                      {s.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative grid min-h-36 grid-cols-12 gap-x-12 pt-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className="col-span-12 grid grid-cols-12 items-start gap-x-12"
              >
                <p className="col-span-6 max-w-lg text-[1.05rem] leading-[1.8] text-graphite/80">
                  {current.description}
                </p>
                <div className="col-span-5 col-start-8 pt-1">
                  <WhatsAppButton
                    variant="outline"
                    message={whatsappMessages.specialty(current.name)}
                  >
                    Consultar atendimento
                  </WhatsAppButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE / TABLET — lista vertical, tudo acessível */}
        <ol className="mt-12 border-t border-wine/15 lg:hidden">
          {specialties.map((s, i) => (
            <li key={s.slug} className="border-b border-wine/15">
              <div className="grid grid-cols-[2.25rem_1fr] gap-x-3 py-6 sm:grid-cols-[3.5rem_1fr]">
                <span className="pt-2 text-[0.72rem] tracking-[0.18em] text-rose-deep">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-[2rem] leading-[1.05] text-wine sm:text-[2.4rem]">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-md leading-[1.75] text-graphite/75">
                    {s.description}
                  </p>
                  <div className="mt-4 pb-1">
                    <WhatsAppButton
                      variant="text"
                      message={whatsappMessages.specialty(s.name)}
                    >
                      Consultar atendimento
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
