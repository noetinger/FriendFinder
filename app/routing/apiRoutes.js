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
        //grabs the new friend's scores to compare with friends in friendList array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        //var friendCount = 0;
        var bestMatch = 0;

        //runs through all current friends in list
        for (var i = 0; i < friendsList.length; i++) {
            var scoresDifferential = 0;
            //run through scores to compare friends
            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDifferential += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into scoresArray
            scoresArray.push(scoresDifferential);
        }

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //return bestMatch data
        var newFriend = friendsList[bestMatch];
        res.json(newFriend);
        console.log(req.body);
        friendsList.push(req.body);
    });

    //POST - Clear the survey
    app.post("/api/clear", function (req, res) {
        friendsList.length = 0;
        res.json({
            ok: true
        });
    });
};