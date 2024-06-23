const express = require("express")
const userRouter = require("./Routes/user")
const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./Middlewares/index")

const app = express();
const port = 8000

connectMongoDb("mongodb://localhost/node_users")

app.use(express.urlencoded({ extended: false}))

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter)

app.listen(port, ()=>{
    console.log("Server Started")
})