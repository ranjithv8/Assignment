var express = require("express");
var app = express();
 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

app.use(express.static("public"));

app.get('*',function(req,res){
	res.sendFile('index.html');
});
 
var server = app.listen(4020, function () {});
