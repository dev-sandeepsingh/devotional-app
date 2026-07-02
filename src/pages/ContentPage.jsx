import { Helmet } from "react-helmet-async";
import ContentActions from "../components/ContentActions";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";

const CHALISA_CONTENT = {
  hindi: {
    title: "Hanuman Chalisa (Hindi)",
    metaTitle: "Hanuman Chalisa Hindi | Devotional",
    metaDescription: "Read Hanuman Chalisa in Hindi with meaning and explanation.",
    canonicalPath: "/hanuman-chalisa-hindi",
    subtitle: "A devotional hymn dedicated to Lord Hanuman",
    text: `
    श्री हनुमान चालीसा
    ...
    (sample devotional text here — replace with the verified Hindi verses)
  `,
  },
  english: {
    title: "Hanuman Chalisa (English)",
    metaTitle: "Hanuman Chalisa English | Devotional",
    metaDescription: "Read the English translation of Hanuman Chalisa with meaning and explanation.",
    canonicalPath: "/hanuman-chalisa-english",
    subtitle: "English translation of the sacred hymn dedicated to Lord Hanuman",
    text: `
    Shri Hanuman Chalisa (English Translation)
    ...
    (sample English translation placeholder — replace with the verified translation)
  `,
  },
};

export default function ContentPage({ lang = "hindi" }) {
  const content = CHALISA_CONTENT[lang] ?? CHALISA_CONTENT.hindi;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={`https://yourdomain.com${content.canonicalPath}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🙏 {content.title}</h1>
          <p className="text-lg opacity-90">{content.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <pre className="whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6 font-serif text-gray-800 dark:text-gray-200 leading-relaxed overflow-auto">
            {content.text}
          </pre>

          <ContentActions text={content.text} />
        </div>

        {/* Meaning & Explanation */}
        <CollapsibleSection icon="📚" title="Meaning & Explanation" defaultOpen={true}>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            This Chalisa praises Hanuman's strength, devotion, and service to Lord Rama. Each verse highlights different aspects of Hanuman's character and virtues, making it a comprehensive hymn that devotees recite for spiritual upliftment and protection.
          </p>
        </CollapsibleSection>

        {/* FAQ Section */}
        <CollapsibleSection icon="❓" title="Frequently Asked Questions" defaultOpen={false}>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">
                Q: When should I recite Hanuman Chalisa?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Traditionally, it is recited on Tuesdays and Saturdays. However, you can recite it any day or time when you feel inclined. Many devotees recite it daily for continuous blessings and protection.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">
                Q: Can it be recited in any language?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Yes, devotion matters more than language. While the original is in Hindi, the Chalisa can be recited in any language you understand. The important thing is sincere devotion and understanding the meaning behind the verses.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">
                Q: What are the benefits of reciting Hanuman Chalisa?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Regular recitation brings courage, removes fear, provides protection from negative influences, enhances focus and concentration, and deepens spiritual connection with the divine.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">
                Q: How many times should I recite it?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: There's no fixed number. You can recite it once daily, or multiple times as per your spiritual practice. Many devotees perform 40 or 108 recitations for special occasions.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Share Section */}
        <CollapsibleSection icon="📤" title="Share This Content" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Spread the spiritual wisdom by sharing this sacred text with friends and family
          </p>
          <ShareButtons url={window.location.href} />
        </CollapsibleSection>
      </div>
    </article>
  );
}
