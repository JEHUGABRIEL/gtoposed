"use client";
import { useState } from "react";
import { site } from "@/lib/site";

/* Inscription à la newsletter sans service externe : le formulaire ouvre un e-mail
   pré-rempli vers l'adresse du site, que le visiteur n'a plus qu'à envoyer.
   Pour passer à un vrai service d'e-mailing, remplacer `envoyer()` par un appel
   à son API (le reste du composant ne change pas). */
export default function Newsletter() {
  const [mail, setMail] = useState("");
  const [envoye, setEnvoye] = useState(false);

  function envoyer(e: React.FormEvent) {
    e.preventDefault();
    const sujet = "Inscription à la newsletter G.TOPOSED";
    const corps = [
      "Bonjour,",
      "",
      "Merci de m'inscrire à la newsletter de G.TOPOSED.",
      `Mon adresse : ${mail}`,
      "",
      "Cordialement,",
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
  }

  return (
    <form className="news-form" onSubmit={envoyer}>
      <label className="news-field">
        <span className="news-lbl">Votre adresse e-mail</span>
        <input
          type="email"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="votre@email.com"
          autoComplete="email"
        />
      </label>
      <button type="submit" className="btn btn-light">Je m&apos;inscris</button>
      <p className="news-note" role="status">
        {envoye
          ? "Merci ! Validez l'e-mail qui vient de s'ouvrir pour terminer l'inscription."
          : "Un message par mois, pas de publicité, désinscription en un clic."}
      </p>
    </form>
  );
}
