import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserShell from "./UserShell";

// User-facing pages
import Home from "./pages/Home";
import Chalisa from "./pages/Chalisa";
import Mantra from "./pages/Mantra";
import Aarti from "./pages/Aarti";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContentPage from "./pages/ContentPage";
import MantraDetailPage from "./pages/MantraDetailPage";
import AartiDetailPage from "./pages/AartiDetailPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Explorer from "./pages/Explorer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

// Admin panel (separate from the user site; not linked anywhere on the site)
import AdminLogin from "./admin/AdminLogin";
import RequireAdmin from "./admin/RequireAdmin";
import AdminLayout from "./admin/AdminLayout";
import AdminHome from "./admin/AdminHome";
import AdminBlogs from "./admin/AdminBlogs";

export default function App() {
  useEffect(() => {
    // Initialize dark mode on app mount (applies across the whole app)
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedDarkMode !== null ? JSON.parse(savedDarkMode) : prefersDark;
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin panel — no user shell, no links from the public site */}
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route element={<RequireAdmin />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="blogs" element={<AdminBlogs />} />
          </Route>
        </Route>

        {/* Public user-facing site, wrapped in the shared shell */}
        <Route element={<UserShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/chalisa" element={<Chalisa />} />
          <Route path="/mantra" element={<Mantra />} />
          <Route path="/aarti" element={<Aarti />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
