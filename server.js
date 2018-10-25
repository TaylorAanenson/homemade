// requiring packages
var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config()

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

app.get("/", function(req, res) {
  connection.query("SELECT * FROM users", function(error, result, body) {
    if (error) console.log(error);
    res.json(result);
  });
});

// HERE, WE STILL NEED TO ENCRYPT PASSWORDS
app.post("/login", function(req, res) {
	console.log("Line 57");
	console.log(req.body);
  var query = "SELECT * FROM users WHERE username = ? AND password = ?";

  connection.query(query, [req.body.username, req.body.password], function(error, result, body) {
		console.log("server line 61");
		console.log(result);
    if (error) console.log(error);
    console.log(result.length);

		// need to salt the encrypted password in database
		// before we can do compareSync...
		// This is because we manually put in
		// passwords into the database and they are not encrypted
		// if (!bcrypt.compareSync(req.body.password, result.password)) return res.status(401).json({ error: 'incorrect password ' });

		var payload = {
				_id: result._id,
				username: result.username
		};

		var token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' });

		return res.json({
				message: 'successfuly authenticated',
				token: token,
				bool: true
		});

  });
});

// This still needs to be updated
app.post("/register", function(req, res) {
  console.log("hi");
  console.log(req.body);
  var queryCheck = "SELECT * FROM users WHERE username = ? AND email = ?";
  connection.query(queryCheck, [req.body.username, req.body.email], function(error, result, body) {
    if (error) console.log(error);
    console.log(result.length);
    if(result.length == 0) {
			var queryInsert = "INSERT INTO users (username, email, password, firstname, lastname) VALUES (?,?,?,'x','x')";

			connection.query(queryInsert, [req.body.username, req.body.password, req.body.email], function(error, result, body) {
					res.json(true);
			});
    }
			else {
	      res.json(false);
	    }
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
