import Link from "next/link";
import Photo from "./Photo";

export default function PageBanner({ title, image, text, parent }: { title: string; image: string; text?: string; parent?: { href: string; label: string } }) {
  return (
    <section className="banner">
      <div className="banner-body">
        <div className="banner-in">
          <p className="kicker light crumbs">
            <Link href="/">Accueil</Link>{parent && <> <span className="sep">/</span> <Link href={parent.href}>{parent.label}</Link></>}
          </p>
          <h1>{title}</h1>
          {text && <p className="banner-txt">{text}</p>}
        </div>
      </div>
      <div className="banner-media">
        <Photo src={image} alt="" className="cover" />
      </div>
    </section>
  );
}
