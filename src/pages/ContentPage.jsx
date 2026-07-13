import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import ContentActions from "../components/ContentActions";
import ShareButtons from "../components/ShareButtons";
import CollapsibleSection from "../components/CollapsibleSection";
import { LANGUAGES } from "../i18n/languages";

// Map the route variant (e.g. /hanuman-chalisa-hindi) to an initial i18n language.
const ROUTE_LANG = { hindi: "hi", english: "en" };

export default function ContentPage({ lang = "hindi" }) {
  const { t, i18n } = useTranslation();
  const appliedRoute = useRef(null);

  useEffect(() => {
    // Open the page in the language implied by the route (e.g. /hanuman-chalisa-hindi),
    // but only when the route actually changes — otherwise this would fight the dropdown
    // and reset the user's selection on every re-render.
    if (appliedRoute.current !== lang) {
      appliedRoute.current = lang;
      i18n.changeLanguage(ROUTE_LANG[lang] || "hi");
    }
  }, [lang, i18n]);

  const copyText = `${t("title")}\n\n${t("intro")}\n\n${t("meaning")}`;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{t("title")} | Devotional</title>
        <meta name="description" content={t("intro")} />
        <link rel="canonical" href="https://yourdomain.com/hanuman-chalisa" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with on-page language dropdown */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">🙏 {t("title")}</h1>
              <p className="text-lg opacity-90">{t("intro")}</p>
            </div>

            <label className="flex items-center gap-2 bg-white/15 hover:bg-white/25 rounded-lg px-3 py-2 backdrop-blur-sm transition-colors">
              <span className="text-lg" aria-hidden="true">🌐</span>
              <span className="sr-only">Choose language</span>
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:text-gray-900"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Intro / lead content (switches with the selected language) */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg mb-6">
            {t("intro")}
          </p>
          <ContentActions text={copyText} />
        </div>

        {/* Meaning & Explanation */}
        <CollapsibleSection icon="📚" title="Meaning & Explanation" defaultOpen={true}>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            {t("meaning")}
          </p>
        </CollapsibleSection>

        {/* FAQ Section */}
        <CollapsibleSection icon="❓" title="Frequently Asked Questions" defaultOpen={false}>
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">{t("faq.q1")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("faq.a1")}</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-bold dark:text-white mb-2">{t("faq.q2")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("faq.a2")}</p>
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
