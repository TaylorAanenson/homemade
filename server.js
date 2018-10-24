// requiring packages
var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");
var router = express.Router();

//you need this to be able to process information sent to a POST route
	var bodyParser = require('body-parser');

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse application/json
	app.use(bodyParser.json());

var PORT = 3000;

// creating mysql connection
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
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

// HERE, WE STILL NEED TO ENCRYPT PASSWORDS
app.post("/", function(req, res) {
  console.log(req.body);
  var query = "SELECT * FROM users WHERE username = ? AND password = ?";

  connection.query(query, [req.body.username, req.body.password], function(error, results, body) {
    if (error) console.log(error);
    console.log(results.length);
    if(results.length == 0) {
      res.json(false);
    } else {
      res.json(true);
    }

  });
  // res.json({ message: "Testing to get data" });
});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM users", function(error, results, body) {
    if (error) console.log(error);
    res.json(results);
  });
});


//imported routes
var postRoute = require('./routes/post');
app.use('/', postRoute);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
