import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const NotFound = () => {
  const { lang } = useLanguage();
  const nf = translations.notFound;

  return (
    <section className="band">
      <div className="container">
        <p className="font-heading text-7xl font-bold leading-none text-primary">404</p>
        <h1 className="title-section mt-4">{t(nf.title, lang)}</h1>
        <p className="lede mt-3">{t(nf.text, lang)}</p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">{t(nf.btn, lang)}</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
