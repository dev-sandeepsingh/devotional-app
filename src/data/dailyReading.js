import { CATEGORIES } from "../i18n/content";
import { resolveEntries } from "./timeCollections";

// "Best for Daily Reading" ranked lists for the Home page — traditional
// any-time-of-day recommendations. Entries with a slug link straight to their
// detail page once the content exists (see resolveEntries).
const LISTS = [
  {
    category: "Mantras",
    heading: "Top Daily Mantras",
    icon: "✨",
    entries: [
      { name: "गायत्री मंत्र", slug: "gayatri-mantra" },
      { name: "महामृत्युंजय मंत्र", slug: "mahamrityunjaya-mantra" },
      { name: "ॐ नमः शिवाय" },
      { name: "ॐ नमो नारायणाय" },
      { name: "हरे कृष्ण महामंत्र" },
      { name: "श्री राम जय राम जय जय राम" },
      { name: "ॐ गं गणपतये नमः" },
      { name: "ॐ श्रीं महालक्ष्म्यै नमः" },
      { name: "ॐ हं हनुमते नमः", slug: "hanuman-mantra" },
      { name: "ॐ ऐं सरस्वत्यै नमः" },
    ],
  },
  {
    category: "Chalisa",
    heading: "Top Daily Chalisas",
    icon: "📿",
    entries: [
      { name: "हनुमान चालीसा", slug: "hanuman-chalisa" },
      { name: "शिव चालीसा", slug: "shiv-chalisa" },
      { name: "गणेश चालीसा", slug: "ganesh-chalisa" },
      { name: "दुर्गा चालीसा", slug: "durga-chalisa" },
      { name: "लक्ष्मी चालीसा", slug: "lakshmi-chalisa" },
      { name: "राम चालीसा", slug: "ram-chalisa" },
      { name: "कृष्ण चालीसा", slug: "krishna-chalisa" },
      { name: "गायत्री चालीसा", slug: "gayatri-chalisa" },
      { name: "साईं चालीसा", slug: "saibaba-chalisa" },
      { name: "विष्णु चालीसा", slug: "vishnu-chalisa" },
    ],
  },
  {
    category: "Aartis",
    heading: "Top Daily Aartis",
    icon: "🪔",
    entries: [
      { name: "ॐ जय जगदीश हरे", slug: "om-jai-jagdish-aarti" },
      { name: "जय गणेश देवा", slug: "ganesh-aarti" },
      { name: "ॐ जय शिव ओंकारा" },
      { name: "जय अम्बे गौरी" },
      { name: "हनुमान जी की आरती", slug: "hanuman-aarti" },
      { name: "आरती कुंज बिहारी की" },
      { name: "श्री रामचंद्र जी की आरती" },
      { name: "साईं बाबा की आरती" },
      { name: "माँ लक्ष्मी जी की आरती" },
    ],
  },
];

// [{ category, heading, icon, route, entries: resolved }]
export function getDailyReading() {
  return LISTS.map((list) => ({
    ...list,
    route: CATEGORIES[list.category].route,
    entries: resolveEntries(list.category, list.entries),
  }));
}
