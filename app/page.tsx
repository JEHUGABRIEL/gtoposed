import Link from "next/link";
import Slider from "@/components/Slider";
import Photo from "@/components/Photo";
import SectionTitle from "@/components/SectionTitle";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import { Ruler, Truck, Compass, ArrowRight, Pin, Phone, Mail } from "@/components/Icons";
import { services, posts, dayMonth, terrains, engins, partenaires } from "@/lib/data";
import { img, site } from "@/lib/site";

const slides = [
  { image: img.crew, kicker: "Topographie & foncier", title: ["Mesurer", "avant d'acheter"] as [string, string], text: "Une parcelle se juge sur le terrain, pas sur une annonce. Nous relevons, nous vérifions les limites et nous vous disons ce que valent vraiment les documents.", href: "/le-groupe", cta: "Qui sommes-nous" },
  { image: img.land, kicker: "Vente de terrains", title: ["Terrains", "titrés"] as [string, string], text: "Des parcelles que nous avons nous-mêmes mesurées, vendues avec leurs titres. Vous achetez en sachant exactement où sont les bornes.", href: "/services/vente-de-terrains-titres", cta: "Voir les terrains" },
  { image: img.excavator, kicker: "Location d'engins", title: ["Engins", "et conducteurs"] as [string, string], text: "Pelles, camions et compacteurs, livrés sur votre chantier avec leur conducteur. Un devis clair, du carburant au temps de travail.", href: "/services/location-d-engins", cta: "Voir les engins" },
];

const raisons: [string, string][] = [
  ["Des gens joignables", "vous parlez directement à celui qui a relevé la parcelle ou conduit l'engin, sans standard ni dossier qui passe de main en main."],
  ["Le même interlocuteur du début à la fin", "de la première visite jusqu'à la remise des documents ou la sortie des machines, c'est la même équipe qui suit votre affaire."],
  ["On vous dit aussi quand c'est non", "un titre douteux, un terrain inconstructible : nous le disons avant que vous ne payiez, pas après."],
  ["Des chiffres écrits, pas promis", "surfaces, distances, coûts de location : chaque chiffre figure sur un document que vous gardez et pouvez faire vérifier."],
];

const metiers = [
  { icon: Compass, t: "Terrains titrés", d: "Nous mesurons la parcelle, vérifions le titre foncier, puis la mettons en vente. Vous savez ce que vous achetez, au mètre près." },
  { icon: Truck, t: "Location d'engins", d: "Pelles, camions et compacteurs, avec leur conducteur, à la journée ou pour tout le chantier. Livrés et récupérés par nos soins." },
  { icon: Ruler, t: "Topographie", d: "Bornage, relevés de limites, plans et implantation : les mesures sur lesquelles s'appuient vos démarches et votre chantier." },
];

const contacts = [
  { icon: Pin, t: "Nos agences", d: "Bangui, République centrafricaine", href: "" },
  { icon: Phone, t: "Téléphone", d: `${site.phone1} / ${site.phone2}`, href: `tel:${site.tel1}` },
  { icon: Mail, t: "E-mail", d: site.email, href: `mailto:${site.email}` },
];

