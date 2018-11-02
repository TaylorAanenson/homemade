// requiring packages
var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");
var router = express.Router();

var PORT = 3000;

//body parser to grab POST data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

//Create GET post routes to get n
router.get("/posts", function(req, res) {
  connection.query(
    'SELECT * FROM posts, locations, users WHERE posts.location_id = locations.id and posts.user_id = users.id', 
    function(err, results, body){
    err ? console.log(err) : res.json(results);
  });
});

//Create POST post route to add new posts
router.post("/posts", function(req, res){
  
});
//Create PUT editing post route
//Create DELETE post route
module.exports = router;