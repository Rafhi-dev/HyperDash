// src/layouts/MainLayout.jsx (atau path yang sesuai) - PERBAIKI BAGIAN INI
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Sesuaikan path jika berbeda
import Sidebar from "./Sidebar"; // Sesuaikan path jika berbeda
import { useMediaQuery } from "react-responsive";

function MainLayout({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Variabel ini HARUS sesuai dengan tinggi Navbar.
  // Jika Navbar menggunakan h-14, di sini gunakan pt-14.
  const navbarHeightOffsetClass = "pt-14";

  return (
    <div className="bg-gray-200 min-h-screen font-sans antialiased">
      <Navbar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      
      <div className={`flex ${navbarHeightOffsetClass}`}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isMobile={isMobile}
          setSidebarCollapsed={setIsSidebarCollapsed}
        />
        <main
          className={`flex-1 pb-6 pt-0 transition-all duration-300 ${
            isSidebarCollapsed ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;