export default function Home() {
  const latest = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);

  return (
    <>
      <Slider slides={slides} />

      <section className="section wrap two">
        <div>
          <SectionTitle kicker="G.TOPOSED" a="Qui" b="sommes-nous ?" />
          <p>G.TOPOSED est né d&apos;un constat simple : à Bangui, trop de projets s&apos;arrêtent à cause d&apos;un terrain mal mesuré ou d&apos;un titre mal vérifié. Nous avons donc réuni sous un même toit les trois métiers qui font démarrer un chantier correctement.</p>
          <p>Vendre des terrains titrés, louer des engins avec leur conducteur, et relever le terrain avant tout le reste. Vous n&apos;avez qu&apos;un numéro à appeler, du bornage jusqu&apos;à l&apos;arrivée des machines.</p>
          <Link href="/le-groupe" className="btn btn-brand">En savoir plus</Link>
        </div>
        <Photo src={img.team} alt="L'équipe G.TOPOSED autour d'un plan" className="rounded r-br" />
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="icon-row">
          {metiers.map((m) => (
            <article key={m.t}>
              <div className="irow-head">
                <span className="icircle"><m.icon size={28} /></span>
                <h3>{m.t}</h3>
              </div>
              <p>{m.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionTitle kicker="G.TOPOSED" a="Nos" b="services" />
          <div className="svc-grid">
            {services.map((s) => (
              <article key={s.slug} className="svc">
                <Photo src={s.image} alt={s.title} className="svc-img" />
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link href={`/services/${s.slug}`} className="line-more">En savoir plus</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Terrains disponibles */}
      <section className="section wrap deco-sec">
        <span className="deco l" aria-hidden />
        <span className="deco r" aria-hidden />
        <SectionTitle center kicker="Vente de terrains" a="Parcelles" b="disponibles" />
        <div className="photo-cards">
          {terrains.map((t) => (
            <Link key={t.slug} href="/services/vente-de-terrains-titres" className="pcard">
              <span className="badge">Disponible</span>
              <Photo src={t.image} alt={t.title} className="pc-img" />
              <span className="pc-shade" />
              <div className="pc-body">
                <span className="pc-cat">{t.lieu}</span>
                <h3>{t.title}</h3>
                <p className="pc-meta">
                  <span><Ruler size={14} /> {t.surface}</span>
                  <span><Compass size={14} /> Titre foncier</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="center-cta">
          <Link href="/services/vente-de-terrains-titres" className="btn btn-brand">Tous nos terrains</Link>
        </div>
      </section>

      {/* Engins en vedette */}
      <section className="section tint">
        <div className="wrap">
          <SectionTitle kicker="Location d'engins" a="Engins" b="en vedette" />
          <div className="svc-grid">
            {engins.map((e) => (
              <article key={e.name} className="svc">
                <Photo src={e.image} alt={e.name} className="svc-img" />
                <h3>{e.name}</h3>
                <ul className="spec">
                  {e.specs.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <Link href="/devis" className="line-more">Demander ce matériel</Link>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <Link href="/services/location-d-engins" className="btn btn-brand">Tous nos engins</Link>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="why-img">
          <Photo src={img.office} alt="Façade de l'agence G.TOPOSED" className="cover" />
        </div>
        <div className="why-txt">
          <SectionTitle light kicker="G.TOPOSED" a="Pourquoi faire appel" b="à nous ?" />
          <div className="why-list">
            <p>Nous ne vendons pas un service à la chaîne. Chaque dossier est suivi par une personne qui connaît votre parcelle, votre chantier et vos contraintes — et qui vous répond quand vous appelez.</p>
            {raisons.map(([t, d]) => (
              <p key={t}><strong>{t}</strong> — {d}</p>
            ))}
          </div>
          <Link href="/contact" className="btn btn-sky">Contactez-nous</Link>
        </div>
      </section>

      <section className="section wrap">
        <SectionTitle center kicker="G.TOPOSED" a="Nos dernières" b="actualités" />
        <div className="news-grid">
          {latest.map((p, i) => {
            const d = dayMonth(p.date);
            const feature = i === 0;
            return (
              <article key={p.slug} className={feature ? "ncard feature" : "ncard"}>
                <span className="date"><b>{d.day}</b><span>{d.month}</span></span>
                <div className="ncard-in">
                  {feature ? (
                    <>
                      <Photo src={p.image} alt="" className="cover" />
                      <span className="shade" />
                      <div className="nc-body">
                        <span className="chip">{p.cat}</span>
                        <h3>{p.title}</h3>
                        <p>{p.excerpt}</p>
                        <Link href={`/actualites/${p.slug}`} className="more">Lire la suite <ArrowRight size={14} /></Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="nc-kick">{p.cat}</p>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                      <Link href={`/actualites/${p.slug}`} className="more">Lire la suite <ArrowRight size={14} /></Link>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="center-cta">
          <Link href="/actualites" className="btn btn-brand">Toutes les actualités</Link>
        </div>
      </section>

      <Reviews />

      {/* Partenaires : bandeau bleu ciel à coins courbés, logos qui défilent en continu */}
      <section className="partners-band">
        <div className="wrap">
          <SectionTitle light center kicker="G.TOPOSED" a="Ils nous" b="font confiance" />
        </div>
        <div className="p-marquee">
          <div className="p-track">
            {[...partenaires, ...partenaires].map((p, i) => (
              <span key={`${p}-${i}`} className="p-chip" aria-hidden={i >= partenaires.length}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="section tint">
        <div className="wrap two align-start">
          <div>
            <SectionTitle kicker="Formulaire" a="Nous" b="contacter" />
            <p>
              Décrivez-nous votre projet en quelques lignes : surface à relever, engin souhaité, terrain à visiter. Nous revenons vers vous sous <strong>24 à 48 h</strong> avec une proposition chiffrée, sans engagement de votre part.
            </p>
            <div className="info-grid">
              {contacts.map((n) => (
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
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-in">
          <div>
            <h2>Un terrain à vérifier, un chantier à préparer ?</h2>
            <p>Appelez-nous ou envoyez votre demande : nous vous dirons ce qui est possible, et à quel prix.</p>
          </div>
          <div className="cta-actions">
            <Link href="/devis" className="btn btn-brand">Demande de devis</Link>
            <a href={`tel:${site.tel1}`} className="btn btn-light">{site.phone1}</a>
          </div>
        </div>
      </section>
    </>
  );
}
