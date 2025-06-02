import SidebarMenuItem from './SidebarMenuItem';
import {
  faGauge,
  faUser,
  faCog,
  faEnvelope,
  faCalendar,
  faQuestionCircle,
  faInbox, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ isCollapsed }) {
  // Buat daftar item menu sidebar
  // dengan ikon, label, lokasi (loc), dan sub-items jika ada
  const menuItems = [
    { icon: faGauge, label: "Dashboard", loc: "/home" },
    { icon: faUser, label: "Profile", loc: "/" },
    { icon: faCog, label: "Settings" },
    {
      icon: faEnvelope,
      label: "Messages",
      badge: "5",
      // loc untuk parent Messages bisa dihilangkan jika hanya berfungsi sebagai toggle
      subItems: [
        { icon: faInbox, label: "All Inbox", loc: "/messages/inbox" },
        { icon: faPaperPlane, label: "Sent", loc: "/messages/sent" },
      ]
    },
    { icon: faCalendar, label: "Calendar"},
  ];


  return (
    <aside
      id="sidebar"
      aria-label="Sidebar Navigation"
      className={`bg-white shadow-md h-[calc(100vh-4rem)] p-4 fixed top-16 left-0 z-10 overflow-y-auto transition-all duration-300
        ${isCollapsed ? 'w-20 sidebar-collapsed' : 'w-60'}`}
    >
      <div className="mb-4 px-2">
        <h2 id="sidebar-title" className={`text-lg font-semibold text-gray-500 uppercase tracking-wider ${isCollapsed ? 'text-center text-xs' : ''}`}>
          {isCollapsed ? 'Menu' : 'Menu'}
        </h2>
      </div>

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

      <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <ul><SidebarMenuItem icon={faQuestionCircle} label="Help & Support" /></ul>
      </div>
    </aside>
  );
}

export default Sidebar;