import { useState, useRef, useEffect } from "react";

export default function DesktopDropdown({ showContact, showHome }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-white text-blue-900 font-semibold px-3 py-2 rounded hover:bg-blue-100"
      >
        ☰
      </button>

      {open && (
        <div className="absolute text-black right-0 mt-2 w-40 bg-sky-50 rounded shadow-lg z-50">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-sky-100"
            onClick={() => {
              setOpen(false);
              showHome();
            }}
          >
            Home
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-sky-100"
            onClick={() => {
              setOpen(false);
              showContact();
            }}
          >
            Contact
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-sky-100"
            onClick={() => setOpen(false)}
          >
            About
          </a>
        </div>
      )}
    </div>
  );
}
