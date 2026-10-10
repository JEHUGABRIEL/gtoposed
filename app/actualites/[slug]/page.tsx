import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ShareBar from "@/components/ShareBar";
import { posts, fmtDate } from "@/lib/data";
import { Clock, ArrowRight, ArrowUp } from "@/components/Icons";

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  return { title: p?.title, description: p?.excerpt };
}

export default function Page({ params }: { params: { slug: string } }) {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const i = sorted.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = sorted[i];
  const next = sorted[i + 1];
  const prev = sorted[i - 1];

  return (
    <>
      <PageBanner
        title={p.title}
        image={p.image}
        text={p.excerpt}
        parent={{ href: "/actualites", label: "Actualités" }}
      />
      <article className="section wrap article">
        <div className="art-meta">
          <span className="post-date"><Clock size={16} /> {fmtDate(p.date)}</span>
          <ShareBar path={`/actualites/${p.slug}`} title={p.title} />
        </div>
        <p className="kicker">{p.cat}</p>
        {p.body.map((t, n) => <p key={n}>{t}</p>)}

        <p className="kicker" style={{ marginTop: "2.2rem" }}>Étiquettes</p>
        <div className="tags">
          {p.tags.map((t) => <span key={t} className="tagpill">{t}</span>)}
        </div>

        <div className="art-nav">
          {prev ? (
            <Link href={`/actualites/${prev.slug}`}><ArrowUp size={14} className="flip" /> {prev.title.slice(0, 28)}…</Link>
          ) : <span />}
          {next ? (
            <Link href={`/actualites/${next.slug}`}>{next.title.slice(0, 28)}… <ArrowRight size={14} /></Link>
          ) : (
            <Link href="/actualites">Toutes les actualités <ArrowRight size={14} /></Link>
          )}
        </div>

        <div style={{ marginTop: "2.4rem" }}>
          <Link href="/devis" className="btn btn-brand">Parler de votre projet</Link>
        </div>
      </article>
    </>
  );
}
