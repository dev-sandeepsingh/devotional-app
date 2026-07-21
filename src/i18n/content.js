// Per-item devotional content registry.
//
// Content lives one folder per item, each with an en.json + hi.json (see
// src/i18n/Chalisa/hanuman-chalisa/*). Adding a new item is just adding a folder
// (and, optionally, an icon in ITEM_ICONS below) — it is auto-discovered here.
//
// Each item JSON has the shape:
//   { title, intro, description, meaning, faq: { q1, a1, q2, a2 } }
// `meaning` and `faq` are optional — Aartis have neither (only title/intro/
// description); Temples have faq but no meaning. DetailPage hides those
// sections when the fields are absent.

// Eagerly import every <Category>/<slug>/<lang>.json under this folder.
const modules = import.meta.glob("./{Chalisa,Mantras,Aartis,Stotras,Ashtakams,Sahasranamas,VratKathas,Temples,Festivals}/*/*.json", { eager: true });

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
    metaDescription: "Read and recite Aartis of all major deities in Hindi and English.",
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
  Temples: {
    route: "temples",
    heading: "🛕 Temples",
    subtitle: "Sacred temples of India — history, significance and pilgrimage guide",
    icon: "🛕",
    metaTitle: "Famous Temples of India | Devotional",
    metaDescription: "Explore India's most sacred temples — history, significance, timings and pilgrimage information in Hindi and English.",
    // Temple descriptions are structured travel-guide prose, not verses —
    // DetailPage renders them left-aligned instead of centered verse text.
    longform: true,
    about: {
      heading: "Why visit temples?",
      paragraphs: [
        "Temples are consecrated spaces where the divine presence is invoked and worshipped daily. Their architecture, rituals and atmosphere are designed to turn the mind inward, toward devotion.",
        "Pilgrimage to sacred temples has been a cherished tradition for centuries — each temple carries its own history, legends and unique blessings.",
      ],
      highlights: [
        { icon: "🏛️", title: "Sacred Architecture", text: "Temple design channels attention toward the sanctum and the deity within." },
        { icon: "🚶", title: "Pilgrimage", text: "Journeying to a temple is itself an act of devotion and self-discipline." },
        { icon: "🔔", title: "Daily Rituals", text: "Aartis, abhishekams and offerings keep the divine presence alive every day." },
      ],
    },
  },
  Festivals: {
    route: "festivals",
    heading: "📅 Festivals",
    subtitle: "Celebrations of faith, light and divine grace through the year",
    icon: "📅",
    metaTitle: "Hindu Festivals | Devotional",
    metaDescription: "Explore major Hindu festivals — their significance, rituals, stories and dates in Hindi and English.",
    // Festival descriptions are structured prose (significance, rituals, puja
    // vidhi), not verses — DetailPage renders them left-aligned.
    longform: true,
    about: {
      heading: "Why do we celebrate festivals?",
      paragraphs: [
        "Hindu festivals mark divine events — the birth of an avatar, the victory of good over evil, or the change of seasons. They bring families and communities together in shared devotion and joy.",
        "Each festival carries its own rituals, fasts, prayers and stories, keeping ancient traditions alive from generation to generation.",
      ],
      highlights: [
        { icon: "🪔", title: "Light & Joy", text: "Festivals fill homes with lamps, colours, music and festive food." },
        { icon: "👨‍👩‍👧‍👦", title: "Community", text: "Celebrations bring families and neighbourhoods together in devotion." },
        { icon: "🔄", title: "Living Tradition", text: "Rituals and stories are passed down through generations each year." },
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
  "Chalisa/kali-chalisa": "🗡️",
  "Chalisa/santoshi-chalisa": "🌼",
  "Chalisa/khatu-shyam-chalisa": "🎯",
  "Chalisa/ganga-chalisa": "🌊",
  "Chalisa/parvati-chalisa": "⛰️",
  "Chalisa/tulsi-chalisa": "🌿",
  "Chalisa/annapurna-chalisa": "🍚",
  "Chalisa/kartikeya-chalisa": "🦚",
  "Chalisa/brahma-chalisa": "📖",
  "Chalisa/bhairav-chalisa": "🐕",
  "Chalisa/surya-chalisa": "☀️",
  "Chalisa/balaji-chalisa": "🛕",
  "Chalisa/chamunda-chalisa": "🔥",
  "Chalisa/banglamukhi-chalisa": "💛",
  "Chalisa/yamuna-chalisa": "💧",
  "Chalisa/vindhyeshwari-chalisa": "🏔️",
  "Chalisa/ravidas-chalisa": "👣",
  "Chalisa/mahakali-chalisa": "🌑",
  "Chalisa/narmada-chalisa": "🏞️",
  "Chalisa/navgrah-chalisa": "🌌",
  "Chalisa/guru-chalisa": "🧘",
  "Chalisa/parshuram-chalisa": "🪓",
  "Chalisa/tuljabhavani-chalisa": "⚔️",
  "Chalisa/ahoi-chalisa": "🌟",
  "Chalisa/chitragupta-chalisa": "📜",
  "Chalisa/kuber-chalisa": "🪙",
  "Chalisa/rahu-chalisa": "🐍",
  "Chalisa/ketu-chalisa": "☄️",
  "Chalisa/mangal-chalisa": "🔴",
  "Chalisa/budh-chalisa": "🟢",
  "Chalisa/chandra-chalisa": "🌙",
  "Chalisa/brihaspati-chalisa": "⭐",
  "Chalisa/shukra-chalisa": "💎",
  "Chalisa/shailaputri-chalisa": "🐂",
  "Chalisa/brahmacharini-chalisa": "🪔",
  "Chalisa/chandraghanta-chalisa": "🔔",
  "Chalisa/kushmanda-chalisa": "🌞",
  "Chalisa/skandamata-chalisa": "👶",
  "Chalisa/katyayani-chalisa": "🌺",
  "Chalisa/kalaratri-chalisa": "🌚",
  "Chalisa/mahagauri-chalisa": "🤍",
  "Chalisa/siddhidatri-chalisa": "✨",
  "Chalisa/sheetla-chalisa": "❄️",
  "Mantras/hanuman-mantra": "✨",
  "Mantras/gayatri-mantra": "🌅",
  "Mantras/mahamrityunjaya-mantra": "🕉️",
  "Mantras/shiv-mantra": "🔱",
  "Mantras/ram-mantra": "🏹",
  "Mantras/hare-krishna-mahamantra": "📿",
  "Mantras/ganesh-mantra": "🐘",
  "Mantras/mahalakshmi-mantra": "🪷",
  "Mantras/durga-mantra": "🦁",
  "Mantras/saraswati-mantra": "🦢",
  "Mantras/vishnu-mantra": "🐚",
  "Mantras/narayana-mantra": "🌊",
  "Mantras/surya-mantra": "🌞",
  "Mantras/navgrah-mantra": "🌌",
  "Mantras/shani-dev-mantra": "🪐",
  "Mantras/rahu-mantra": "🌑",
  "Mantras/ketu-mantra": "☄️",
  "Mantras/kuber-mantra": "💰",
  "Mantras/dattatreya-mantra": "🐄",
  "Mantras/narasimha-mantra": "🦁",
  "Mantras/radha-krishna-mantra": "🦚",
  "Mantras/tulsi-mantra": "🌿",
  "Mantras/guru-mantra": "🙏",
  "Mantras/maa-shailputri-mantra": "🏔️",
  "Mantras/maa-brahmacharini-mantra": "🪔",
  "Mantras/maa-chandraghanta-mantra": "🔔",
  "Mantras/maa-kushmanda-mantra": "🌞",
  "Mantras/maa-skandamata-mantra": "👶",
  "Mantras/maa-katyayani-mantra": "🌺",
  "Mantras/maa-kalratri-mantra": "🌚",
  "Mantras/maa-mahagauri-mantra": "🤍",
  "Mantras/maa-siddhidatri-mantra": "✨",
  "Mantras/kali-mantra": "🗡️",
  "Mantras/shanti-mantra": "🕊️",
  "Mantras/annapurna-mantra": "🍚",
  "Mantras/kaal-bhairav-mantra": "🐕",
  "Mantras/purnamadah-mantra": "🕉️",
  "Mantras/aapadam-apahartaram-mantra": "🛡️",
  "Mantras/devi-mantra": "🌺",
  "Mantras/sarva-mangal-mangalye-mantra": "🌸",
  "Aartis/shiv-ji-ki-aarti": "🔱",
  "Aartis/ganesh-ji-ki-aarti": "🐘",
  "Aartis/shri-vishnu-bhagwan-ki-aarti": "🐚",
  "Aartis/hanuman-ji-ki-aarti": "🚩",
  "Aartis/durga-mata-ki-aarti": "🦁",
  "Aartis/shri-lakshmi-mata-ki-aarti": "🪷",
  "Aartis/shri-krishna-ji-ki-aarti": "🦚",
  "Aartis/shri-saraswati-mata-ki-aarti": "🦢",
  "Aartis/sai-baba-ki-aarti": "🙏",
  "Aartis/shri-shani-dev-ki-aarti": "🪐",
  "Aartis/santoshi-mata-ki-aarti": "🌼",
  "Aartis/satyanarayan-bhagwan-ki-aarti": "🌕",
  "Aartis/khatu-shyam-ji-ki-aarti": "🎯",
  "Aartis/gayatri-mata-ki-aarti": "🌅",
  "Aartis/vaishnavi-mata-ki-aarti": "⛰️",
  "Aartis/banke-bihari-ji-ki-aarti": "🪈",
  "Aartis/gange-mata-ki-aarti": "🌊",
  "Aartis/ambe-mata-ki-aarti": "🕉️",
  "Aartis/radha-rani-ji-ki-aarti": "🌸",
  "Aartis/annapurna-mata-ji-ki-aarti": "🍚",
  "Aartis/tulsi-mata-ki-aarti": "🌿",
  "Aartis/bhairav-baba-ki-aarti": "🐕",
  "Aartis/surya-dev-ki-aarti": "☀️",
  "Aartis/jagannath-ji-ki-aarti": "🛕",
  "Aartis/salasar-balaji-ki-aarti": "🪔",
  "Aartis/navgrah-aarti": "🌌",
  "Aartis/yamuna-mata-ki-aarti": "💧",
  "Aartis/shailputri-mata-ki-aarti": "🐂",
  "Aartis/brahmacharini-mata-ki-aarti": "🪔",
  "Aartis/chandraghanta-mata-ki-aarti": "🔔",
  "Aartis/kushmanda-mata-ki-aarti": "🌞",
  "Aartis/skandamata-ki-aarti": "👶",
  "Aartis/katyayani-mata-ki-aarti": "🌺",
  "Aartis/kaalratri-mata-ki-aarti": "🌚",
  "Aartis/mahagauri-mata-ki-aarti": "🤍",
  "Aartis/siddhidatri-mata-ki-aarti": "✨",
  "Aartis/chintpurni-mata-ki-aarti": "🏔️",
  "Aartis/baglamukhi-mata-ki-aarti": "💛",
  "Aartis/naina-devi-mata-ki-aarti": "👁️",
  "Aartis/karni-mata-ki-aarti": "🐀",
  "Aartis/kamakhya-mata-ki-aarti": "🌺",
  "Temples/ram-janmabhoomi-mandir-ayodhya": "🏹",
  "Temples/kashi-vishwanath-temple-varanasi": "🔱",
  "Temples/tirumala-venkateswara-temple-tirupati": "🪷",
  "Temples/vaishno-devi-temple-katra": "⛰️",
  "Temples/kedarnath-temple": "🏔️",
  "Temples/badrinath-temple": "🛕",
  "Temples/somnath-temple": "🌊",
  "Temples/mahakaleshwar-jyotirlinga-ujjain": "🔥",
  "Temples/omkareshwar-jyotirlinga-temple": "🕉️",
  "Temples/jagannath-temple-puri": "🛞",
  "Temples/dwarkadhish-temple-dwarka": "🐚",
  "Temples/ramanathaswamy-temple-rameswaram": "🌉",
  "Temples/meenakshi-amman-temple-madurai": "🐟",
  "Temples/siddhivinayak-temple-mumbai": "🐘",
  "Temples/banke-bihari-temple-vrindavan": "🪈",
  "Temples/salasar-balaji-temple": "🚩",
  "Temples/mehandipur-balaji-temple": "🛡️",
  "Temples/kamakhya-temple-guwahati": "🌺",
  "Temples/jwala-ji-temple": "🕯️",
  "Temples/chintpurni-temple": "🌸",
  "Temples/naina-devi-temple": "👁️",
  "Temples/shirdi-sai-baba-temple": "🙏",
  "Temples/khatu-shyam-ji-temple": "🎯",
  "Temples/prem-mandir-vrindavan": "💗",
  "Temples/iskcon-krishna-balaram-temple": "🦚",
  "Stotras/devi-mahatmya-stotra": "👑",
  "Stotras/lakshmi-stotra": "💰",
  "Stotras/shiva-mahimna-stotram": "🔱",
  "Stotras/shiva-tandava-stotram": "🥁",
  "Stotras/lalita-sahasranama-stotram": "🌺",
  "Stotras/bajrang-baan": "🚩",
  "Stotras/vishnu-sahasranama-stotram": "🐚",
  "Stotras/sankatmochan-hanuman-ashtak": "🐒",
  "Stotras/ganapati-atharvashirsha": "🐘",
  "Stotras/narayana-kavacham": "🛡️",
  "Stotras/kanakadhara-stotram": "🪙",
  "Stotras/rama-raksha-stotram": "🏹",
  "Stotras/aditya-hridaya-stotram": "☀️",
  "Stotras/shri-devi-kavacham": "🗡️",
  "Stotras/shri-durga-saptashloki": "🦁",
  "Stotras/shri-bilvashtakam": "🍃",
  "Stotras/shri-lingashtakam": "🕉️",
  "Stotras/shri-rudrashtakam": "🔱",
  "Stotras/shri-nirvana-shatakam": "🧘",
  "Stotras/shri-kaal-bhairav-ashtakam": "🐕",
  "Stotras/shri-argala-stotram": "🌸",
  "Ashtakams/bhramarashtakam": "🧠",
  "Ashtakams/shankarashtakam": "⚡",
  "Sahasranamas/vishnu-sahasranama": "🛡️",
  "Sahasranamas/devi-sahasranama": "✨",
  "VratKathas/karva-chauth-vrat-katha": "💑",
  "VratKathas/teej-vrat-katha": "🌸",
  "VratKathas/santoshi-mata-vrat-katha-vidhi": "🌼",
  "VratKathas/satyanarayan-vrat-katha": "🌕",
  "VratKathas/vaibhav-lakshmi-vrat-katha": "🪷",
  "VratKathas/solah-somvar-vrat-katha": "🔱",
  "VratKathas/karwa-chauth-vrat-katha": "💑",
  "VratKathas/ekadashi-vrat-katha": "🐚",
  "VratKathas/sankashti-chaturthi-vrat-katha": "🐘",
  "VratKathas/pradosh-vrat-katha": "🕉️",
  "VratKathas/guruvar-vrat-katha": "🙏",
  "VratKathas/ahoi-ashtami-vrat-katha": "🌟",
  "VratKathas/maha-shivratri-vrat-katha": "🔱",
  "VratKathas/ganesh-chaturthi-vrat-katha": "🐘",
  "VratKathas/navratri-vrat-katha": "🦁",
  "VratKathas/hartalika-teej-vrat-katha": "🌸",
  "VratKathas/ganga-dussehra-vrat-katha": "🌊",
  "VratKathas/sakat-chauth-vrat-katha": "🌙",
  "VratKathas/shanivar-vrat-katha": "🪐",
  "VratKathas/sawan-vrat-katha": "🌧️",
  "Festivals/diwali": "🪔",
  "Festivals/holi": "🎨",
  "Festivals/navratri": "🗡️",
  "Festivals/karva-chauth": "💑",
  "Festivals/janmashtami": "🪈",
  "Festivals/maha-shivratri": "🔱",
  "Festivals/ganesh-chaturthi": "🐘",
  "Festivals/ram-navami": "🏹",
  "Festivals/raksha-bandhan": "🧵",
  "Festivals/makar-sankranti": "🪁",
  "Festivals/vasant-panchami": "📚",
  "Festivals/dussehra": "🎆",
  "Festivals/pongal": "🍚",
  "Festivals/onam": "🌼",
  "Festivals/ugadi": "🌿",
  "Festivals/vishu": "🌟",
  "Festivals/karthigai-deepam": "🕯️",
  "Festivals/thaipusam": "⚔️",
  "Festivals/varalakshmi-vratam": "🪷",
  "Festivals/hanuman-jayanti": "🐒",
  "Festivals/lohri": "🔥",
  "Festivals/durga-puja": "🦁",
  "Festivals/ratha-yatra": "🛞",
  "Festivals/baisakhi": "🌾",
  "Festivals/gudi-padwa": "🚩",
  "Festivals/kali-puja": "🌑",
  "Festivals/lakshmi-puja": "💰",
  "Festivals/saraswati-puja": "🦢",
  "Festivals/rongali-bihu": "🥁",
  "Festivals/chhath-puja": "☀️",
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
      // Separate scripts so cards can show Hindi prominently with English below.
      titleHi: group[slug].hi?.title || "",
      titleEn: group[slug].en?.title || "",
      // Short English intro for the card (falls back to Hindi).
      intro: group[slug].en?.intro || group[slug].hi?.intro || "",
    }));
}

