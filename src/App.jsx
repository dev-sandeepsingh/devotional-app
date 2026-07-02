import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

// Import pages
import Home from "./pages/Home";
import Chalisa from "./pages/Chalisa";
import Mantra from "./pages/Mantra";
import Aarti from "./pages/Aarti";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import ContentPage from "./pages/ContentPage";
import MantraDetailPage from "./pages/MantraDetailPage";
import AartiDetailPage from "./pages/AartiDetailPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Explorer from "./pages/Explorer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Initialize dark mode on app mount
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedDarkMode !== null ? JSON.parse(savedDarkMode) : prefersDark;

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebarCollapse = () => setSidebarCollapsed((prev) => !prev);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header onMenuToggle={toggleSidebar} />
        <div className="flex flex-1 relative">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={closeSidebar}
            collapsed={sidebarCollapsed}
            onToggleCollapse={toggleSidebarCollapse}
          />
          {sidebarOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-30" onClick={closeSidebar} aria-hidden="true" />}
          <main className="flex-1 min-w-0 flex flex-col lg:w-full pb-20 lg:pb-0">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explorer" element={<Explorer />} />
                <Route path="/search" element={<Search />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/chalisa" element={<Chalisa />} />
                <Route path="/mantra" element={<Mantra />} />
                <Route path="/aarti" element={<Aarti />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/donate" element={<Donate />} />
                {/* Chalisa Detail Pages */}
                <Route path="/hanuman-chalisa-hindi" element={<ContentPage lang="hindi" />} />
                <Route path="/hanuman-chalisa-english" element={<ContentPage lang="english" />} />
                {/* Mantra Detail Pages */}
                <Route path="/hanuman-mantra-hindi" element={<MantraDetailPage lang="hindi" />} />
                <Route path="/hanuman-mantra-english" element={<MantraDetailPage lang="english" />} />
                {/* Aarti Detail Pages */}
                <Route path="/hanuman-aarti-hindi" element={<AartiDetailPage lang="hindi" />} />
                <Route path="/hanuman-aarti-english" element={<AartiDetailPage lang="english" />} />
                {/* Blog Detail Pages (slugs match the links in Blog.jsx) */}
                <Route path="/blog/power-of-faith" element={<BlogDetailPage slug="power-of-faith" />} />
                <Route path="/blog/importance-of-hanuman-chalisa" element={<BlogDetailPage slug="importance-of-hanuman-chalisa" />} />
                <Route path="/blog/mantra-meditation-benefits" element={<BlogDetailPage slug="mantra-meditation-benefits" />} />
                <Route path="/blog/daily-devotional-guide" element={<BlogDetailPage slug="daily-devotional-guide" />} />
              </Routes>
            </div>
            <Footer />
          </main>
        </div>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
