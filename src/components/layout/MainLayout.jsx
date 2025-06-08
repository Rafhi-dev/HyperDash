import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";

function MainLayout({ isSidebarCollapsed, setIsSidebarCollapsed }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const navbarHeight = 14; // Representasi Tailwind h-14
  const navbarHeightOffsetClass = `pt-${navbarHeight}`;

  const sidebarWidth = 64;
  const sidebarCollapsedWidth = 16;

  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased">
      <Navbar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      {/* Container untuk sidebar dan konten utama */}
      <div className={`flex ${navbarHeightOffsetClass}`}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isMobile={isMobile}
          setSidebarCollapsed={setIsSidebarCollapsed}
        />
        {/* Konten Utama */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isMobile
              ? "ml-0" // Di mobile, sidebar mungkin overlay, jadi main content tidak perlu margin
              : isSidebarCollapsed
              ? `md:ml-${sidebarCollapsedWidth}`
              : `md:ml-${sidebarWidth}`
          } overflow-y-auto`}
        >
          <Outlet /> {/* Halaman seperti MyLinePrev akan dirender di sini */}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
