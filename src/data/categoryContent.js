// Static content for the sidebar category pages (Stotras, Ashtakams, etc.).
// These pages are intentionally static for now and are not backed by the API.

const categoryContent = {
  stotras: {
    title: "Stotras",
    icon: "📜",
    tagline: "Sacred hymns of praise composed in honour of the divine",
    metaLabel: "Dedicated To",
    items: [
      {
        title: "Sankat Mochan Hanuman Stotra",
        description: "A powerful hymn seeking Lord Hanuman's help in removing obstacles and troubles from life.",
        meta: "Lord Hanuman",
        icon: "🐒"
      },
      {
        title: "Shiva Tandava Stotram",
        description: "Ravana's magnificent composition describing the cosmic dance and glory of Lord Shiva.",
        meta: "Lord Shiva",
        icon: "🔱"
      },
      {
        title: "Vishnu Stotram",
        description: "A devotional hymn glorifying Lord Vishnu, the preserver of the universe.",
        meta: "Lord Vishnu",
        icon: "🪷"
      },
      {
        title: "Mahalakshmi Stotram",
        description: "A sacred hymn invoking Goddess Lakshmi for prosperity, wealth and well-being.",
        meta: "Goddess Lakshmi",
        icon: "🌺"
      },
      {
        title: "Ganesha Pancharatnam",
        description: "Adi Shankaracharya's five-jewelled hymn in praise of Lord Ganesha, remover of obstacles.",
        meta: "Lord Ganesha",
        icon: "🐘"
      },
      {
        title: "Durga Stotram",
        description: "A hymn celebrating the fierce and protective form of Goddess Durga.",
        meta: "Goddess Durga",
        icon: "🗡️"
      }
    ],
    about: {
      heading: "What is a Stotra?",
      paragraphs: [
        "A Stotra is a Sanskrit hymn of praise addressed to a deity. Stotras are lyrical compositions meant to be sung or recited aloud, expressing devotion, gratitude and surrender.",
        "Reciting stotras regularly is believed to purify the mind, remove obstacles and invoke the blessings of the deity being praised."
      ],
      highlights: [
        { icon: "🎼", title: "Lyrical Devotion", text: "Stotras are poetic compositions meant for melodious recitation and singing." },
        { icon: "🧘", title: "Focus & Peace", text: "Regular recitation calms the mind and deepens concentration in worship." },
        { icon: "🙏", title: "Divine Blessings", text: "Each stotra invokes the grace and protection of a specific deity." }
      ]
    }
  },

  ashtakams: {
    title: "Ashtakams",
    icon: "🙏",
    tagline: "Eight-versed hymns capturing the essence of divine glory",
    metaLabel: "Dedicated To",
    items: [
      {
        title: "Lingashtakam",
        description: "Eight verses in praise of the Shiva Linga, chanted for peace and liberation.",
        meta: "Lord Shiva",
        icon: "🔱"
      },
      {
        title: "Bilvashtakam",
        description: "A hymn glorifying the sacred bilva leaf offered to Lord Shiva during worship.",
        meta: "Lord Shiva",
        icon: "🍃"
      },
      {
        title: "Rudrashtakam",
        description: "Tulsidas's profound eight verses describing the formless and infinite Lord Shiva.",
        meta: "Lord Shiva",
        icon: "🌙"
      },
      {
        title: "Madhurashtakam",
        description: "Vallabhacharya's sweet composition describing everything about Lord Krishna as madhur (sweet).",
        meta: "Lord Krishna",
        icon: "🪈"
      },
      {
        title: "Achyutashtakam",
        description: "Eight verses celebrating the names and deeds of Lord Vishnu as Achyuta, the infallible.",
        meta: "Lord Vishnu",
        icon: "🪷"
      },
      {
        title: "Kalabhairava Ashtakam",
        description: "Adi Shankaracharya's hymn to Kalabhairava, the fierce guardian form of Shiva in Kashi.",
        meta: "Kalabhairava",
        icon: "🕉️"
      }
    ],
    about: {
      heading: "What is an Ashtakam?",
      paragraphs: [
        "An Ashtakam is a devotional hymn composed of eight stanzas (ashta means eight in Sanskrit). Each verse distils an aspect of the deity's glory into a compact, rhythmic form.",
        "Because of their short length and beautiful meter, ashtakams are among the most widely memorised and recited hymns in daily worship."
      ],
      highlights: [
        { icon: "8️⃣", title: "Eight Verses", text: "The structure of eight stanzas makes ashtakams easy to memorise and recite daily." },
        { icon: "🎵", title: "Rhythmic Meter", text: "Composed in melodious Sanskrit meters that are a joy to chant aloud." },
        { icon: "✨", title: "Concentrated Praise", text: "Each ashtakam captures the complete essence of a deity in just eight verses." }
      ]
    }
  },

  sahasranamas: {
    title: "Sahasranamas",
    icon: "📚",
    tagline: "The thousand sacred names of the divine",
    metaLabel: "Dedicated To",
    items: [
      {
        title: "Vishnu Sahasranama",
        description: "The thousand names of Lord Vishnu from the Mahabharata, narrated by Bhishma to Yudhishthira.",
        meta: "Lord Vishnu",
        icon: "🪷"
      },
      {
        title: "Lalita Sahasranama",
        description: "The thousand names of Goddess Lalita Tripurasundari from the Brahmanda Purana.",
        meta: "Goddess Lalita",
        icon: "🌺"
      },
      {
        title: "Shiva Sahasranama",
        description: "A thousand names glorifying Lord Shiva, found in the Mahabharata and several Puranas.",
        meta: "Lord Shiva",
        icon: "🔱"
      },
      {
        title: "Hanuman Sahasranama",
        description: "The thousand names of Lord Hanuman, celebrating his strength, devotion and wisdom.",
        meta: "Lord Hanuman",
        icon: "🐒"
      },
      {
        title: "Ganesha Sahasranama",
        description: "A thousand names of Lord Ganesha from the Ganesha Purana, recited for new beginnings.",
        meta: "Lord Ganesha",
        icon: "🐘"
      },
      {
        title: "Lakshmi Sahasranama",
        description: "The thousand names of Goddess Lakshmi, invoked for prosperity and abundance.",
        meta: "Goddess Lakshmi",
        icon: "💰"
      }
    ],
    about: {
      heading: "What is a Sahasranama?",
      paragraphs: [
        "A Sahasranama is a litany of a thousand names (sahasra = thousand, nama = name) of a deity. Each name describes a quality, deed or aspect of the divine.",
        "Chanting a sahasranama is considered a complete form of worship — meditating on a thousand facets of the deity brings deep peace and spiritual merit."
      ],
      highlights: [
        { icon: "🔢", title: "Thousand Names", text: "Each name is a meditation on one divine quality, deed or form." },
        { icon: "📖", title: "Scriptural Roots", text: "Sahasranamas come from the Mahabharata, Puranas and other sacred texts." },
        { icon: "🧘", title: "Complete Worship", text: "Reciting all thousand names is regarded as a full act of devotion in itself." }
      ]
    }
  },

  "vrat-kathas": {
    title: "Vrat Kathas",
    icon: "🕉️",
    tagline: "Sacred stories recited during fasts and religious observances",
    metaLabel: "Observed On",
    items: [
      {
        title: "Satyanarayan Vrat Katha",
        description: "The story of Lord Satyanarayan's worship, recited during the full-moon puja for prosperity.",
        meta: "Purnima (full moon day)",
        icon: "🌕"
      },
      {
        title: "Mangalvar Vrat Katha",
        description: "The Tuesday fast story dedicated to Lord Hanuman, observed for strength and protection.",
        meta: "Tuesdays",
        icon: "🐒"
      },
      {
        title: "Ekadashi Vrat Katha",
        description: "Stories of the sacred eleventh day, when devotees fast in devotion to Lord Vishnu.",
        meta: "11th day of each lunar fortnight",
        icon: "🪷"
      },
      {
        title: "Karva Chauth Vrat Katha",
        description: "The beloved story recited by married women fasting for the long life of their husbands.",
        meta: "Kartik Krishna Chaturthi",
        icon: "🌙"
      },
      {
        title: "Santoshi Mata Vrat Katha",
        description: "The story of Goddess Santoshi's sixteen-Friday fast that fulfils heartfelt wishes.",
        meta: "16 consecutive Fridays",
        icon: "🌺"
      },
      {
        title: "Pradosh Vrat Katha",
        description: "The twilight fast story dedicated to Lord Shiva, observed for the removal of sins.",
        meta: "13th day of each lunar fortnight",
        icon: "🔱"
      }
    ],
    about: {
      heading: "What is a Vrat Katha?",
      paragraphs: [
        "A Vrat Katha is the traditional story recited at the conclusion of a vrat (religious fast). Hearing the katha is considered an essential part of the observance — the fast is complete only when the story has been heard with devotion.",
        "Each katha narrates how the deity blessed a devotee who kept the fast faithfully, reinforcing the values of faith, patience and devotion."
      ],
      highlights: [
        { icon: "🍽️", title: "Fasting & Faith", text: "Vrats combine physical discipline with spiritual devotion." },
        { icon: "📖", title: "Story Tradition", text: "The katha is recited or heard at the end of the fast to complete the observance." },
        { icon: "🙏", title: "Wish Fulfilment", text: "Each vrat is observed with a specific prayer — health, prosperity or family well-being." }
      ]
    }
  },

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
