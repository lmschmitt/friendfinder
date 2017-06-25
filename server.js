// DEPENDENCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// SETS UP EXPRESS APP
// =============================================================
var PORT = process.env.PORT || 3000;

// DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTE STUFF (What Michael eluded to in class) use with module.exports = function(app) in routes
// =============================================================
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


// START THE SERVER TO BEGIN LISTENING
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

