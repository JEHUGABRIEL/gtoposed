import { img } from "./site";

/* Terrains à la vente — exemples à remplacer par les parcelles réellement disponibles.
   `date` = date d'ajout à la vente : elle sert au classement de la carte
   « Terrains récemment ajoutés » et au badge « Nouveau ». */
export type Terrain = { slug: string; title: string; lieu: string; surface: string; note: string; image: string; date: string };
export const terrains: Terrain[] = [
  { slug: "pk5", title: "Parcelle à bâtir", lieu: "Bangui, PK5", surface: "450 m²", note: "Titre foncier déjà établi, bornes visibles. Marché et école primaire à dix minutes à pied.", image: img.house, date: "2026-09-28" },
  { slug: "bimbo", title: "Terrain résidentiel", lieu: "Bimbo, quartier résidentiel", surface: "600 m²", note: "Relevé au mois de mars : sol plat, accès carrossable même en saison des pluies.", image: img.land, date: "2026-08-19" },
  { slug: "route-aeroport", title: "Parcelle commerciale", lieu: "Bangui, route de l'aéroport", surface: "1 000 m²", note: "Deux cents mètres de façade sur la nationale. Atelier, dépôt ou station-service.", image: img.plot, date: "2026-07-04" },
];

/* Terrains classés du plus récemment mis en vente au plus ancien. */
export const terrainsRecents = [...terrains].sort((a, b) => +new Date(b.date) - +new Date(a.date));
/* Un terrain est « nouveau » pendant 60 jours après son ajout. */
export const estNouveau = (iso: string, jours = 60) => Date.now() - +new Date(iso) < jours * 86400000;

/* Engins en vedette — exemples à remplacer par le matériel réellement disponible. */
export type Engin = { name: string; image: string; specs: string[] };
export const engins: Engin[] = [
  { name: "Pelle hydraulique", image: img.excavator, specs: ["Terrassement, déblais et fouilles", "Godet de curage sur demande", "Journée, semaine ou forfait chantier"] },
  { name: "Camion benne", image: img.truck, specs: ["Évacuation des terres de fouille", "Sable, gravier et latérite", "Bennes de 6 à 12 m³ selon l'accès"] },
  { name: "Compacteur", image: img.site2, specs: ["Remblai et compactage de plateforme", "Cour, voirie d'accès et parking", "Conducteur compris"] },
];

/* Partenaires — exemples à remplacer par les vrais partenaires et leurs logos. */
export const partenaires = ["Cadastre", "Ordre des Géomètres-Experts", "Chambre de commerce", "Géomètres-Experts Associés"];

export type Service = {
  slug: string; title: string; short: string; image: string;
  /* `menu` : libellé court affiché dans la carte déroulante « Nos services » de la navbar. */
  menu: string;
  intro: string; items: string[]; know: { q: string; a: string }[]; steps: string[];
};

