"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "@/lib/data";
import { fmtDate, dayMonth, allTags, archives, fmtArchive } from "@/lib/data";
import Photo from "./Photo";
import { Search } from "./Icons";
import NewsList from "./NewsList";
import TerrainsCard from "./TerrainsCard";

export default function NewsArchive({ items }: { items: Post[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [month, setMonth] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return items.filter((p) => {
      if (tag && !p.tags.includes(tag)) return false;
      if (month && dayMonth(p.date).mkey !== month) return false;
      if (t && !(p.title + p.excerpt + p.cat + p.tags.join(" ")).toLowerCase().includes(t)) return false;
      return true;
    });
  }, [items, q, tag, month]);

  const key = `${q}|${tag}|${month}`;

  return (
    <div className="news-layout">
      <div>
        {filtered.length > 0 ? (
          <NewsList key={key} items={filtered} linkBase="/actualites" />
        ) : (
          <p className="note">Aucune actualité ne correspond à votre recherche.</p>
        )}
      </div>

      <aside>
        <div className="side-search">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Mot-clé..." aria-label="Mot-clé" />
          <button type="button" aria-label="Rechercher" onClick={() => setQ("")}><Search size={20} /></button>
        </div>

        <TerrainsCard />

        <h3 className="side-h">Dernières actualités</h3>
        {items.slice(0, 4).map((p) => (
          <Link key={p.slug} href={`/actualites/${p.slug}`} className="ln">
            <Photo src={p.image} alt="" className="thumb" />
            <span>
              <span className="d">{fmtDate(p.date)}</span>
              <h4>{p.title}</h4>
            </span>
          </Link>
        ))}

        <h3 className="side-h">Archives</h3>
        <select className="side-select" value={month} onChange={(e) => setMonth(e.target.value)} aria-label="Archives par mois">
          <option value="">Sélectionner un mois</option>
          {archives.map((m) => <option key={m} value={m}>{fmtArchive(m)}</option>)}
        </select>

        <h3 className="side-h">Étiquettes</h3>
        <div className="tags">
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              className={tag === t ? "tagpill on" : "tagpill"}
              onClick={() => setTag(tag === t ? "" : t)}
            >
              {t}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
