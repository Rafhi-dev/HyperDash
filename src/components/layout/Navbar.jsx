// src/components/Navbar.jsx (atau path yang sesuai)
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faUserCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isSidebarCollapsed, setIsSidebarCollapsed }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-slate-800 shadow-md text-white px-2 fixed w-full top-0 z-20 h-14 flex items-center">
      
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Tombol Sidebar toggle dan logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none p-1 border border-transparent text-white rounded-md hover:bg-gray-100/20"
            aria-label="Toggle sidebar"
            aria-expanded={!isSidebarCollapsed} 
            aria-controls="sidebar"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
          {/* Pastikan ukuran logo tidak melebihi tinggi navbar. Contoh: h-8 (2rem) */}
          <img src='./src/assets/react.svg' alt="Company Logo" className="h-8 w-auto" />
        <p className='text-lg italic decoration-white font-bold h-8 w-auto'>HyperDash</p>
        </div>

        {/* Profile dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none p-1 rounded-lg hover:bg-gray-100/20"
            aria-label="Profile menu"
            aria-expanded={dropdownOpen}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
              <FontAwesomeIcon icon={faUser} className="text-sm" />
            </div>
            <span className="ml-2 hidden md:inline">Admin</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30 border border-gray-100">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">Signed in as</p>
                <p className="text-sm text-gray-500 truncate">admin@example.com</p>
              </div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <FontAwesomeIcon icon={faUserCircle} className="mr-2" /> Account
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-100">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;