import SidebarMenuItem from "./SidebarMenuItem";
import { useLocation } from "react-router-dom";

const markActive = (items, pathname) =>
  items.map((item) => ({
    ...item,
    isActive:
      item.loc === pathname ||
      (item.subItems && item.subItems.some((sub) => sub.loc === pathname)),
    subItems: item.subItems ? markActive(item.subItems, pathname) : undefined,
  }));

function Sidebar({
  isCollapsed,
  isMobile,
  setSidebarCollapsed,
  sections = [],
  footerItem,
}) {
  const location = useLocation();

  return (
    <aside
      id="sidebar"
      aria-label="Sidebar Navigation"
      className={`flex flex-col bg-white shadow-md fixed top-14 left-0 bottom-0 z-10 transition-all duration-500
        ${
          isMobile
            ? isCollapsed
              ? "w-16 sidebar-hidden"
              : "w-full sidebar-visible"
            : isCollapsed
            ? "w-16 sidebar-collapsed"
            : "w-64"
        }`}
    >
      <div className="flex-1 px-2 overflow-y-auto">
        {sections.map((section, sectionIndex) => (
          <div key={section.title + sectionIndex}>
            <div className="px-2">
              <h2
                id={`sidebar-title-${sectionIndex}`}
                className={`text-md font-semibold text-gray-500 uppercase tracking-wider ${
                  isCollapsed ? "text-center text-xs" : "py-2"
                }`}
              >
                {isCollapsed ? "" : section.title}
              </h2>
            </div>
            <ul className="space-y-1 py-2">
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
