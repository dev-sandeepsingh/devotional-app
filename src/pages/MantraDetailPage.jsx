import { Helmet } from "react-helmet-async";
import ContentActions from "../components/ContentActions";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";

const MANTRA_CONTENT = {
  hindi: {
    title: "Hanuman Mantra (Hindi)",
    metaTitle: "Hanuman Mantra Hindi | Devotional",
    metaDescription: "Powerful Hanuman mantras in Hindi for strength, courage, and spiritual growth.",
    canonicalPath: "/hanuman-mantra-hindi",
    subtitle: "Powerful mantras for strength, courage, and spiritual awakening",
    text: `
    ॐ नमः शिवाय
    ॐ नमो भगवते वासुदेवाय
    ॐ श्रीं ह्रीं क्लीं

    Sacred Hanuman Mantras...
  `,
  },
  english: {
    title: "Hanuman Mantra (English)",
    metaTitle: "Hanuman Mantra English | Devotional",
    metaDescription: "English transliteration of powerful Hanuman mantras for strength, courage, and spiritual growth.",
    canonicalPath: "/hanuman-mantra-english",
    subtitle: "English transliteration of powerful mantras for strength, courage, and spiritual awakening",
    text: `
    Om Namah Shivaya
    Om Namo Bhagavate Vasudevaya
    Om Shreem Hreem Kleem

    Sacred Hanuman Mantras (English transliteration placeholder)...
  `,
  },
};

export default function MantraDetailPage({ lang = "hindi" }) {
  const content = MANTRA_CONTENT[lang] ?? MANTRA_CONTENT.hindi;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={`https://yourdomain.com${content.canonicalPath}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6 mb-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">✨ {content.title}</h1>
          <p className="text-lg opacity-90">{content.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <pre className="whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6 font-serif text-gray-800 dark:text-gray-200 leading-relaxed overflow-auto">
            {content.text}
          </pre>

          <ContentActions text={content.text} />
        </div>

        {/* How to Recite */}
        <CollapsibleSection icon="🧘" title="How to Recite Mantras" defaultOpen={true}>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">Step 1: Find a Quiet Space</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Choose a clean, quiet place where you can sit comfortably without distractions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">Step 2: Sit in a Comfortable Position</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sit in a cross-legged position or on a chair with your spine straight and hands resting on your knees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">Step 3: Focus Your Mind</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Close your eyes and take a few deep breaths to calm your mind. Visualize Lord Hanuman's divine form.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">Step 4: Recite with Devotion</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Chant the mantra with sincerity and dedication. You can recite it 108 times, 40 times, or as many times as you feel inclined.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Benefits */}
        <CollapsibleSection icon="💫" title="Benefits of Mantra Recitation" defaultOpen={false}>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl">💪</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Increased Strength & Courage</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Regular recitation builds inner strength and removes fear from your mind.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🧠</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Mental Clarity & Focus</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mantras help calm the mind and improve concentration and memory.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Spiritual Protection</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Chanting protects you from negative influences and obstacles in your path.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">☮️</div>
              <div>
                <h3 className="text-lg font-bold dark:text-white mb-1">Inner Peace & Harmony</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Creates a state of peace and connects you with divine consciousness.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* FAQ */}
        <CollapsibleSection icon="❓" title="Frequently Asked Questions" defaultOpen={false}>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: How many times should I chant the mantra?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Traditionally, mantras are chanted 108 times. However, 40 recitations or even once with sincere devotion is beneficial.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: When is the best time to chant?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Early morning (Brahma Muhurta) and evening are ideal times. However, you can chant anytime with sincere devotion.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: Do I need a prayer bead (mala)?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: A mala with 108 beads helps count recitations, but it's not mandatory. Sincere devotion is more important than external tools.
              </p>
            </div>

            <div className="border-l-4 border-rose-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">Q: Can I chant silently?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A: Yes, you can chant silently in your mind. This is called "Japa" and is equally powerful as audible chanting.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Share Section */}
        <CollapsibleSection icon="📤" title="Share This Content" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Spread the spiritual wisdom by sharing these sacred mantras with friends and family
          </p>
          <ShareButtons url={window.location.href} />
        </CollapsibleSection>
      </div>
    </article>
  );
}
