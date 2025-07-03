import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faUserCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../ui/dropdown/Dropdown";
import { Link } from "react-router-dom";
import Input from "../form/input/input";

const Navbar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <nav className="bg-white shadow-md text-black px-2 fixed w-full top-0 z-40 h-14 flex items-center">
      <div className="flex items-center w-full">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none p-1 border border-transparent text-black rounded-md hover:border-gray-700"
            aria-label="Toggle sidebar"
            aria-expanded={!isSidebarCollapsed}
            aria-controls="sidebar"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>

          <img src="./src/assets/react.svg" alt="Logo" className="h-8 w-auto" />
          <p className="text-lg italic decoration-white font-bold h-8 w-auto">
            Moonlight
          </p>
        </div>

        <div className="flex min-w-0 items-center ml-auto space-x-2">
          <div className="flex-1">
            <Input
              placeholder={"Search.."}
              w="w-70"
              className="hidden md:inline"
            />
          </div>

          <Dropdown
            toggleButton={
              <button
                className="flex items-center p-1 rounded-lg border border-transparent hover:border-gray-700"
                aria-label="Profile menu"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={faUser} className="text-sm" />
                </div>
                <span className="ml-2 hidden md:inline">Profile</span>
              </button>
            }
          >
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">Signed in as</p>
              <p className="text-sm text-gray-500 truncate">
                admin@example.com
              </p>
            </div>
            <Link
              to="/account"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" /> Account
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-100"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </Link>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
