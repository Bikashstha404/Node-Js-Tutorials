const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {np
  let transport = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "stha.bikam99@gmail.com",
      pass: "fbahfwsncqgettrv",
    },
  });

  let info = await transport.sendMail({
    from: "stha.bikam99@gmail.com",
    to: "stha.bikash404@gmail.com",
    subject: "Hello World", // Subject line
    text: "Hello world, I am from planet b", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log(`Message sent: ${info.messageId}`)
  res.json(info);
};

module.exports = sendMail;
