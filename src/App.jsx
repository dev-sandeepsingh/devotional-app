import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserShell from "./UserShell";

// User-facing pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailPage from "./pages/DetailPage";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import TimeCollectionPage from "./pages/TimeCollectionPage";
import CategoryListPage from "./components/CategoryListPage";
import { CATEGORIES } from "./i18n/content";

// Admin panel is never used by public visitors, so it's split into its own
// lazily-loaded chunks (keeps the rich-text editor and admin views out of the
// initial download).
const AdminLogin = lazy(() => import("./admin/AdminLogin"));
const RequireAdmin = lazy(() => import("./admin/RequireAdmin"));
const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const AdminHome = lazy(() => import("./admin/AdminHome"));
const AdminBlogs = lazy(() => import("./admin/AdminBlogs"));

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
      <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
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
          {/* Curated Morning / Evening collections (Home Quick Access chips) */}
          <Route path="/morning" element={<TimeCollectionPage period="morning" />} />
          <Route path="/evening" element={<TimeCollectionPage period="evening" />} />
          <Route path="/search" element={<Search />} />
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Unknown route → friendly 404 with search (inside the shell so
              the header/nav stay available) */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
