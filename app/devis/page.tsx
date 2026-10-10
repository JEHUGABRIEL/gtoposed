import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "Demande de devis" };

export default function Page() {
  return (
    <>
      <PageBanner title="Demande de devis" image={img.plans} parent={{ href: "/contact", label: "Contact" }} />
      <section className="section wrap two">
        <div>
          <SectionTitle a="Décrivez-nous" b="votre projet" />
          <p>Dites-nous de quoi vous avez besoin : un relevé, un terrain à visiter, un engin à mettre en route. Le lieu et la date souhaitée nous aident à chiffrer juste du premier coup.</p>
          <p>Le formulaire prépare votre message et l&apos;ouvre dans WhatsApp, où vous pouvez joindre des photos du terrain ou du plan. Cela nous fait gagner un aller-retour.</p>
        </div>
        <ContactForm devis />
      </section>
    </>
  );
}
