import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserShell from "./UserShell";

// User-facing pages
import Home from "./pages/Home";
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
import NotFound from "./pages/NotFound";
import CategoryListPage from "./components/CategoryListPage";
import { CATEGORIES } from "./i18n/content";

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
          {/* Content categories (Chalisa, Mantras, Aartis, Stotras, ...): a list
              page and an item detail page per category, both generated from the
              CATEGORIES registry in src/i18n/content.js. Language (hi/en) on the
              detail page is picked by its on-page dropdown, not the URL. */}
          {Object.entries(CATEGORIES).map(([category, { route }]) => (
            <Route key={category} path={`/${route}`}>
              <Route index element={<CategoryListPage category={category} />} />
              <Route path=":slug" element={<DetailPage category={category} />} />
            </Route>
          ))}
          {/* Category pages (static content — see src/data/categoryContent.js) */}
          <Route path="/festivals" element={<CategoryPage category="festivals" />} />
          <Route path="/temples" element={<CategoryPage category="temples" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Blog Detail Pages (slugs match the links in Blog.jsx) */}
          <Route path="/blog/power-of-faith" element={<BlogDetailPage slug="power-of-faith" />} />
          <Route path="/blog/importance-of-hanuman-chalisa" element={<BlogDetailPage slug="importance-of-hanuman-chalisa" />} />
          <Route path="/blog/mantra-meditation-benefits" element={<BlogDetailPage slug="mantra-meditation-benefits" />} />
          <Route path="/blog/daily-devotional-guide" element={<BlogDetailPage slug="daily-devotional-guide" />} />

          {/* Unknown route → friendly 404 with search (inside the shell so
              the header/nav stay available) */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
