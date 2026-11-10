# Mater Medicina Feminina — Landing page

Landing page institucional da Mater Medicina Feminina (Caratinga, MG).
Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Motion.

## Executar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Endereço, WhatsApp, Instagram, horários, avaliações do Google, créditos, caminhos das fotos | `src/data/clinic.ts` |
| Especialidades e temas de "fases da vida" | `src/data/specialties.ts` |
| Profissionais | `src/data/professionals.ts` |
| Mensagens pré-preenchidas do WhatsApp | `src/lib/whatsapp.ts` |
| Cores e tipografia (tokens) | `src/app/globals.css` |

## Fotografias

Enquanto um caminho de imagem estiver `null`, o site mostra uma área reservada
("Fotografia oficial pendente"). Para publicar uma foto, salve o arquivo em
`public/images/...` e informe o caminho no arquivo de dados correspondente.

- As fotos atuais em `public/images/clinic` e `public/images/specialties` são
  **ilustrativas**, do Unsplash (licença gratuita, uso comercial permitido).
  Não retratam a equipe nem o espaço da Mater. Para trocar, substitua os
  caminhos em `clinic.ts`/`specialties.ts` e defina `illustrativeImages: false`
  para remover o aviso do rodapé.
- `public/images/brand/mater-logo.png` — logotipo original (150×150, vindo do
  Instagram). Substituir por SVG ou PNG em alta resolução.
- Hero: retrato vertical, mínimo 1400×1900.
- Profissionais: retratos 3:4, mínimo 1200×1600.

## Pendências de confirmação com a clínica

- Número de WhatsApp `(33) 99968-2383` (provisório; `whatsapp.confirmed`).
- Horário de funcionamento (`hours`).
- Nota e quantidade de avaliações do Google (`googleReviews`).
- Descrição de cada especialidade e vínculos dos temas de fases da vida.
- Demais profissionais (nome, especialidade, registro, foto).
- Texto institucional da seção "Conheça a Mater" (`About.tsx`).
- Domínio oficial (`siteUrl`), Política de Privacidade e créditos do rodapé.
