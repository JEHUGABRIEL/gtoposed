import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import NewsList from "@/components/NewsList";
import TerrainsCard from "@/components/TerrainsCard";
import Photo from "@/components/Photo";
import { realisations, services, fmtDate } from "@/lib/data";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "Réalisations" };

export default function Page() {
  const sorted = [...realisations].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <PageBanner
        title="Réalisations"
        image={img.site1}
        text="Relevés, terrassements, opérations foncières : des chantiers menés à Bangui et ailleurs dans le pays, avec ce que chacun a demandé."
      />
      <section className="section wrap">
        <div className="news-layout">
          <div>
            <NewsList items={sorted} />
          </div>
          <aside>
            <TerrainsCard />
            <h3 className="side-h">Dernières réalisations</h3>
            {sorted.slice(0, 4).map((r) => (
              <div key={r.slug} className="ln">
                <Photo src={r.image} alt="" className="thumb" />
                <span>
                  <span className="d">{fmtDate(r.date)}</span>
                  <h4>{r.title}</h4>
                </span>
              </div>
            ))}
            <h3 className="side-h">Nos services</h3>
            <div className="aside-box">
              <ul>
                {services.map((s) => (
                  <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <h3 className="side-h">Une question ?</h3>
            <div className="aside-box brand">
              <h4>Un chantier en vue ?</h4>
              <p>Décrivez-le-nous : nous vous répondons sous 48 h, chiffrage compris.</p>
              <Link href="/devis" className="btn">Demande de devis</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
