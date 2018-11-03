// requiring packages
const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

//you need this to be able to process information sent to a POST route
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
router.use(bodyParser.json());

const PORT = 3000;

// creating mysql connection
const connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "password",
	database: "homemadefood_db"
});

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	next();
});

// HERE, WE STILL NEED TO ENCRYPT PASSWORDS
router.post("/login", function(req, res) {
	console.log("Line 57");
	console.log(req.body);
	const query = "SELECT * FROM users WHERE username = ?";

	connection.query(query, [req.body.username, req.body.password], function(
		error,
		result,
		body
	) {
		console.log("RESULT!!" + JSON.stringify(result[0].id));
		let data = result[0];
		console.log("DATA!!!" + data);

		if (!result) return res.status(404).json({ error: "user not found" });

		if (!bcrypt.compareSync(req.body.password, result[0].password))
			return res.status(401).json({ error: "incorrect password " });

		let payload = {
      isLoggedIn: true,
			_id: data.id,
			username: data.username,
			email: data.email,
			firstname: data.firstname,
			lastname: data.lastname,
			create_date: data.create_date
		};

		// let token = jwt.sign(payload, secretKey, {
		// 	expiresIn: "4h"
		// });

		// console.log("PAYLOAD!!" + JSON.stringify(payload));

		let token = jwt.sign({ data: payload }, secretKey, {
			expiresIn: "4h"
		});

		return res.json({
			message: "successfuly authenticated",
			token: token,
			bool: true,
			result: result
		});
	});
});

router.post("/register", function(req, res) {
	console.log("hi");
	console.log(req.body);
	const queryCheck = "SELECT * FROM users WHERE username = ? AND email = ?";
	connection.query(queryCheck, [req.body.username, req.body.email], function(
		error,
		result
	) {
		if (result.length != 0)
			return res.status(404).json({ error: "user already exists" });

		if (!req.body.password)
			return res.status(401).json({ error: "you need a password" });

		if (req.body.password.length <= 2)
			return res
				.status(401)
				.json({ error: "password length must be greater than 5" });

		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(req.body.password, salt, function(err, hash) {
				let queryInsert =
					"INSERT INTO users (username, email, password, firstname, lastname) VALUES (?,?,?,'x','x')";

				let payload = {
          isLoggedIn: true,
					_id: result._id,
					username: result.username,
					email: result.email,
					firstname: result.firstname,
					lastname: result.lastname,
					create_date: result.create_date
				};

				let token = jwt.sign(payload, secretKey, {
					expiresIn: "4h"
				});

				connection.query(
					queryInsert,
					[req.body.username, req.body.email, hash],
					function(error, user) {
						if (error) {
							res.send(error);
						} else {
							res.json({
								message: "successfully signed up",
								token: token,
								bool: true,
								username: req.body.username,
								email: req.body.email
							});
						}
					}
				);
			});
		});
	});
});

router.post("/verifier", function(req, res) {
  console.log("REQ!!" + req.body.token);
  
	let verifiedToken = jwt.verify(req.body.token, secretKey, function(
		err,
		decoded
	) {
		if (err) return err;
		return decoded.data;
	});

	return res.json({
		verifiedToken
	});
});

module.exports = router;
