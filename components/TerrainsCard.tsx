import Link from "next/link";
import Photo from "./Photo";
import { terrainsRecents, estNouveau, fmtDate, type Terrain } from "@/lib/data";

/* Carte de colonne latérale : les terrains mis en vente le plus récemment.
   Le classement vient de `terrainsRecents` (lib/data.ts), donc de la date d'ajout. */
export default function TerrainsCard({ limit = 3, title = "Terrains récemment ajoutés" }: { limit?: number; title?: string }) {
  const recents: Terrain[] = terrainsRecents.slice(0, limit);

  return (
    <div className="aside-box tc">
      <h4>{title}</h4>
      <ul className="tc-list">
        {recents.map((t) => (
          <li key={t.slug}>
            <Link href="/services/vente-de-terrains-titres">
              <Photo src={t.image} alt={t.title} className="tc-img" />
              <span className="tc-txt">
                <strong>
                  {t.title}
                  {estNouveau(t.date) && <em className="tc-badge">Nouveau</em>}
                </strong>
                <span className="tc-meta">{t.lieu} · {t.surface}</span>
                <span className="tc-date">Ajouté le {fmtDate(t.date)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/services/vente-de-terrains-titres" className="btn btn-brand">Voir tous les terrains</Link>
    </div>
  );
}
