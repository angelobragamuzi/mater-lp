/**
 * Dados centrais da Mater Medicina Feminina.
 * Tudo o que aparece no site sobre a clínica sai deste arquivo.
 *
 * Itens marcados com "CONFIRMAR" dependem de validação da clínica
 * antes da publicação oficial.
 */

export const clinic = {
  name: "Mater Medicina Feminina",
  shortName: "Mater",
  city: "Caratinga",
  state: "MG",
  siteUrl: "https://www.matermedicinafeminina.com.br", // CONFIRMAR domínio

  address: {
    street: "Travessa João Coutinho, 39",
    district: "Centro",
    city: "Caratinga",
    state: "MG",
    zip: "35300-058",
  },

  /** Responsável técnica — conforme exibido no Instagram da clínica. */
  technicalLead: {
    name: "Dra. Larissa Silva Tristão",
    registry: "CRM-MG 66433",
    rqe: "RQE 44952",
  },

  whatsapp: {
    /** Formato internacional, apenas dígitos. CONFIRMAR com a clínica. */
    number: "5533999682383",
    display: "(33) 99968-2383",
    /** Enquanto false, o número não entra nos dados estruturados (SEO). */
    confirmed: false,
  },

  instagram: {
    handle: "@matermedicinafeminina",
    url: "https://www.instagram.com/matermedicinafeminina/",
  },

  /** Preencher somente com horários validados. null = não exibe. */
  hours: null as { label: string; value: string }[] | null,

  /**
   * Avaliações do Google. Exibidas apenas quando `verified` for true.
   * Preencher manualmente a partir do perfil oficial ou integrar com a
   * Places API (Place Details: rating + userRatingCount), respeitando
   * as regras de atribuição do Google.
   */
  googleReviews: {
    verified: false,
    rating: null as number | null,
    count: null as number | null,
    url: "https://www.google.com/maps/search/?api=1&query=Mater+Medicina+Feminina+Caratinga+MG",
  },

  /** null = link não aparece no rodapé. */
  privacyPolicyUrl: null as string | null,

  /** Créditos de desenvolvimento no rodapé. null = não exibe. */
  credits: { label: "Muzi Tecnologia", url: null as string | null } as {
    label: string;
    url: string | null;
  } | null,
} as const;

export const fullAddress = `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} - ${clinic.address.state}, ${clinic.address.zip}`;

export const maps = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=17&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "A Mater", href: "#a-mater" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Localização", href: "#localizacao" },
] as const;

/**
 * Fotografias oficiais. Enquanto o valor for null, o site mostra uma área
 * reservada no lugar da imagem. Para publicar uma foto, salve o arquivo em
 * /public/images/... e informe o caminho aqui (ex.: "/images/clinic/hero.jpg").
 */
export const images = {
  logo: "/images/brand/mater-logo.png", // substituir por SVG/PNG em alta
  hero: "/images/clinic/recepcao.jpg" as string | null, // foto REAL da recepção
  about: "/images/clinic/recepcao.jpg" as string | null, // foto REAL da recepção
  phases: "/images/clinic/fases-gestacao.jpg" as string | null, // ILUSTRATIVA
  gallery: [
    { src: "/images/clinic/galeria-abdomen.jpg" as string | null, label: "Gestação", alt: "Gestante com as mãos sobre o abdômen (imagem ilustrativa)" },
    { src: "/images/clinic/galeria-ultrassom.jpg" as string | null, label: "Ultrassom", alt: "Exame de ultrassom em sala de atendimento (imagem ilustrativa)" },
    { src: "/images/clinic/galeria-consulta.jpg" as string | null, label: "Consulta", alt: "Médica conversando com paciente (imagem ilustrativa)" },
    { src: "/images/clinic/galeria-retrato.jpg" as string | null, label: "Mulheres", alt: "Retrato de mulher sorrindo (imagem ilustrativa)" },
    { src: "/images/clinic/galeria-pilates.jpg" as string | null, label: "Movimento", alt: "Mulher praticando pilates em estúdio (imagem ilustrativa)" },
  ],
  /** Enquanto houver fotos de banco de imagens, o site avisa que são ilustrativas. */
  illustrativeImages: true,
};
