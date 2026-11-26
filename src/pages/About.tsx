import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import { Award, Handshake, Settings, Zap } from "lucide-react";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const valueIcons = [Award, Handshake, Settings, Zap];

const AboutPage = () => {
  const { lang } = useLanguage();
  const a = translations.about;

  return (
    <>
      <PageHeader title={t(a.pageTitle, lang)} subtitle={t(a.pageSubtitle, lang)} />

      {/* Qui sommes-nous + origine du nom */}
      <section className="band">
        <div className="container grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2 className="title-section">{t(a.whoTitle, lang)}</h2>
            <div className="mt-6 max-w-[66ch] space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t(a.whoP1, lang)}</p>
              <p>{t(a.whoP2, lang)}</p>
              <p>{t(a.whoP3, lang)}</p>
            </div>
          </div>

          <aside className="self-start rounded-lg bg-accent/70 p-8">
            <h2 className="title-item">{t(a.nameTitle, lang)}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{t(a.nameText, lang)}</p>
          </aside>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="band band-soft">
        <div className="container">
          <h2 className="title-section">{t(a.valuesTitle, lang)}</h2>

          <div className="card-grid mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={i} className="p-7">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="title-item mt-5">{t(v.title, lang)}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t(v.text, lang)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre approche : trois étapes qui se suivent */}
      <section className="band">
        <div className="container">
          <h2 className="title-section">{t(a.approachTitle, lang)}</h2>

          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {a.steps.map((step, i) => (
              <li key={i} className="md:pe-10">
                <div className="flex items-center gap-4" aria-hidden="true">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">{i + 1}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="title-item mt-5">{t(step.title, lang)}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{t(step.text, lang)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title={t(a.ctaTitle, lang)} text={t(a.ctaSubtitle, lang)}>
        <Button asChild size="lg" variant="inverse">
          <Link to="/contact">{t(a.ctaBtn, lang)}</Link>
        </Button>
      </CtaBand>
    </>
  );
};

export default AboutPage;
