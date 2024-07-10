const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (req, res) => {
  const email = "stha.bikam404@gmail.com";
  const subject = "Welcome to the firm";
  const html =
    "<h1> Hello sir, </h1> <i><b>We would like to inform you that you have been selected for the performance.</b></i>";

  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODE_MAILER_EMAIL,
    to: email,
    subject: subject,
    html: html,
  };

  try {
    const response = await transport.sendMail(mailOptions);
    res.send(response);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

module.exports = sendEmail;
