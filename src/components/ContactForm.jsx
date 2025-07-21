import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!statusMessage) return;

    const timer = setTimeout(() => {
      setStatusMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [statusMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ch17k2f", // e.g. "service_y8z8rko"
        "template_chpaqzr", // e.g. "template_contact"
        form.current,
        "XjmQTUQatqb5XPiHK" // e.g. "UzslD3Fxxx"
      )
      .then(
        () => {
          setStatusMessage(
            "Thank you for contacting us! We will get back to you as soon as possible!"
          );
          e.target.reset();
        },
        (error) => {
          setStatusMessage("There was a problem sending your message.");
          console.error(error);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-50 rounded shadow space-y-4"
    >
      <input
        name="title"
        placeholder="Subject"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />
      <input
        name="name" // must match {{name}} in your template
        placeholder="Your Name"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />
      <textarea
        name="message" // must match {{message}} in your template
        placeholder="Your Message"
        required
        rows={4}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Send
      </button>

      {statusMessage && (
        <p className="mt-4 text-center text-green-700">{statusMessage}</p>
      )}
    </form>
  );
}
