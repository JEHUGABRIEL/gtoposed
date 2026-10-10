import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import TerrainsCard from "@/components/TerrainsCard";
import { services } from "@/lib/data";

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  return { title: s?.title, description: s?.short };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (
    <>
      <PageBanner title={s.title} image={s.image} parent={{ href: "/services", label: "Nos services" }} />
      <section className="section wrap side-layout">
        <div>
          <SectionTitle a={s.title.split(" ")[0]} b={s.title.split(" ").slice(1).join(" ")} />
          <p className="lead">{s.intro}</p>
          <h3 className="h3">Ce que nous faisons</h3>
          <ul className="check">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          <h3 className="h3">Comment ça se passe</h3>
          <ol className="steps">{s.steps.map((i) => <li key={i}>{i}</li>)}</ol>
          <h3 className="h3">Bon à savoir</h3>
          {s.know.map((k) => (
            <details key={k.q} className="faq"><summary>{k.q}</summary><p>{k.a}</p></details>
          ))}
        </div>
        <aside>
          <TerrainsCard />
          <div className="aside-box">
            <h4>Nos services</h4>
            <ul>{services.map((o) => <li key={o.slug}><Link className={o.slug === s.slug ? "on" : ""} href={`/services/${o.slug}`}>{o.title}</Link></li>)}</ul>
          </div>
          <div className="aside-box brand">
            <h4>Votre projet</h4>
            <p>Décrivez-nous votre terrain ou votre chantier : nous répondons sous 48 h.</p>
            <Link href="/devis" className="btn btn-brand">Demande de devis</Link>
          </div>
        </aside>
      </section>
    </>
  );
}
