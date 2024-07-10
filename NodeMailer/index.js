require('dotenv').config();
const express = require("express")
const app = express();
let PORT = 8000;

app.get("/", (req, res)=>{
    res.send("Hello Server")
})

app.get("/sendEmail", sendEmail)

app.listen(PORT, ()=>{
    console.log(`Server started at PORT ${PORT}`)
})