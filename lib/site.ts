export const site = {
  name: "G.TOPOSED",
  baseline: "Mesurer le terrain, sécuriser l'achat, préparer le chantier",
  phone1: "75 05 02 21",
  phone2: "77 05 02 21",
  tel1: "+23675050221",
  tel2: "+23677050221",
  wa: "23675050221", // à confirmer : numéro WhatsApp
  email: "gtoposed@gmail.com",
  city: "Bangui, République centrafricaine",
  facebook: "G. TOPOSED",
  // À compléter avec les vraies adresses des pages sociales.
  fbUrl: "https://www.facebook.com/gtoposed",
  liUrl: "https://www.linkedin.com/company/gtoposed",
};
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
// À remplacer par de vraies photos de chantier dès que possible.
export const img = {
  crew: u("photo-1541888946425-d81bb19240f5", 1800),
  excavator: u("photo-1504307651254-35680f356dfd", 1800),
  land: u("photo-1500382017468-9049fed747ef", 1800),
  plans: u("photo-1503387762-592deb58ef4e", 1400),
  team: u("photo-1522071820081-009f0129c71c", 1400),
  house: u("photo-1600585154340-be6161a56a0c", 1200),
  site1: u("photo-1621905251189-08b45d6a269e", 1200),
  site2: u("photo-1590496793929-36417d3117de", 1200),
  keys: u("photo-1560518883-ce09059eeffa", 1200),
  office: u("photo-1497366216548-37526070297c", 1400),
  meeting: u("photo-1600880292203-757bb62b4baf", 1400),
  plot: u("photo-1500530855697-b586d89ba3ee", 1400),
  truck: u("photo-1519003722824-194d4455a60c", 1400),
};
