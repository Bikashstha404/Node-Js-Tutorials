// const http = require("http")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    return res.send("hello from home")
})

const myServer = http.createServer(app)

// myServer.listen(4004,()=>{
//     console.log("Server Started")
// })

app.listen(4004,() =>{
    console.log("Server Started")
})