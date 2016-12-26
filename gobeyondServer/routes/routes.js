var appRouter = function(app) {

 	app.get("/newapp/checkin", function(req, res) {
    	res.send("Hello World");
	});

	app.get("/newapp/checkin/i18n/language", function(req, res) {
		 var language = req.headers["accept-language"],langFile;
		 if(language.indexOf("en-US") > -1) {
		 	langFile = "data/english.json";
		 } else if(language.indexOf("nl-nl") > -1){
		 	langFile = "data/dutch.json";
		 } else {
		 	langFile = "data/english.json";
		 }
    	var fs = require("fs");
		var contents = fs.readFileSync(langFile);
		var jsonData = JSON.parse(contents);
		res.send(jsonData);
	});

	app.post("/newapp/checkin/status", function(req,res){
		var familyName = req.body.familyName;
		var mockResponses = {
			"abc":{"status":200,"code":200,"message":"Check in confirmed"},
			"def":{"status":400,"code":9001,"message":"Invalid Booking code"},
			"ghi":{"status":400,"code":9002,"message":"Family name invalid"},
			"jkl":{"status":400,"code":9003,"message":"Check-in not available yet for this flight"},
			"mno":{"status":400,"code":9004,"message":"Sorry online check-in closed for this flight"},
			"pqr":{"status":500,"code":500,"message":"Internal Error"}
		};
		var response = mockResponses[familyName];
		if(!response) {
			response = mockResponses["pqr"];
		} 
		res.status(response["status"]);
		res.send(response["message"]);
	});
}
 
module.exports = appRouter;