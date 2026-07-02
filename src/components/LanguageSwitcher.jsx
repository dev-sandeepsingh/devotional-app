// src/components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Normalize e.g. "en-US" -> "en" so the select reflects the active language.
  const current = i18n.language?.split("-")[0] || "en";

  return (
    <label className="flex items-center gap-1 bg-white/15 hover:bg-white/25 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm transition-colors cursor-pointer">
      <span className="text-base" aria-hidden="true">🌐</span>
      <span className="sr-only">Choose language</span>
      <select
        value={current}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer [&>option]:text-gray-900"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </label>
  );
}
