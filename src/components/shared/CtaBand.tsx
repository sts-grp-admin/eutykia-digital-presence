import { ReactNode } from "react";

interface Props {
  title: string;
  text?: string;
  children: ReactNode;
}

/** Bandeau d'appel à l'action de fin de page. */
const CtaBand = ({ title, text, children }: Props) => (
  <section className="cta-band">
    <div className="container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
      <div>
        <h2 className="font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-balance md:text-4xl">{title}</h2>
        {text && <p className="mt-3 text-lg text-white/85">{text}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  </section>
);

export default CtaBand;
