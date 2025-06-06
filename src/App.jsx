import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dave’s Dust Bunnies</h1>
          <a
            href="mailto:youremail@example.com"
            className="bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-blue-100"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          A Cleaner Home, the Easy Way 🧽
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Friendly, affordable cleaning services you can count on. Serving
          Leicester, MA and nearby areas.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">What We Do</h3>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-gray-100 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">
              🏠 Standard House Cleaning
            </h4>
            <p>
              Dusting, sweeping, mopping, bathrooms, kitchens — everything you
              expect from a pro clean.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">🧹 Deep Cleaning</h4>
            <p>
              Spring cleaning, move-in/move-out jobs, or a full top-to-bottom
              reset.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">
              🏢 Small Office Cleaning
            </h4>
            <p>
              Keep your workspaces tidy, sanitized, and fresh with our flexible
              scheduling.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">🧴 Add-On Services</h4>
            <p>
              Oven cleaning, fridge cleaning, inside windows, and more — just
              ask!
            </p>
          </li>
        </ul>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-blue-900 text-white py-6">
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
  );
}
