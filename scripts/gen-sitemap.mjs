// Generates public/sitemap.xml (and keeps robots.txt's Sitemap URL correct)
// from the static routes plus every content category and item folder. Runs on
// prebuild; run directly with `npm run gen:seo`.
//
// Set the production origin via VITE_SITE_URL (e.g. https://devotional.example)
// so the URLs are absolute and correct — otherwise a placeholder is used and a
// warning is printed.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const I18N_DIR = join(ROOT, "src", "i18n");
const PUBLIC_DIR = join(ROOT, "public");

const PLACEHOLDER = "https://your-domain.example";
const SITE_URL = (process.env.VITE_SITE_URL || PLACEHOLDER).replace(/\/$/, "");
if (SITE_URL === PLACEHOLDER) {
  console.warn("[gen-sitemap] VITE_SITE_URL is not set — using placeholder origin. Set it for correct absolute URLs.");
}

// Category folder -> public route segment (mirrors CATEGORIES in content.js).
const CATEGORY_ROUTES = {
  Chalisa: "chalisa",
  Mantras: "mantra",
  Aartis: "aarti",
  Stotras: "stotras",
  Ashtakams: "ashtakams",
  Sahasranamas: "sahasranamas",
  VratKathas: "vrat-kathas",
  Temples: "temples",
  Festivals: "festivals",
};

// Static, always-present routes.
const STATIC_ROUTES = ["/", "/blog", "/about", "/contact", "/donate", "/morning", "/evening"];

function listDirs(path) {
  try {
    return readdirSync(path).filter((name) => {
      try {
        return statSync(join(path, name)).isDirectory();
      } catch {
        return false;
      }
    });
  } catch {
    return [];
  }
}

const routes = [...STATIC_ROUTES];
for (const [folder, route] of Object.entries(CATEGORY_ROUTES)) {
  const slugs = listDirs(join(I18N_DIR, folder)).sort();
  if (slugs.length === 0) continue;
  routes.push(`/${route}`);
  for (const slug of slugs) routes.push(`/${route}/${slug}`);
}

const today = new Date().toISOString().slice(0, 10);
const body = routes
  .map((route) => {
    const priority = route === "/" ? "1.0" : route.split("/").length <= 2 ? "0.8" : "0.6";
    return `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");

const robots = `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /adminLogin\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
writeFileSync(join(PUBLIC_DIR, "robots.txt"), robots, "utf8");

console.log(`[gen-sitemap] wrote ${routes.length} URLs -> public/sitemap.xml and public/robots.txt (origin: ${SITE_URL})`);
