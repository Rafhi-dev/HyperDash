import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`py-2 px-4 text-md font-medium ${
              activeTab === tab.label
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.icon ? <FontAwesomeIcon icon={tab.icon} /> : ""} {tab.label}
          </button>
        ))}
      </div>
      <div className="p-2 flex-1">
        {tabs.map((tab) =>
          activeTab === tab.label ? (
            <div key={tab.label}>{tab.content}</div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
