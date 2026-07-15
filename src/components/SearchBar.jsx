import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchItems } from "../i18n/content";

// Site search with an autocomplete dropdown. Selecting a suggestion redirects
// straight to that item's detail page (e.g. /chalisa/hanuman-chalisa).
// variant="header" renders the compact translucent style for the top bar.
export default function SearchBar({ variant = "page", placeholder = "Search chalisa, mantra, aarti..." }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef(null);

  const results = useMemo(() => searchItems(query, 8), [query]);
  const isHeader = variant === "header";

  // Close the dropdown when clicking anywhere outside the component.
  useEffect(() => {
    function onPointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function go(item) {
    setQuery("");
    setOpen(false);
    setActive(-1);
    navigate(item.path);
  }

  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[active] || results[0];
      if (item) go(item);
      else if (query.trim()) {
        setOpen(false);
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className={`relative ${isHeader ? "w-40 focus-within:w-64 transition-[width] duration-200" : "w-full"}`}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" aria-hidden="true">
        <svg className={`w-4 h-4 ${isHeader ? "text-white/80" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
      </span>
      <input
        type="search"
        role="combobox"
        aria-expanded={open && results.length > 0}
        aria-label="Search devotional content"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className={
          isHeader
            ? "w-full pl-9 pr-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 focus:bg-white/95 text-sm text-white focus:text-gray-900 placeholder-white/70 focus:placeholder-gray-400 ring-1 ring-white/30 focus:ring-2 focus:ring-white focus:outline-none backdrop-blur-sm transition-colors"
            : "w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        }
      />

      {open && query.trim() && (
        <ul
          role="listbox"
          className="absolute z-50 mt-2 w-full min-w-64 max-h-96 overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10 py-2 text-left"
        >
          {results.length === 0 && (
            <li className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No matches for "{query}"</li>
          )}
          {results.map((item, i) => (
            <li key={item.path} role="option" aria-selected={i === active}>
              <button
                type="button"
                onClick={() => go(item)}
                onMouseEnter={() => setActive(i)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left cursor-pointer ${
                  i === active ? "bg-orange-50 dark:bg-gray-700" : ""
                }`}
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-gray-800 dark:text-white truncate">{item.cardTitle}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">{item.category}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
