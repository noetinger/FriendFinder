//API Post Requests
const path = require("path")

//friendsList Variable
const friendsList = require("../data/friends");

module.exports = function (app) {
    //GET - Show all possible friends
    app.get("/api/friendsList", function (req, res) {
        console.log("Got friends list - apiRoutes 10")
        res.json(friendsList)
    })

    //POST - Handle incoming results and check compatability
    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        friendsList.push(req.body);
        res.json(true);
    });

    //POST - Clear the survey
    // app.post("/api/clear", function (req, res) {
    //     friendsList.length = 0;
    //     res.json({
    //         ok: true
    //     });
    // });
};