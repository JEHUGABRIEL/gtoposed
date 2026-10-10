import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/lib/data";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "Nos services" };

export default function Page() {
  return (
    <>
      <PageBanner
        title="Nos services"
        image={img.crew}
        text="Nous mesurons la parcelle, nous la vendons avec son titre, nous y amenons les machines : trois métiers qui se suivent au lieu de s'ignorer."
      />
      <section className="section wrap">
        <SectionTitle kicker="G.TOPOSED" a="Ce que nous" b="savons faire" />
        <div className="svc-grid">
          {services.map((s) => (
            <article key={s.slug} className="svc">
              <Photo src={s.image} alt={s.title} className="svc-img" />
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <Link href={`/services/${s.slug}`} className="line-more">En savoir plus</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
