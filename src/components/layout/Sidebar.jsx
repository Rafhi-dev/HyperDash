import SidebarMenuItem from "./SidebarMenuItem";
import {
  faGauge,
  faUser,
  faCog,
  faEnvelope,
  faCalendar,
  faQuestionCircle,
  faInbox,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isCollapsed, isMobile }) {
  const menuItems = [
    { icon: faGauge, label: "Dashboard", loc: "/home" },
    {
      icon: faUser,
      label: "Chart",
      subItems: [
        { icon: faInbox, label: "Line Chart", loc: "/line-chart" },
        { icon: faPaperPlane, label: "Bar Chart", loc: "/bar-chart" },
        { icon: faInbox, label: "Pie Chart", loc: "/Pie-chart" },
      ],
    },
    {
      icon: faCog,
      label: "Form",
      subItems: [
        { icon: faInbox, label: "Form Elements", loc: "/elements-form" },
        { icon: faPaperPlane, label: "Form Layout", loc: "/layout-form" },
      ],
    },
    {
      icon: faEnvelope,
      label: "Tables",
      subItems: [
        { icon: faInbox, label: "Basic Tables", loc: "/basic-tables" },
        { icon: faPaperPlane, label: "Data Tables", loc: "/data-tables" },
      ],
    },
    {
      icon: faCalendar,
      label: "UI Elements",
      subItems: [
        { icon: faInbox, label: "Buttons", loc: "/buttons" },
        { icon: faPaperPlane, label: "Cards", loc: "/cards" },
        { icon: faInbox, label: "Modals", loc: "/modals" },
        { icon: faPaperPlane, label: "Tabs", loc: "/tabs" },
        { icon: faInbox, label: "Buttons", loc: "/buttons" },
        { icon: faPaperPlane, label: "Cards", loc: "/cards" },
        { icon: faInbox, label: "Modals", loc: "/modals" },
        { icon: faPaperPlane, label: "Tabs", loc: "/tabs" },
        { icon: faInbox, label: "Buttons", loc: "/buttons" },
        { icon: faPaperPlane, label: "Cards", loc: "/cards" },
        { icon: faInbox, label: "Modals", loc: "/modals" },
        { icon: faPaperPlane, label: "Tabs", loc: "/tabs" },
      ],
    },
  ];

  return (
    <aside
      id="sidebar"
      aria-label="Sidebar Navigation"
      className={`flex flex-col bg-white shadow-md fixed top-16 left-0 bottom-0 z-10 transition-all duration-500
        ${
          isMobile
            ? isCollapsed
              ? "w-16 sidebar-hidden"
              : "w-full sidebar-visible"
            : isCollapsed
            ? "w-16 sidebar-collapsed"
            : "w-60"
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
          {menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              loc={item.loc}
              badge={item.badge}
              subItems={item.subItems}
            />
          ))}
        </ul>
      </div>

      {/* Footer tetap */}
      <div
        className={`px-2 border-t border-gray-100 pt-4 ${
          isCollapsed ? "flex justify-center" : ""
        }`}
      >
        <ul>
          <SidebarMenuItem
            icon={faQuestionCircle}
            label={"Help & Support"}
            loc={"/help"}
          />
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
