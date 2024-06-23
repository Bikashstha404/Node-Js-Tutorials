const shortid = require("shortid");
const URL = require("../models/url")
async function handleGenerateNewShortUrl(req, res){
    const body = req.body;
    console.log(body)
    if(!body.url){
        return res.status(400).json({error: "URL is required."})
    }
    const shortID = shortid();
    console.log(`${shortID}, ${body.url}`)
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.render("home", {
        id: shortID
    })
    //return res.json({id: shortID})
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}