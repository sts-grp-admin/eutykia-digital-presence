import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // ?lang=ar (ou fr/en/es) force une langue, y compris l'arabe non listé
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "fr" || fromUrl === "en" || fromUrl === "es" || fromUrl === "ar") return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      return saved === "en" || saved === "es" || saved === "ar" ? saved : "fr";
    } catch {
      return "fr"; // stockage bloqué par le navigateur
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      // stockage bloqué : la langue vaut pour la visite en cours
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

/** Helper to get a translated value */
export const t = (obj: Record<Language, string>, lang: Language): string => obj[lang];
