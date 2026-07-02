import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

// Layout for the public user-facing site: header, collapsible sidebar, footer, bottom nav.
// The page content renders through <Outlet />. (Admin routes intentionally do NOT use this shell.)
export default function UserShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebarCollapse = () => setSidebarCollapsed((prev) => !prev);

  return (
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
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
