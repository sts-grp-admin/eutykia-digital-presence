// GitHub Pages ne connaît pas les routes de l'application : sans fichier réel,
// /services répond 404 (puis redirige), ce qui empêche l'indexation et les
// aperçus de lien. On copie donc index.html dans un dossier par route.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const routes = ["services", "a-propos", "contact", "nous-recrutons", "mentions-legales"];

for (const route of routes) {
  const dir = join("dist", route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(join("dist", "index.html"), join(dir, "index.html"));
}
console.log(`spa-routes: ${routes.length} routes`);
