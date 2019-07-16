//HTML Routes
//var path = require("path");

module.exports = function (app) {

    //survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/home.html"))
    });

    //home
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    //catch all
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}