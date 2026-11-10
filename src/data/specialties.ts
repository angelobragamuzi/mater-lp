/**
 * Áreas de atendimento apresentadas pela Mater no Instagram.
 * As descrições são propositalmente genéricas: o detalhamento de cada
 * atendimento deve ser CONFIRMADO com a clínica antes da publicação.
 */

export type Specialty = {
  slug: string;
  name: string;
  description: string;
  /** Caminho em /public ou null enquanto a foto oficial não chega. */
  image: string | null;
  /** Ponto focal do recorte panorâmico (CSS object-position). */
  focus?: string;
};

export const specialties: Specialty[] = [
  {
    slug: "obstetricia",
    name: "Obstetrícia",
    description:
      "Acompanhamento médico da gestação, do pré-natal ao pós-parto.",
    image: "/images/specialties/obstetricia-clinica.jpg",
    focus: "50% 40%",
  },
  {
    slug: "ginecologia",
    name: "Ginecologia",
    description:
      "Consultas e acompanhamento da saúde ginecológica nas diferentes fases da vida.",
    image: "/images/specialties/ginecologia-clinica.jpg",
    focus: "50% 50%",
  },
  {
    slug: "enfermagem",
    name: "Enfermagem",
    description:
      "Atendimento de enfermagem voltado à saúde da mulher, à gestação e ao pós-parto.",
    image: "/images/specialties/enfermagem-clinica.jpg",
    focus: "50% 40%",
  },
  {
    slug: "ultrassom",
    name: "Ultrassom",
    description:
      "Exames de ultrassonografia para o acompanhamento ginecológico e obstétrico.",
    image: "/images/specialties/ultrassom-clinica.jpg",
    focus: "50% 55%",
  },
  {
    slug: "psicologia",
    name: "Psicologia",
    description: "Atendimento psicológico e cuidado com a saúde emocional.",
    image: "/images/specialties/psicologia.jpg",
    focus: "50% 55%",
  },
  {
    slug: "fisioterapia-pelvica",
    name: "Fisioterapia Pélvica",
    description:
      "Avaliação e acompanhamento fisioterapêutico do assoalho pélvico.",
    image: "/images/specialties/fisioterapia-pelvica-clinica.jpg",
    focus: "50% 55%",
  },
  {
    slug: "outras-especialidades",
    name: "Outras Especialidades",
    description:
      "A Mater também recebe profissionais de outras áreas. A agenda atual pode ser consultada pelo WhatsApp.",
    image: "/images/specialties/outras-clinica.jpg",
    focus: "50% 22%",
  },
];

/**
 * Temas da seção "fases da vida". Cada tema aponta para uma área
 * relacionada — não declara tratamentos específicos. CONFIRMAR vínculos.
 */
export const lifePhases = [
  { theme: "Saúde ginecológica", related: "Ginecologia" },
  { theme: "Gestação e maternidade", related: "Obstetrícia" },
  { theme: "Pós-parto", related: "Enfermagem" },
  { theme: "Saúde íntima e pélvica", related: "Fisioterapia Pélvica" },
  { theme: "Menopausa", related: "Ginecologia" },
  { theme: "Saúde emocional", related: "Psicologia" },
] as const;
