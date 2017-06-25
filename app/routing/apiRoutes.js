//BRINGS IN DATA
// =============================================================

var friendList = require("../data/friends.js");

// HANDLES SURVEY
// =============================================================
module.exports = function(app){
    //GET ROUTE TO DIPLAY ALL POSSIBLE FRIENDS
    app.get('api/friends', function(req, res){
        res.json(friendList);
    });
    //POST ROUTE THAT COMPARES SCORES, PICKS CLOSEST SCORE, AND PUSHES NEW ENTRY INTO DATA
    app.post('api/friends', function(req, res){
        var newEntry = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        for(var i=0; i<friendList.length; i++){
            var scoreDifference = 0;

            for( var j=0; j<newEntry.length; j++){
                scoresDifference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newEntry[j])));
            }
            scoresArray.push(scoresDifference);
        }

        // var lowestScore = math.min(scoresArray);
        // console.log(lowestScore);

        for(var i=0; i<scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
            }
        }

        var newFriend = friendList[bestMatch];
        res.json(newFriend);

        friendList.push(req.body);

    });
};