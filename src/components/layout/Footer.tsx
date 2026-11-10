import { ArrowUpRight } from "lucide-react";
import { clinic, images, maps, navigation } from "@/data/clinic";
import { external, whatsappLink } from "@/lib/whatsapp";
import { LogoMark } from "@/components/ui/Brand";
import { GoogleG } from "@/components/ui/icons";
import { Shapes } from "@/components/ui/Shapes";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

function Stars({ rating }: { rating: number }) {
  const pct = `${Math.max(0, Math.min(5, rating)) * 20}%`;
  const row = "★★★★★";
  return (
    <span
      className="relative inline-block text-lg leading-none tracking-[0.12em]"
      role="img"
      aria-label={`${rating.toLocaleString("pt-BR")} de 5 estrelas`}
    >
      <span className="text-paper/20">{row}</span>
      <span
        className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-[#f5b93f]"
        style={{ width: pct }}
      >
        {row}
      </span>
    </span>
  );
}

/** Reputação no Google — números só aparecem quando conferidos em clinic.ts. */
function GoogleReviews() {
  const { googleReviews: g } = clinic;
  const hasData = g.verified && g.rating !== null && g.count !== null;

  return (
    <div>
      <h2 className={heading}>Avaliações</h2>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-white">
          <GoogleG />
        </span>
        {hasData ? (
          <div>
            <p className="flex items-center gap-2.5">
              <span className="font-serif text-3xl leading-none text-paper">
                {g.rating!.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
              </span>
              <Stars rating={g.rating!} />
            </p>
            <p className="mt-1 text-[0.8rem] text-paper/60">
              {g.count!.toLocaleString("pt-BR")} avaliações no Google
            </p>
          </div>
        ) : (
          <p className="text-[0.92rem] leading-snug text-paper/80">
            Mater Medicina Feminina
            <br />
            <span className="text-paper/55">no Google</span>
          </p>
        )}
      </div>
      <a
        href={g.url}
        {...external}
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[0.85rem] text-paper"
      >
        <span className="link-line">Ver avaliações no Google</span>
        <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only"> (abre em nova guia)</span>
      </a>
    </div>
  );
}

const heading =
  "text-[0.68rem] font-medium uppercase tracking-[0.24em] text-rose";
const link =
  "inline-flex min-h-9 items-center text-[0.92rem] text-paper/80 transition-colors duration-300 hover:text-paper";

export async function Footer() {
  const year = await currentYear();
  const { address } = clinic;

  return (
    <footer className="relative overflow-hidden bg-graphite text-paper">
      <Shapes variant="g" top="b7" />
      <div className="shell relative pb-28 pt-20 sm:pb-10 lg:pt-24">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <LogoMark size={92} />
            <p className="mt-6 font-serif text-[1.9rem] leading-tight">
              {clinic.name}
            </p>
            <p className="mt-3 max-w-xs text-[0.92rem] leading-relaxed text-paper/60">
              Saúde da mulher em {clinic.city}, {clinic.state}. Responsável
              técnica: {clinic.technicalLead.name} ·{" "}
              {clinic.technicalLead.registry} · {clinic.technicalLead.rqe}.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className={heading}>Navegação</h2>
            <ul className="mt-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={heading}>Contato</h2>
            <ul className="mt-4">
              <li>
                <a href={whatsappLink()} {...external} className={link}>
                  WhatsApp {clinic.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={clinic.instagram.url} {...external} className={link}>
                  Instagram {clinic.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={maps.directions}
                  {...external}
                  className={`${link} mt-2 !items-start leading-relaxed`}
                >
                  {address.street}
                  <br />
                  {address.district} — {address.city}, {address.state}
                  <br />
                  CEP {address.zip}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <GoogleReviews />
          </div>
        </div>

        {images.illustrativeImages && (
          <p className="mt-12 max-w-2xl text-[0.78rem] leading-relaxed text-paper/50">
            Com exceção da recepção, as fotografias desta página são
            ilustrativas (banco de imagens Unsplash) e não retratam a equipe
            ou o espaço da Mater; os perfis de profissionais são fictícios.
            Serão substituídos por imagens e informações oficiais da clínica.
          </p>
        )}

        <div className="mt-6 flex flex-col gap-3 border-t border-paper/15 pt-7 text-[0.78rem] text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {clinic.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {clinic.privacyPolicyUrl && (
              <a
                href={clinic.privacyPolicyUrl}
                className="transition-colors hover:text-paper"
              >
                Política de Privacidade
              </a>
            )}
            {clinic.credits && (
              <p>
                Desenvolvido por{" "}
                {clinic.credits.url ? (
                  <a
                    href={clinic.credits.url}
                    {...external}
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {clinic.credits.label}
                  </a>
                ) : (
                  <span className="text-paper/75">{clinic.credits.label}</span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
