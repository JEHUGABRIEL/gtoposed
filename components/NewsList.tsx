"use client";
import Link from "next/link";
import { useState } from "react";
import { fmtDate } from "@/lib/data";
import Photo from "./Photo";
import { Clock, Facebook, LinkedIn, Twitter, Whatsapp, ArrowRight, ArrowUp } from "./Icons";

export type NewsItem = { slug: string; title: string; cat: string; date: string; image: string; excerpt: string };

const PAR_PAGE = 3;

function shareUrl(p: NewsItem, net: string, base?: string) {
  const page = typeof window !== "undefined" && base ? window.location.origin + base + "/" + p.slug : typeof window !== "undefined" ? window.location.href : "";
  const url = encodeURIComponent(page);
  const txt = encodeURIComponent(p.title);
  switch (net) {
    case "fb": return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case "tw": return `https://twitter.com/intent/tweet?url=${url}&text=${txt}`;
    case "li": return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    default: return `https://wa.me/?text=${txt}%20${url}`;
  }
}

export default function NewsList({ items, linkBase }: { items: NewsItem[]; linkBase?: string }) {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(items.length / PAR_PAGE);
  const view = items.slice(page * PAR_PAGE, page * PAR_PAGE + PAR_PAGE);

  return (
    <>
      <div className="post-list">
        {view.map((p) => {
          const href = linkBase ? `${linkBase}/${p.slug}` : null;
          return (
            <article key={p.slug} className="post-row">
              <div className="post-media">
                {href ? <Link href={href}><Photo src={p.image} alt={p.title} /></Link> : <Photo src={p.image} alt={p.title} />}
              </div>
              <div className="post-body">
                <p className="kicker">{p.cat}</p>
                <h2>{href ? <Link href={href}>{p.title}</Link> : p.title}</h2>
                <p className="post-date"><Clock size={16} /> {fmtDate(p.date)}</p>
                <p>{p.excerpt}</p>
                <div className="share">
                  <a className="fb" href={shareUrl(p, "fb", linkBase)} target="_blank" rel="noopener" aria-label="Partager sur Facebook"><Facebook size={16} /></a>
                  <a className="tw" href={shareUrl(p, "tw", linkBase)} target="_blank" rel="noopener" aria-label="Partager sur Twitter"><Twitter size={16} /></a>
                  <a className="li" href={shareUrl(p, "li", linkBase)} target="_blank" rel="noopener" aria-label="Partager sur LinkedIn"><LinkedIn size={16} /></a>
                  <a className="wa" href={shareUrl(p, "wa", linkBase)} target="_blank" rel="noopener" aria-label="Partager sur WhatsApp"><Whatsapp size={16} /></a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {pages > 1 && (
        <div className="pager">
          <button onClick={() => setPage((n) => Math.max(0, n - 1))} disabled={page === 0}>
            <span className="circ"><ArrowUp size={16} className="flip" /></span> Précédent
          </button>
          <button onClick={() => setPage((n) => Math.min(pages - 1, n + 1))} disabled={page === pages - 1}>
            Suivant <span className="circ"><ArrowRight size={16} /></span>
          </button>
        </div>
      )}
    </>
  );
}
