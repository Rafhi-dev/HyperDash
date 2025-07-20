import Dropdown from "./Dropdown";
import Card from "../card/Cards";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faHome,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";

function DropdownView() {
  const withIcon = [
    { link: "#", value: "Example 1", icon: faUser },
    { link: "#", value: "Example 2", icon: faUser },
    { link: "#", value: "Example 3", icon: faUser },
  ];

  const noIcon = [
    { link: "#", value: "Example 1" },
    { link: "#", value: "Example 2" },
    { link: "#", value: "Example 3" },
  ];

  const breadCrumb = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Component" },
    { label: "Dropdown" },
  ];
  return (
    <>
      <div className="m-6 space-y-4">
        <Breadcrumb items={breadCrumb} />
        <div className="grid grid-cols md:grid-cols-3 gap-6 ">
          <Card className="h-100 border border-gray-300" title={"Dropdown"}>
            <Dropdown align="left" buttonName="Example 1" value={noIcon} />
          </Card>
          <Card
            className="h-100 border border-gray-300"
            title={"Dropdown with icon"}
          >
            <Dropdown align="left" buttonName="Example Icon" value={withIcon} />
          </Card>
          <Card
            className="h-100 border border-gray-300"
            title={"Dropdown Custom"}
          >
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
                <p className="text-sm font-medium text-gray-900">
                  Signed in as
                </p>
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
          </Card>
        </div>
      </div>
    </>
  );
}

export default DropdownView;
