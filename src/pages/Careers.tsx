import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  Rocket,
  TrendingUp,
  Heart,
  Send,
} from "lucide-react";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { mailto } from "@/lib/email";

const whyIcons = [Rocket, TrendingUp, Heart];

const bulletList = (items: string[]) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-baseline gap-3 text-sm leading-relaxed text-muted-foreground">
        <span className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-ochre" aria-hidden="true" />
        {item}
      </li>
    ))}
  </ul>
);

const CareersPage = () => {
  const { lang } = useLanguage();
  const c = translations.careers;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (i: number) => setExpandedIndex(expandedIndex === i ? null : i);
  const spontaneousHref = mailto(`subject=${encodeURIComponent("[CANDIDATURE] Candidature spontanée")}`);

  return (
    <>
      <PageHeader title={t(c.pageTitle, lang)} subtitle={t(c.pageSubtitle, lang)} />

      {/* Pourquoi nous rejoindre */}
      <section className="band">
        <div className="container">
          <h2 className="title-section">{t(c.whyTitle, lang)}</h2>

          <div className="card-grid mt-12 sm:grid-cols-3">
            {c.whyItems.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={i} className="p-7 md:p-8">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="title-item mt-5">{t(item.title, lang)}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t(item.text, lang)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offres */}
      <section className="band band-soft">
        <div className="container">
          <h2 className="title-section">{t(c.offersTitle, lang)}</h2>

          {c.offers.length === 0 ? (
            <p className="lede mt-6">{t(c.noOffers, lang)}</p>
          ) : (
            <div className="mt-12 space-y-4">
              {c.offers.map((offer, i) => {
                const isFilled = offer.status === "filled";
                const isExpanded = expandedIndex === i;
                const panelId = `offer-panel-${i}`;

                return (
                  <div key={i} className={`overflow-hidden rounded-lg border bg-card ${isFilled ? "border-border" : "border-primary/40"}`}>
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      className="flex w-full items-center gap-6 p-6 text-start md:p-8"
                    >
                      <div className="min-w-0 flex-1">
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
                            isFilled ? "bg-muted text-muted-foreground" : "bg-accent text-primary"
                          }`}
                        >
                          {isFilled ? t(c.filledBadge, lang) : t(c.activeBadge, lang)}
                        </span>
                        <h3 className="mt-3 font-heading text-2xl font-bold leading-tight md:text-[1.75rem]">
                          {t(offer.title, lang)}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4" aria-hidden="true" />
                            {t(offer.contract, lang)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" aria-hidden="true" />
                            {t(offer.location, lang)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" aria-hidden="true" />
                            {t(offer.experience, lang)}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div id={panelId} className="space-y-8 border-t border-border px-6 pb-8 pt-6 md:px-8">
                        <p className="max-w-[70ch] leading-relaxed text-muted-foreground">{t(offer.desc, lang)}</p>

                        <div className="grid gap-8 md:grid-cols-2">
                          <div className="space-y-6">
                            <div>
                              <h4 className="mb-3 font-heading text-lg font-bold">{t(c.missions, lang)}</h4>
                              {bulletList(offer.missions[lang])}
                            </div>
                            <div>
                              <h4 className="mb-3 font-heading text-lg font-bold">{t(c.stack, lang)}</h4>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                <bdi>{offer.techStack.join(", ")}</bdi>
                              </p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="mb-3 font-heading text-lg font-bold">{t(c.profile, lang)}</h4>
                              {bulletList(offer.profileItems[lang])}
                            </div>
                            <div>
                              <h4 className="mb-3 font-heading text-lg font-bold">{t(c.benefits, lang)}</h4>
                              {bulletList(offer.benefitsItems[lang])}
                            </div>
                            <dl className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex gap-2">
                                <dt className="font-medium text-foreground">{t(c.salary, lang)} :</dt>
                                <dd>{t(offer.salary, lang)}</dd>
                              </div>
                              <div className="flex gap-2">
                                <dt className="font-medium text-foreground">{t(c.remote, lang)} :</dt>
                                <dd>{t(offer.remote, lang)}</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        {!isFilled && (
                          <Button asChild size="lg">
                            <a href={mailto(`subject=${encodeURIComponent(`[CANDIDATURE] ${offer.title.fr}`)}`)}>
                              {t(c.applyBtn, lang)}
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title={t(c.offers.length === 0 ? c.spontaneousBtn : c.spontaneousTitle, lang)}
        text={t(c.spontaneousText, lang)}
      >
        <Button asChild size="lg" variant="inverse">
          <a href={spontaneousHref}>
            <Send aria-hidden="true" />
            {t(c.offers.length === 0 ? c.applyBtn : c.spontaneousBtn, lang)}
          </a>
        </Button>
      </CtaBand>
    </>
  );
};

export default CareersPage;
