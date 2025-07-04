import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, useCallback } from "react";

const Dropdown = ({ toggleButton, children, align = "right" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = useCallback(() => setOpen((open) => !open), []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const triggerButton = (
    <>
      <button className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg">
        Submit
        <span className={`ml-2`}>
          <FontAwesomeIcon
            className={`transform transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            icon={faChevronDown}
          />
        </span>
      </button>
    </>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggle} className="flex cursor-pointer">
        {toggleButton ? toggleButton : triggerButton}
      </div>
      {open && (
        <div
          className={`absolute ${align}-0 bg-white rounded-md shadow-lg z-60 border border-gray-300`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
