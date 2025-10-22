const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Start Server
app.listen(5000, () => console.log("Server Running"));

// Debugging environment variables
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS);

// Configure Nodemailer Transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS
  }
});

// Verify Transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Email Transport Error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Handle Contact Form Submission
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: "*****@gmail.com", // Replace with your email
    subject: "Contact Form Submission – Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error Sending Email:", error);
      res.status(500).json({ status: "Error", error });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
