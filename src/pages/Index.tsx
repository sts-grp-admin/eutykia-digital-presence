import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CtaBand from "@/components/shared/CtaBand";
import HeroShapes from "@/components/brand/HeroShapes";
import {
  ArrowRight,
  Lightbulb,
  Code2,
  Building2,
  BrainCircuit,
  Plug,
  UsersRound,
  Award,
  Zap,
  Target,
  Shuffle,
  Users,
  Package,
  MessagesSquare,
} from "lucide-react";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const expertiseIcons = [Lightbulb, Code2, Building2, BrainCircuit, Plug, UsersRound];
const whyIcons = [Award, Zap, Target, Shuffle];
const modeIcons = [Users, Package, MessagesSquare];

const Index = () => {
  const { lang } = useLanguage();
  const h = translations.home;
  const ex = translations.expertises;
  const wi = translations.whyItems;
  const modes = translations.offer.interventionModes;

  return (
    <>
      {/* Hero */}
      <section className="hero relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <HeroShapes className="pointer-events-none absolute end-[4%] top-[56%] hidden h-[400px] w-[450px] -translate-y-1/2 md:block lg:h-[470px] lg:w-[530px] rtl:-scale-x-100" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="title-page">{t(h.heroTitle, lang)}</h1>
            <p className="lede mt-7">{t(h.heroSubtitle, lang)}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-auto whitespace-normal py-3 text-center">
                <Link to="/services">{t(h.heroBtn1, lang)}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">{t(h.heroBtn2, lang)}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="band">
        <div className="container">
          <h2 className="title-section">{t(h.expertiseTitle, lang)}</h2>
          <p className="lede mt-4">{t(h.expertiseSubtitle, lang)}</p>

          <div className="card-grid mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {ex.map((s, i) => {
              const Icon = expertiseIcons[i];
              return (
                <div key={i} className="p-7 md:p-8">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="title-item mt-4">{t(s.title, lang)}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t(s.desc, lang)}</p>
                </div>
              );
            })}
          </div>

          <Link
            to="/services"
            className="group mt-8 inline-flex min-h-[44px] items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
          >
            {t(h.seeAllServices, lang)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Pourquoi Eutykia */}
      <section className="band band-soft">
        <div className="container">
          <h2 className="title-section text-center">{t(h.whyTitle, lang)}</h2>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {wi.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={i} className="text-center">
                  <span className="icon-chip mx-auto">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="title-item mt-4">{t(item.keyword, lang)}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t(item.text, lang)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modes d'intervention */}
      <section className="band">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="title-section">{t(h.modesTitle, lang)}</h2>
            <p className="lede mx-auto mt-4">{t(h.modesSubtitle, lang)}</p>
          </div>

          <div className="card-grid mt-12 md:grid-cols-3">
            {modes.map((mode, i) => {
              const Icon = modeIcons[i];
              return (
                <div key={i} className="p-8 text-center">
                  <span className="icon-chip mx-auto">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="title-item mt-5">{t(mode.title, lang)}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t(mode.text, lang)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={t(h.ctaTitle, lang)} text={t(h.ctaSubtitle, lang)}>
        <Button asChild size="lg" variant="inverse">
          <Link to="/contact">{t(h.ctaBtn, lang)}</Link>
        </Button>
      </CtaBand>
    </>
  );
};

export default Index;
