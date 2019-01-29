var express = require("express");
var app = express();
var request= require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
})

app.get("/results", function(req, res){
	var search = req.query.search;
	var api="http://www.omdbapi.com/?apikey=396e14f6&s="+search;
	request(api, function(error, response, body){	
		if(!error && response.statusCode == 200){
			var json = JSON.parse(body);
			res.render("results", {data : json});
		}
	});	
});





app.listen(3000, function(){
	console.log("Movie app started!!");
});