import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-white hover:text-orange-100 transition-colors duration-200">
            🙏 Devotional
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/chalisa" className="text-white hover:text-orange-100 font-medium transition-colors duration-200">Chalisa</Link>
            <Link to="/mantra" className="text-white hover:text-orange-100 font-medium transition-colors duration-200">Mantra</Link>
            <Link to="/aarti" className="text-white hover:text-orange-100 font-medium transition-colors duration-200">Aarti</Link>
            <Link to="/blog" className="text-white hover:text-orange-100 font-medium transition-colors duration-200">Blog</Link>
            <Link to="/donate" className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition-colors duration-200">
              Donate
            </Link>
          </nav>
          
          <div className="flex gap-4 items-center">
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
