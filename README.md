# Eutykia Solutions — Site vitrine

Site web de [Eutykia Solutions](https://www.eutykia.ma) : conseil, développement et accompagnement technique.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- i18n : FR / EN / ES, plus une version arabe (droite-à-gauche) non listée dans le sélecteur,
  accessible par `?lang=ar`

## Getting Started

```sh
npm install
npm run dev
```

## À compléter avant la mise en ligne

1. **Informations légales** — `src/config/company.ts` : il reste à renseigner le siège social
   (`address`) et, si souhaité, le directeur de la publication (`director`). Un champ à `null`
   n'est pas affiché. Forme juridique, RC et ICE sont déjà renseignés ; l'IF, la patente et le
   capital ne sont volontairement pas publiés.
2. **Formulaire de contact** — créer une clé [Web3Forms](https://web3forms.com) liée à la boîte
   de réception Eutykia et la déclarer en variable de dépôt GitHub `VITE_WEB3FORMS_KEY`
   (Settings → Secrets and variables → Actions → Variables). Sans clé, le formulaire ouvre
   la messagerie du visiteur avec le message pré-rempli.
3. **Email** — l'adresse affichée est `contact@eutykia.ma` (`emailUser` + `domain` dans `company.ts`).
4. **GitHub Pages** — Settings → Pages : Source = « GitHub Actions », puis saisir le domaine
   personnalisé `www.eutykia.ma` (avec un déploiement par Actions, le fichier `public/CNAME`
   seul ne suffit pas).
5. **DNS** — enregistrement CNAME `www` vers `<organisation>.github.io`, et enregistrements A de
   GitHub Pages sur l'apex pour la redirection.
6. **Arabe** — faire relire la version arabe par un locuteur natif avant publication.

## Deployment

Déploiement automatique via GitHub Actions sur chaque push sur `main` (GitHub Pages).
Le build copie `index.html` dans un dossier par route (`scripts/spa-routes.mjs`) pour que
chaque page réponde directement ; toute nouvelle route doit y être ajoutée, ainsi qu'à
`public/sitemap.xml`.

## Identité visuelle

- **Logotype** : « Eutykia » en Outfit avec « solutions » dessous — `src/components/brand/Logo.tsx`
  (tracés vectorisés, hérite de `currentColor`).
  Exports prêts à l'emploi dans `public/brand/` (SVG et PNG, pourpre et blanc).
- **Couleurs** : pourpre `#6F1B47` (primaire), ocre `#AE7D24` (tracés et accents), définies dans `src/index.css`.
- **Typographies** : Plus Jakarta Sans (titres), DM Sans (texte), comme le site Sabius ; en arabe, Noto Kufi Arabic et IBM Plex Sans Arabic.
- **Offres d'emploi** : ajouter des entrées au tableau `careers.offers` de `src/i18n/translations.ts`.

## Project Structure

```
src/
  components/   brand (logo, inscription), layout, shared, ui
  config/       company.ts — informations de la société
  pages/        Index, Services, About, Contact, Careers, LegalNotice
  i18n/         Translations (FR/EN/ES/AR) + LanguageContext
  lib/          Utilities
```
