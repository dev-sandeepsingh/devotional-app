import { useState } from "react";

export default function CollapsibleSection({ icon, title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
      {/* Header - Click to toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
      >
        <div className="flex items-center gap-3 flex-1">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-left group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h2>
        </div>
        
        {/* Arrow Icon */}
        <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-6 h-6 text-purple-600 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      {/* Content - Expandable */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          {children}
        </div>
      </div>

      {/* Status indicator line */}
      <div
        className={`h-1 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </section>
  );
}
