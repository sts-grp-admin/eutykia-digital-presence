import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { company } from "@/config/company";

const n = translations.nav;
const routeTitles: Record<string, Record<string, string>> = {
  "/services": n.services,
  "/a-propos": n.about,
  "/contact": n.contact,
  "/nous-recrutons": n.careers,
  "/mentions-legales": translations.footer.legalNotice,
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { lang } = useLanguage();
  const { pathname } = useLocation();

  // Titre d'onglet par page et par langue
  useEffect(() => {
    const page = routeTitles[pathname];
    const tagline = t(translations.footer.tagline, lang).replace(/\.$/, "");
    document.title = page ? `${page[lang]} | ${company.name}` : `${company.name} | ${tagline}`;
  }, [pathname, lang]);

  // Apparition douce des blocs au défilement. La classe masquante est posée
  // ici, par script : sans JavaScript, tout reste visible.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const blocks = document.querySelectorAll<HTMLElement>("main section > .container > *");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    blocks.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:bg-card focus:px-4 focus:py-3 focus:font-medium focus:text-primary"
      >
        {t(n.skip, lang)}
      </a>
      <Navbar />
      <main id="contenu" tabIndex={-1} className="flex-1 pt-16 outline-none lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
