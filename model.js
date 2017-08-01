var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var multer = require("multer");
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
			console.log(req.query.user, req.query.pass)
			connection.query("insert into `count` (username,password) values ('" + req.query.user + "','" + req.query.pass + "')", function(error, results, fields) {
				console.log("insert into count (username,password) values ('" + req.query.user + "','" + req.query.pass + "')");
				res.send('1');
				connection.end();
			});
		}
	});

});

//登录
app.get('/login', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	//打开数据库
	createConnection()
	connection.connect();
	//写入数据库
	connection.query("select * from count where username = '" + req.query.user + "'", function(error, results, fields) {
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

//cms写入页面功能
app.get('/xie', function(req, res) {
	createConnection()
	connection.connect();
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

//最近上架
app.get('/mtv', function(req, res) {
	createConnection()
	connection.connect();
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
	connection.query("update cms set name='" + req.query.name + "',geming='" + req.query.geming + "',zhuan='" + req.query.zhuan + "',area='" + req.query.area + "',language='" + req.query.language + "' where id='" + req.query.id + "' "),
		function(error, results, fields) {
			if(error) throw error;
			//results =>array类型
			//console.log('The solution is: ', results);
			var obj = {
				jobs: results
			}
			res.send(JSON.stringify(obj));
			connection.end();
			res.append("Access-Control-Allow-Origin", "*")
		};
})

//处理更换头像按钮请求
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
	extended: false
}))
//设置静态文件 app.js根目录下寻找public文件夹作为静态文件夹
app.use(express.static('public'));

var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});

//单图上传
app.post('/upload-single', upload.any(), function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
//	console.log(req.files)
	res.send({
		wscats_code: '0',
		imgInfo: req.files
	});
});


//收藏写入数据库
app.get('/cllocet', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	//打开数据库
	createConnection()
	connection.connect();
	console.log(req.query.gexin,req.query.zhangming)
	connection.query('SELECT shou from count where username="' + req.query.zhangming + '"', function(error, results, fields) {
		if(results[0].shou) {
			var str = req.query.gexin;
//			var str = JSON.stringify(gexin)
			console.log(str)
			var arr = JSON.parse(str);
			console.log(arr.renname,"55555")
			var newarr = JSON.parse(results[0].shou);
			
			//good里面的东西拿出来变成数组再遍历
			console.log(newarr);
			console.log(newarr.length);
			for(var i = 0; i < newarr.length; i++) {
				if(newarr[i].renname == arr.renname) {
//					newarr[i].renname = arr.renname;
					// 写入数据库
					connection.query("update count set shou='" + JSON.stringify(newarr) + "' where username = '" + req.query.zhangming + "'", function(error, results, fields) {
						res.send(results)
						connection.end();
					});
					return;
				};
			};
			if(i == newarr.length) {
				newarr.push(arr);
				console.log(555)
				// 写入数据库
				connection.query("update count set shou='" + JSON.stringify(newarr) + "' where username = '" + req.query.zhangming + "'", function(error, results, fields) {
					res.send(results)
					connection.end();
				});
			}
		} else {
			//获取qty id生成JSON字符串格式的数组
			var goodarr = [];
			var str = req.query.gexin;
			var arr = JSON.parse(str);
			goodarr.push(arr);
			// 写入数据库
			connection.query("update count set shou='" + JSON.stringify(goodarr) + "' where username = '" + req.query.zhangming + "'", function(error, results, fields) {
				res.send(results)
				connection.end();
			});
		}
	})

});


//显示收藏
app.get('/showthecllocet', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	//打开数据库
	createConnection()
	connection.connect();
	//写入数据库
	connection.query("select shou from count where username = '"+req.query.zhangming+"'", function(error, results, fields) {
		if(results[0]){
			res.send(results[0].shou);
		}else{
			res.send([]);
		}
		connection.end();
	});
});




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