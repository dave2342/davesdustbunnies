export default function SlideOutMenu({
  open,
  toggleMenu,
  showHome,
  showContact,
  showAbout,
  showPortfolio,
}) {
  const closeMenu = () => toggleMenu(false);

  return (
    <>
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white max-w-[160px] z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={closeMenu} className="text-2xl leading-none">
            ×
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 text-gray-700">
          <button
            className="w-full block px-2 text-left"
            onClick={() => {
              closeMenu();
              showHome();
            }}
          >
            🏠 Home
          </button>
          <button
            className="w-full block px-2 text-left"
            onClick={() => {
              closeMenu();
              showContact();
            }}
          >
            ✉️ Contact
          </button>
          <button
            className="w-full block px-2 text-left"
            onClick={() => {
              closeMenu();
              showAbout();
            }}
          >
            👋 About
          </button>

          <button
            className="w-full block px-2 text-left"
            onClick={() => {
              closeMenu();
              showPortfolio();
            }}
          >
            Portfolio
          </button>

          {/* <a href="#reviews" onClick={closeMenu}>
            ⭐ Testimonials
          </a> */}
        </nav>
      </div>
    </>
  );
}
