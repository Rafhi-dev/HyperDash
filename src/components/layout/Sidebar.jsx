import SidebarMenuItem from "./SidebarMenuItem";
import { useLocation } from "react-router-dom";

function Sidebar({
  isCollapsed,
  isMobile,
  setSidebarCollapsed,
  sections = [],
  footerItem,
}) {
  const markActive = (items, pathname) =>
    items.map((item) => ({
      ...item,
      isActive:
        pathname.endsWith(item.loc) ||
        (item.subItems &&
          item.subItems.some((sub) => pathname.endsWith(sub.loc))),
      subItems: item.subItems ? markActive(item.subItems, pathname) : undefined,
    }));

  const location = useLocation();

  return (
    <aside
      id="sidebar"
      aria-label="Sidebar Navigation"
      className={`
    flex flex-col bg-white border-r border-gray-300 shadow-md fixed top-14 left-0 bottom-0 z-10
    transition-all duration-600 ease-in-out
    ${isMobile ? "overflow-y-auto" : "overflow-hidden"}
    ${
      isMobile
        ? isCollapsed
          ? "w-16 -translate-x-full opacity-0"
          : "w-full translate-x-0 opacity-100"
        : isCollapsed
        ? "w-16"
        : "w-64"
    }
  `}
    >
      <div className="flex-1 overflow-y-auto">
        {sections.map((section, sectionIndex) => (
          <div key={section.title + sectionIndex}>
            <div className="px-2">
              <h2
                id={`sidebar-title-${sectionIndex}`}
                className={`text-sm font-bold text-gray-700 uppercase tracking-wider ${
                  isCollapsed ? "" : "py-2"
                }`}
              >
                {isCollapsed ? "" : section.title}
              </h2>
            </div>
            <ul className="space-y-1 px-2 py-2">
              {markActive(section.items, location.pathname).map(
                (item, itemIndex) => (
                  <SidebarMenuItem
                    key={item.label + itemIndex}
                    {...item}
                    setIsSidebarCollapsed={setSidebarCollapsed}
                    isSidebarCollapsed={isCollapsed}
                  />
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {footerItem && (
        <div
          className={`px-2 border-t border-gray-100 ${
            isCollapsed ? "flex justify-center" : ""
          }`}
        >
          <ul>
            <SidebarMenuItem
              {...footerItem}
              setIsSidebarCollapsed={setSidebarCollapsed}
              isSidebarCollapsed={isCollapsed}
            />
          </ul>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
