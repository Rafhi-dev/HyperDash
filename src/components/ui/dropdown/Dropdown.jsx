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

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggle} className="cursor-pointer">
        {toggleButton}
      </div>
      {open && (
        <div
          className={`absolute ${align}-0 mt-2 bg-white rounded-md shadow-lg z-60 border border-gray-100`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
