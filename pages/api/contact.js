// import nodemailer from "nodemailer";
// console.log("Env vars:", {
//   EMAIL_USER: process.env.EMAIL_USER,
//   EMAIL_PASS: process.env.EMAIL_PASS,
//   EMAIL_TO: process.env.EMAIL_TO,
// });

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   // Create a transporter object with your email service credentials
//   let transporter = nodemailer.createTransport({
//     service: "Gmail", // or another email service
//     auth: {
//       user: process.env.EMAIL_USER, // your Gmail address or SMTP user
//       pass: process.env.EMAIL_PASS, // your Gmail password or SMTP pass
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`, // sender address (form user)
//       to: process.env.EMAIL_TO, // your email to receive messages
//       subject: `New Contact Form Message from ${name}`,
//       text: message,
//       html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
//     });

//     return res.status(200).json({ message: "Message sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Failed to send message." });
//   }
// }
