var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

//配置body
app.use(bodyParser.urlencoded({
	extended: false
}));

//配置数据库
function createConnection() {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'h5-1702'
	})
};

//注册
app.get('/register', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	console.log(req.query.user, req.query.pass)
	//打开数据库
	createConnection()
	connection.connect();
	//写入数据库
	connection.query("select username from count", function(error, results, fields) {
		for(var i = 0; i < results.length; i++) {
			if(results[i].username == req.query.user) {
				res.send('0');
				connection.end();
				return;
			};
		}
		if(i == results.length) {
			connection.query("insert into `count` (username,password) values ('" + req.query.user + "','" + req.query.pass + "')", function(error, results, fields) {
				console.log("insert into `count` (username,password) values ('" + req.query.user + "','" + req.query.pass + "')");
				res.send('1');
				connection.end();
			});
		}
	});

});

////登录
app.get('/login', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	//打开数据库
	createConnection()
	connection.connect();
	//写入数据库
	console.log(req.query.user, req.query.pass);
	connection.query("select * from count where username = '" + req.query.user + "'", function(error, results, fields) {
		console.log(results);
		if(results.length == 0) {
			res.send('0')
		} else if(req.query.user == results[0].username && req.query.pass == results[0].password) {
			res.send('1')
		} else if(req.query.user != results[0].username || req.query.pass != results[0].password) {
			res.send('0')
		}
	});
	connection.end();
});


//收藏
app.get('/cllocet',function(req,res){
	res.append("Access-Control-Allow-Origin", "*")
	//打开数据库
	createConnection()
	connection.connect();
	//写入数据库
		console.log(req.query.cllocetname,req.query.clloceturl);
	connection.query("insert into `cllocet` (songname,mp3url) values ('"+req.query.cllocetname+"','"+req.query.clloceturl+"')",function(error,results,fields){
					console.log("insert into `cllocet` (songname,mp3url) values ('"+req.query.cllocetname+"','"+req.query.clloceturl+"')");
					res.send('1');
					connection.end();
				});
});



//显示收藏
app.get('/showthecllocet',function(req,res){
	res.append("Access-Control-Allow-Origin", "*")
	//打开数据库
	createConnection()
	connection.connect();
	//写入数据库
	connection.query("select * from cllocet",function(error,results,fields){
					console.log(results)
					res.send(results);
					connection.end();
				});
});

//cms系统写入
app.post('/zeng', function(req, res) {
	createConnection();
	connection.connect();
	connection.query("insert into cms (name,geming,zhuan,area,language) values ('" + req.body.name + "','" + req.body.geming + "','" + req.body.zhuan + "','" + req.body.area + "','" + req.body.language + "')", function(error, results, fields) {
		if(error) { throw error; }
		//results =>array类型
		//			console.log(results);
		//			var obj = {
		//				news: results
		//			}

		res.send('ok');
	});
	res.append("Access-Control-Allow-Origin", "*")
})

