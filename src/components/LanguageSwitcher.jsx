// src/components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLang = (lang) => i18n.changeLanguage(lang);

  return (
    <select onChange={(e) => changeLang(e.target.value)}>
      <option value="hi">Hindi</option>
      <option value="en">English</option>
      <option value="pa">Punjabi</option>
      <option value="bn">Bengali</option>
      <option value="mr">Marathi</option>
      <option value="ta">Tamil</option>
      <option value="te">Telugu</option>
    </select>
  );
}
