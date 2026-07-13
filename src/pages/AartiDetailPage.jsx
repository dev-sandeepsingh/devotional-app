import { Helmet } from "react-helmet-async";
import ContentActions from "../components/ContentActions";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";

const AARTI_CONTENT = {
  hindi: {
    title: "Hanuman Aarti (Hindi)",
    metaTitle: "Hanuman Aarti Hindi | Devotional",
    metaDescription: "Sacred Hanuman Aarti in Hindi with meaning and instructions for worship.",
    canonicalPath: "/hanuman-aarti-hindi",
    subtitle: "Sacred hymn performed as an offering during worship ceremonies",
    text: `
    आरती कीजै हनुमान लाल की
    जय भीम भीम भीम

    Hanuman Aarti...
  `,
  },
  english: {
    title: "Hanuman Aarti (English)",
    metaTitle: "Hanuman Aarti English | Devotional",
    metaDescription: "English translation of the sacred Hanuman Aarti with meaning and instructions for worship.",
    canonicalPath: "/hanuman-aarti-english",
    subtitle: "English translation of the sacred hymn performed as an offering during worship ceremonies",
    text: `
    Aarti kije Hanuman Lala ki
    Dushta dalan Raghunath kala ki

    Hanuman Aarti (English translation placeholder)...
  `,
  },
};

export default function AartiDetailPage({ lang = "hindi" }) {
  const content = AARTI_CONTENT[lang] ?? AARTI_CONTENT.hindi;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={`https://yourdomain.com${content.canonicalPath}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 mb-6 shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold mb-1.5">🎵 {content.title}</h1>
          <p className="text-sm opacity-90">{content.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <pre className="whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6 font-serif text-gray-800 dark:text-gray-200 leading-relaxed overflow-auto">
            {content.text}
          </pre>

          <ContentActions text={content.text} />
        </div>

        {/* What is Aarti */}
        <CollapsibleSection icon="🕯️" title="What is Aarti?" defaultOpen={true}>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Aarti is a ritual of worship in Hinduism where lighted lamps are waved in front of a deity, often accompanied by singing devotional songs. It is a symbolic offering of light to the divine, representing the removal of darkness (ignorance) from the devotee's life.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The aarti is typically performed twice daily—in the morning and evening—in homes and temples. It is believed to be a powerful way to express devotion and seek blessings from the deity.
          </p>
        </CollapsibleSection>

        {/* How to Perform Aarti */}
        <CollapsibleSection icon="🕉️" title="How to Perform Aarti" defaultOpen={false}>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">Materials Needed</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>A small oil lamp (diya) or candle</li>
                <li>Oil or ghee</li>
                <li>Wick or cotton thread</li>
                <li>Incense sticks</li>
                <li>Flowers (optional)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">Steps</h3>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Light the oil lamp in front of the deity's idol or image</li>
                <li>Close your eyes and pray for a moment to center your mind</li>
                <li>Using your right hand, gently wave the lamp in circular motions in front of the idol</li>
                <li>Recite the aarti prayer or sing the devotional song</li>
                <li>Wave the lamp in an anticlockwise direction, ending by offering it at the deity's feet</li>
              </ol>
            </div>
          </div>
        </CollapsibleSection>

        {/* Spiritual Significance */}
        <CollapsibleSection icon="✨" title="Spiritual Significance" defaultOpen={false}>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl">🌟</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Light Symbolism</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The flame represents truth and divine consciousness dispelling the darkness of ignorance.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🙏</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Expression of Devotion</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Aarti is a concrete way to express your love and reverence for the divine.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🎵</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Mantra Power</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The singing of aarti creates positive vibrations that purify the environment and mind.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* FAQ */}
        <CollapsibleSection icon="❓" title="Frequently Asked Questions" defaultOpen={false}>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: Which hand should I use for aarti?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Traditionally, the right hand is used for offering aarti as it is considered the giving hand in Hindu culture.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: Can women perform aarti?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Yes, absolutely! Both men and women can and should perform aarti. It is a devotional act open to all.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: How long should aarti last?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: There's no fixed duration. Typically, aarti lasts 3-5 minutes, but you can perform it as long as you feel connected.
              </p>
            </div>

            <div className="border-l-4 border-rose-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: Is aarti performed only in temples?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: No, aarti is commonly performed at home in front of deity idols. It can be done anywhere with sincere devotion.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Share Section */}
        <CollapsibleSection icon="📤" title="Share This Content" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Spread the spiritual wisdom by sharing this sacred aarti with friends and family
          </p>
          <ShareButtons url={window.location.href} />
        </CollapsibleSection>
      </div>
    </article>
  );
}
