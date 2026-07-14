// Static content for the sidebar category pages (Festivals, Temples).
// These pages are intentionally static for now and are not backed by the API.
// The devotional content categories (Chalisa, Mantras, Aartis, Stotras, ...)
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
  },

  temples: {
    title: "Temples",
    icon: "🛕",
    tagline: "Sacred abodes of the divine across India",
    metaLabel: "Location",
    items: [
      {
        title: "Salasar Balaji Temple",
        description: "One of the most revered Hanuman temples, famous for its idol of Hanuman with a beard and moustache.",
        meta: "Salasar, Rajasthan",
        icon: "🐒"
      },
      {
        title: "Mehandipur Balaji Temple",
        description: "A renowned temple of Lord Hanuman known for its powerful spiritual atmosphere and healing traditions.",
        meta: "Dausa, Rajasthan",
        icon: "🛕"
      },
      {
        title: "Hanuman Garhi",
        description: "A historic fortress-temple of Lord Hanuman guarding the holy city of Ayodhya.",
        meta: "Ayodhya, Uttar Pradesh",
        icon: "🏰"
      },
      {
        title: "Sankat Mochan Hanuman Temple",
        description: "Founded by Tulsidas on the banks of the Assi river, where troubles are believed to be relieved.",
        meta: "Varanasi, Uttar Pradesh",
        icon: "🌊"
      },
      {
        title: "Jakhoo Temple",
        description: "An ancient hilltop Hanuman temple with a 108-foot statue overlooking Shimla.",
        meta: "Shimla, Himachal Pradesh",
        icon: "⛰️"
      },
      {
        title: "Namakkal Anjaneyar Temple",
        description: "Home to an 18-foot rock-carved Hanuman standing under the open sky, facing Lord Narasimha.",
        meta: "Namakkal, Tamil Nadu",
        icon: "🗿"
      }
    ],
    about: {
      heading: "Why visit temples?",
      paragraphs: [
        "Temples are consecrated spaces where the divine presence is invoked and worshipped daily. Their architecture, rituals and atmosphere are designed to turn the mind inward, toward devotion.",
        "Pilgrimage to sacred temples has been a cherished tradition for centuries — each temple carries its own history, legends and unique blessings."
      ],
      highlights: [
        { icon: "🏛️", title: "Sacred Architecture", text: "Temple design channels attention toward the sanctum and the deity within." },
        { icon: "🚶", title: "Pilgrimage", text: "Journeying to a temple is itself an act of devotion and self-discipline." },
        { icon: "🔔", title: "Daily Rituals", text: "Aartis, abhishekams and offerings keep the divine presence alive every day." }
      ]
    }
  }
};

export default categoryContent;
