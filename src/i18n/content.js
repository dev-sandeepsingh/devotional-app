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

// Display metadata per category. Everything a category's list page needs lives
// here: URL segment, header copy, <head> meta, and the "about" section shown
// below the cards (`about.paragraphs` renders as a text card, `about.highlights`
// as a 3-up grid; either may be omitted). Routes in App.jsx are generated from
// this object — adding a category here is all that's needed for its pages.
export const CATEGORIES = {
  Chalisa: {
    route: "chalisa",
    heading: "📿 Chalisas",
    subtitle: "Browse popular Chalisas with meaning and explanation",
    icon: "📿",
    metaTitle: "Chalisa Collection | Devotional",
    metaDescription: "Explore Chalisas with meaning and explanation.",
    about: {
      heading: "About Chalisas",
      paragraphs: [
        "A Chalisa is a devotional poem consisting of 40 verses (chalisa means \"forty\" in Hindi). The most famous Chalisa is dedicated to Lord Hanuman, known as the Hanuman Chalisa, which praises his strength, courage, and devotion to Lord Rama.",
        "These sacred hymns are typically recited for spiritual upliftment, protection, and to seek blessings from the deity they are dedicated to.",
      ],
    },
  },
  Mantras: {
    route: "mantra",
    heading: "✨ Mantras",
    subtitle: "Sacred mantras and chants for meditation and spiritual practice",
    icon: "✨",
    metaTitle: "Mantra Collection | Devotional",
    metaDescription: "Discover powerful mantras with translations and explanations.",
    about: {
      heading: "Understanding Mantras",
      highlights: [
        {
          icon: "🎯",
          title: "What are Mantras?",
          text: "Sacred sounds, words, or phrases that carry spiritual vibrations and are used for meditation and spiritual practice.",
        },
        {
          icon: "🧘",
          title: "How to Recite?",
          text: "Mantras are best recited with focus and devotion. Repetition helps in concentration and deepens spiritual connection.",
        },
        {
          icon: "💫",
          title: "Benefits",
          text: "Regular mantra recitation brings peace, clarity, spiritual awakening, and protection from negative influences.",
        },
      ],
    },
  },
  Aartis: {
    route: "aarti",
    heading: "🎵 Aartis",
    subtitle: "Traditional devotional songs performed during worship ceremonies",
    icon: "🎵",
    metaTitle: "Aarti Collection | Devotional",
    metaDescription: "Read and recite Aartis with meaning and explanation.",
    about: {
      heading: "What is Aarti?",
      paragraphs: [
        "Aarti is a form of worship in Hinduism performed by waving lighted lamps in front of an idol or an image of a deity as an offering. It is performed at least once or twice a day in all Hindu households.",
        "The aarti is accompanied by singing, and often bells are rung to enhance the spiritual atmosphere. It represents the offering of light to the deity, symbolizing the removal of darkness (ignorance) from the devotee's life.",
      ],
      highlights: [
        {
          icon: "🕯️",
          title: "Ritual Significance",
          text: "The lighting of the lamp represents the light of knowledge and the dispelling of darkness.",
        },
        {
          icon: "🔔",
          title: "Spiritual Practice",
          text: "Aarti strengthens the bond between the devotee and the deity through devotion and offering.",
        },
        {
          icon: "✨",
          title: "Daily Practice",
          text: "Usually performed in the morning and evening, it's an essential part of daily worship.",
        },
      ],
    },
  },
  Stotras: {
    route: "stotras",
    heading: "🙏 Stotras",
    subtitle: "Sacred hymns praising the divine qualities of different deities",
    icon: "🙏",
    metaTitle: "Stotras Collection | Devotional",
    metaDescription: "Explore sacred stotras praising divine qualities of deities.",
    about: {
      heading: "About Stotras",
      paragraphs: [
        "A Stotra is a sacred hymn of praise dedicated to a deity, describing their divine qualities, power, and manifestations. The word \"Stotra\" comes from the Sanskrit root \"stu\" meaning \"to praise.\"",
        "Stotras are recited for divine grace, protection, and spiritual elevation. Each stotra focuses on different aspects of the deity's divine nature and is believed to invoke their blessings when recited with devotion and sincerity.",
      ],
    },
  },
  Ashtakams: {
    route: "ashtakams",
    heading: "📖 Ashtakams",
    subtitle: "Eight-verse devotional hymns for spiritual elevation",
    icon: "📖",
    metaTitle: "Ashtakams Collection | Devotional",
    metaDescription: "Explore eight-verse devotional hymns for spiritual elevation.",
    about: {
      heading: "About Ashtakams",
      paragraphs: [
        "An Ashtakam is a devotional hymn consisting of exactly eight verses (ashta means \"eight\" in Sanskrit). These concise yet powerful compositions pack profound spiritual wisdom and devotional sentiment into just eight verses.",
        "Ashtakams are typically dedicated to specific deities and are recited to seek their blessings, gain spiritual knowledge, and achieve liberation. Each verse is carefully crafted to invoke a different aspect of the deity's divine nature.",
      ],
    },
  },
  Sahasranamas: {
    route: "sahasranamas",
    heading: "🕉️ Sahasranamas",
    subtitle: "Sacred compositions of 1000 divine names for liberation",
    icon: "🕉️",
    metaTitle: "Sahasranamas Collection | Devotional",
    metaDescription: "Explore sacred compositions of 1000 divine names for spiritual liberation.",
    about: {
      heading: "About Sahasranamas",
      paragraphs: [
        "A Sahasranama is a sacred composition listing 1000 names of a deity (sahasra means \"thousand\" in Sanskrit). Each name represents a different divine quality, aspect, or manifestation of that deity.",
        "The most famous Sahasranamas are the Vishnu Sahasranama and Devi Sahasranama, found in ancient Hindu scriptures. Reciting these names is believed to bring profound spiritual benefits.",
        "Regular recitation of Sahasranama is said to lead to moksha (liberation), removal of obstacles, and attainment of divine grace and wisdom.",
      ],
    },
  },
  VratKathas: {
    route: "vrat-kathas",
    heading: "📚 Vrat Kathas",
    subtitle: "Sacred stories of fasts and festivals for family well-being",
    icon: "📚",
    metaTitle: "Vrat Kathas Collection | Devotional",
    metaDescription: "Explore sacred stories of fasts and festivals for family well-being.",
    about: {
      heading: "About Vrat Kathas",
      paragraphs: [
        "A Vrat Katha is a sacred story recited during fasts and festivals. The word \"Katha\" means \"story\" in Sanskrit. These tales carry spiritual significance and teach moral lessons about devotion, sacrifice, and divine grace.",
        "Vrat Kathas are an integral part of Hindu traditions, recited before or during fasting periods to strengthen faith and understanding of the spiritual significance of the fast.",
        "These stories celebrate the power of devotion, the importance of family bonds, and the blessings that come from sincere observance of sacred vows and traditions.",
      ],
    },
  },
};

