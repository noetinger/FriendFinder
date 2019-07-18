//HTML Routes
const path = require("path");

module.exports = function (app) {

    // //survey
    // app.get("/api/survey.html", function (req, res) {
    //     res.sendFile(path.join(__dirname, "./public/survey.html"))
    // });

    //GET - Show survey
    app.get("/api/survey.html", function (req, res) {
        console.log("Got Survey - htmlRoutes 13")
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    })

    //home
    app.get("/home.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    //catch all
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}