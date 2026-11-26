import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import { Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage, t } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { company } from "@/config/company";
import { email, mailto } from "@/lib/email";

// Clé Web3Forms (variable de dépôt GitHub). Sans clé, le formulaire ouvre la
// messagerie du visiteur avec le message pré-rempli.
const WEB3FORMS_KEY: string | undefined = import.meta.env.VITE_WEB3FORMS_KEY || undefined;

const inputClass =
  "rtl:text-right w-full rounded-md border border-input bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring";
const labelClass = "mb-2 block text-sm font-medium";

const ContactPage = () => {
  const { lang } = useLanguage();
  const c = translations.contact;
  const v = translations.validation;

  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [canSubmit, setCanSubmit] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [mailOpened, setMailOpened] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  // À la confirmation, le formulaire disparaît : on amène le focus sur le message
  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  // Anti-spam : un robot soumet en général avant ce délai
  useEffect(() => {
    const timer = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const validate = (): boolean => {
    const newErrors: { email?: string; message?: string } = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t(v.invalidEmail, lang);
    }
    if (form.message.trim().length < 10) {
      newErrors.message = t(v.messageTooShort, lang);
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const subjectOptions = [
    { value: "projet", label: c.optionProject },
    { value: "regie", label: c.optionStaff },
    { value: "conseil", label: c.optionConsulting },
    { value: "partenariat", label: c.optionPartnership },
    { value: "autre", label: c.optionOther },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Pot de miel : case invisible que seul un robot coche
    if (new FormData(e.currentTarget).get("botcheck")) return;
    if (!validate()) return;

    const option = subjectOptions.find((o) => o.value === form.subject);
    const subject = `[WEB] ${option ? t(option.label, lang) : "Contact"} — ${form.name}`;

    if (!WEB3FORMS_KEY) {
      const body = [
        form.message,
        "",
        form.name,
        form.email,
        form.company,
        form.phone,
      ].filter((line, i) => i < 2 || line).join("\n");
      window.location.href = mailto(`subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      // Rien ne garantit qu'une messagerie s'est ouverte : on donne l'adresse
      setMailOpened(true);
      return;
    }

    setLoading(true);
    setSendFailed(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: form.name,
          name: form.name,
          email: form.email,
          company: form.company || "—",
          phone: form.phone || "—",
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSendFailed(true);
      }
    } catch {
      setSendFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const details = [
    { Icon: Mail, label: t(c.labelEmailInfo, lang), value: <a href={mailto()} className="hover:text-primary hover:underline">{email()}</a> },
    { Icon: MapPin, label: t(c.labelLocation, lang), value: t(company.location, lang) },
    { Icon: Clock, label: t(c.labelAvailability, lang), value: t(c.availabilityText, lang) },
  ];

  return (
    <>
      <PageHeader title={t(c.pageTitle, lang)} subtitle={t(c.pageSubtitle, lang)} />

      <section className="band">
        <div className="container grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          {/* Formulaire */}
          <div>
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-8">
                <CheckCircle className="h-9 w-9 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h2 ref={successRef} tabIndex={-1} className="title-item mt-4 outline-none">{t(v.successTitle, lang)}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{t(v.successText, lang)}</p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-card p-6 md:p-8">
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>{t(c.labelName, lang)}</label>
                      <input
                        id="contact-name" type="text" name="name" required autoComplete="name"
                        value={form.name} onChange={set("name")}
                        className={inputClass} placeholder={t(c.placeholderName, lang)}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>{t(c.labelEmail, lang)}</label>
                      <input
                        id="contact-email" type="email" name="email" required autoComplete="email" dir="ltr"
                        value={form.email} onChange={set("email")}
                        aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={inputClass} placeholder={t(c.placeholderEmail, lang)}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-company" className={labelClass}>{t(c.labelCompany, lang)}</label>
                      <input
                        id="contact-company" type="text" name="company" autoComplete="organization"
                        value={form.company} onChange={set("company")}
                        className={inputClass} placeholder={t(c.placeholderCompany, lang)}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>
                        {t(c.labelPhone, lang)}{" "}
                        <span className="font-normal text-muted-foreground">{t(c.labelPhoneOptional, lang)}</span>
                      </label>
                      <input
                        id="contact-phone" type="tel" name="phone" autoComplete="tel" dir="ltr"
                        value={form.phone} onChange={set("phone")}
                        className={inputClass} placeholder={company.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={labelClass}>{t(c.labelSubject, lang)}</label>
                    <select
                      id="contact-subject" name="subject" required
                      value={form.subject} onChange={set("subject")}
                      className={inputClass}
                    >
                      <option value="" disabled>{t(c.placeholderSelect, lang)}</option>
                      {subjectOptions.map((o) => (
                        <option key={o.value} value={o.value}>{t(o.label, lang)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>{t(c.labelMessage, lang)}</label>
                    <textarea
                      id="contact-message" name="message" required rows={6}
                      value={form.message} onChange={set("message")}
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${inputClass} resize-y`} placeholder={t(c.placeholderMessage, lang)}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!canSubmit || loading}>
                    {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
                    {t(c.submitBtn, lang)}
                  </Button>

                  <div role="status" className="empty:hidden">
                    {sendFailed && <p className="text-sm text-destructive">{t(c.sendError, lang)}</p>}
                    {mailOpened && (
                      <p className="border-s-2 border-ochre ps-4 text-sm leading-relaxed">
                        {t(c.mailOpened, lang)}{" "}
                        <a href={mailto()} className="font-medium text-primary underline underline-offset-4">{email()}</a>
                      </p>
                    )}
                  </div>
                </form>

                <p className="mt-5 max-w-[60ch] text-sm text-muted-foreground">
                  {!WEB3FORMS_KEY && <>{t(c.mailFallback, lang)} </>}
                  {t(c.privacy, lang)}
                </p>
              </>
            )}
          </div>

          {/* Coordonnées */}
          <aside className="self-start rounded-lg bg-accent/70 p-8">
            <h2 className="title-item">{t(c.coordTitle, lang)}</h2>
            <dl className="mt-6 space-y-6">
              {details.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <dt className="text-sm font-medium">{label}</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
