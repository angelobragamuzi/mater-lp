import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { clinic } from "@/data/clinic";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = `${clinic.name} — Saúde da mulher em ${clinic.city}, ${clinic.state}`;
const description =
  "Clínica de saúde feminina no Centro de Caratinga, MG. Ginecologia, obstetrícia, enfermagem, ultrassom, psicologia e fisioterapia pélvica em um só endereço. Agendamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Mater Medicina Feminina",
    "ginecologista em Caratinga",
    "obstetra em Caratinga",
    "clínica da mulher Caratinga",
    "ultrassom Caratinga",
    "fisioterapia pélvica Caratinga",
    "psicologia Caratinga",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: clinic.name,
    title,
    description,
    // Substituir por imagem 1200×630 quando houver fotografia oficial.
    images: [{ url: "/images/brand/og.jpg", width: 1200, height: 630, alt: `Recepção da ${clinic.name}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/brand/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#732B45",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
