"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic, navigation } from "@/data/clinic";
import { external } from "@/lib/whatsapp";
import { Brand } from "@/components/ui/Brand";
import { InstagramIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // sobre o hero rosa: menu claro e marca oculta (a logo está no hero)
  const onHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open
          ? "border-b border-line bg-paper/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between lg:h-20">
        <a
          href="#inicio"
          aria-label={`${clinic.name} — início`}
          className={`transition-opacity duration-500 ${onHero ? "invisible opacity-0" : "opacity-100"}`}
        >
          <Brand />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-[0.82rem] tracking-[0.04em] transition-colors duration-300 ${onHero ? "text-paper hover:text-wine" : "text-graphite/80 hover:text-wine"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={clinic.instagram.url}
            {...external}
            aria-label="Instagram da Mater (abre em nova guia)"
            className={`hidden size-11 items-center justify-center rounded-full text-wine transition-[opacity,background-color] duration-500 hover:bg-blush sm:flex ${onHero ? "invisible opacity-0" : "opacity-100"}`}
          >
            <InstagramIcon />
          </a>
          <div
            className={`hidden transition-opacity duration-500 sm:block ${onHero ? "invisible opacity-0" : "opacity-100"}`}
          >
            <WhatsAppButton className="!min-h-11 !px-6">
              Agendar consulta
            </WhatsAppButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`flex size-11 items-center justify-center rounded-full lg:hidden ${onHero ? "text-paper" : "text-wine"}`}
          >
            {open ? (
              <X strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // absolute + altura explícita: o backdrop-filter do header vira
            // bloco de contenção e anularia um `fixed` aqui dentro.
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper lg:hidden"
          >
            <nav
              aria-label="Navegação principal (menu)"
              className="shell flex min-h-full flex-col pb-10 pt-6"
            >
              <ul>
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 + i * 0.05 }}
                    className="border-b border-line"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4 font-serif text-[2rem] leading-none text-wine"
                    >
                      <span className="font-sans text-[0.68rem] tracking-[0.2em] text-rose-deep">
                        0{i + 1}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4 pt-10">
                <WhatsAppButton icon className="w-full">
                  Agendar consulta
                </WhatsAppButton>
                <a
                  href={clinic.instagram.url}
                  {...external}
                  className="flex min-h-12 items-center justify-center gap-2.5 text-[0.82rem] font-medium tracking-[0.04em] text-wine"
                >
                  <InstagramIcon className="size-4" />
                  {clinic.instagram.handle}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
