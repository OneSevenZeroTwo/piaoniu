var http = require("http");
var express = require("express");
var app = express();
var cheerio = require("cheerio");

//http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=50 
app.get("/index",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=50&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})

var server = app.listen("6789",function(host,post){

})
