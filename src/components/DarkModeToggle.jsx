// src/components/DarkModeToggle.jsx
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : prefersDark;
  });

  useEffect(() => {
    // Update localStorage and DOM whenever the preference changes
    localStorage.setItem("darkMode", JSON.stringify(dark));
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base shadow-md flex-shrink-0"
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span>{dark ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