//写入页面功能
app.get('/xie', function(req, res) {
	createConnection()
	connection.connect();
	console.log(req.query)
	//	var pageCount = 10 * (req.query.page - 1)
	//	connection.query('SELECT * FROM user limit ' + pageCount + ',10', function(error, results, fields) {
	connection.query('SELECT * FROM cms ', function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		//					console.log('The solution is: ', results);
		var obj = {
			jobs: results
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
	//		console.log(req.query)
	res.append("Access-Control-Allow-Origin", "*")
})

//搜索功能
app.get('/sou', function(req, res) {
	createConnection()
	connection.connect();
	connection.query('SELECT * FROM cms where name = "' + req.query.name + '"', function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		//					console.log('The solution is: ', results);
		var obj = {
			jobs: results
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
	//		console.log(req.query)
	res.append("Access-Control-Allow-Origin", "*")
})

//删除数据操作
app.get('/shan', function(req, res) {
	createConnection()
	connection.connect();
	//	console.log(req.query.name)
	connection.query('delete FROM cms where geming = "' + req.query.geming + '"', function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		//			console.log('The solution is: ', results);
		var obj = {
			jobs: results
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
	//		console.log(req.query)
	res.append("Access-Control-Allow-Origin", "*")
})


//修改
app.get('/xiu', function(req, res) {
	createConnection()
	connection.connect();
	console.log(req.query.name)
			connection.query("update cms set name='" + req.query.name + "',geming='" + req.query.geming + "',zhuan='" + req.query.zhuan + "',area='" + req.query.area + "',language='" + req.query.language + "' where id='" + req.query.id + "' "), function(error, results, fields) {
			if(error) throw error;console.log(JSON.stringify(obj))
			//results =>array类型
			//console.log('The solution is: ', results);
			var obj = {
				jobs: results
			}
			res.send(JSON.stringify(obj));
			console.log(JSON.stringify(obj))
			connection.end();
			res.append("Access-Control-Allow-Origin", "*")
		};
	})


//
//
//
////列表页返回cake数据
//app.post('/list',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//	//写入数据库
//	connection.query("select * from good where cate = '"+req.body.id+"'",function(error,results,fields){
//		console.log(results);
//		res.send(results)
//	});
//	connection.end();
//});
//
//
////列表页返回flower数据
//app.get('/list',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//	//写入数据库
//	connection.query("select * from good where cate = 'flower'",function(error,results,fields){
//		console.log(results);
//		res.send(results)
//	});
//	connection.end();
//});
//
//
//
////返回详情页的接口
//app.post('/xiangqing',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//	//写入数据库
//	connection.query("select * from good where id = "+req.body.id,function(error,results,fields){
//		console.log(results);
//		res.send(results)
//	});
//	connection.end();
//});
//
//
//
//
////获取用户数据的接口
//app.post('/account',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//
//	connection.query("select good from count where username="+req.body.username,function(error,results,fields){
//		if(results[0].good){
//				var str = req.body.good;
//				var arr = JSON.parse(str);
//				var newarr = JSON.parse(results[0].good);
//				
//			//good里面的东西拿出来变成数组再遍历
//				console.log(arr.id);
//				for(var i=0 ; i<newarr.length ; i++){
//					if(newarr[i].id==arr.id){
//						newarr[i].qty = newarr[i].qty*1+arr.qty*1;
//						// 写入数据库
//				connection.query("update count set good='"+JSON.stringify(newarr)+"' where username = '" + req.body.username+"'",function(error,results,fields){					
//					res.send(results)
//					connection.end();
//				});	
//						return;
//					};
//
//				};
//				if(i==newarr.length){
//					newarr.push(arr);
//
//					// 写入数据库
//					connection.query("update count set good='"+JSON.stringify(newarr)+"' where username = '" + req.body.username+"'",function(error,results,fields){					
//						res.send(results)
//						connection.end();
//					});	
//				}
//		}else{
//			//获取qty id生成JSON字符串格式的数组
//			var goodarr = [];
//			var str = req.body.good;
//			var arr = JSON.parse(str);
//			goodarr.push(arr);
//			// 写入数据库
//				connection.query("update count set good='"+JSON.stringify(goodarr)+"' where username = '" + req.body.username+"'",function(error,results,fields){					
//					res.send(results)
//					connection.end();
//				});
//		}
//	})
//
//});
//
//
//
//
//
////购物车渲染接口
//app.post('/car',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//	//写入数据库
//	connection.query("select good from count where username = "+req.body.username,function(error,results,fields){
//		console.log(JSON.parse(results[0].good));
//		res.send(results)
//	});
//	connection.end();
//});
//
//
//
////点击删除购物车选中的商品
//app.post('/shan',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//	//写入数据库
//	connection.query("select good from count where username = "+req.body.username,function(error,results,fields){
//		//获取到该用户购物车里面的详情再删除其中选中的一个
//		var arr = JSON.parse(results[0].good);
//		var newarr = [];
//		for(var i=0 ; i<arr.length ; i++){
//			if(arr[i].id==req.body.id){
//				continue;
//			}
//				newarr.push(arr[i]);
//		};
//
//		console.log(newarr);
//		console.log("update count set good='"+JSON.stringify(newarr)+"' where username = '" + req.body.username+"'");
//		//删除其中选中的以向后再写入数据库
//		//写入数据库
//		connection.query("update count set good='"+JSON.stringify(newarr)+"' where username = '" + req.body.username+"'",function(error,results,fields){					
//			res.send(results);
//			connection.end();
//		});
//
//
//	});
//});
//
//
//
//
//
////单个商品数量加减
//app.post('/changeqty',function(req,res){
//	res.append("Access-Control-Allow-Origin", "*")
//	//打开数据库
//	createConnection()
//	connection.connect();
//	//写入数据库
//	//写入数据库
//	var newarr = req.body.obj;
//	console.log(newarr);
//	connection.query("update count set good='"+newarr+"' where username = '" + req.body.username+"'",function(error,results,fields){					
//		res.send(results);
//		connection.end();
//	});
//});
//
//
var server = app.listen(1234, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});