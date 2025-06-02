import { Outlet } from "react-router-dom"; // Untuk merender child routes
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "react-responsive";


function MainLayout({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}) {

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="bg-gray-100 h-screen font-sans antialiased">
      <Navbar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <div className="flex pt-16">
        <Sidebar isCollapsed={isSidebarCollapsed} isMobile={isMobile}/>
        <main
          className={`flex-1 p-6 mt-0 transition-all duration-300 ${
            isSidebarCollapsed ? "md:ml-20" : "md:ml-60"
          }`}
          role="main"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;