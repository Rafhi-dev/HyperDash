import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SidebarMenuItem({ icon, label, badge, loc, subItems }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleItemClick = (e) => {
    if (subItems && subItems.length > 0) {
      e.preventDefault(); 
      setIsSubmenuOpen(!isSubmenuOpen);
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
      ) : (
        <a
          href="#"
          onClick={handleItemClick}
          className={`menu-item flex items-center p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer`}
          
          aria-haspopup={subItems && subItems.length > 0 ? "true" : undefined}
          aria-expanded={
            subItems && subItems.length > 0 ? isSubmenuOpen : undefined
          }
        >
          <FontAwesomeIcon icon={icon} className="w-6 text-center" />
          <span className="sidebar-text ml-3 flex-grow">{label}</span>
          {badge && (
            <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
              {badge}
            </span>
          )}
          {subItems && subItems.length > 0 && (
            <FontAwesomeIcon
              icon={isSubmenuOpen ? faChevronDown : faChevronRight}
              className="w-4 h-4 transition-transform duration-500"
            />
          )}
        </a>
      )}
      {subItems && subItems.length > 0 && isSubmenuOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          {subItems.map((subItem, index) => (
            <SidebarMenuItem
              key={subItem.loc || subItem.label || index}
              icon={subItem.icon}
              label={subItem.label}
              loc={subItem.loc}
              badge={subItem.badge}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarMenuItem;
