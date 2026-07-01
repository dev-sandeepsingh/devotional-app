import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 flex flex-col">
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
                <Route path="/hanuman-chalisa-hindi" element={<ContentPage />} />
                <Route path="/hanuman-chalisa-english" element={<ContentPage />} />
                {/* Mantra Detail Pages */}
                <Route path="/hanuman-mantra-hindi" element={<MantraDetailPage />} />
                <Route path="/hanuman-mantra-english" element={<MantraDetailPage />} />
                {/* Aarti Detail Pages */}
                <Route path="/hanuman-aarti-hindi" element={<AartiDetailPage />} />
                <Route path="/hanuman-aarti-english" element={<AartiDetailPage />} />
                {/* Blog Detail Pages */}
                <Route path="/blog/power-of-faith" element={<BlogDetailPage />} />
                <Route path="/blog/spiritual-wisdom" element={<BlogDetailPage />} />
                <Route path="/blog/meditation-guide" element={<BlogDetailPage />} />
                <Route path="/blog/devotion-benefits" element={<BlogDetailPage />} />
              </Routes>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
