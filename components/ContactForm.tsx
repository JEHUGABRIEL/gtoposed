"use client";
import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/data";

export default function ContactForm({ devis = false, title }: { devis?: boolean; title?: { a: string; b?: string } }) {
  const [f, setF] = useState({ nom: "", tel: "", sujet: services[0].title, lieu: "", delai: "", msg: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  function envoyer(e: React.FormEvent) {
    e.preventDefault();
    const lignes = [
      `Bonjour G.TOPOSED, je m'appelle ${f.nom}.`,
      devis ? `Je souhaite un devis pour : ${f.sujet}.` : `Sujet : ${f.sujet}.`,
      f.lieu && `Lieu : ${f.lieu}.`,
      f.delai && `Délai souhaité : ${f.delai}.`,
      f.tel && `Mon numéro : ${f.tel}.`,
      f.msg && `\n${f.msg}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${site.wa}?text=${encodeURIComponent(lignes.join("\n"))}`, "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={envoyer}>
      {title && <h3 className="form-title"><span className="lt">{title.a}</span>{title.b ? <> {title.b}</> : null}</h3>}
      <p className="note">Les champs marqués d'un astérisque (*) sont obligatoires.</p>
      <div className="row2">
        <label>Nom et prénom *<input required value={f.nom} onChange={set("nom")} autoComplete="name" /></label>
        <label>Téléphone *<input required type="tel" value={f.tel} onChange={set("tel")} autoComplete="tel" /></label>
      </div>
      <label>{devis ? "Service concerné *" : "Objet de votre demande *"}
        <select value={f.sujet} onChange={set("sujet")}>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          {!devis && <option>Demande de rendez-vous</option>}
          {!devis && <option>Autre</option>}
        </select>
      </label>
      {devis && (
        <div className="row2">
          <label>Lieu du projet<input value={f.lieu} onChange={set("lieu")} placeholder="Quartier, ville…" /></label>
          <label>Délai souhaité<input value={f.delai} onChange={set("delai")} placeholder="Ex. début novembre" /></label>
        </div>
      )}
      <label>Votre message<textarea rows={5} value={f.msg} onChange={set("msg")} placeholder="Décrivez votre projet en quelques lignes." /></label>
      <button type="submit" className="btn btn-brand">Envoyer sur WhatsApp</button>
    </form>
  );
}
