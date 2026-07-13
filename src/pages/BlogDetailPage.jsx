import { Helmet } from "react-helmet-async";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";

const BLOG_POSTS = {
  "power-of-faith": {
    icon: "✨",
    title: "The Power of Faith and Devotion",
    date: "May 2026",
    readTime: "8 min read",
    metaDescription: "Discover how faith and sincere devotion can bring positive changes to your life.",
    sections: [
      {
        icon: "📖",
        title: "Introduction",
        defaultOpen: true,
        paragraphs: [
          "In our fast-paced modern world, many of us struggle to find meaning and purpose. We chase material success, accumulate possessions, and yet feel empty inside. The ancient wisdom of devotion and faith offers us a path to true fulfillment and inner peace.",
          "Faith is not merely a religious concept—it is a powerful force that can transform our lives, heal our wounds, and guide us toward our highest potential. When combined with sincere devotion, faith becomes an unstoppable power that can move mountains.",
        ],
      },
      {
        icon: "🙏",
        title: "Understanding Faith",
        paragraphs: [
          "Faith is the unwavering belief in something greater than ourselves. It is the conviction that despite our current circumstances, there is a divine force guiding our path and supporting our journey.",
          "True faith is not blind belief—it is a conscious choice to trust in the wisdom of the universe, even when we don't have all the answers.",
        ],
        bullets: [
          "Trust in the divine or higher power",
          "Acceptance of life's circumstances with grace",
          "Hope and optimism about the future",
          "Surrender of ego and control",
          "Connection to something transcendent",
        ],
      },
      {
        icon: "💫",
        title: "The Transformative Power of Devotion",
        paragraphs: [
          "Devotion is the active expression of our faith. It is how we channel our love, gratitude, and reverence toward the divine. Through devotion, we create a personal relationship with the spiritual, moving beyond intellectual understanding to direct experience.",
          "Regular devotional practice reduces stress and brings mental clarity, cultivates love and compassion, deepens spiritual connection, and supports overall wellbeing.",
        ],
      },
      {
        icon: "🎯",
        title: "Practical Steps to Cultivate Faith and Devotion",
        bullets: [
          "Daily Meditation — spend 10-15 minutes in quiet meditation to connect with your inner self.",
          "Prayer and Affirmations — regularly reinforce your faith in a higher power.",
          "Acts of Kindness — perform selfless acts of service to others.",
          "Study Sacred Texts — read and reflect on spiritual wisdom from various traditions.",
          "Practice Gratitude — maintain a gratitude journal and acknowledge blessings, however small.",
        ],
      },
      {
        icon: "🌈",
        title: "Conclusion",
        paragraphs: [
          "Faith and devotion are not luxuries reserved for the religiously inclined—they are essential tools for anyone seeking a meaningful and fulfilling life. In a world filled with uncertainty and chaos, faith provides an anchor, devotion provides a direction, and together they create transformation.",
          "Begin today. Start small. Whether through meditation, prayer, or acts of service, take that first step toward cultivating faith and devotion in your life.",
        ],
      },
    ],
  },
  "importance-of-hanuman-chalisa": {
    icon: "📿",
    title: "Importance of Hanuman Chalisa",
    date: "June 2026",
    readTime: "5 min read",
    metaDescription: "Understand the spiritual significance and benefits of reciting Hanuman Chalisa regularly.",
    sections: [
      {
        icon: "📖",
        title: "Introduction",
        defaultOpen: true,
        paragraphs: [
          "The Hanuman Chalisa is one of the most widely recited devotional hymns in Hinduism. Composed of forty verses, it praises the strength, courage, and unwavering devotion of Lord Hanuman toward Lord Rama.",
        ],
      },
      {
        icon: "🛡️",
        title: "Why Devotees Recite It",
        paragraphs: [
          "Devotees turn to the Chalisa in moments of difficulty, believing that its recitation brings courage and removes obstacles from their path.",
        ],
        bullets: [
          "Invokes protection and removes fear",
          "Builds mental strength and focus",
          "Strengthens devotion to Lord Rama and Hanuman",
          "Provides comfort during challenging times",
        ],
      },
      {
        icon: "🕐",
        title: "When to Recite",
        paragraphs: [
          "While it can be recited any day, Tuesdays and Saturdays are traditionally considered especially auspicious for Hanuman worship.",
        ],
      },
    ],
  },
  "mantra-meditation-benefits": {
    icon: "🧘",
    title: "Benefits of Mantra Meditation",
    date: "June 2026",
    readTime: "7 min read",
    metaDescription: "Explore how mantra meditation can transform your mental health and spiritual well-being.",
    sections: [
      {
        icon: "📖",
        title: "Introduction",
        defaultOpen: true,
        paragraphs: [
          "Mantra meditation—the practice of silently or audibly repeating a sacred sound or phrase—has been used for centuries to calm the mind and deepen spiritual awareness.",
        ],
      },
      {
        icon: "🧠",
        title: "Mental & Emotional Benefits",
        bullets: [
          "Reduces stress, anxiety, and racing thoughts",
          "Improves focus and concentration",
          "Builds emotional resilience",
          "Encourages a steady, calm state of mind",
        ],
      },
      {
        icon: "🌟",
        title: "Getting Started",
        paragraphs: [
          "Choose a mantra that resonates with you, sit comfortably in a quiet space, and repeat it with steady breath—either aloud or silently—for a few minutes each day. Consistency matters more than duration.",
        ],
      },
    ],
  },
  "daily-devotional-guide": {
    icon: "📖",
    title: "Guide to Daily Devotional Practice",
    date: "May 2026",
    readTime: "6 min read",
    metaDescription: "Learn how to establish a meaningful daily devotional routine that fits your lifestyle.",
    sections: [
      {
        icon: "📖",
        title: "Introduction",
        defaultOpen: true,
        paragraphs: [
          "A consistent daily devotional routine doesn't need to be elaborate. Even a few focused minutes each day can build a lasting spiritual practice.",
        ],
      },
      {
        icon: "🗓️",
        title: "Building a Simple Routine",
        bullets: [
          "Set a fixed time — morning or evening, whichever suits your schedule",
          "Start with a short prayer or mantra recitation",
          "Read or reflect on a devotional text for a few minutes",
          "Close with a moment of gratitude",
        ],
      },
      {
        icon: "💡",
        title: "Staying Consistent",
        paragraphs: [
          "Keep the practice realistic for your lifestyle rather than aiming for perfection. A short, consistent routine practiced daily is more valuable than an elaborate one you can't sustain.",
        ],
      },
    ],
  },
};

export default function BlogDetailPage({ slug = "power-of-faith" }) {
  const post = BLOG_POSTS[slug] ?? BLOG_POSTS["power-of-faith"];

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{post.title} | Spiritual Blog</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${slug}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 mb-6 shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold mb-1.5">{post.icon} {post.title}</h1>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <span>📅 {post.date}</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </div>

        {/* Sections */}
        {post.sections.map((section) => (
          <CollapsibleSection
            key={section.title}
            icon={section.icon}
            title={section.title}
            defaultOpen={!!section.defaultOpen}
          >
            <div className="space-y-4">
              {section.paragraphs?.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </CollapsibleSection>
        ))}

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
