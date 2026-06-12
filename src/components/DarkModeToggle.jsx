// src/components/DarkModeToggle.jsx
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
