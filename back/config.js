require("dotenv").config;

module.exports = {
  USER: "process.env.Email.User",
  PASS: "process.env.Email.Pass",
  Email_Recipient: "process.env.Email.Recipient",
  HOST: "us2.smtp.mailhostbox.com",
  PORT: 3000,
  NAME: "desteurpiepenchefall",
};
