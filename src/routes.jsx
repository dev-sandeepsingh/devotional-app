// src/routes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chalisa from "./pages/Chalisa";
import Mantra from "./pages/Mantra";
import Aarti from "./pages/Aarti";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import ContentPage from "./pages/ContentPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chalisa" element={<Chalisa />} />
        <Route path="/mantra" element={<Mantra />} />
        <Route path="/aarti" element={<Aarti />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
        {/* Example SEO pages */}
        <Route path="/hanuman-chalisa-hindi" element={<ContentPage />} />
        <Route path="/hanuman-chalisa-english" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
