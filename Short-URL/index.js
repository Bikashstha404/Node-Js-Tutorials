const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRouter")
const URL = require("./models/url")
const {connectToMongoDb} = require("./connect")


const app = express();
const PORT = 8000;


connectToMongoDb("mongodb://localhost:27017/short-url")
.then(console.log("MongodDb Connected"))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

// app.get("/test", async(req,res)=>{
//     const allUrls = await URL.find({});
//     return res.render("home", {
//         urls: allUrls
//     });
// })
app.use("/url", urlRoute)
app.use("/", staticRoute)

app.get("/:shortId", async(req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push:{
        visitHistory: {
            timestamp: Date.now()
        }
    }})
    res.end("hello")
    res.redirect(entry.redirectUrl)
})
app.listen(PORT,()=> console.log(`Server Started at PORT: ${PORT}`))