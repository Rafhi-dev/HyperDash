// src/layouts/MainLayout.jsx (atau path yang sesuai)
import React from 'react'; // Tambahkan import React jika belum ada
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Pastikan komponen ini ada
import Sidebar from "./Sidebar"; // Pastikan komponen ini ada
import { useMediaQuery } from "react-responsive";

function MainLayout({ // Props ini mungkin di-manage oleh state di App.js atau context
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Pastikan tinggi Navbar konsisten, misal h-14 (56px) atau h-16 (64px)
  const navbarHeight = 14; // Representasi Tailwind h-14
  const navbarHeightOffsetClass = `pt-${navbarHeight}`; // menjadi pt-14

  // Lebar Sidebar, misal w-64 (256px) dan w-16 (64px) saat collapsed
  const sidebarWidth = 64; // Representasi md:ml-64
  const sidebarCollapsedWidth = 16; // Representasi md:ml-16

  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased"> {/* Ubah bg ke gray-100 agar konten putih terlihat */}
      <Navbar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
        // Navbar kemungkinan position:fixed atau z-index tinggi
      />
      {/* Container untuk sidebar dan konten utama */}
      <div className={`flex ${navbarHeightOffsetClass}`}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isMobile={isMobile}
          setSidebarCollapsed={setIsSidebarCollapsed}
          // Sidebar kemungkinan position:fixed atau sticky
        />
        {/* Konten Utama */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isMobile ? 'ml-0' // Di mobile, sidebar mungkin overlay, jadi main content tidak perlu margin
            : isSidebarCollapsed ? `md:ml-${sidebarCollapsedWidth}` : `md:ml-${sidebarWidth}`
          } overflow-y-auto`} // Tambahkan overflow-y-auto jika konten bisa panjang
          // Padding utama untuk konten bisa di sini atau di halaman (MyLinePrev)
          // Jika di sini: className="... p-6"
          // Jika di halaman: MyLinePrev punya div terluar dengan p-6
        >
          <Outlet /> {/* Halaman seperti MyLinePrev akan dirender di sini */}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;