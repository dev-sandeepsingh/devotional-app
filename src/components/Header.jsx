import { memo } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeToggle from "./DarkModeToggle";

const Header = memo(function Header({ onMenuToggle }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link to="/" className="text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-orange-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded px-1 sm:px-2 min-w-0 truncate whitespace-nowrap">
            🙏 Devotional
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            <Link to="/chalisa" className="text-white hover:text-orange-100 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Chalisa</Link>
            <Link to="/mantra" className="text-white hover:text-orange-100 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Mantra</Link>
            <Link to="/aarti" className="text-white hover:text-orange-100 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Aarti</Link>
            <Link to="/blog" className="text-white hover:text-orange-100 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Blog</Link>
            <Link to="/donate" className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
              Donate
            </Link>
          </nav>
          
          <div className="flex gap-2 sm:gap-4 items-center flex-shrink-0">
            <Link
              to="/donate"
              className="md:hidden bg-white text-red-600 px-2.5 py-1.5 rounded-lg text-sm font-semibold hover:bg-orange-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Donate
            </Link>
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
