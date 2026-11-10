import { clinic } from "@/data/clinic";

/** Mensagens pré-preenchidas. Único ponto de edição dos textos. */
export const whatsappMessages = {
  default:
    "Olá! Conheci a Mater pelo site e gostaria de informações sobre agendamentos.",
  specialty: (name: string) =>
    `Olá! Gostaria de informações sobre atendimentos em ${name} na Mater.`,
  professional: (name: string) =>
    `Olá! Gostaria de consultar a disponibilidade de atendimento com ${name}.`,
};

export function whatsappLink(message: string = whatsappMessages.default) {
  return `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Atributos padrão para links externos seguros. */
export const external = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
