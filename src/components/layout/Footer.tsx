import { Link } from "react-router-dom";
import Logo from "@/components/brand/Logo";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { company } from "@/config/company";
import { email, mailto } from "@/lib/email";

const linkClass = "opacity-75 transition-opacity hover:opacity-100";

const Footer = () => {
  const { lang } = useLanguage();
  const f = translations.footer;
  const n = translations.nav;

  const serviceLinks = [
    { hash: "conseil-it", label: t(f.consultingIT, lang) },
    { hash: "developpement", label: t(f.development, lang) },
    { hash: "architecture", label: t(f.technicalExpertise, lang) },
    { hash: "accompagnement", label: t(f.support, lang) },
  ];

  return (
    <footer className="footer-band">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-14 w-auto text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">{t(f.tagline, lang)}</p>
          </div>

          <div>
            <h2 className="mb-4 font-body text-sm font-semibold text-white">{t(f.navigation, lang)}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className={linkClass}>{t(n.home, lang)}</Link></li>
              <li><Link to="/services" className={linkClass}>{t(n.services, lang)}</Link></li>
              <li><Link to="/a-propos" className={linkClass}>{t(n.about, lang)}</Link></li>
              <li><Link to="/nous-recrutons" className={linkClass}>{t(n.careers, lang)}</Link></li>
              <li><Link to="/contact" className={linkClass}>{t(n.contact, lang)}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-body text-sm font-semibold text-white">{t(f.servicesTitle, lang)}</h2>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.hash}>
                  <Link to={`/services#${s.hash}`} className={linkClass}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-body text-sm font-semibold text-white">{t(f.contactTitle, lang)}</h2>
            <ul className="space-y-2 text-sm">
              <li><a href={mailto()} className={linkClass}>{email()}</a></li>
              <li className="opacity-75">{t(company.location, lang)}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-night-foreground/20 pt-8 text-xs sm:flex-row">
          <p className="opacity-70"><bdi>© {new Date().getFullYear()} {company.name}.</bdi> {t(f.rights, lang)}</p>
          <Link to="/mentions-legales" className={linkClass}>{t(f.legalNotice, lang)}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
