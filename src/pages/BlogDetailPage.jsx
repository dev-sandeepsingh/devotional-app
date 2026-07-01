import { Helmet } from "react-helmet-async";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";

export default function BlogDetailPage() {
  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>The Power of Faith and Devotion | Spiritual Blog</title>
        <meta name="description" content="Discover how faith and sincere devotion can bring positive changes to your life." />
        <link rel="canonical" href="https://yourdomain.com/blog/power-of-faith" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">✨ The Power of Faith and Devotion</h1>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <span>📅 May 2026</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>

        {/* Introduction */}
        <CollapsibleSection icon="📖" title="Introduction" defaultOpen={true}>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            In our fast-paced modern world, many of us struggle to find meaning and purpose. We chase material success, accumulate possessions, and yet feel empty inside. The ancient wisdom of devotion and faith offers us a path to true fulfillment and inner peace.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Faith is not merely a religious concept—it is a powerful force that can transform our lives, heal our wounds, and guide us toward our highest potential. When combined with sincere devotion, faith becomes an unstoppable power that can move mountains.
          </p>
        </CollapsibleSection>

        {/* Understanding Faith */}
        <CollapsibleSection icon="🙏" title="Understanding Faith" defaultOpen={false}>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Faith is the unwavering belief in something greater than ourselves. It is the conviction that despite our current circumstances, there is a divine force guiding our path and supporting our journey.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Key Aspects of Faith:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Trust in the divine or higher power</li>
                <li>Acceptance of life's circumstances with grace</li>
                <li>Hope and optimism about the future</li>
                <li>Surrender of ego and control</li>
                <li>Connection to something transcendent</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              True faith is not blind belief—it is a conscious choice to trust in the wisdom of the universe, even when we don't have all the answers.
            </p>
          </div>
        </CollapsibleSection>

        {/* Power of Devotion */}
        <CollapsibleSection icon="💫" title="The Transformative Power of Devotion" defaultOpen={false}>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Devotion is the active expression of our faith. It is how we channel our love, gratitude, and reverence toward the divine. Through devotion, we create a personal relationship with the spiritual, moving beyond intellectual understanding to direct experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">🧘 Mental Benefits</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reduces stress, anxiety, and depression. Brings clarity of mind and inner peace.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">❤️ Emotional Benefits</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cultivates love, compassion, and forgiveness. Heals emotional wounds.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">🌟 Spiritual Benefits</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Deepens spiritual connection and awakens higher consciousness.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">💪 Physical Benefits</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Improves overall health and strengthens immune system.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Practical Steps */}
        <CollapsibleSection icon="🎯" title="Practical Steps to Cultivate Faith and Devotion" defaultOpen={false}>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">1. Daily Meditation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Spend 10-15 minutes daily in quiet meditation to connect with your inner self and the divine.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">2. Prayer and Affirmations</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Regularly pray or recite affirmations that reinforce your faith in a higher power.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">3. Acts of Kindness</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Perform selfless acts of service to others. This deepens your connection to humanity and the divine.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">4. Study Sacred Texts</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Read and reflect on spiritual wisdom from various traditions to deepen your understanding.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-2">5. Practice Gratitude</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Maintain a gratitude journal and acknowledge blessings in your life, however small.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Conclusion */}
        <CollapsibleSection icon="🌈" title="Conclusion" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Faith and devotion are not luxuries reserved for the religiously inclined—they are essential tools for anyone seeking a meaningful and fulfilling life. In a world filled with uncertainty and chaos, faith provides an anchor, devotion provides a direction, and together they create transformation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Begin today. Start small. Whether through meditation, prayer, or acts of service, take that first step toward cultivating faith and devotion in your life. The power to transform your life lies within you—all you need is faith, devotion, and a sincere heart.
          </p>
        </CollapsibleSection>

        {/* Share Section */}
        <CollapsibleSection icon="📤" title="Share This Article" defaultOpen={false}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Found this article inspiring? Share it with friends and family to spread spiritual wisdom
          </p>
          <ShareButtons url={window.location.href} />
        </CollapsibleSection>
      </div>
    </article>
  );
}
