// Static content for the sidebar category pages (currently only Festivals).
// These pages are intentionally static for now and are not backed by the API.
// The devotional content categories (Chalisa, Mantras, Aartis, Temples, ...)
// live in src/i18n/content.js instead.

const categoryContent = {
  festivals: {
    title: "Festivals",
    icon: "📅",
    tagline: "Celebrations of faith, light and divine grace through the year",
    metaLabel: "Celebrated In",
    items: [
      {
        title: "Hanuman Jayanti",
        description: "The birth anniversary of Lord Hanuman, celebrated with Chalisa recitations and processions.",
        meta: "Chaitra Purnima (March–April)",
        icon: "🐒"
      },
      {
        title: "Diwali",
        description: "The festival of lights celebrating the return of Lord Rama to Ayodhya and the victory of light over darkness.",
        meta: "Kartik Amavasya (October–November)",
        icon: "🪔"
      },
      {
        title: "Ram Navami",
        description: "The birth of Lord Rama, celebrated with fasting, bhajans and readings of the Ramayana.",
        meta: "Chaitra Shukla Navami (March–April)",
        icon: "🏹"
      },
      {
        title: "Maha Shivratri",
        description: "The great night of Shiva, observed with night-long vigils, fasting and abhishekam.",
        meta: "Phalguna Krishna Chaturdashi (February–March)",
        icon: "🔱"
      },
      {
        title: "Janmashtami",
        description: "The birth of Lord Krishna, celebrated at midnight with bhajans, fasting and dahi-handi.",
        meta: "Bhadrapada Krishna Ashtami (August–September)",
        icon: "🪈"
      },
      {
        title: "Navratri",
        description: "Nine nights of worship dedicated to the nine forms of Goddess Durga.",
        meta: "Ashwin Shukla Pratipada (September–October)",
        icon: "🗡️"
      }
    ],
    about: {
      heading: "Why do we celebrate festivals?",
      paragraphs: [
        "Hindu festivals mark divine events — the birth of an avatar, the victory of good over evil, or the change of seasons. They bring families and communities together in shared devotion and joy.",
        "Each festival carries its own rituals, fasts, prayers and stories, keeping ancient traditions alive from generation to generation."
      ],
      highlights: [
        { icon: "🪔", title: "Light & Joy", text: "Festivals fill homes with lamps, colours, music and festive food." },
        { icon: "👨‍👩‍👧‍👦", title: "Community", text: "Celebrations bring families and neighbourhoods together in devotion." },
        { icon: "🔄", title: "Living Tradition", text: "Rituals and stories are passed down through generations each year." }
      ]
    }
  }
};

export default categoryContent;
