var http = require("http");
var express = require("express");
var app = express();
var cheerio = require("cheerio");


app.get("/index",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=6&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
//新歌速递请求
app.get("/xin",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=16&size=3&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
//热门歌单
app.get("/re",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=2&size=6&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
//推荐
app.get("/tui",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=12&size=4&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})

//热歌榜
app.get("/rege",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=24&size=5&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
//新歌榜
app.get("/xinge",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=12&size=5&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
//king榜
app.get("/king",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=11&size=5&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
//更多新歌
app.get("/xg",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=12&size=5&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
app.get("/xg02",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=21&size=5&offset=0  ", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})

app.get("/hot",function(request,response){
	console.log(request.query.page)
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/?json=true", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})


app.get("/bill",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/plist/index&json=true", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})


app.get("/xart",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/singer/list/88?json=true", function(res) {

		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})


//流行歌曲请求
app.get("/liuxing",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/rank/info/?rankid="+request.query.type+"&page=1&json=true", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})




//搜索
app.get("/search",function(request,response){
	var name = encodeURI(request.query.type);
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.search.catalogSug&query="+name, function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
			console.log(data)
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})



//搜索
app.get("/gethashsong",function(request,response){
	console.log(request.query.song)
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash="+request.query.song, function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
			console.log(data)
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})





//搜索
app.get("/bbbbb",function(request,response){
	console.log(request.query.song)
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/rank/list&json=true", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
			console.log(data)
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})


app.get("/ccccc",function(request,response){
	console.log(request.query.song)
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://m.kugou.com/rank/info/?rankid=28&page=1&json=true", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
			console.log(data)
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})

app.get("/album",function(request,response){
	console.log(request.query.song)
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get(" http://m.kugou.com/singer/info/json=true", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
			console.log(data)
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})
var server = app.listen("6789",function(host,post){

})
