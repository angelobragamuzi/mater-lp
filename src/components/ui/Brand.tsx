import Image from "next/image";
import { clinic, images } from "@/data/clinic";

/**
 * Logotipo original da Mater (arquivo em /public/images/brand).
 * Para trocar por SVG/PNG em alta, basta atualizar `images.logo`.
 */
export function LogoMark({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={images.logo}
      alt={`Logotipo ${clinic.name}`}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      priority
    />
  );
}

/** Marca + nome por extenso, usada no header. */
export function Brand({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-wine" : "text-paper";
  const sub = tone === "dark" ? "text-muted" : "text-paper/70";
  return (
    <span className="flex items-center gap-3">
      <LogoMark size={44} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.7rem] tracking-tight ${main}`}>
          mater
        </span>
        <span
          className={`mt-1 text-[0.56rem] font-medium uppercase tracking-[0.3em] ${sub}`}
        >
          Medicina Feminina
        </span>
      </span>
    </span>
  );
}

/**
 * Traço de lótus inspirado nas curvas da flor do logotipo.
 * Recurso gráfico de apoio — não substitui o logotipo.
 */
export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 128"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path
        vectorEffect="non-scaling-stroke"
        d="M100 8C124 36 128 72 100 110C72 72 76 36 100 8Z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M100 110C68 102 46 76 44 38C58 42 70 50 80 62"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M100 110C132 102 154 76 156 38C142 42 130 50 120 62"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M100 114C64 124 28 110 10 76C24 74 38 76 51 81"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M100 114C136 124 172 110 190 76C176 74 162 76 149 81"
      />
    </svg>
  );
}

/** Definição única do recorte de pétala usado nas áreas fotográficas. */
export function PetalClipDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="mater-petal" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0 C0.8,0.12 1,0.32 1,0.56 L1,1 L0,1 L0,0.56 C0,0.32 0.2,0.12 0.5,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Mesmo contorno de pétala, apenas em linha. */
export function PetalOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="1"
        d="M50,0.4 C80,12 99.6,32 99.6,56 L99.6,99.6 L0.4,99.6 L0.4,56 C0.4,32 20,12 50,0.4 Z"
      />
    </svg>
  );
}