export const services: Service[] = [
  {
    slug: "vente-de-terrains-titres",
    title: "Vente de terrains titrés",
    short: "Des parcelles bornées, mesurées et présentées avec leur titre foncier — pour construire, commercer ou placer une épargne.",
    menu: "Parcelles bornées, titre foncier vérifié, visite organisée",
    image: img.land,
    intro: "Acheter un terrain sans papiers, c'est prendre un risque qui se paie des années plus tard. Nous ne proposons que des parcelles dont le titre foncier est établi et vérifiable. Vous visitez, vous lisez les documents avec nous, et vous décidez ensuite.",
    items: [
      "Parcelles résidentielles et commerciales",
      "Bornage et relevé de la surface avant la vente",
      "Lecture du titre foncier et des pièces du dossier",
      "Visite du terrain avec un membre de l'équipe",
      "Relevé topographique de la parcelle sur simple demande",
      "Accompagnement jusqu'à la signature",
    ],
    steps: ["Vous nous dites ce que vous cherchez, votre budget et votre délai", "Nous vous proposons les parcelles qui correspondent", "Nous allons sur place vérifier les limites ensemble", "Vous signez en connaissance de cause"],
    know: [
      { q: "Qu'appelle-t-on un terrain titré ?", a: "Un terrain dont le titre foncier a été délivré. Ce document, et lui seul, désigne officiellement le propriétaire : sans lui, un achat reste fragile, même devant témoins." },
      { q: "Faut-il mesurer la parcelle avant d'acheter ?", a: "C'est plus sûr. Un relevé confirme la surface annoncée et fixe les limites avec le voisinage. Cela évite d'acheter 450 m² pour en retrouver 380 sur le plan." },
    ],
  },
  {
    slug: "location-d-engins",
    title: "Location d'engins",
    short: "Pelles, camions bennes et compacteurs suivis, avec conducteur, facturés à la journée ou au forfait chantier.",
    menu: "Pelles, camions bennes et compacteurs, avec conducteur",
    image: img.excavator,
    intro: "Un engin à l'arrêt coûte cher. Nous mettons à votre disposition du matériel entretenu, avec son conducteur, pour le terrassement, l'évacuation des terres, le remblai et les voies d'accès. Chaque devis précise la machine, la durée et le prix, sans poste caché.",
    items: [
      "Terrassement et fouilles",
      "Évacuation des déblais et transport des matériaux",
      "Remblai, réglage et compactage",
      "Ouverture de voies d'accès et aménagement de cour",
      "Location à la journée, à la semaine ou au forfait",
      "Carburant et conducteur détaillés sur le devis",
    ],
    steps: ["Vous décrivez le chantier, l'accès et la date de démarrage", "Nous proposons la machine adaptée et un prix ferme", "L'engin arrive sur place avec son conducteur", "Nous restons joignables jusqu'à la fin des travaux"],
    know: [
      { q: "Comment obtenir un prix ?", a: "Trois informations suffisent pour un premier chiffrage : la nature des travaux, l'accès au chantier et la durée estimée. Un message ou un appel, et nous vous répondons." },
      { q: "Intervenez-vous en dehors de Bangui ?", a: "Oui, partout où l'engin peut être acheminé. Le transport est compté dans le devis, selon la distance et l'état de la route." },
    ],
  },
  {
    slug: "topographie",
    title: "Topographie",
    short: "Relevés, plans cotés et implantation : les mesures dont votre architecte et votre entreprise ont besoin pour partir de bonnes bases.",
    menu: "Relevés, bornage, plans cotés et implantation",
    image: img.plans,
    intro: "Avant de dessiner une maison ou d'ouvrir une tranchée, il faut connaître le terrain : ses limites exactes, ses niveaux, la place réellement disponible. Nos relevés servent ensuite à implanter le bâtiment, à calculer les terrassements et à monter les dossiers d'autorisation.",
    items: [
      "Relevé de terrain et plan coté",
      "Implantation de bâtiments, d'axes et de réseaux",
      "Nivellement et calcul de volumes",
      "Bornage et matérialisation des limites",
      "Données livrées en plan papier et en fichier exploitable",
      "Mise à jour du plan après travaux",
    ],
    steps: ["Nous cadrons la mission et son périmètre avec vous", "Nous intervenons sur place avec nos instruments", "Nous traitons les mesures au bureau", "Nous remettons le plan et les données, et nous les expliquons"],
    know: [
      { q: "À quoi sert un plan topographique ?", a: "Il montre le terrain tel qu'il est : limites, dimensions, relief, constructions existantes. C'est la base de toute conception, et souvent la pièce que réclame l'architecte." },
      { q: "Quand faut-il faire lever un terrain ?", a: "Avant d'acheter, avant de construire, ou dès qu'un doute apparaît sur une limite. Sur un terrain en pente, le relevé est indispensable pour estimer les terrassements." },
    ],
  },
];

