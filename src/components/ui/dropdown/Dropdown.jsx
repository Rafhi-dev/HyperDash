import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({
  toggleButton,
  buttonName = "Dropdown",
  value,
  children,
  align = "right",
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

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
    <button
      onClick={toggle}
      className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg outline-none focus:outline-none flex items-center"
    >
      {buttonName}
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`ml-2 transform transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {toggleButton ? (
        <div onClick={toggle} className="cursor-pointer">
          {toggleButton}
        </div>
      ) : (
        triggerButton
      )}

      {open && (
        <div
          className={`absolute ${align}-0 mt-2 bg-white rounded-md shadow-lg border border-gray-300 z-50 w-max min-w-full transition`}
        >
          {value && value.length > 0
            ? value.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-3" />
                  {item.value}
                </Link>
              ))
            : children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
