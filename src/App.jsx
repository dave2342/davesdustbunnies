import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import SlideOutMenu from "./components/SlideOutMenu";
import dustbunny from "./assets/dustbunny.png";
import DesktopDropdown from "./components/DesktopDropdown";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (value) => setMenuOpen(value ?? !menuOpen);

  function showContact() {
    setPage("contact");
  }

  function showHome() {
    setPage("home");
  }

  function showAbout() {
    setPage("about");
  }

  return (
    <>
      <SlideOutMenu
        open={menuOpen}
        toggleMenu={setMenuOpen}
        showContact={showContact}
        showHome={showHome}
        showAbout={showAbout}
      />
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <header className="bg-sky-700 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2 overflow-hidden">
              <img
                src={dustbunny}
                alt="Logo Dust Bunny"
                className="w-16 h-14 sm:w-20 sm:h-20 md:w-28 md:h-24 shrink-0 cursor-pointer"
                onClick={showHome}
              />
              <h1
                className="text-2xl sm:text-3xl md:text-[48px] font-twinkle whitespace-nowrap cursor-pointer my-1"
                onClick={showHome}
              >
                Dave’s Dust Bunnies
              </h1>
            </div>

            <div className="hidden md:block">
              <DesktopDropdown
                showContact={showContact}
                showHome={showHome}
                showAbout={showAbout}
              />
            </div>

            <button
              onClick={() => toggleMenu()}
              className="md:hidden bg-white text-blue-900 font-semibold px-2 py-1 rounded hover:bg-blue-100"
            >
              ☰
            </button>
          </div>
        </header>

        {page === "home" && (
          <>
            <section className="bg-gray-50 py-20 px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">
                A Cleaner Home, the Easy Way 🧽
              </h2>
              <p className="text-lg max-w-xl mx-auto">
                Friendly, affordable cleaning services you can count on. Serving
                Central MA and nearby areas.
              </p>
            </section>

            <section className="max-w-4xl mx-auto py-16 px-4">
              <h3 className="text-2xl font-bold mb-6 text-center">
                What We Do
              </h3>
              <ul className="grid md:grid-cols-2 gap-6">
                <li className="bg-sky-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold text-lg mb-2">
                    🏠 Standard House Cleaning
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Dusting (high and low, including baseboards)</li>
                    <li>Vacuuming and mopping all floors</li>
                    <li>
                      Kitchen (counters, sink, fronts of cabinets and
                      appliances, inside microwave)
                    </li>
                    <li>
                      Bathroom (counters, mirror, sink, toilet, tub, shower,
                      fronts of cabinets)
                    </li>
                    <li>Emptying trash bins</li>
                  </ul>
                </li>
                <li className="bg-sky-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold text-lg mb-2">
                    🧹 Deep Cleaning
                  </h4>
                  <p>
                    Spring cleaning, move-in/move-out jobs, or a full
                    top-to-bottom reset.
                  </p>
                </li>

                <li className="bg-sky-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold text-lg mb-2">
                    🏢 Small Office Cleaning
                  </h4>
                  <p>
                    Keep your workspaces tidy, sanitized, and fresh with our
                    flexible scheduling.
                  </p>
                </li>
                <li className="bg-sky-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold text-lg mb-2">
                    🧴 Add-On Services
                  </h4>
                  <p>
                    Oven cleaning, fridge cleaning, windows, laundry, emptying
                    dishwashers and more - just ask!
                  </p>
                </li>
              </ul>
            </section>
          </>
        )}

        {page === "contact" && (
          <div>
            <ContactForm />
          </div>
        )}

        {page === "about" && <div>About Dave</div>}

        <footer className="bg-sky-700 text-white py-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="mb-2">📞 Call or text: (774) 253-5853</p>
            <p>
              📧 Email:{" "}
              <a href="mailto:davesdustbunnies@gmail.com" className="underline">
                DavesDustBunnies@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-300">
              © {new Date().getFullYear()} Dave’s Dust Bunnies. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
