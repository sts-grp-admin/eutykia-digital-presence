// Composition géométrique légère du hero : cadres, lignes et points très peu
// contrastés, décoratifs uniquement.
const P = "hsl(var(--primary))";
const O = "hsl(var(--ochre))";

const HeroShapes = ({ className = "" }: { className?: string }) => (
  <svg viewBox="70 30 510 450" fill="none" className={className} aria-hidden="true">
    <rect x="180" y="80" width="200" height="200" rx="6" stroke={P} strokeWidth="1.1" opacity="0.12" transform="rotate(15 280 180)" />
    <rect x="260" y="160" width="160" height="160" rx="6" stroke={P} strokeWidth="1.1" opacity="0.09" transform="rotate(-10 340 240)" />
    <rect x="140" y="300" width="120" height="120" rx="6" stroke={O} strokeWidth="1.0" opacity="0.17" transform="rotate(25 200 360)" />
    <circle cx="400" cy="380" r="86" stroke={P} strokeWidth="0.9" opacity="0.07" />
    <line x1="100" y1="150" x2="400" y2="100" stroke={P} strokeWidth="0.9" opacity="0.09" />
    <line x1="200" y1="350" x2="500" y2="250" stroke={P} strokeWidth="0.9" opacity="0.08" />
    <line x1="300" y1="450" x2="550" y2="380" stroke={O} strokeWidth="0.8" opacity="0.15" />
    <polygon points="420,120 480,200 360,200" stroke={P} strokeWidth="0.9" opacity="0.09" />
    <polygon points="350,380 430,440 270,440" stroke={P} strokeWidth="0.9" opacity="0.07" />
    <circle cx="450" cy="150" r="3.5" fill={O} opacity="0.21" />
    <circle cx="200" cy="250" r="2.5" fill={P} opacity="0.13" />
    <circle cx="380" cy="350" r="2.5" fill={P} opacity="0.12" />
    <circle cx="500" cy="300" r="4" fill={P} opacity="0.10" />
  </svg>
);

export default HeroShapes;
