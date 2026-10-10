"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";
import { services, posts } from "@/lib/data";
import { Facebook, LinkedIn, Search, Chevron, Close, ArrowRight } from "./Icons";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services", sub: true },
  { href: "/realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/le-groupe", label: "Le groupe" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");

  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setSearch(false); setOpen(false); } };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => { setOpen(false); setSearch(false); }, [path]);

  /* Bloque le défilement de la page derrière le tiroir mobile et la recherche plein écran.
     On verrouille <html> (et non <body>) : verrouiller le body remettait la page en haut. */
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open || search ? "hidden" : "";
    return () => { root.style.overflow = ""; };
  }, [open, search]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return { s: [] as typeof services, p: [] as typeof posts };
    return {
      s: services.filter((x) => (x.title + x.short).toLowerCase().includes(t)),
      p: posts.filter((x) => (x.title + x.excerpt + x.cat + x.tags.join(" ")).toLowerCase().includes(t)),
    };
  }, [q]);

  const closeAll = () => { setOpen(false); setSearch(false); };

  return (
    <>
      <div className="site-head" id="top">
        <div className="head-row">
        <div className="head-bar">
          <button
            className={open ? "burger on" : "burger"}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => { setOpen(!open); setSearch(false); }}
          >
            <span /><span /><span />
          </button>
          <Link href="/" className="brand" onClick={closeAll} aria-label="G.TOPOSED, accueil">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="G.TOPOSED" />
          </Link>
          <span className="head-social">
            <a href={site.fbUrl} target="_blank" rel="noopener" aria-label="Facebook"><Facebook /></a>
            <a href={site.liUrl} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn /></a>
          </span>
        </div>
        </div>

        <div className={stuck ? "navbar stuck" : "navbar"}>
        <div className="navbar-in">
          <ul>
            {links.map((l) => (
              <li key={l.href} className={l.sub ? "has-sub" : ""}>
                <Link href={l.href} className={active(l.href) ? "on" : ""}>
                  {active(l.href) ? "— " : ""}{l.label}
                </Link>
                {l.sub && (
                  <ul className="sub">
                    <li className="sub-head">Nos services</li>
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`}>
                          <span className="sub-t">{s.title}</span>
                          <span className="sub-d">{s.menu}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="sub-foot">
                      <Link href="/services">Tous nos services <ArrowRight size={14} /></Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button className="nav-search" aria-label="Rechercher" onClick={() => { setSearch(true); setOpen(false); }}>
            <Search size={20} />
          </button>
        </div>
      </div>
      </div>

      {/* Menu mobile */}
      <div className={open ? "mback open" : "mback"} onClick={() => setOpen(false)} />
      <nav className={open ? "mmenu open" : "mmenu"} aria-label="Menu mobile">
        <div className="mmenu-head">
          <Link href="/" className="brand" onClick={closeAll}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="G.TOPOSED" />
          </Link>
          <button className="mclose" aria-label="Fermer le menu" onClick={() => setOpen(false)}><Close size={26} /></button>
        </div>
        <div className="mmenu-social">
          <a href={site.fbUrl} target="_blank" rel="noopener" aria-label="Facebook"><Facebook size={20} /></a>
          <a href={site.liUrl} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn size={20} /></a>
        </div>
        <div className="mmenu-list">
          <ul>
            {links.map((l) => (
              <li key={l.href} className={`${active(l.href) ? "on" : ""} ${l.sub && subOpen === l.href ? "open" : ""}`}>
                <span className="mrow">
                  <Link href={l.href} onClick={closeAll}>{l.label}</Link>
                  {l.sub && (
                    <button
                      className="msub-btn"
                      aria-label="Déplier le sous-menu"
                      aria-expanded={subOpen === l.href}
                      onClick={() => setSubOpen(subOpen === l.href ? null : l.href)}
                    >
                      <Chevron size={16} className={subOpen === l.href ? "rot" : ""} />
                    </button>
                  )}
                </span>
                {l.sub && (
                  <ul className="msub">
                    <li><Link href="/services" onClick={closeAll}>Tous nos services</Link></li>
                    {services.map((s) => (
                      <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={closeAll}>{s.title}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button className="mmenu-search" aria-label="Rechercher" onClick={() => { setSearch(true); setOpen(false); }}>
            <Search size={22} />
          </button>
        </div>
      </nav>

      {/* Recherche plein écran */}
      {search && (
        <div className="search-ov" role="dialog" aria-label="Recherche">
          <button className="search-close" aria-label="Fermer la recherche" onClick={() => setSearch(false)}><Close size={38} /></button>
          <div className="search-box">
            <form
              onSubmit={(e) => { e.preventDefault(); setSearch(false); router.push("/actualites"); }}
            >
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Mot-clé..."
                aria-label="Mot-clé"
              />
              <button type="submit" aria-label="Lancer la recherche"><Search size={26} /></button>
            </form>
            {(results.s.length > 0 || results.p.length > 0) && (
              <div className="search-res">
                {results.s.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeAll}><span className="tagr">Service</span>{s.title}</Link>
                ))}
                {results.p.map((p) => (
                  <Link key={p.slug} href={`/actualites/${p.slug}`} onClick={closeAll}><span className="tagr">Actu</span>{p.title}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
