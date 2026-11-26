import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import {
  Lightbulb,
  Code2,
  Building2,
  BrainCircuit,
  Plug,
  UsersRound,
  Landmark,
  ShieldCheck,
  Zap,
  ShoppingCart,
  Factory,
  Building,
  Radio,
  HeartPulse,
} from "lucide-react";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const serviceIcons = [Lightbulb, Code2, BrainCircuit, Building2, Plug, UsersRound];
const serviceIds = ["conseil-it", "developpement", "data-ia", "architecture", "integration", "accompagnement"];
const sectorIcons = [Landmark, ShieldCheck, Zap, ShoppingCart, Factory, Building, Radio, HeartPulse];

const techItems = [
  ["Java", "Python", "TypeScript", "C#"],
  ["React", "Angular", "Vue.js"],
  ["Spring Boot", "Node.js", ".NET"],
  ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "HuggingFace", "Pandas", "Spark", "Power BI"],
  ["AWS", "Azure", "GCP"],
  ["Docker", "Kubernetes", "GitLab CI", "Terraform"],
];

const ServicesPage = () => {
  const { lang } = useLanguage();
  const s = translations.services;
  const o = translations.offer;

  return (
    <>
      <PageHeader title={t(s.pageTitle, lang)} subtitle={t(s.pageSubtitle, lang)} />

      {/* Services */}
      <section className="band">
        <div className="container">
          <div className="space-y-8">
            {s.items.map((svc, i) => {
              const Icon = serviceIcons[i];
              return (
                <article
                  key={i}
                  id={serviceIds[i]}
                  className="card grid scroll-mt-28 gap-6 p-8 md:grid-cols-[3.5rem_1fr] md:gap-8 md:p-10"
                >
                  <span className="icon-chip h-14 w-14">
                    <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-[1.75rem]">
                      {t(svc.title, lang)}
                    </h2>
                    <p className="mt-3 max-w-[70ch] leading-relaxed text-muted-foreground">{t(svc.desc, lang)}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {svc.items[lang].map((item) => (
                        <li key={item} className="flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1 text-sm">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Environnements techniques */}
      <section className="band band-soft">
        <div className="container">
          <h2 className="title-section">{t(o.techTitle, lang)}</h2>
          <p className="lede mt-4">{t(o.techSubtitle, lang)}</p>

          <dl className="card-grid mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {o.techCategories[lang].map((catLabel, i) => (
              <div key={catLabel} className="p-6 md:p-7">
                <dt className="title-item">{catLabel}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground"><bdi>{techItems[i].join(", ")}</bdi></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Secteurs */}
      <section className="band">
        <div className="container">
          <h2 className="title-section">{t(o.sectorsTitle, lang)}</h2>

          <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-4">
            {o.sectors[lang].map((label, i) => {
              const Icon = sectorIcons[i];
              return (
                <li key={label} className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-medium">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand title={t(s.ctaTitle, lang)}>
        <Button asChild size="lg" variant="inverse">
          <Link to="/contact">{t(s.ctaBtn, lang)}</Link>
        </Button>
      </CtaBand>
    </>
  );
};

export default ServicesPage;
