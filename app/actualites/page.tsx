import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import NewsArchive from "@/components/NewsArchive";
import { posts } from "@/lib/data";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "Actualités" };

export default function Page() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <PageBanner
        title="Actualités"
        image={img.keys}
        text="Foncier, relevés, chantiers : nos conseils pratiques, écrits à partir des dossiers que nous traitons à Bangui."
      />
      <section className="section wrap">
        <NewsArchive items={sorted} />
      </section>
    </>
  );
}
