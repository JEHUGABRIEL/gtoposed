"use client";
import { useState } from "react";

export default function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setOk(false)} />;
}
