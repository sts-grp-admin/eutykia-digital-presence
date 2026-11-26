// SOURCE UNIQUE des informations de la société.
// Les champs légaux à `null` ne sont pas affichés dans les mentions légales.
// Volontairement absents du site : identifiant fiscal (IF), taxe professionnelle
// (patente), capital social et date d'immatriculation — inutiles au visiteur.
import type { Language } from "@/i18n/translations";

type Localized = Record<Language, string>;

export const company = {
  name: "Eutykia Solutions",
  shortName: "Eutykia",
  domain: "eutykia.ma",
  url: "https://www.eutykia.ma",

  // Adresse email reconstruite à l'exécution (voir lib/email.ts)
  emailUser: "contact",

  location: {
    fr: "Casablanca, Maroc",
    en: "Casablanca, Morocco",
    es: "Casablanca, Marruecos",
    ar: "الدار البيضاء، المغرب",
  } as Localized,
  phonePlaceholder: "+212 6 12 34 56 78",

  legal: {
    form: {
      fr: "SARL AU",
      en: "SARL AU (single-member limited liability company)",
      es: "SARL AU (sociedad de responsabilidad limitada unipersonal)",
      ar: "شركة ذات المسؤولية المحدودة بشريك وحيد (SARL AU)",
    } as Localized,
    address: null as Localized | null, // siège social
    rc: {
      fr: "Casablanca n° 749169",
      en: "Casablanca No. 749169",
      es: "Casablanca n.º 749169",
      ar: "الدار البيضاء رقم 749169",
    } as Localized,
    ice: "004041762000045",
    director: null as Localized | null, // directeur de la publication
  },
};
