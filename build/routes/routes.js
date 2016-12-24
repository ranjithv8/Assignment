var appRouter = function(app) {

 	app.get("/newapp/checkin", function(req, res) {
    	res.send("Hello World");
	});

	app.get("/newapp/checkin/i18n/language", function(req, res) {
		 var language = req.headers["accept-language"],langFile;
		 if(language.indexOf("en-US") > -1) {
		 	langFile = "data/english.json";
		 }
		 else {
		 	langFile = "data/dutch.json";
		 }
    	var fs = require("fs");
		var contents = fs.readFileSync(langFile);
		var jsonData = JSON.parse(contents);
		res.send(jsonData);
	});

	app.post("/newapp/checkin/status", function(req,res){
		var mockResponses = [
			{"status":200,"code":200,"message":"Check in confirmed"},
			{"status":400,"code":9001,"message":"Invalid Booking code"},
			{"status":400,"code":9002,"message":"Family name invalid"},
			{"status":400,"code":9003,"message":"Check-in not available yet for this flight"},
			{"status":400,"code":9004,"message":"Sorry online check-in closed for this flight"},
			{"status":500,"code":500,"message":"Internal Error"}
		];
		var codes_length = mockResponses.length;
		var randomCodeIndex = Math.floor((Math.random()*1000)%codes_length);
		var response = mockResponses[randomCodeIndex];
		res.status(response["status"]);
		res.send(response["message"]);
	});
}
 
module.exports = appRouter;