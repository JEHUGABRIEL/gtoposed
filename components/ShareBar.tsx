"use client";
import { Facebook, LinkedIn, Twitter, Whatsapp } from "./Icons";

export default function ShareBar({ path, title }: { path: string; title: string }) {
  const url = typeof window !== "undefined" ? encodeURIComponent(window.location.origin + path) : "";
  const txt = encodeURIComponent(title);
  const href = (net: string) =>
    net === "fb" ? `https://www.facebook.com/sharer/sharer.php?u=${url}`
    : net === "tw" ? `https://twitter.com/intent/tweet?url=${url}&text=${txt}`
    : net === "li" ? `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    : `https://wa.me/?text=${txt}%20${url}`;
  return (
    <div className="share">
      <a className="fb" href={href("fb")} target="_blank" rel="noopener" aria-label="Partager sur Facebook"><Facebook size={16} /></a>
      <a className="tw" href={href("tw")} target="_blank" rel="noopener" aria-label="Partager sur Twitter"><Twitter size={16} /></a>
      <a className="li" href={href("li")} target="_blank" rel="noopener" aria-label="Partager sur LinkedIn"><LinkedIn size={16} /></a>
      <a className="wa" href={href("wa")} target="_blank" rel="noopener" aria-label="Partager sur WhatsApp"><Whatsapp size={16} /></a>
    </div>
  );
}
