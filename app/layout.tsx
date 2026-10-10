import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Chat } from "@/components/Icons";

export const metadata: Metadata = {
  title: { default: "G.TOPOSED — Topographie, terrains titrés et location d'engins à Bangui", template: "%s | G.TOPOSED" },
  description: "G.TOPOSED accompagne vos projets à Bangui et en République centrafricaine : vente de terrains titrés, location d'engins de chantier et topographie.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Link href="/contact" className="fab" aria-label="Nous contacter">
          <Chat size={24} />
          <span className="fab-txt">Nous contacter</span>
        </Link>
      </body>
    </html>
  );
}
