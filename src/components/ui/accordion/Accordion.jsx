import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full">
      {items.map((item, idx) => (
        <div key={idx} className="border-b-2 border-gray-300">
          <button
            className={`w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none transition-colors hover:bg-gray-100`}
            onClick={() => handleToggle(idx)}
          >
            <span className="font-semibold ">{item.title}</span>
            <span className="ml-2">
              <FontAwesomeIcon
                className={`text-blue-700 transform transition-transform duration-300 ${
                  openIndex === idx ? `rotate-180` : ``
                }`}
                icon={faChevronDown}
                size="sm"
              />
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
