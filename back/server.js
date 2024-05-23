require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
//const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");

const port = process.env.port || 5000;
const app = express();

app.use(bodyParser.json());
//app.use(
// bodyParser.urlencoded({
//  extended: true,
// })
//);
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/submit-form", (req, res) => {
  const { name, surname, object, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nSurname: ${surname}\nObject: ${object}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email", error);
      return res.status(500).json({
        success: false,
        message: "Error sending email",

        error: error.message,
      });
    } else {
      console.log("Email sent:" + info.response);
      return res.json({
        success: true,
        message: "Form data received and email sent successfully",
        data: { name, surname, object, message },
      });
    }
  });
});

app
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on(`error`, (err) => {
    console.error("server error:", err);
  });
