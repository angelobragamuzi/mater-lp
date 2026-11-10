import { Lotus } from "./Brand";

type Variant = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

/**
 * Círculos de divisa: cada um atravessa a linha entre duas seções vizinhas.
 * A seção de cima desenha a metade inferior (`bottom`) e a de baixo desenha a
 * metade superior (`top`), com o mesmo id, então tamanho, posição horizontal e
 * cor coincidem e a forma se completa na emenda.
 */
const bridges = {
  b1: { side: "right", x: "8%", size: "30rem", cls: "bg-rose/15" }, // Conheça | Especialidades
  b2: { side: "left", x: "14%", size: "26rem", cls: "border border-rose/45" }, // Especialidades | Profissionais
  b3: { side: "right", x: "20%", size: "28rem", cls: "bg-rose/[0.12]" }, // Profissionais | Fases
  b4: { side: "left", x: "8%", size: "30rem", cls: "bg-wine/[0.07]" }, // Fases | Galeria
  b5: { side: "right", x: "10%", size: "26rem", cls: "border border-rose/45" }, // Galeria | Localização
  b6: { side: "left", x: "30%", size: "28rem", cls: "border border-rose/50" }, // Localização | Chamada final
  b7: { side: "left", x: "6%", size: "22rem", cls: "border border-rose/40" }, // Chamada final | Rodapé
} as const;

export type BridgeId = keyof typeof bridges;

function Half({ id, edge }: { id: BridgeId; edge: "top" | "bottom" }) {
  const b = bridges[id];
  return (
    <div
      className={`absolute rounded-full ${b.cls}`}
      style={{
        width: b.size,
        height: b.size,
        [b.side]: b.x,
        [edge]: `calc(${b.size} / -2)`,
      }}
    />
  );
}

/**
 * Formas translúcidas de fundo (círculos, anéis e traço de lótus) para quebrar
 * o chapado das seções. Decorativas: sem interação e ocultas para leitores de
 * tela. A seção que usa precisa de `relative overflow-hidden`.
 */
export function Shapes({
  variant,
  top,
  bottom,
}: {
  variant: Variant;
  top?: BridgeId;
  bottom?: BridgeId;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {top && <Half id={top} edge="top" />}
      {bottom && <Half id={bottom} edge="bottom" />}
      <Interior variant={variant} />
    </div>
  );
}

/** Formas internas de cada seção, longe das bordas compartilhadas. */
function Interior({ variant }: { variant: Variant }) {
  switch (variant) {
    case "a": // Conheça a Mater
      return (
        <>
          <div className="absolute -left-48 -top-48 size-[34rem] rounded-full bg-rose/15" />
          <div className="absolute right-[-6rem] top-24 size-[22rem] rounded-full border border-rose/40" />
          <Lotus className="absolute -right-24 -top-10 w-[34rem] text-rose/30 sm:w-[44rem]" />
        </>
      );
    case "e": // Especialidades
      return (
        <>
          <div className="absolute bottom-[14%] left-[40%] size-[16rem] rounded-full bg-rose/[0.07]" />
          <Lotus className="absolute -left-16 top-[10%] w-[26rem] text-rose/20" />
        </>
      );
    case "b": // Profissionais
      return (
        <>
          <div className="absolute -left-32 top-[38%] size-[20rem] rounded-full bg-blush/70" />
          <Lotus className="absolute -right-12 top-[16%] w-[28rem] text-rose/25" />
        </>
      );
    case "d": // Fases da vida
      return (
        <>
          <div className="absolute -left-28 top-[52%] size-[20rem] rounded-full bg-white/40" />
          <div className="absolute -right-32 top-[34%] size-[24rem] rounded-full border border-wine/15" />
          <Lotus className="absolute bottom-[4%] right-[8%] w-[26rem] text-wine/10" />
        </>
      );
    case "h": // Galeria
      return (
        <>
          <div className="absolute left-[42%] top-[26%] size-[18rem] rounded-full bg-rose/[0.07]" />
          <Lotus className="absolute -right-10 top-[10%] w-[26rem] text-rose/20" />
        </>
      );
    case "c": // Localização
      return (
        <>
          <div className="absolute -left-40 -top-24 size-[30rem] rounded-full bg-blush/70" />
          <div className="absolute -bottom-40 -right-24 size-[26rem] rounded-full border border-rose/40" />
        </>
      );
    case "f": // Chamada final
      return (
        <>
          <div className="absolute -left-40 top-[8%] size-[30rem] rounded-full bg-rose/10" />
          <div className="absolute right-[34%] top-[-9rem] size-[18rem] rounded-full bg-paper/[0.05]" />
        </>
      );
    case "g": // Rodapé
      return (
        <>
          <div className="absolute -right-40 -top-40 size-[30rem] rounded-full border border-paper/10" />
          <div className="absolute -bottom-56 left-[40%] size-[28rem] rounded-full bg-paper/[0.03]" />
        </>
      );
  }
}
