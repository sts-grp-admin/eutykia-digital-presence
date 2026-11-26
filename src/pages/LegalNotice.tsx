import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { company } from "@/config/company";
import { email } from "@/lib/email";

const LegalNotice = () => {
  const { lang } = useLanguage();
  const l = translations.legal;
  const legal = company.legal;

  const editorRows = [
    { label: t(l.labelForm, lang), value: legal.form?.[lang] },
    { label: t(l.labelAddress, lang), value: legal.address?.[lang] },
    { label: t(l.labelRc, lang), value: legal.rc?.[lang] },
    { label: t(l.labelIce, lang), value: legal.ice },
    { label: t(l.labelDirector, lang), value: legal.director?.[lang] },
    { label: t(translations.contact.labelEmailInfo, lang), value: email() },
  ].filter((row) => row.value);

  const sections = [
    { title: l.hostingTitle, text: l.hostingText },
    { title: l.ipTitle, text: l.ipText },
    { title: l.dataTitle, text: l.dataText },
    { title: l.cookiesTitle, text: l.cookiesText },
    { title: l.liabilityTitle, text: l.liabilityText },
  ];

  return (
    <section className="band">
      <div className="container max-w-3xl">
        <h1 className="title-page">{t(l.title, lang)}</h1>

        <div className="mt-12 space-y-10 leading-relaxed">
          <div>
            <h2 className="title-item mb-3">{t(l.editorTitle, lang)}</h2>
            <p className="font-semibold">{company.name}</p>
            <dl className="mt-2 space-y-1">
              {editorRows.map((row) => (
                <div key={row.label} className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">{row.label}{lang === "fr" ? " :" : ":"}</dt>
                  <dd><bdi>{row.value}</bdi></dd>
                </div>
              ))}
            </dl>
          </div>

          {sections.map((s) => (
            <div key={s.title.fr}>
              <h2 className="title-item mb-3">{t(s.title, lang)}</h2>
              <p className="text-muted-foreground">{t(s.text, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;
