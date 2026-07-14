import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserShell from "./UserShell";

// User-facing pages
import Home from "./pages/Home";
import Chalisa from "./pages/Chalisa";
import Mantra from "./pages/Mantra";
import Aarti from "./pages/Aarti";
import Stotras from "./pages/Stotras";
import Ashtakams from "./pages/Ashtakams";
import Sahasranamas from "./pages/Sahasranamas";
import VratKathas from "./pages/VratKathas";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailPage from "./pages/DetailPage";
import CategoryPage from "./pages/CategoryPage";
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
          <Route path="/stotras" element={<Stotras />} />
          <Route path="/ashtakams" element={<Ashtakams />} />
          <Route path="/sahasranamas" element={<Sahasranamas />} />
          <Route path="/vrat-kathas" element={<VratKathas />} />
          {/* Category pages (static content — see src/data/categoryContent.js) */}
          <Route path="/festivals" element={<CategoryPage category="festivals" />} />
          <Route path="/temples" element={<CategoryPage category="temples" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Item detail pages — one route per category, item chosen by :slug.
              Language (hi/en) is picked by the on-page dropdown, not the URL. */}
          <Route path="/chalisa/:slug" element={<DetailPage category="Chalisa" />} />
          <Route path="/mantra/:slug" element={<DetailPage category="Mantras" />} />
          <Route path="/aarti/:slug" element={<DetailPage category="Aartis" />} />
          <Route path="/stotras/:slug" element={<DetailPage category="Stotras" />} />
          <Route path="/ashtakams/:slug" element={<DetailPage category="Ashtakams" />} />
          <Route path="/sahasranamas/:slug" element={<DetailPage category="Sahasranamas" />} />
          <Route path="/vrat-kathas/:slug" element={<DetailPage category="VratKathas" />} />
          {/* Blog Detail Pages (slugs match the links in Blog.jsx) */}
          <Route path="/blog/power-of-faith" element={<BlogDetailPage slug="power-of-faith" />} />
          <Route path="/blog/importance-of-hanuman-chalisa" element={<BlogDetailPage slug="importance-of-hanuman-chalisa" />} />
          <Route path="/blog/mantra-meditation-benefits" element={<BlogDetailPage slug="mantra-meditation-benefits" />} />
          <Route path="/blog/daily-devotional-guide" element={<BlogDetailPage slug="daily-devotional-guide" />} />
        </Route>

        {/* Unknown route → redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