// Optional named groups per category, rendered as sections on the list page.
// Slugs not listed in any group fall into the trailing catch-all group.
// Categories without an entry here render as a single ungrouped list.
const CATEGORY_GROUPS = {
  Chalisa: [
    {
      title: "Popular Chalisas",
      slugs: [
        "hanuman-chalisa", "shiv-chalisa", "ram-chalisa", "krishna-chalisa",
        "ganesh-chalisa", "durga-chalisa", "lakshmi-chalisa", "saraswati-chalisa",
        "vishnu-chalisa", "gayatri-chalisa", "radha-chalisa", "brahma-chalisa",
      ],
    },
    {
      title: "Navadurga — Nine Forms of Maa Durga",
      slugs: [
        "shailaputri-chalisa", "brahmacharini-chalisa", "chandraghanta-chalisa",
        "kushmanda-chalisa", "skandamata-chalisa", "katyayani-chalisa",
        "kalaratri-chalisa", "mahagauri-chalisa", "siddhidatri-chalisa",
      ],
    },
    {
      title: "Navagraha — Nine Planets",
      slugs: [
        "surya-chalisa", "chandra-chalisa", "mangal-chalisa", "budh-chalisa",
        "brihaspati-chalisa", "shukra-chalisa", "shani-chalisa",
        "rahu-chalisa", "ketu-chalisa", "navgrah-chalisa",
      ],
    },
    {
      title: "Devi Chalisas",
      slugs: [
        "kali-chalisa", "mahakali-chalisa", "santoshi-chalisa", "parvati-chalisa",
        "tulsi-chalisa", "annapurna-chalisa", "chamunda-chalisa",
        "banglamukhi-chalisa", "vindhyeshwari-chalisa", "tuljabhavani-chalisa",
        "ahoi-chalisa", "sheetla-chalisa",
      ],
    },
    {
      title: "Sacred Rivers",
      slugs: ["ganga-chalisa", "yamuna-chalisa", "narmada-chalisa"],
    },
    {
      title: "Deities & Saints",
      slugs: [
        "khatu-shyam-chalisa", "balaji-chalisa", "kartikeya-chalisa",
        "bhairav-chalisa", "kuber-chalisa", "chitragupta-chalisa",
        "parshuram-chalisa", "saibaba-chalisa", "ravidas-chalisa", "guru-chalisa",
      ],
    },
  ],
  Mantras: [
    {
      title: "Popular Mantras",
      slugs: [
        "gayatri-mantra", "mahamrityunjaya-mantra", "hanuman-mantra",
        "shiv-mantra", "ram-mantra", "hare-krishna-mahamantra",
        "ganesh-mantra", "mahalakshmi-mantra", "durga-mantra",
        "saraswati-mantra", "vishnu-mantra", "narayana-mantra",
      ],
    },
    {
      title: "Navadurga — Nine Forms of Maa Durga",
      slugs: [
        "maa-shailputri-mantra", "maa-brahmacharini-mantra", "maa-chandraghanta-mantra",
        "maa-kushmanda-mantra", "maa-skandamata-mantra", "maa-katyayani-mantra",
        "maa-kalratri-mantra", "maa-mahagauri-mantra", "maa-siddhidatri-mantra",
      ],
    },
    {
      title: "Navagraha — Nine Planets",
      slugs: [
        "surya-mantra", "shani-dev-mantra", "rahu-mantra",
        "ketu-mantra", "navgrah-mantra",
      ],
    },
    {
      title: "Devi Mantras",
      slugs: [
        "kali-mantra", "devi-mantra", "annapurna-mantra",
        "tulsi-mantra", "sarva-mangal-mangalye-mantra",
      ],
    },
    {
      title: "Deities & Divine Forms",
      slugs: [
        "narasimha-mantra", "dattatreya-mantra", "radha-krishna-mantra",
        "kuber-mantra", "kaal-bhairav-mantra",
      ],
    },
    {
      title: "Vedic & Peace Mantras",
      slugs: [
        "guru-mantra", "shanti-mantra", "purnamadah-mantra",
        "aapadam-apahartaram-mantra",
      ],
    },
  ],
  Aartis: [
    {
      title: "Popular Aartis",
      slugs: [
        "ganesh-ji-ki-aarti", "hanuman-ji-ki-aarti", "shiv-ji-ki-aarti",
        "durga-mata-ki-aarti", "shri-lakshmi-mata-ki-aarti", "shri-krishna-ji-ki-aarti",
        "shri-vishnu-bhagwan-ki-aarti", "shri-saraswati-mata-ki-aarti",
        "gayatri-mata-ki-aarti", "santoshi-mata-ki-aarti", "sai-baba-ki-aarti",
        "satyanarayan-bhagwan-ki-aarti",
      ],
    },
    {
      title: "Navadurga — Nine Forms of Maa Durga",
      slugs: [
        "shailputri-mata-ki-aarti", "brahmacharini-mata-ki-aarti",
        "chandraghanta-mata-ki-aarti", "kushmanda-mata-ki-aarti",
        "skandamata-ki-aarti", "katyayani-mata-ki-aarti", "kaalratri-mata-ki-aarti",
        "mahagauri-mata-ki-aarti", "siddhidatri-mata-ki-aarti",
      ],
    },
    {
      title: "Devi Aartis",
      slugs: [
        "ambe-mata-ki-aarti", "vaishnavi-mata-ki-aarti", "chintpurni-mata-ki-aarti",
        "naina-devi-mata-ki-aarti", "kamakhya-mata-ki-aarti", "karni-mata-ki-aarti",
        "baglamukhi-mata-ki-aarti", "annapurna-mata-ji-ki-aarti", "tulsi-mata-ki-aarti",
      ],
    },
    {
      title: "Navagraha — Nine Planets",
      slugs: ["surya-dev-ki-aarti", "shri-shani-dev-ki-aarti", "navgrah-aarti"],
    },
    {
      title: "Sacred Rivers",
      slugs: ["gange-mata-ki-aarti", "yamuna-mata-ki-aarti"],
    },
    {
      title: "Deities & Saints",
      slugs: [
        "khatu-shyam-ji-ki-aarti", "salasar-balaji-ki-aarti", "banke-bihari-ji-ki-aarti",
        "radha-rani-ji-ki-aarti", "jagannath-ji-ki-aarti", "bhairav-baba-ki-aarti",
      ],
    },
  ],
  Temples: [
    {
      title: "Famous Temples of India",
      slugs: [
        "ram-janmabhoomi-mandir-ayodhya", "tirumala-venkateswara-temple-tirupati",
        "shirdi-sai-baba-temple", "siddhivinayak-temple-mumbai",
        "meenakshi-amman-temple-madurai",
      ],
    },
    {
      title: "Jyotirlingas",
      slugs: [
        "somnath-temple", "mahakaleshwar-jyotirlinga-ujjain",
        "omkareshwar-jyotirlinga-temple", "kashi-vishwanath-temple-varanasi",
        "kedarnath-temple", "ramanathaswamy-temple-rameswaram",
      ],
    },
    {
      title: "Char Dham",
      slugs: ["badrinath-temple", "jagannath-temple-puri", "dwarkadhish-temple-dwarka"],
    },
    {
      title: "Shakti Peethas & Devi Temples",
      slugs: [
        "vaishno-devi-temple-katra", "kamakhya-temple-guwahati", "jwala-ji-temple",
        "chintpurni-temple", "naina-devi-temple",
      ],
    },
    {
      title: "Rajasthan's Beloved Temples",
      slugs: ["khatu-shyam-ji-temple", "salasar-balaji-temple", "mehandipur-balaji-temple"],
    },
    {
      title: "Vrindavan Temples",
      slugs: [
        "banke-bihari-temple-vrindavan", "prem-mandir-vrindavan",
        "iskcon-krishna-balaram-temple",
      ],
    },
  ],
};

// Items for a category's list page, arranged into named sections when the
// category has a CATEGORY_GROUPS entry: [{ title, items }]. Grouped slugs keep
// their configured order; unlisted slugs land in a trailing "More" section.
// Categories without groups return one section with title: null.
export function getGroupedItems(category) {
  const items = getItems(category);
  const groups = CATEGORY_GROUPS[category];
  if (!groups) return [{ title: null, items }];

  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const sections = groups
    .map(({ title, slugs }) => ({
      title,
      items: slugs.map((s) => bySlug.get(s)).filter(Boolean),
    }))
    .filter((s) => s.items.length > 0);

  const grouped = new Set(groups.flatMap((g) => g.slugs));
  const rest = items.filter((item) => !grouped.has(item.slug));
  if (rest.length) sections.push({ title: "More", items: rest });
  return sections;
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
