var express = require("express");
var app = express();
 
var routes = require("./routes/routes.js")(app);

app.use(express.static("../gobeyond"));

app.get('*',function(req,res){
	res.sendFile('index.html');
});
 
var server = app.listen(4000, function () {});