// Optional per-item icon overrides (falls back to the category icon).
const ITEM_ICONS = {
  "Chalisa/hanuman-chalisa": "📿",
  "Chalisa/shiv-chalisa": "🔱",
  "Chalisa/ram-chalisa": "🏹",
  "Chalisa/ganesh-chalisa": "🐘",
  "Chalisa/durga-chalisa": "🦁",
  "Chalisa/shani-chalisa": "🪐",
  "Chalisa/vishnu-chalisa": "🐚",
  "Chalisa/krishna-chalisa": "🦚",
  "Chalisa/radha-chalisa": "🌸",
  "Chalisa/gayatri-chalisa": "🌅",
  "Chalisa/lakshmi-chalisa": "🪷",
  "Chalisa/saraswati-chalisa": "🦢",
  "Chalisa/saibaba-chalisa": "🙏",
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

// Flat index of every item across all categories, for site search.
// haystack = everything a query can match against, lowercased.
const SEARCH_INDEX = Object.entries(content).flatMap(([category, group]) =>
  Object.keys(group).map((slug) => {
    const item = group[slug];
    return {
      category,
      slug,
      path: `/${CATEGORIES[category]?.route}/${slug}`,
      icon: iconFor(category, slug),
      cardTitle: cardTitle(item),
      intro: item.en?.intro || item.hi?.intro || "",
      haystack: [item.hi?.title, item.en?.title, slug.replace(/-/g, " "), category]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    };
  })
);

// Search all items: every whitespace-separated token must appear in the
// haystack (works for both "hanuman chalisa" and "हनुमान"). Items whose
// haystack starts with the query rank first.
export function searchItems(query, limit = 8) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/);
  return SEARCH_INDEX.filter((item) => tokens.every((t) => item.haystack.includes(t)))
    .sort((a, b) => {
      const as = a.haystack.startsWith(q) ? 0 : 1;
      const bs = b.haystack.startsWith(q) ? 0 : 1;
      return as - bs || a.cardTitle.localeCompare(b.cardTitle);
    })
    .slice(0, limit);
}

// A single item's content for the detail page, or null if unknown.
export function getItem(category, slug) {
  const item = content[category]?.[slug];
  if (!item) return null;
  return { slug, icon: iconFor(category, slug), en: item.en, hi: item.hi };
}
