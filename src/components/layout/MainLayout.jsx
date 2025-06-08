// src/layouts/MainLayout.jsx (atau path yang sesuai)
import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";

function MainLayout({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const navbarHeight = 14;
  const navbarHeightOffsetClass = `pt-${navbarHeight}`;

  const sidebarWidth = 64;
  const sidebarCollapsedWidth = 16;

  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased">
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
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isMobile ? 'ml-0'
            : isSidebarCollapsed ? `md:ml-${sidebarCollapsedWidth}` : `md:ml-${sidebarWidth}`
          } overflow-y-auto`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;