//API Post Requests

//friendsList Variable
//const friendsList = ;

module.exports = function (app) {
    //GET - Show all possible friends
    app.GET("/api/friends", function (req, res) {
        res.json(friendsList)
    })

    //POST - Handle incoming results and check compatability
    app.post("/api/friends", function (req, res) {



    });

    //POST - Clear the survey
    app.post("/api/clear", function (req, res) {

        res.json({
            ok: true
        });
    });
};