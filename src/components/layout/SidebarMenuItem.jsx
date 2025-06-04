import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SidebarMenuItem({ icon, label, badge, loc, subItems, setIsSidebarCollapsed, isSidebarCollapsed }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Tutup submenu jika sidebar collapse
  useEffect(() => {
    if (isSidebarCollapsed) {
      setIsSubmenuOpen(false);
    }
  }, [isSidebarCollapsed]);

  const handleItemClick = (e) => {
    if (subItems && subItems.length > 0) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
      setIsSidebarCollapsed(false); // Expand sidebar jika submenu diklik
    }
  };

  return (
    <li>
      {loc && (!subItems || subItems.length === 0) ? (
        <Link
          to={loc}
          className={`menu-item flex items-center p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer`}
        >
          <FontAwesomeIcon icon={icon} className="w-6 text-center" />
          <span className="sidebar-text ml-3 flex-grow">{label}</span>
          {badge && (
            <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
              {badge}
            </span>
          )}
        </Link>
      ) : subItems && subItems.length > 0 ? (
        <button
          type="button"
          onClick={handleItemClick}
          className={`menu-item flex items-center p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer w-full text-left`}
          aria-haspopup="true"
          aria-expanded={isSubmenuOpen}
        >
          <FontAwesomeIcon icon={icon} className="w-6 text-center" />
          <span className="sidebar-text ml-3 flex-grow">{label}</span>
          {badge && (
            <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
              {badge}
            </span>
          )}
          <FontAwesomeIcon
            icon={isSubmenuOpen ? faChevronDown : faChevronRight}
            className="w-4 h-4 transition-transform duration-500"
          />
        </button>
      ) : (
        <Link
          to={loc}
          className={`menu-item flex items-center p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer`}
        >
          <FontAwesomeIcon icon={icon} className="w-6 text-center" />
          <span className="sidebar-text ml-3 flex-grow">{label}</span>
          {badge && (
            <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
              {badge}
            </span>
          )}
        </Link>
      )}

      {subItems && subItems.length > 0 && (
        <ul
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-500 ease-in-out ${
            isSubmenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }         `}
          aria-hidden={!isSubmenuOpen}
        >
          {subItems.map((subItem, index) => (
            <SidebarMenuItem
              key={subItem.loc || subItem.label || index}
              icon={subItem.icon}
              label={subItem.label}
              loc={subItem.loc}
              badge={subItem.badge}
              subItems={subItem.subItems}
              setIsSidebarCollapsed={setIsSidebarCollapsed}
              isSidebarCollapsed={isSidebarCollapsed} // <-- penting!
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarMenuItem;
