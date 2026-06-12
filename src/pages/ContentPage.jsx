import { Helmet } from "react-helmet-async";
import ContentActions from "../components/ContentActions";
import ShareButtons from "../components/ShareButtons";

export default function ContentPage() {
  const text = `
    श्री हनुमान चालीसा
    ...
    (sample devotional text here)
  `;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Hanuman Chalisa Hindi | Devotional</title>
        <meta name="description" content="Read Hanuman Chalisa in Hindi with meaning and explanation." />
        <link rel="canonical" href="https://yourdomain.com/hanuman-chalisa-hindi" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🙏 Hanuman Chalisa (Hindi)</h1>
          <p className="text-lg opacity-90">A devotional hymn dedicated to Lord Hanuman</p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <pre className="whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6 font-serif text-gray-800 dark:text-gray-200 leading-relaxed overflow-auto">
            {text}
          </pre>

          <ContentActions text={text} />
        </div>

        {/* Meaning & Explanation */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 dark:text-white flex items-center gap-3">
            <span>📚</span>
            Meaning & Explanation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">This Chalisa praises Hanuman's strength, devotion, and service to Lord Rama. Each verse highlights different aspects of Hanuman's character and virtues, making it a comprehensive hymn that devotees recite for spiritual upliftment and protection.</p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 dark:text-white flex items-center gap-3">
            <span>❓</span>
            Frequently Asked Questions
          </h2>
          
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
        </section>

        {/* Share Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 dark:text-white flex items-center gap-3">
            <span>📤</span>
            Share This Content
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Spread the spiritual wisdom by sharing this sacred text with friends and family
          </p>
          <ShareButtons url={window.location.href} />
        </section>
      </div>
    </article>
  );
}
