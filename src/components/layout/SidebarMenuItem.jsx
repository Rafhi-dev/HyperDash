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
  depth = 0 
}) {
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

  // Base classes untuk menu item
  const baseClasses = `
    group flex items-center w-full text-left rounded-lg transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  `;

  // Classes untuk padding berdasarkan depth
  const paddingClasses = depth === 0 ? "p-2" : "py-2 px-3";

  // Classes untuk warna dan hover state
  const colorClasses = isActive 
    ? "bg-blue-500 text-white shadow-md" 
    : depth > 0 
      ? "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
      : "text-gray-700 hover:bg-blue-200 hover:text-blue-700 hover:shadow-sm";

  // Classes untuk submenu container
  const submenuClasses = `
    mt-2 pt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
    ${depth === 0 ? "ml-4 pl-4" : "ml-2 pl-2"}
    ${isSubmenuOpen 
      ? "max-h-full opacity-100 visible" 
      : "max-h-0 opacity-0 invisible"
    }
  `;

  const renderContent = () => (
    <>
      <div className={`flex items-center min-w-0 flex-1 ${isSidebarCollapsed ? "justify-center" : "justify-start"}`}>
        <FontAwesomeIcon 
          icon={icon} 
          className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"}`}
        />
        <span className={`sidebar-text ml-3 font-medium truncate ${isSidebarCollapsed ? "hidden" : "block"}`}>
          {label}
        </span>
      </div>
      
      {badge && !isSidebarCollapsed && (
        <span className={`
          ml-2 px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0
          ${isActive 
            ? "bg-blue-500 text-white" 
            : "bg-blue-100 text-blue-800 group-hover:bg-blue-200"
          }
        `}>
          {badge}
        </span>
      )}
      
      {subItems && subItems.length > 0 && !isSidebarCollapsed && (
        <FontAwesomeIcon
          icon={isSubmenuOpen ? faChevronDown : faChevronRight}
          className={`
            w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-200
            ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-600"}
            ${isSubmenuOpen ? "rotate-0" : "rotate-0"}
          `}
        />
      )}
    </>
  );

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
      ) : subItems && subItems.length > 0 ? (
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
        <div className={`${baseClasses} ${paddingClasses} ${colorClasses} cursor-default`}>
          {renderContent()}
        </div>
      )}

      {subItems && subItems.length > 0 && !isSidebarCollapsed && (
        <div className="relative">
          {/* Garis vertikal untuk indikator submenu */}
          <div className={`absolute left-6 top-0 bottom-0 w-px bg-blue-300 ${isSubmenuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
          
          <ul
            className={submenuClasses}
            aria-hidden={!isSubmenuOpen}
            role="menu"
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
                isSidebarCollapsed={isSidebarCollapsed}
                isActive={subItem.isActive}
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