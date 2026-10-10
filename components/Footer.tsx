import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/data";
import Newsletter from "./Newsletter";
import { Facebook, LinkedIn, ArrowUp, ArrowRight } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="news-band" aria-labelledby="news-t">
        <div className="wrap news-in">
          <div>
            <p className="f-kick">Newsletter</p>
            <h4 id="news-t">Nos terrains et nos conseils, une fois par mois</h4>
            <p>Nouvelles parcelles mises en vente, disponibilités des engins et conseils pratiques pour vos démarches.</p>
          </div>
          <Newsletter />
        </div>
      </section>
      <div className="wrap foot-grid">
        <div>
          <p className="f-kick">G.TOPOSED</p>
          <h4>À propos de nous</h4>
          <p>{site.baseline}. Terrains titrés, location d&apos;engins et topographie à Bangui et en République centrafricaine.</p>
          <Link href="/contact" className="f-more">Contactez-nous <ArrowRight size={14} /></Link>
        </div>
        <div>
          <p className="f-kick">G.TOPOSED</p>
          <h4>Nos services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="f-kick">Navigation</p>
          <h4>Le site</h4>
          <ul>
            <li><Link href="/le-groupe">Le groupe</Link></li>
            <li><Link href="/realisations">Réalisations</Link></li>
            <li><Link href="/actualites">Actualités</Link></li>
            <li><Link href="/devis">Demande de devis</Link></li>
          </ul>
        </div>
        <div>
          <p className="f-kick">Réseaux sociaux</p>
          <h4>Suivez-nous</h4>
          <p>Nos chantiers, nos relevés et nos terrains disponibles : les nouvelles sont publiées au fil des semaines.</p>
          <span className="f-social">
            <a href={site.fbUrl} target="_blank" rel="noopener" aria-label="Facebook"><Facebook size={20} /></a>
            <a href={site.liUrl} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn size={20} /></a>
          </span>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="wrap foot-bottom-in">
          <span>G.TOPOSED — Copyright © {new Date().getFullYear()} G.TOPOSED</span>
          <span className="foot-links">
            <Link href="/contact">Contact</Link>
            <Link href="/le-groupe">Le groupe</Link>
            <Link href="/actualites">Actualités</Link>
            <a href="#top" className="to-top"><ArrowUp size={13} /> Retour en haut de page</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
