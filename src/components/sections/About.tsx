import { clinic, images } from "@/data/clinic";
import { specialties } from "@/data/specialties";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Shapes } from "@/components/ui/Shapes";

/** Texto institucional — editável. Substituir pela história oficial da clínica. */
const copy = {
  title: "Conheça a Mater",
  lead: "Uma clínica dedicada à saúde da mulher, no Centro de Caratinga.",
  body: [
    "A Mater concentra em um mesmo endereço a ginecologia, a obstetrícia e as áreas que caminham junto com elas: enfermagem, ultrassom, psicologia e fisioterapia pélvica. Quem chega para uma consulta encontra, na mesma casa, profissionais que podem dar sequência ao acompanhamento.",
    "A responsabilidade técnica é da Dra. Larissa Silva Tristão, ginecologista e obstetra.",
  ],
};

export function About() {
  const facts = [
    {
      term: "Endereço",
      value: `${clinic.address.street} — ${clinic.address.district}, ${clinic.address.city}`,
    },
    {
      term: "Responsável técnica",
      value: `${clinic.technicalLead.name} · ${clinic.technicalLead.registry} · ${clinic.technicalLead.rqe}`,
    },
    {
      term: "Áreas de atendimento",
      value: specialties
        .slice(0, 6)
        .map((s) => s.name)
        .join(", "),
    },
  ];

  return (
    <section
      id="a-mater"
      className="relative overflow-hidden bg-blush/45 py-24 lg:py-32"
    >
      <Shapes variant="a" bottom="b1" />

      <div className="shell relative">
        {/* título + frase de abertura lado a lado */}
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <h2 className="display text-[clamp(2.6rem,4.6vw,4.25rem)] text-wine lg:col-span-6">
            {copy.title}
          </h2>
          <p className="font-serif text-[1.55rem] leading-snug text-graphite lg:col-span-5 lg:col-start-8 lg:pb-2">
            {copy.lead}
          </p>
        </Reveal>

        {/* fotografia panorâmica */}
        <Reveal delay={0.08} className="mt-12 lg:mt-16">
          <PhotoSlot
            src={images.about}
            alt="Recepção da Mater Medicina Feminina, com poltronas, parede de cobogós e o letreiro com a flor de lótus da marca"
            label="Instalações ou equipe da Mater"
            tone="sand"
            focus="50% 68%"
            sizes="(min-width: 1312px) 1216px, 100vw"
            className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[2.35/1]"
          />
          <p className="mt-4 flex items-baseline justify-between gap-6 text-[0.7rem] uppercase tracking-[0.2em] text-graphite/70">
            <span>Recepção da Mater</span>
            <span className="text-rose-deep">Centro de Caratinga</span>
          </p>
        </Reveal>

        {/* texto e dados em duas colunas */}
        <Reveal
          delay={0.1}
          className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-12"
        >
          <div className="lg:col-span-6">
            {copy.body.map((p, i) => (
              <p
                key={p}
                className={`leading-[1.85] text-graphite/80 ${i ? "mt-5" : ""}`}
              >
                {p}
              </p>
            ))}
          </div>

          <dl className="border-t border-wine/15 lg:col-span-5 lg:col-start-8">
            {facts.map((f) => (
              <div
                key={f.term}
                className="grid gap-1 border-b border-wine/15 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-rose-deep sm:pt-1">
                  {f.term}
                </dt>
                <dd className="text-[0.95rem] leading-relaxed text-graphite">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
