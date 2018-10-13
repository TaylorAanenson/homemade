// requiring packages
var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");
var router = express.Router();

var PORT = 3000;

// creating mysql connection
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "homemadefood_db"
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.post("/", function(req, res) {
  res.send({ message: "Testing to get data" });

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
