import { useState, memo } from "react";

const CollapsibleSection = memo(function CollapsibleSection({ icon, title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`section-content-${title}`}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
      >
        <span className="flex items-center gap-3 flex-1 text-left">
          <span className="text-3xl" aria-hidden="true">{icon}</span>
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h2>
        </span>
        <svg
          className={`w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      <div
        id={`section-content-${title}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          {children}
        </div>
        <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600" aria-hidden="true" />
      </div>
    </section>
  );
});

export default CollapsibleSection;
