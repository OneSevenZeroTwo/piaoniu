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



app.get("/hot",function(request,response){
	console.log(request.query.page)
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=2&size=20&offset="+request.query.page*20, function(res) {
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
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0  ", function(res) {
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
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0  ", function(res) {

		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			response.end(data)
		})
	})
})

app.get("/mtv",function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0  ", function(res) {
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
	http.get("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type="+request.query.type+"&size=20&offset=0  ", function(res) {
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
