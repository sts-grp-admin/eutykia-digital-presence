import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Logo from "@/components/brand/Logo";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations, Language } from "@/i18n/translations";

// L'arabe est traduit mais volontairement absent du sélecteur : il reste
// accessible par l'adresse ?lang=ar. Pour l'afficher, ajouter ici
// { code: "ar", label: "العربية", name: "العربية" }.
const languages: { code: Language; label: string; name: string }[] = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLanguage();
  const reduceMotion = useReducedMotion();

  const navLinks = [
    { label: t(translations.nav.home, lang), to: "/" },
    { label: t(translations.nav.services, lang), to: "/services" },
    { label: t(translations.nav.about, lang), to: "/a-propos" },
    { label: t(translations.nav.careers, lang), to: "/nous-recrutons" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Ferme le menu si la fenêtre passe en largeur bureau, ou sur Échap
  useEffect(() => {
    if (!mobileOpen) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setMobileOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    desktop.addEventListener("change", onChange);
    window.addEventListener("keydown", onKey);
    return () => {
      desktop.removeEventListener("change", onChange);
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const langSelector = (className = "") => (
    <div className={`flex items-center ${className}`}>
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.name}
          lang={l.code}
          aria-pressed={lang === l.code}
          className={`min-h-[44px] min-w-[36px] px-1.5 text-sm transition-colors ${
            lang === l.code
              ? "font-semibold text-primary"
              : "font-medium text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-card transition-colors duration-300 ${
        scrolled || mobileOpen ? "border-border" : "border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="text-primary" aria-label="Eutykia Solutions">
          <Logo className="h-10 w-auto lg:h-12" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-ochre text-primary"
                    : "border-transparent text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {langSelector()}
          <Button asChild>
            <Link to="/contact">{t(translations.nav.cta, lang)}</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-foreground lg:hidden"
          aria-label={t(translations.nav.menu, lang)}
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            id="mobile-menu"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-card lg:hidden"
          >
            <nav className="space-y-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  aria-current={location.pathname === link.to ? "page" : undefined}
                  className={`flex min-h-[44px] items-center font-medium transition-colors ${
                    location.pathname === link.to ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {langSelector("pt-2")}
              <Button asChild className="mt-4 w-full">
                <Link to="/contact">{t(translations.nav.cta, lang)}</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
