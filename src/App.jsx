import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import SlideOutMenu from "./components/SlideOutMenu";
import dustbunny from "./assets/dustbunny.png";
import DesktopDropdown from "./components/DesktopDropdown";
import drinkAppImage from "./assets/drink-app.png";

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

  function showPortfolio() {
    setPage("portfolio");
  }

  return (
    <>
      <SlideOutMenu
        open={menuOpen}
        toggleMenu={setMenuOpen}
        showContact={showContact}
        showHome={showHome}
        showAbout={showAbout}
        showPortfolio={showPortfolio}
      />
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <header className="bg-sky-700 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="flex items-center overflow-hidden">
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
                showPortfolio={showPortfolio}
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
            <section className="bg-gray-50 py-10 px-4 text-center">
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

        {page === "about" && (
          <>
            <section className="bg-gray-50 py-10 px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">About Dave</h2>
              <p className="text-lg max-w-3xl mx-auto text-left mb-4">
                In 2020, I decided to establish Dave's Dust Bunnies, with the
                support of both of my siblings. While I was unsure about doing
                this solo at the beginning, I've found a passion for detailing
                homes as best I can, and creating a clean, relaxing environment
                for my clients!
              </p>

              <p className="text-lg max-w-3xl mx-auto text-left mb-4">
                Also in 2020, I began my journey at Southern New Hampshire
                University and majored in computer science. I recently graduated
                in May 2025. While my long-term goal is to build a career in
                software development, I absolutely love what I do now: bring
                peace of mind to people by transforming their spaces.
              </p>

              <p className="text-lg max-w-3xl mx-auto text-left">
                Whether I'm scrubbing baseboards or writing JavaScript, I'm all
                about attention to detail, problem-solving, and helping others.
                Thanks for stopping by!
              </p>
            </section>
          </>
        )}

        {page === "portfolio" && (
          <section className="bg-gray-50 py-10 px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              My Tech Projects
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card: Drink Generator */}
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-start">
                <a
                  href="https://drink-generator-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={drinkAppImage}
                    alt="Drink Generator App Screenshot"
                    className="block w-40 h-36 sm:w-48 sm:h-44 md:w-64 md:h-60 lg:w-72 lg:h-68 shrink-0 cursor-pointer hover:opacity-90 transition"
                  />
                </a>

                <h3 className="text-l font-semibold mb-2">
                  Drink Generator App
                </h3>
                <p className="text-gray-700 mb-4">
                  A fun React app that generates random drink recipes...
                </p>

                <a
                  href="https://drink-generator-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800"
                >
                  View Project
                </a>
              </div>
            </div>
          </section>
        )}

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
