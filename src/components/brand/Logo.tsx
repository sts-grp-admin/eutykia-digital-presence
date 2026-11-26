import { LOGO_SUB, LOGO_VIEWBOX, LOGO_VIEWBOX_WORD, LOGO_WORD } from "./logoPaths";

interface Props {
  className?: string;
  /** Affiche « solutions » sous le nom (désactiver pour les très petites tailles) */
  withBaseline?: boolean;
  title?: string;
}

/**
 * Logotype Eutykia : « Eutykia » en Outfit, « solutions » dessous.
 * Tracés vectorisés (aucune police requise). Hérite de `currentColor`.
 */
const Logo = ({ className = "", withBaseline = true, title = "Eutykia Solutions" }: Props) => (
  <svg
    viewBox={withBaseline ? LOGO_VIEWBOX : LOGO_VIEWBOX_WORD}
    className={className}
    role="img"
    aria-label={title}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={LOGO_WORD} />
    {withBaseline && <path d={LOGO_SUB} />}
  </svg>
);

export default Logo;
