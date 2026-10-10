import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { Pin, Phone, Mail, Facebook } from "@/components/Icons";
import { img, site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const infos = [
  { icon: Pin, t: site.city.split(",")[0], d: site.city, href: "" },
  { icon: Phone, t: "Téléphone", d: `${site.phone1} / ${site.phone2}`, href: `tel:${site.tel1}` },
  { icon: Mail, t: "E-mail", d: site.email, href: `mailto:${site.email}` },
  { icon: Facebook, t: "Facebook", d: site.facebook, href: site.fbUrl },
];

export default function Page() {
  return (
    <>
      <PageBanner title="Contactez-nous" image={img.team} text="Une parcelle à vérifier, un engin à réserver, un terrain à relever ? Dites-nous ce dont vous avez besoin." />
      <section className="section wrap two align-start">
        <div>
          <SectionTitle kicker="Formulaire" a="Nous" b="contacter" />
          <p>
            Remplissez le formulaire ou appelez-nous directement. Nous répondons aux demandes chiffrées sous <strong>24 à 48 h</strong>, et nous vous disons franchement si le projet relève de nos métiers ou non.
          </p>
          <div className="info-grid">
            {infos.map((n) => (
              <div key={n.t} className="info">
                <span className="icircle soft"><n.icon size={26} /></span>
                <div>
                  <h4>{n.t}</h4>
                  {n.href ? <p><a href={n.href}>{n.d}</a></p> : <p>{n.d}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm title={{ a: "Contactez-nous", b: "via notre formulaire…" }} />
      </section>
    </>
  );
}
