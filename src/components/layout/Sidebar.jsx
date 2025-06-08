import {
  faGithub,
  faPage4,
  faPagelines,
  faUikit,
  faWpforms,
} from "@fortawesome/free-brands-svg-icons";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  faGauge,
  faTable,
  faChartLine,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Sidebar({ isCollapsed, isMobile, setSidebarCollapsed }) {
  const location = useLocation();

  const menuItems = [
    //edit atau tambahkan menu sidbar di sini ya gais
    { icon: faGauge, label: "Dashboard", subItems: [
      { label: "Dashboard 1", loc: "/" },
      { label: "Ujicoba", loc: "/ujicoba"},
    ]},
    {
      icon: faFile,
      label: "Pages",
      subItems: [
        { label: "Login", loc: "/login" },
        { label: "Register", loc: "/register" },
        { label: "Forgot Password", loc: "/forgot-password" },
        { label: "Error 404", loc: "/404" },
        { label: "Blank", loc: "/blank" },
      ],
    },
    {
      icon: faChartLine,
      label: "Chart",
      subItems: [
        { label: "Line Chart", loc: "/line-chart" },
        { label: "Bar Chart", loc: "/bar-chart" },
        { label: "Pie Chart", loc: "/Pie-chart" },
      ],
    },
    {
      icon: faWpforms,
      label: "Form",
      subItems: [
        {
          label: "Form Elements",
          subItems: [
            { label: "Input", loc: "/form-input" },
            { label: "Textarea", loc: "/form-textarea" },
            { label: "Select", loc: "/form-select" },
            { label: "Checkbox", loc: "/form-checkbox" },
            { label: "Radio", loc: "/form-radio" },
            { label: "Switch", loc: "/form-switch" },
          ],
        },
        { label: "Form Layout", loc: "/layout-form" },
      ],
    },
    {
      icon: faTable,
      label: "Tables",
      subItems: [
        { label: "Basic Tables", loc: "/basic-tables" },
        { label: "Data Tables", loc: "/data-tables" },
      ],
    },
    {
      icon: faUikit,
      label: "UI Elements",
      subItems: [
        { label: "Alerts", loc: "#" },
        { label: "Badges", loc: "#" },
        { label: "Buttons", loc: "#" },
        { label: "Buttons Group", loc: "#" },
        { label: "Cards", loc: "#" },
        { label: "Carousel", loc: "#" },
        { label: "Modals", loc: "#" },
        { label: "Dropdowns", loc: "#" },
        { label: "Notification", loc: "#" },
        { label: "Popovers", loc: "#" },
        { label: "Tabs", loc: "#" },
      ],
    },
  ];

  const markActive = (items) =>
    items.map((item) => ({
      ...item,
      isActive: item.loc === location.pathname,
      subItems: item.subItems ? markActive(item.subItems) : undefined,
    }));

  const menuItemsWithActive = markActive(menuItems);

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
      <div className="mb-4 px-2">
        <h2
          id="sidebar-title"
          className={`text-lg font-semibold text-gray-500 uppercase tracking-wider ${
            isCollapsed ? "text-center text-xs" : ""
          }`}
        >
          {isCollapsed ? "Menu" : "Menu"}
        </h2>
      </div>

      {/* Area scroll hanya untuk menu */}
      <div className="flex-1 px-2 overflow-y-auto">
        <ul className="space-y-1">
          {menuItemsWithActive.map((item, idx) => (
            <SidebarMenuItem
              key={idx}
              {...item}
              setIsSidebarCollapsed={setSidebarCollapsed}
              isSidebarCollapsed={isCollapsed}
            />
          ))}
        </ul>
      </div>

      {/* Footer tetap */}
      <div
        className={`px-2 border-t border-gray-100 ${
          isCollapsed ? "flex justify-center" : ""
        }`}
      >
        <ul>
          <SidebarMenuItem
            icon={faGithub}
            label={"follow me on Github"}
            loc={"/github"}
            setIsSidebarCollapsed={setSidebarCollapsed}
            isSidebarCollapsed={isCollapsed}
          />
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
