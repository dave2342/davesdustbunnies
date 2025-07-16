export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({ message: "Hello from API" });
  } else {
    return res.status(405).json({ message: "Only POST allowed" });
  }
}
