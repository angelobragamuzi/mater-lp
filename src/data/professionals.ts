/**
 * Corpo clínico.
 *
 * ATENÇÃO: os perfis abaixo são FICTÍCIOS (nomes, cargos e fotografias de
 * banco de imagens), usados apenas como demonstração de layout. Antes de
 * publicar, substitua cada entrada por profissionais confirmados pela clínica
 * e informe registro profissional real (CRM/COREN/CRP/CREFITO) e RQE quando
 * houver. Depois, defina `illustrative: false` (ou remova o campo).
 */

export type Professional = {
  name: string;
  /** Cargo / área de atuação. */
  specialty: string;
  /** Registro profissional real, quando confirmado. */
  registry?: string;
  rqe?: string;
  bio?: string;
  /** Retrato vertical (3:4), mín. 1200×1600. null = área reservada. */
  photo: string | null;
  /** Ponto focal do recorte (CSS object-position). */
  focus?: string;
  /** Perfil de demonstração (pessoa fictícia). */
  illustrative?: boolean;
};

export const professionals: Professional[] = [
  {
    name: "Dra. Helena Vasconcelos",
    specialty: "Ginecologia e Obstetrícia",
    bio: "Acompanhamento ginecológico e pré-natal, com escuta atenta em cada fase da vida.",
    photo: "/images/professionals/ginecologista.jpg",
    focus: "35% 20%",
    illustrative: true,
  },
  {
    name: "Dra. Camila Andrade",
    specialty: "Psicologia",
    bio: "Cuidado com a saúde emocional da mulher na gestação, no pós-parto e além.",
    photo: "/images/professionals/psicologa.jpg",
    focus: "50% 25%",
    illustrative: true,
  },
  {
    name: "Beatriz Nascimento",
    specialty: "Enfermagem Obstétrica",
    bio: "Orientação e atendimento de enfermagem na gestação e no pós-parto.",
    photo: "/images/professionals/enfermeira.jpg",
    focus: "50% 15%",
    illustrative: true,
  },
];

export const hasIllustrativeProfessionals = professionals.some(
  (p) => p.illustrative,
);
