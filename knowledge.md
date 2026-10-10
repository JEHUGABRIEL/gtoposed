# G.TOPOSED — site vitrine

Site de présentation de G.TOPOSED (Bangui, RCA) : vente de terrains titrés, location
d'engins de chantier et topographie. Next.js 14 (App Router) + React 18 + TypeScript,
**sans framework CSS** — une seule feuille de style maison.
Le design s'inspire de graff-kiehl.fr (grandes courbures, kickers précédés d'un tiret,
titres bicolores mot clair + mot foncé), avec deux écarts assumés : la palette est en
**bleu ciel** (et non en vert) et **tous les textes sont rédigés pour G.TOPOSED** — ne
jamais recopier ceux du site modèle.

## Commandes

- installer : `npm install`
- dev : `npm run dev` (port 3000 par défaut)
- build : `npm run build`
- prévisualisation production : `npm run build && npx next start -p 3001`
- types : `npx tsc --noEmit`
- Aucun test, aucun linter et aucune CI ne sont configurés (pas d'eslint, pas de jest).

## Structure

- `app/` — routes App Router : `/`, `/services`, `/services/[slug]`, `/realisations`,
  `/actualites`, `/actualites/[slug]`, `/le-groupe`, `/contact`, `/devis`.
- `components/` — `Header` (nav collante, menu mobile, recherche plein écran), `Footer`,
  `Slider` (héro de la home), `PageBanner` (bandeau des pages internes), `SectionTitle`,
  `Photo`, `NewsList`, `NewsArchive`, `ShareBar`, `Reviews`, `ContactForm`, `TerrainsCard`
  (carte « terrains récemment ajoutés » de la colonne latérale), `Newsletter`
  (inscription en pied de page), `Icons` (SVG inline, aucune librairie d'icônes).
- `lib/site.ts` — coordonnées, URL sociales, helper `img()` qui construit les URL Unsplash.
- `lib/data.ts` — **source unique de vérité du contenu** : `services`, `posts`, `terrains`,
  `engins`, `partenaires`, `realisations`, plus les helpers `fmtDate`, `dayMonth`,
  `fmtArchive`, `allTags`, `archives`. Chaque terrain porte une `date` d'ajout, d'où
  `terrainsRecents` (tri décroissant) et `estNouveau(iso, jours = 60)` ; chaque service porte
  un `menu` (libellé court de la carte déroulante) en plus de `short` (phrase de la grille).
- `app/globals.css` — toute la mise en forme (~460 lignes). Pas de Tailwind, pas de CSS modules.
- `public/logo.png` — seul asset local ; toutes les autres images sont des URL distantes.

## Conventions

- Tout le texte est en français, ton professionnel, adresse au client en "vous".
  Les textes sont rédigés maison : phrases concrètes (surfaces, distances, délais,
  postes de coût), pas de formule creuse du type « solutions fiables, adaptées et
  accessibles » héritée du site modèle.
- Palette **bleu ciel** via variables CSS déclarées dans `:root` : `--brand` (#2ea8e0),
  `--brand-d` (#1e8ec4), `--brand-dd` (#156f9c), `--brand-l` (#a6dcf6), `--brand-ld` (#74c9ee),
  plus `--ink`, `--text`, `--muted`, `--grey`, `--card`, `--line`, `--f`.
  Toujours utiliser ces variables, jamais de couleur en dur (les anciens noms `--green*`,
  `--mint*` et les classes `btn-green` / `btn-mint` ne doivent pas revenir).
- Classes utilitaires maison : `.wrap` (largeur max 1200), `.section`, `.two` (grille 2 colonnes),
  `.tint` (fond gris clair), `.btn` / `.btn-brand` / `.btn-sky` / `.btn-light`, `.kicker`, `.st`
  (bloc de titre), `.line-more` (lien souligné d'un trait bleu qui s'allonge au survol).
- Titres : `<SectionTitle kicker="…" a="mot clair" b="mot foncé" />`, avec la prop `light`
  sur fond vert et `center` pour un titre centré.
- La **carte déroulante « Nos services »** de la navbar (survol de l'entrée `Nos services`) est
  un bloc blanc de 340 px : en-tête `NOS SERVICES`, un service par ligne (titre + `menu` de
  description) et un pied « Tous nos services ». Ses règles CSS gardent **deux classes**
  (`.navbar .sub li>a`) : c'est obligatoire pour l'emporter sur `.navbar ul>li>a`, qui impose le
  blanc du menu — sans quoi le texte de la carte s'affichait blanc sur blanc (illisible).
  Contrastes vérifiés : titre 15,7:1, description 7,5:1, lien du pied 5,5:1.
- Images : passer par `<Photo src alt className />` (gère l'échec de chargement via
  `.photo-fallback`) plutôt que par un `<img>` nu.
- `"use client"` uniquement pour les composants interactifs : `Header`, `Slider`, `Photo`,
  `Reviews`, `NewsList`, `ShareBar`, `ContactForm`. Le reste est en Server Component.
- Le `Header` verrouille `document.documentElement` (et non `document.body`, sinon Chrome
  remet la page en haut) tant que le tiroir mobile ou la recherche plein écran est ouvert.
- Le style est **desktop-first** : media queries décroissantes à 1024 px, 980 px et 640 px
  en fin de `globals.css`.
- Mobile : **une seule gouttière de 1,25rem** pour tout le contenu (sections, héro, bannière,
  bloc « pourquoi », pied de page). Le burger du menu est placé à `left:.85rem` pour que son
  icône tombe exactement sur cette gouttière. Cibles tactiles : boutons de partage 40 px,
  pastilles de pagination 44 px — ne pas descendre en dessous.
- Le héro de la home est en `position:absolute` par diapositive, avec un fond bleu ciel ; le
  bandeau des pages internes suit le même principe (`.banner` + `.banner-media`).

## Pièges

- **Toute page doit commencer par `Slider` (home) ou `PageBanner` (pages internes).**
  Le header est en `position:absolute` au-dessus du contenu, donc sans ce premier bloc le
  titre passe derrière la barre de navigation. Les hauteurs `--head-h` et `--nav-h` sont
  réservées par `.hero` et `.banner`.
- En dessous de 980 px, `.site-head` devient `static` et le menu mobile remplace la navbar :
  ne pas coder en dur des hauteurs de header dans les pages.
- Le bandeau blanc du logo (`.head-row`) a **exactement la longueur de la navbar**, soit la
  largeur du conteneur 1200px : le dégradé peint le blanc entre `--pad` et `calc(100% - --pad)`,
  où `--pad = max(0px, (100% - 1200px) / 2)`. À gauche et à droite du conteneur, le décor du héro
  reste visible (bleu ciel à gauche, photo à droite). La photo (`.hero-right` sur la home,
  `.banner-media` sur les pages internes) démarre à `top:0`, donc le coin supérieur droit montre la
  photo et non du blanc. En dessous de 980px, le bandeau est blanc sur toute la largeur et le héro
  passe en flux vertical.
- Échelle typographique calée sur le modèle en 1920px : héro h1 `clamp(2.25rem,4.05vw,4.85rem)`
  (≈78px), h2 `clamp(1.9rem,3.5vw,4.2rem)`, héro `min-height:clamp(640px,96vh,1120px)`, photo du
  héro à `left:46%`, photo du bandeau de page à 54% (donc visible à partir de 46%).
- Grilles : écrire `minmax(0,1fr)` (ou `repeat(n,minmax(0,1fr))`) plutôt que `1fr`. L'auto-minimum
  d'une piste `1fr` est la largeur min-content des enfants (images, `<input>`), ce qui fait
  déborder la page horizontalement sur mobile. Les champs de formulaire ont besoin de
  `width:100%;min-width:0`.
- `app/icon.png` fait office de favicon (convention Next), la source est `public/logo.png`.
- Bandeau « Nos partenaires » : `.partners-band` (fond bleu ciel, coins haut-droit et bas-gauche
  courbés) + `.p-marquee`/`.p-track` qui défile en continu. La liste est rendue **deux fois**
  pour une boucle sans saut (le second jeu est en `aria-hidden`) ; l'animation se met en pause au
  survol et s'arrête avec `prefers-reduced-motion`.
- Carte « Terrains récemment ajoutés » : `<TerrainsCard />` (classe `.tc`), montée dans les trois
  colonnes latérales (`NewsArchive`, `/realisations`, `/services/[slug]`). Ordre et dates viennent
  de `terrainsRecents` ; le badge « Nouveau » apparaît si `estNouveau(t.date)`. Pour changer sa
  position, il suffit de la déplacer dans la balise `<aside>`.
- Newsletter : `<Newsletter />` dans un bandeau `.news-band` en tête du pied de page (donc sur
  toutes les pages). **Aucun service externe** : la soumission ouvre un e-mail pré-rempli vers
  `site.email` (mailto) et affiche un message de confirmation. Pour brancher un vrai fournisseur
  d'e-mailing, seule la fonction `envoyer()` de `components/Newsletter.tsx` est à remplacer.
- Bouton de contact flottant : `.fab`, monté dans `app/layout.tsx` (présent sur toutes les pages),
  pastille ronde en mobile et pastille + libellé à partir de 981px. `z-index:90`, donc sous le
  tiroir mobile (100/110) et la recherche plein écran (130).
- Hamburger : trois `<span>` dans `.burger` qui se croisent en X via `.burger.on` (aucune bascule
  d'icône côté HTML). Le tiroir mobile (`.mmenu` et le bloc bleu `.mmenu-list`) a le coin
  supérieur droit courbé.
- La classe `.brand` (logo du header) impose `display:flex` : appliquée à `.aside-box.brand`
  dans la colonne latérale, elle transformait la boîte en ligne (titre, texte et bouton côte à
  côte) et faisait déborder « Demande de devis » de 21 px à 320 px. D'où le `display:block`
  explicite sur `.aside-box.brand`. Ne pas retirer cette règle, ni réutiliser le mot `brand`
  comme nom de variante sur un autre composant.
- Tout `<select>` de la colonne latérale doit porter la classe `side-select` (le style des
  champs n'est pas hérité : sans classe, le select retombe sur le style natif du navigateur
  et ne fait plus que ~19 px de haut).
- Ne jamais lancer `npm run build` pendant qu'un `next dev` tourne, ni supprimer `.next` sous
  un dev en cours : les deux partagent ce dossier et se corrompent mutuellement.
  Symptôme : `Error: Cannot find module './NNN.js'` depuis `.next/server/webpack-runtime.js`
  et des 500 sur certaines routes (le dev reste up mais casse).
  Réparation : arrêter le dev, `rm -rf .next`, relancer `next dev`.
- Les images sont des URL `images.unsplash.com` chargées à l'exécution : hors ligne, elles
  affichent le dégradé de repli. Il n'y a aucun domaine d'image à déclarer dans
  `next.config.mjs` tant que `next/image` n'est pas utilisé.
- **Contenu de démonstration** : terrains, engins, partenaires, articles et photos sont des
  exemples. Ils sont à remplacer par les vraies données dans `lib/data.ts` et `lib/site.ts`
  (le numéro WhatsApp y est d'ailleurs marqué « à confirmer »).
- Le projet n'a **pas de dépôt git propre** : le dépôt englobant est `/home/pkf`, qui
  appartient à un autre projet et ne suit pas ces fichiers. Ne pas committer depuis ce
  dossier sans initialiser un dépôt ici.
