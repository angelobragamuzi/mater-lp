import { clinic } from "@/data/clinic";
import { specialties } from "@/data/specialties";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Professionals } from "@/components/sections/Professionals";
import { Specialties } from "@/components/sections/Specialties";
import { WomensHealth } from "@/components/sections/WomensHealth";
import { PetalClipDefs } from "@/components/ui/Brand";
import { FloatingWhatsApp } from "@/components/ui/WhatsAppButton";

/** Dados estruturados — somente informações verificadas. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  url: clinic.siteUrl,
  sameAs: [clinic.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.street,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.zip,
    addressCountry: "BR",
  },
  medicalSpecialty: ["Gynecologic", "Obstetric"],
  availableService: specialties.slice(0, 6).map((s) => ({
    "@type": "MedicalSpecialty",
    name: s.name,
  })),
  ...(clinic.whatsapp.confirmed
    ? { telephone: `+${clinic.whatsapp.number}` }
    : {}),
  ...(clinic.googleReviews.verified &&
  clinic.googleReviews.rating !== null &&
  clinic.googleReviews.count !== null
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: clinic.googleReviews.rating,
          reviewCount: clinic.googleReviews.count,
        },
      }
    : {}),
};

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-wine focus:px-5 focus:py-3 focus:text-paper"
      >
        Ir para o conteúdo
      </a>
      <PetalClipDefs />
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Specialties />
        <Professionals />
        <WomensHealth />
        <Gallery />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
