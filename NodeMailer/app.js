const express = require("express");
const app = express();
let PORT = 5000;
const sendMail = require("./controllers/sendMail");
const sendEmail = require("./controllers/sendEmail");

app.get("/", (req, res) => {
  res.send("I am a server");
});



app.get("/sendMail", sendMail);
app.get("/sendEmail", sendEmail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Live at port ${PORT}`);
    });
  } catch (error) {}
};

start();
