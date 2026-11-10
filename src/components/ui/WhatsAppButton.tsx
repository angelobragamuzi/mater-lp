import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { external, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type Variant = "solid" | "light" | "outline" | "text";

const base =
  "inline-flex items-center justify-center gap-2.5 text-[0.82rem] font-medium tracking-[0.04em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: `${base} min-h-12 rounded-full bg-wine px-7 text-paper hover:bg-wine-deep`,
  light: `${base} min-h-12 rounded-full bg-paper px-7 text-wine hover:bg-blush`,
  outline: `${base} min-h-12 rounded-full border border-wine/30 px-7 text-wine hover:border-wine hover:bg-wine hover:text-paper`,
  text: "group inline-flex items-center gap-1.5 text-[0.82rem] font-medium tracking-[0.04em] text-wine",
};

/** Link de WhatsApp com mensagem pré-preenchida. */
export function WhatsAppButton({
  children,
  message,
  variant = "solid",
  className = "",
  icon = false,
}: {
  children: ReactNode;
  message?: string;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={whatsappLink(message)}
      {...external}
      className={`${variants[variant]} ${className}`}
    >
      {icon && <WhatsAppIcon className="size-4" />}
      {variant === "text" ? (
        <>
          <span className="link-line">{children}</span>
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </>
      ) : (
        children
      )}
      <span className="sr-only"> (abre o WhatsApp em nova guia)</span>
    </a>
  );
}

/** Botão flutuante discreto, canto inferior direito. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      {...external}
      aria-label="Conversar com a Mater pelo WhatsApp (abre em nova guia)"
      className="fixed bottom-4 right-4 z-40 flex size-13 items-center justify-center rounded-full bg-wine text-paper shadow-[0_6px_18px_-6px_rgba(48,39,43,0.55)] ring-1 ring-paper/40 transition-colors duration-300 hover:bg-wine-deep sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
