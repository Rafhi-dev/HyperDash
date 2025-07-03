import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SidebarMenuItem({
  icon,
  label,
  badge,
  loc,
  subItems,
  setIsSidebarCollapsed,
  isSidebarCollapsed,
  isActive = false,
  depth = 0,
}) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    if (isSidebarCollapsed) {
      setIsSubmenuOpen(false);
    }
  }, [isSidebarCollapsed]);

  const handleItemClick = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
    if (subItems?.length > 0) {
      setIsSidebarCollapsed(false);
    }
  };

  // ===========================
  // Utility Classes
  // ===========================

  const baseClasses = `
    group flex items-center w-full text-left rounded-lg
    transition-all duration-300
  `;

  const paddingClasses = depth === 0 ? "p-2" : "py-2 px-3";

  const colorClasses = isActive
    ? "bg-blue-500 text-white shadow-md"
    : depth > 0
    ? "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
    : "text-gray-700 hover:bg-blue-200 hover:text-blue-700 hover:shadow-sm";

  const submenuClasses = `
    mt-2 pt-1 space-y-1 overflow-hidden transform
    ${depth === 0 ? "ml-4 pl-4 border-l-2 border-gray-200" : "ml-2 pl-2"}
    ${
      isSubmenuOpen
        ? "max-h-[500px] opacity-100 visible translate-y-0 scale-y-100 duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        : "max-h-0 opacity-0 invisible -translate-y-1 scale-y-95 duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
    } 
    transition-all origin-top
  `;

  // ===========================
  // Content Renderer
  // ===========================

  const renderContent = () => (
    <>
      <div
        className={`flex items-center min-w-0 flex-1 ${
          isSidebarCollapsed ? "justify-center" : "justify-start"
        }`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`w-5 h-5 flex-shrink-0 ${
            isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"
          }`}
        />

        <span
          className={`ml-3 font-semibold text-gray-600 truncate ${
            isSidebarCollapsed ? "hidden" : "block"
          } ${
            isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"
          }`}
        >
          {label}
        </span>
      </div>

      {badge && !isSidebarCollapsed && (
        <span
          className={`
            ml-2 px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0
            ${
              isActive
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-800 group-hover:bg-blue-200"
            }
          `}
        >
          {badge}
        </span>
      )}

      {subItems?.length > 0 && !isSidebarCollapsed && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`
         w-4 h-4 ml-2 flex-shrink-0 transform transition-transform duration-300
         ${isSubmenuOpen ? "rotate-90" : ""}
         ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-600"}
       `}
        />
      )}
    </>
  );

  // ===========================
  // Main JSX
  // ===========================

  return (
    <li className="relative">
      {loc && (!subItems || subItems.length === 0) ? (
        <Link
          to={loc}
          className={`${baseClasses} ${paddingClasses} ${colorClasses}`}
          title={isSidebarCollapsed ? label : undefined}
        >
          {renderContent()}
        </Link>
      ) : subItems?.length > 0 ? (
        <button
          type="button"
          onClick={handleItemClick}
          className={`${baseClasses} ${paddingClasses} ${colorClasses}`}
          aria-haspopup="true"
          aria-expanded={isSubmenuOpen}
          title={isSidebarCollapsed ? label : undefined}
        >
          {renderContent()}
        </button>
      ) : (
        <div
          className={`${baseClasses} ${paddingClasses} ${colorClasses} cursor-default`}
        >
          {renderContent()}
        </div>
      )}

      {subItems?.length > 0 && !isSidebarCollapsed && (
        <div className="relative">
          <ul
            className={submenuClasses}
            aria-hidden={!isSubmenuOpen}
            role="menu"
          >
            {subItems.map((subItem, index) => (
              <SidebarMenuItem
                key={subItem.loc || subItem.label || index}
                {...subItem}
                setIsSidebarCollapsed={setIsSidebarCollapsed}
                isSidebarCollapsed={isSidebarCollapsed}
                depth={depth + 1}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default SidebarMenuItem;
