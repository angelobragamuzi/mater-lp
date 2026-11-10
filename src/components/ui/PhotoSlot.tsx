import Image from "next/image";
import { Lotus } from "./Brand";

type Tone = "rose" | "blush" | "wine" | "sand";

const tones: Record<Tone, { surface: string; mark: string; text: string }> = {
  rose: { surface: "bg-rose", mark: "text-white/75", text: "text-white" },
  blush: { surface: "bg-blush", mark: "text-rose", text: "text-wine" },
  wine: { surface: "bg-wine", mark: "text-rose", text: "text-blush" },
  sand: { surface: "bg-[#ece3dd]", mark: "text-[#c7b3ab]", text: "text-muted" },
};

/**
 * Área fotográfica. Com `src`, renderiza a imagem otimizada (next/image).
 * Sem `src`, mostra uma área reservada identificada como conteúdo pendente —
 * nunca uma foto de banco de imagens no lugar da equipe ou da clínica.
 */
export function PhotoSlot({
  src,
  alt,
  label,
  tone = "blush",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  focus,
  className = "",
}: {
  src: string | null;
  alt: string;
  /** Descrição da foto esperada, exibida enquanto ela não chega. */
  label: string;
  tone?: Tone;
  sizes?: string;
  priority?: boolean;
  /** Ponto focal da imagem (CSS object-position), ex.: "50% 60%". */
  focus?: string;
  className?: string;
}) {
  const t = tones[tone];

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-[50%_28%]"
          style={focus ? { objectPosition: focus } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Área reservada para fotografia oficial: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden ${t.surface} ${className}`}
    >
      <Lotus className={`w-[46%] max-w-64 ${t.mark}`} />
      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 px-4 pb-5 text-center ${t.text}`}
      >
        <span className="font-serif text-lg italic leading-tight">{label}</span>
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.24em] opacity-70">
          Fotografia oficial pendente
        </span>
      </div>
    </div>
  );
}
