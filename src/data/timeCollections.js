import { getItems, CATEGORIES } from "../i18n/content";

// Curated Morning / Evening devotion collections (Home → Quick Access).
// Each entry is a traditional recommendation; when `slug` matches an item in
// src/i18n it links to that detail page, otherwise the card links to the
// category list — and upgrades automatically once the content is imported.
const COLLECTIONS = {
  morning: {
    id: "morning",
    title: "Morning Devotion",
    hindiName: "प्रातःकाल",
    icon: "☀️",
    tagline: "Morning is associated with purity, wisdom, energy, and new beginnings.",
    metaDescription:
      "Morning devotional collection — Gayatri Mantra, Ganesh Chalisa, Surya Chalisa, morning aartis and more.",
    sections: [
      {
        category: "Mantras",
        heading: "Mantras",
        entries: [
          { name: "गायत्री मंत्र", slug: "gayatri-mantra" },
          { name: "महामृत्युंजय मंत्र", slug: "mahamrityunjaya-mantra" },
          { name: "ॐ नमः शिवाय" },
          { name: "ॐ गं गणपतये नमः" },
          { name: "ॐ नमो नारायणाय" },
          { name: "हरे कृष्ण महामंत्र" },
        ],
      },
      {
        category: "Chalisa",
        heading: "Chalisas",
        entries: [
          { name: "श्री गणेश चालीसा", slug: "ganesh-chalisa" },
          { name: "शिव चालीसा", slug: "shiv-chalisa" },
          { name: "गायत्री चालीसा", slug: "gayatri-chalisa" },
          { name: "सूर्य चालीसा", slug: "surya-chalisa", note: "Especially after sunrise" },
          { name: "राम चालीसा", slug: "ram-chalisa" },
        ],
      },
      {
        category: "Aartis",
        heading: "Aartis",
        entries: [
          { name: "जय गणेश देवा", slug: "ganesh-aarti" },
          { name: "ॐ जय शिव ओंकारा" },
          { name: "ॐ जय जगदीश हरे", slug: "om-jai-jagdish-aarti" },
          { name: "सूर्य देव की आरती" },
        ],
      },
    ],
  },
  evening: {
    id: "evening",
    title: "Evening Devotion",
    hindiName: "सायंकाल",
    icon: "🌙",
    tagline: "Evening worship is traditionally associated with gratitude, protection, and peace.",
    metaDescription:
      "Evening devotional collection — Hanuman Chalisa, Durga Chalisa, evening mantras and aartis.",
    sections: [
      {
        category: "Mantras",
        heading: "Mantras",
        entries: [
          { name: "ॐ हं हनुमते नमः", slug: "hanuman-mantra" },
          { name: "श्री राम जय राम जय जय राम" },
          { name: "हरे कृष्ण महामंत्र" },
          { name: "ॐ श्रीं महालक्ष्म्यै नमः" },
          { name: "ॐ नमः शिवाय" },
        ],
      },
      {
        category: "Chalisa",
        heading: "Chalisas",
        entries: [
          { name: "हनुमान चालीसा", slug: "hanuman-chalisa", note: "Very popular in the evening" },
          { name: "दुर्गा चालीसा", slug: "durga-chalisa" },
          { name: "लक्ष्मी चालीसा", slug: "lakshmi-chalisa", note: "Especially on Fridays" },
          { name: "शनि चालीसा", slug: "shani-chalisa", note: "Especially on Saturdays" },
        ],
      },
      {
        category: "Aartis",
        heading: "Aartis",
        entries: [
          { name: "हनुमान जी की आरती", slug: "hanuman-aarti" },
          { name: "जय अम्बे गौरी" },
          { name: "माँ लक्ष्मी जी की आरती" },
          { name: "शनि देव की आरती", note: "Saturday" },
          { name: "साईं बाबा की आरती", note: "Often performed in the evening" },
        ],
      },
    ],
  },
};

// Resolve curated entries ({ name, slug?, note? }) against the actual content
// of a category: entries gain { icon, link, exists, titleEn? }. Entries whose
// slug has imported content link to the detail page; the rest link to the
// category list until their content is added. Shared with dailyReading.js.
export function resolveEntries(category, entries) {
  const route = CATEGORIES[category].route;
  const items = getItems(category);
  return entries.map((entry) => {
    const item = entry.slug ? items.find((i) => i.slug === entry.slug) : null;
    if (item) {
      return {
        ...entry,
        icon: item.icon,
        titleEn: item.titleEn,
        link: `/${route}/${item.slug}`,
        exists: true,
      };
    }
    return {
      ...entry,
      icon: CATEGORIES[category].icon,
      link: `/${route}`,
      exists: false,
    };
  });
}

// Collection with every entry resolved against the actual content.
export function getTimeCollection(id) {
  const col = COLLECTIONS[id];
  if (!col) return null;
  return {
    ...col,
    sections: col.sections.map((section) => ({
      ...section,
      entries: resolveEntries(section.category, section.entries),
    })),
  };
}
