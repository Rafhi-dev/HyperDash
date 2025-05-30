import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Untuk ikon dropdown

function SidebarMenuItem({ icon, label, badge, loc, subItems }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleItemClick = (e) => {
    if (subItems && subItems.length > 0) {
      e.preventDefault(); // Mencegah navigasi jika ini adalah item dengan submenu
      setIsSubmenuOpen(!isSubmenuOpen);
    }
    // Jika tidak ada subItems, navigasi standar melalui href akan terjadi
  };

  return (
    <li> {/* Mengubah <a> menjadi <li> untuk struktur yang lebih baik dengan submenu <ul> */}
      <a
        href={loc || '#'}
        onClick={handleItemClick}
        className={`menu-item flex items-center p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer`}
      >
        <FontAwesomeIcon icon={icon} className="w-6 text-center" />
        <span className="sidebar-text ml-3 flex-grow">{label}</span> {/* Tambahkan flex-grow agar badge dan ikon dropdown ke kanan */}
        {badge && (
          <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2"> 
            {badge}
          </span>
        )}
        {subItems && subItems.length > 0 && (
          <FontAwesomeIcon
            icon={isSubmenuOpen ? faChevronDown : faChevronRight}
            className="w-4 h-4 transition-transform duration-300"
          />
        )}
      </a>
      {subItems && subItems.length > 0 && isSubmenuOpen && (
        <ul className="pl-6 mt-1 space-y-1"> {/* Styling untuk submenu */}
          {subItems.map((subItem, index) => (
            <SidebarMenuItem // Rekursif menggunakan SidebarMenuItem untuk sub-item
              key={index}
              icon={subItem.icon}
              label={subItem.label}
              loc={subItem.loc}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarMenuItem