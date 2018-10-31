// requiring packages
var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");
var router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config();

var PORT = 3000;

//you need this to be able to process information sent to a POST route
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//imported routes
var postRoute = require("./routes/post");
app.use("/", postRoute);

var userAuthRoute = require("./routes/userAuth");
app.use("/", userAuthRoute);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
