export default function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test: "test" }),
    });

    if (res.ok) {
      const json = await res.json();
      alert(json.message);
    } else {
      alert("Failed to send message.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" required />
      <input name="email" type="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