export type Post = { slug: string; title: string; cat: string; image: string; date: string; tags: string[]; excerpt: string; body: string[] };

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
export const fmtDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
};
export const dayMonth = (iso: string) => {
  const d = new Date(iso);
  return { day: String(d.getDate()), month: MOIS[d.getMonth()].slice(0, 4).toUpperCase(), year: d.getFullYear(), mkey: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}` };
};

export const posts: Post[] = [
  {
    slug: "pourquoi-mesurer-son-terrain-avant-de-construire",
    title: "Pourquoi mesurer son terrain avant de construire",
    cat: "Topographie", image: img.site1, date: "2026-07-15", tags: ["Topographie", "Construction", "Conseils"],
    excerpt: "Un relevé coûte peu. Reconstruire un mur mitoyen ou défendre une limite coûte beaucoup plus.",
    body: [
      "Sur beaucoup de dossiers que nous ouvrons, la surface du terrain vient d'un document ancien ou d'une phrase lâchée à l'oral. Sur place, la réalité est souvent autre : une limite déplacée d'un mètre, un côté plus court que prévu, une pente que personne n'avait relevée.",
      "Un levé topographique donne les dimensions réelles de la parcelle et ses niveaux. Votre architecte dessine alors sur du solide, et l'entreprise sait où poser le premier bloc sans tâtonner le jour du démarrage.",
      "C'est aussi une protection. Le jour où un voisin conteste une limite, un plan coté et daté pèse plus lourd que tous les souvenirs. Notre conseil : mesurer avant la signature, pas après.",
    ],
  },
  {
    slug: "acheter-un-terrain-les-questions-a-poser",
    title: "Acheter un terrain : sept questions à poser avant de signer",
    cat: "Terrains", image: img.keys, date: "2026-06-05", tags: ["Terrains", "Titre foncier", "Investissement"],
    excerpt: "Titre, limites, accès, usage : ce qu'il vaut mieux éclaircir avant de verser le premier franc.",
    body: [
      "Un terrain est souvent l'engagement financier le plus lourd d'une famille. Quelques questions simples font gagner des mois, et évitent les regrets.",
      "Qui figure sur le titre foncier ? Les bornes sont-elles visibles sur place ? Le terrain reste-t-il accessible en saison des pluies ? L'usage que vous prévoyez y est-il autorisé ? Existe-t-il une servitude ou un passage sur la parcelle ? Un voisin a-t-il déjà construit sur une limite contestée ? Qui paie le bornage ?",
      "Un vendeur sérieux répond à ces questions sans se fâcher. Prenez le temps de visiter deux fois, à des heures différentes, et faites-vous accompagner d'un géomètre pour vérifier ce qui est écrit noir sur blanc.",
    ],
  },
  {
    slug: "preparer-son-chantier-avant-de-louer-un-engin",
    title: "Louer un engin : préparer le chantier pour ne pas payer d'heures creuses",
    cat: "Engins", image: img.site2, date: "2026-05-12", tags: ["Engins", "Terrassement", "Chantier"],
    excerpt: "Accès, place de manœuvre, nature du sol : trois points qui décident du prix et du délai.",
    body: [
      "Une pelle ne sert à rien si elle ne peut pas atteindre la zone à creuser. Avant de demander un devis, vérifions ensemble l'accès : largeur du passage, virage, fils bas, sol détrempé en saison des pluies.",
      "Précisez ensuite la nature du travail : fouilles pour fondations, déblais à évacuer, remblai à compacter. Chaque tâche demande un godet ou une machine différente, et donc un prix différent.",
      "Indiquez enfin la date de démarrage et la durée estimée. Un engin qui arrive le bon jour, avec le bon conducteur, c'est des journées de location en moins à payer.",
    ],
  },
  {
    slug: "lotissement-terrains-titres-bangui",
    title: "Comment nous préparons un lotissement de terrains titrés",
    cat: "Terrains", image: img.land, date: "2026-04-08", tags: ["Terrains", "Lotissement", "Bangui"],
    excerpt: "Bornés, mesurés, titrés : les étapes que suit une parcelle avant d'être proposée à la vente.",
    body: [
      "Un lotissement ne s'improvise pas. Nous commençons par lever le terrain, tracer les lots et matérialiser les limites sur le sol. Les surfaces annoncées sont celles que nous avons mesurées, pas celles d'un croquis.",
      "Chaque parcelle est ensuite présentée sur place avec ses pièces : titre foncier, plan de situation, indications d'accès. Vous pouvez comparer plusieurs lots avant de choisir, et revenir avec votre propre géomètre.",
      "Le jour où vous décidez de construire l'enceinte, notre équipe refait le relevé de la parcelle. Les repères posés à la vente et ceux des travaux sont alors cohérents.",
    ],
  },
  {
    slug: "topographie-levee-geometre-expert",
    title: "Levé topographique : ce que vous recevez à la fin",
    cat: "Topographie", image: img.plans, date: "2026-03-18", tags: ["Topographie", "Relevé", "Plans"],
    excerpt: "Plan coté, limites matérialisées, niveaux : le contenu concret d'une mission de relevé.",
    body: [
      "Un plan topographique n'est pas un dessin décoratif. Vous recevez un document coté : limites, distances, orientations, constructions existantes et, si le terrain est en pente, les niveaux relevés.",
      "Nous remettons aussi les coordonnées sous forme de fichier, que votre architecte ou votre bureau d'études ouvre directement. Sur le terrain, les points importants sont matérialisés par des piquets.",
      "Demandez toujours ce qui est compris dans la mission : périmètre, nombre de points, délai de remise. Un devis clair sur ces trois lignes évite les surprises en fin de chantier.",
    ],
  },
  {
    slug: "benne-camion-quand-louer",
    title: "Benne ou camion : quelle machine pour évacuer vos terres ?",
    cat: "Engins", image: img.excavator, date: "2025-11-26", tags: ["Engins", "Transport", "Matériaux"],
    excerpt: "Le volume à déplacer et l'état de l'accès décident, bien plus que le prix annoncé.",
    body: [
      "Pour évacuer des déblais, deux solutions selon le chantier. Le camion benne classique passe partout et se glisse dans une rue étroite ; la benne de plus grande capacité va plus vite, à condition que l'accès le permette.",
      "Faites le calcul en mètres cubes, pas en nombre de voyages. Un volume estimé avec nous évite de commander trois camions quand deux suffisent.",
      "Pour un terrassement qui dure plusieurs jours, la mise à disposition au forfait revient presque toujours moins cher que des locations à la journée.",
    ],
  },
];

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort((a, b) => a.localeCompare(b, "fr"));
export const archives = Array.from(new Set(posts.map((p) => dayMonth(p.date).mkey))).sort().reverse();
export const fmtArchive = (mkey: string) => {
  const [y, m] = mkey.split("-");
  return `${MOIS[Number(m) - 1]} ${y}`;
};

export type Realisation = { slug: string; title: string; cat: string; date: string; image: string; excerpt: string };
export const realisations: Realisation[] = [
  { slug: "terrassement-parcelle-residentielle", title: "Terrassement d'une parcelle résidentielle", cat: "Engins", date: "2026-06-20", image: img.excavator, excerpt: "Terrain détrempé en arrivant : déblais évacués, plateforme réglée et accès ouvert en quatre jours." },
  { slug: "releve-plan-terrain-a-batir", title: "Relevé et plan d'un terrain à bâtir", cat: "Topographie", date: "2026-05-30", image: img.plans, excerpt: "Limites retrouvées sur place, plan coté remis au maître d'ouvrage avant le démarrage du gros œuvre." },
  { slug: "lotissement-terrains-titres", title: "Lotissement de terrains titrés", cat: "Terrains", date: "2026-04-12", image: img.land, excerpt: "Douze lots bornés et mesurés, dossiers fonciers constitués parcelle par parcelle." },
  { slug: "amenagement-acces-chantier", title: "Aménagement d'un accès de chantier", cat: "Engins", date: "2026-03-08", image: img.site2, excerpt: "Cent mètres de piste ouverte et compactée pour faire entrer les camions jusqu'au fond du terrain." },
  { slug: "implantation-construction", title: "Implantation d'une construction", cat: "Topographie", date: "2026-02-15", image: img.crew, excerpt: "Axes et niveaux posés au sol, repères remis à l'entreprise avant le coulage des fondations." },
  { slug: "parcelle-commerciale-bord-route", title: "Parcelle commerciale en bordure de route", cat: "Terrains", date: "2026-01-20", image: img.house, excerpt: "Recherche, mesure et présentation d'une parcelle avec façade sur la nationale, documents à l'appui." },
];
