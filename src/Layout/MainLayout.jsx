import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { useMediaQuery } from "react-responsive";
import {
  sidebarFooter,
  sidebarSections,
} from "../components/layout/MenuConfig";

function MainLayout({ isSidebarCollapsed, setIsSidebarCollapsed }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Pastikan tinggi navbar konsisten dengan Sidebar (misal h-14 = 56px)
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
          sections={sidebarSections}
          footerItem={sidebarFooter}
        />
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isMobile ? "ml-0" : isSidebarCollapsed ? "md:ml-16" : "md:ml-64"
          } overflow-y-auto`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
