// Per-item devotional content registry.
//
// Content lives one folder per item, each with an en.json + hi.json (see
// src/i18n/Chalisa/hanuman-chalisa/*). Adding a new item is just adding a folder
// (and, optionally, an icon in ITEM_ICONS below) — it is auto-discovered here.
//
// Each item JSON has the shape:
//   { title, intro, description, meaning, faq: { q1, a1, q2, a2 } }

// Eagerly import every <Category>/<slug>/<lang>.json under this folder.
const modules = import.meta.glob("./{Chalisa,Mantras,Aartis,Stotras,Ashtakams,Sahasranamas,VratKathas}/*/*.json", { eager: true });

// content[category][slug][lang] = <parsed json>
const content = {};
for (const path in modules) {
  // path e.g. "./Chalisa/hanuman-chalisa/en.json"
  const [, category, slug, file] = path.split("/");
  const lang = file.replace(".json", "");
  (content[category] ??= {});
  (content[category][slug] ??= {});
  content[category][slug][lang] = modules[path].default;
}

// Display metadata per category (list-page copy + fallback icon + URL segment).
export const CATEGORIES = {
  Chalisa: {
    route: "chalisa",
    heading: "📿 Chalisas",
    subtitle: "Browse popular Chalisas with meaning and explanation",
    icon: "📿",
  },
  Mantras: {
    route: "mantra",
    heading: "✨ Mantras",
    subtitle: "Sacred mantras and chants for meditation and spiritual practice",
    icon: "✨",
  },
  Aartis: {
    route: "aarti",
    heading: "🎵 Aartis",
    subtitle: "Traditional devotional songs performed during worship ceremonies",
    icon: "🎵",
  },
  Stotras: {
    route: "stotras",
    heading: "🙏 Stotras",
    subtitle: "Sacred hymns praising the divine qualities of different deities",
    icon: "🙏",
  },
  Ashtakams: {
    route: "ashtakams",
    heading: "📖 Ashtakams",
    subtitle: "Eight-verse devotional hymns for spiritual elevation",
    icon: "📖",
  },
  Sahasranamas: {
    route: "sahasranamas",
    heading: "🕉️ Sahasranamas",
    subtitle: "Sacred compositions of 1000 divine names for liberation",
    icon: "🕉️",
  },
  VratKathas: {
    route: "vrat-kathas",
    heading: "📚 Vrat Kathas",
    subtitle: "Sacred stories of fasts and festivals for family well-being",
    icon: "📚",
  },
};

// Optional per-item icon overrides (falls back to the category icon).
const ITEM_ICONS = {
  "Chalisa/hanuman-chalisa": "📿",
  "Chalisa/shiv-chalisa": "🔱",
  "Chalisa/ram-chalisa": "🏹",
  "Mantras/hanuman-mantra": "✨",
  "Mantras/gayatri-mantra": "🌅",
  "Mantras/mahamrityunjaya-mantra": "🕉️",
  "Aartis/hanuman-aarti": "🎵",
  "Aartis/om-jai-jagdish-aarti": "🪔",
  "Aartis/ganesh-aarti": "🐘",
  "Stotras/devi-mahatmya-stotra": "👑",
  "Stotras/lakshmi-stotra": "💰",
  "Ashtakams/bhramarashtakam": "🧠",
  "Ashtakams/shankarashtakam": "⚡",
  "Sahasranamas/vishnu-sahasranama": "🛡️",
  "Sahasranamas/devi-sahasranama": "✨",
  "VratKathas/karva-chauth-vrat-katha": "💑",
  "VratKathas/teej-vrat-katha": "🌸",
};

function iconFor(category, slug) {
  return ITEM_ICONS[`${category}/${slug}`] || CATEGORIES[category]?.icon || "🕉️";
}

// Bilingual single-line card title, e.g. "श्री हनुमान चालीसा (Hanuman Chalisa)".
function cardTitle(item) {
  const hi = item.hi?.title;
  const en = item.en?.title;
  if (hi && en) return `${hi} (${en})`;
  return hi || en || "";
}

// Items for a category's list page (Hanuman items surface first).
export function getItems(category) {
  const group = content[category] || {};
  return Object.keys(group)
    .sort((a, b) => {
      const ah = a.startsWith("hanuman") ? 0 : 1;
      const bh = b.startsWith("hanuman") ? 0 : 1;
      return ah - bh || a.localeCompare(b);
    })
    .map((slug) => ({
      slug,
      icon: iconFor(category, slug),
      cardTitle: cardTitle(group[slug]),
      // Short English intro for the card (falls back to Hindi).
      intro: group[slug].en?.intro || group[slug].hi?.intro || "",
    }));
}

// A single item's content for the detail page, or null if unknown.
export function getItem(category, slug) {
  const item = content[category]?.[slug];
  if (!item) return null;
  return { slug, icon: iconFor(category, slug), en: item.en, hi: item.hi };
}
