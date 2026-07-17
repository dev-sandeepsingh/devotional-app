import { getItems, CATEGORIES } from "../i18n/content";

// Weekday devotion schedule for the Home "Today's Featured" section: one
// Chalisa, one Mantra, one Aarti per day, following traditional weekday
// worship. Each entry is a content slug plus a fallback title — when the
// item exists in src/i18n it links to its detail page; otherwise the card
// shows the fallback title and links to the category list, and it upgrades
// automatically once that item's content is imported.
// Indexed by Date.getDay(): 0 = Sunday … 6 = Saturday.
const SCHEDULE = [
  {
    deity: "Surya Dev",
    Chalisa: { slug: "surya-chalisa", fallback: "Surya Chalisa" },
    Mantras: { slug: "gayatri-mantra", fallback: "Surya & Gayatri Mantras" },
    Aartis: { slug: "surya-aarti", fallback: "Surya Aarti" },
  },
  {
    deity: "Lord Shiva",
    Chalisa: { slug: "shiv-chalisa", fallback: "Shiv Chalisa" },
    Mantras: { slug: "mahamrityunjaya-mantra", fallback: "Shiv Mantras" },
    Aartis: { slug: "shiv-aarti", fallback: "Shiv Aarti" },
  },
  {
    deity: "Lord Hanuman",
    Chalisa: { slug: "hanuman-chalisa", fallback: "Hanuman Chalisa" },
    Mantras: { slug: "hanuman-mantra", fallback: "Hanuman & Ram Mantras" },
    Aartis: { slug: "hanuman-aarti", fallback: "Hanuman Aarti" },
  },
  {
    deity: "Lord Ganesh",
    Chalisa: { slug: "ganesh-chalisa", fallback: "Ganesh Chalisa" },
    Mantras: { slug: "ganesh-mantra", fallback: "Ganesh Mantras" },
    Aartis: { slug: "ganesh-aarti", fallback: "Ganesh Aarti" },
  },
  {
    deity: "Lord Vishnu",
    Chalisa: { slug: "vishnu-chalisa", fallback: "Vishnu Chalisa" },
    Mantras: { slug: "vishnu-mantra", fallback: "Vishnu & Guru Mantras" },
    Aartis: { slug: "om-jai-jagdish-aarti", fallback: "Om Jai Jagdish Aarti" },
  },
  {
    deity: "Maa Lakshmi & Maa Durga",
    Chalisa: { slug: "lakshmi-chalisa", fallback: "Lakshmi Chalisa" },
    Mantras: { slug: "lakshmi-mantra", fallback: "Lakshmi & Durga Mantras" },
    Aartis: { slug: "lakshmi-aarti", fallback: "Lakshmi Aarti" },
  },
  {
    deity: "Shani Dev & Lord Hanuman",
    Chalisa: { slug: "shani-chalisa", fallback: "Shani Chalisa" },
    Mantras: { slug: "hanuman-mantra", fallback: "Shani & Hanuman Mantras" },
    Aartis: { slug: "hanuman-aarti", fallback: "Hanuman Aarti" },
  },
];

const CATEGORY_LABEL = { Chalisa: "Chalisa", Mantras: "Mantra", Aartis: "Aarti" };

// The three featured cards for the given date:
// [{ key, label, icon, titleHi, titleEn, link, exists }]
export function getTodaysFeatured(date = new Date()) {
  const spec = SCHEDULE[date.getDay()];
  return ["Chalisa", "Mantras", "Aartis"].map((category) => {
    const { slug, fallback } = spec[category];
    const route = CATEGORIES[category].route;
    const item = getItems(category).find((i) => i.slug === slug);
    if (item) {
      return {
        key: category,
        label: CATEGORY_LABEL[category],
        icon: item.icon,
        titleHi: item.titleHi,
        titleEn: item.titleEn,
        link: `/${route}/${item.slug}`,
        exists: true,
      };
    }
    return {
      key: category,
      label: CATEGORY_LABEL[category],
      icon: CATEGORIES[category].icon,
      titleHi: "",
      titleEn: fallback,
      link: `/${route}`,
      exists: false,
    };
  });
}

// e.g. { dayName: "Friday", deity: "Maa Lakshmi & Maa Durga" }
export function getTodayInfo(date = new Date()) {
  return {
    dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
    deity: SCHEDULE[date.getDay()].deity,
  };
}
