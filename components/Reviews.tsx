"use client";
import { useState } from "react";
import { Google, Star } from "./Icons";

const avis = [
  { t: "Parcelle relevée avant l'achat", x: "J'allais acheter une parcelle annoncée à 500 m². Le relevé en a trouvé 430, avec une limite décalée. J'ai renégocié, puis acheté en connaissance de cause.", n: "Claire S.", s: 5 },
  { t: "Chantier bouclé avant la pluie", x: "Nous devions terrasser avant les premières pluies. L'engin et son conducteur étaient sur place le lundi, tout était réglé le vendredi.", n: "Jonathan N.", s: 5 },
  { t: "Un devis qui se lit jusqu'au bout", x: "Devis reçu le lendemain, carburant et conducteur détaillés. Pas de rallonge à la fin : ça change de ce qu'on voit d'habitude.", n: "Caroline T.", s: 4 },
  { t: "Documents expliqués dès la visite", x: "Visite organisée sur le terrain, titre foncier lu et commenté ligne par ligne. Nous savions précisément ce que nous achetions.", n: "Patrick M.", s: 5 },
  { t: "Une pelle livrée à l'heure", x: "Location d'une pelle pour trois jours sur notre chantier à Bangui. Machine entretenue, et quelqu'un au bout du fil pendant les travaux.", n: "Serge B.", s: 5 },
  { t: "Des réponses pratiques", x: "Je ne savais pas si mon terrain était constructible. On m'a expliqué quoi demander à la mairie, et dans quel ordre faire les démarches.", n: "Awa D.", s: 5 },
];

export default function Reviews() {
  const pages = [avis.slice(0, 3), avis.slice(3, 6)];
  const [p, setP] = useState(0);
  return (
    <section className="section reviews">
      <span className="deco l" aria-hidden />
      <span className="deco r" aria-hidden />
      <div className="wrap">
        <div className="st">
          <p className="kicker">G.TOPOSED</p>
          <h2><span className="lt">Ce que disent</span> <span className="hd">nos clients</span></h2>
        </div>
        <div className="rev-grid">
          {pages[p].map((a) => (
            <article key={a.n} className="rev">
              <span className="g"><Google /></span>
              <h3>{a.t}</h3>
              <p>{a.x}</p>
              <div className="stars" aria-label={`${a.s} étoiles sur 5`}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={17} className={i < a.s ? "" : "off"} />
                ))}
              </div>
              <p className="who">{a.n}</p>
            </article>
          ))}
        </div>
        <div className="dots on-light" style={{ position: "relative", bottom: "auto" }}>
          {pages.map((_, i) => (
            <button key={i} aria-label={`Avis page ${i + 1}`} aria-current={i === p} className={i === p ? "on" : ""} onClick={() => setP(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
