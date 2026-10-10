"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Photo from "./Photo";

type Slide = { image: string; kicker: string; title: [string, string]; text: string; href: string; cta: string };

export default function Slider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section className="hero" aria-roledescription="carrousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-dots" aria-hidden />
      {slides.map((s, n) => (
        <div key={s.title.join()} className={n === i ? "hslide on" : "hslide"} aria-hidden={n !== i}>
          <div className="hero-left">
            <div className="hero-card">
              <p className="kicker light">{s.kicker}</p>
              <h1><span className="lt">{s.title[0]}</span> <span className="hd">{s.title[1]}</span></h1>
              <p className="hero-txt">{s.text}</p>
              <Link href={s.href} className="btn btn-sky" tabIndex={n === i ? 0 : -1}>{s.cta}</Link>
            </div>
          </div>
          <div className="hero-right">
            <Photo src={s.image} alt="" className="cover" />
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, n) => (
          <button key={n} aria-label={`Diapositive ${n + 1}`} aria-current={n === i} className={n === i ? "on" : ""} onClick={() => setI(n)} />
        ))}
      </div>
    </section>
  );
}
