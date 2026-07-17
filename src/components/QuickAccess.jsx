import { Link } from "react-router-dom";

// Curated time-of-day collections — see src/data/timeCollections.js.
const CHIPS = [
  { id: "morning", label: "Morning", icon: "☀️", to: "/morning" },
  { id: "evening", label: "Evening", icon: "🌙", to: "/evening" },
];

export default function QuickAccess() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3 sm:hidden">Quick Access</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
        {CHIPS.map((chip) => (
          <Link
            key={chip.id}
            to={chip.to}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <span className="text-base" aria-hidden="true">{chip.icon}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{chip.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
