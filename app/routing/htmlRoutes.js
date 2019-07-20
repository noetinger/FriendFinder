//HTML Routes
const path = require("path");

module.exports = function (app) {

    //GET - Show survey
    app.get("/api/survey.html", function (req, res) {
        console.log("Got Survey - htmlRoutes 13")
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    })

    //home
    app.get("/home.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    //Friends list
    app.get("/data/friends.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"))
    });

    //catch all
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}