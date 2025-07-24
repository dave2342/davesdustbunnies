import { useState, useRef, useEffect } from "react";

export default function DesktopDropdown({ showContact, showHome, showAbout }) {
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
        className=" bg-white text-blue-900 font-semibold px-3 py-2 rounded hover:bg-blue-100"
      >
        ☰
      </button>

      {open && (
        <div className="absolute text-black right-0 mt-2 min-w-[100px] max-w-[120px] bg-sky-50 rounded shadow-lg z-50">
          <button
            className="w-full block px-4 py-2 hover:bg-sky-100"
            onClick={() => {
              setOpen(false);
              showHome();
            }}
          >
            Home
          </button>
          <button
            className="w-full block px-4 py-2 hover:bg-sky-100"
            onClick={() => {
              setOpen(false);
              showContact();
            }}
          >
            Contact
          </button>
          <button
            className="w-full block px-4 py-2 hover:bg-sky-100"
            onClick={() => {
              setOpen(false);
              showAbout();
            }}
          >
            About
          </button>
        </div>
      )}
    </div>
  );
}
