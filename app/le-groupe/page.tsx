import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Photo from "@/components/Photo";
import Link from "next/link";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "Le groupe" };

const valeurs = [
  ["Des mesures vérifiables", "Chaque chiffre que nous livrons sort d'un instrument contrôlé et d'un calcul refait au bureau avant l'envoi."],
  ["La proximité, au sens propre", "Notre base est à Bangui. Un déplacement se décide le matin pour l'après-midi, sans passer par une maison mère à l'étranger."],
  ["La parole tenue", "Une date annoncée est une date tenue. Quand un imprévu arrive, nous appelons avant l'échéance, pas après."],
  ["L'engagement jusqu'au bout", "Nous ne lâchons pas un dossier à mi-chemin, surtout quand vient la partie la plus ingrate du chantier."],
  ["Des prix lisibles", "Carburant, conducteur, transport, instruments : les postes sont listés un par un, jamais noyés dans un forfait flou."],
  ["Du matériel entretenu", "Stations totales, niveaux et GPS suivis de près. Une mesure approximative coûte toujours plus cher qu'un bon instrument."],
];

export default function Page() {
  return (
    <>
      <PageBanner title="Le groupe" image={img.team} />
      <section className="section wrap two">
        <div>
          <SectionTitle kicker="Qui sommes-nous" a="G.TOPOSED," b="trois métiers sous un même toit" />
          <p>Notre base est à Bangui. Nous y mesurons des parcelles, nous y vendons des terrains titrés et nous y envoyons des engins de terrassement — pour des particuliers, des entreprises et des investisseurs de tout le pays.</p>
          <p>Notre ambition tient en une phrase : éviter que vous engagiez de l&apos;argent sur un terrain que personne n&apos;a vérifié. C&apos;est ce qui guide chaque dossier, du premier relevé jusqu&apos;à la remise des documents.</p>
          <p>Ces trois métiers se répondent au lieu de s&apos;ignorer : nous mesurons la parcelle, nous la vendons avec son titre, puis nous y amenons les machines. C&apos;est la même équipe qui vous suit d&apos;un bout à l&apos;autre.</p>
        </div>
        <Photo src={img.crew} alt="Équipe de chantier" className="rounded" />
      </section>
      <section className="section tint">
        <div className="wrap">
          <SectionTitle kicker="Nos valeurs" a="Nos façons" b="de travailler" />
          <div className="values">
            {valeurs.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap cta-in">
          <div><h2>Parlons de votre projet</h2><p>Un appel suffit souvent à savoir par où commencer, et ce que cela coûtera.</p></div>
          <div className="cta-actions"><Link href="/contact" className="btn btn-brand">Contactez-nous</Link></div>
        </div>
      </section>
    </>
  );
}
