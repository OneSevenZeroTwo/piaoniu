var http = require("http");

var express = require("express")

var app =  express();

var bodyParser = require("body-parser")

var url = require("url");

var mysql = require("mysql");

var querystring = require("querystring");


var multer = require("multer");

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
     
    filename: function(req,file,cb){
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1])
    }
});

  var upload = multer({
       storage:storage
  });

  app.post('/upload-image',upload.any(), function(req,res,next){
     console.log(req)
     res.append("Access-Control-Allow-Origin","*");
     res.send({
        wscats_code: '0'
     });
  });

    var connection ="";
function createConnection(){

      connection = mysql.createConnection({
       host:"localhost",
       user:"root",
       password:"",
       database:"h5-1702"
    })
}


app.use(bodyParser.urlencoded({
        extended: false
    }));

     // connection.connect();


app.post("/insert",function(req,res){
     createConnection();
     connection.connect();
     console.log(req)
     connection.query("INSERT INTO music (artist_name, country,language,title) VALUES ('"+ req.body.artist_name +"','"+ req.body.country +"','"+ req.body.language +"','"+ req.body.title +"')",function(error,result, fields){
          if(error)  throw error

            var obj ={
                name:result
            };
            res.append("Access-Control-Allow-Origin","*")
             res.send(JSON.stringify(obj));
             connection.end();
     })

})


app.get('/search',function(req,res){
    createConnection();
    connection.connect();
    // console.log(req)

    connection.query('SELECT * FROM music',function(error,result,fields){
           if(error) throw error 
            var obj ={
                a:result
            };
            res.append("Access-Control-Allow-Origin","*");
            res.send(JSON.stringify(obj));
            connection.end();
    })
})

app.post('/delete',function(req,res){
    createConnection();
    connection.connect();
     // console.log(req.body.id)

    connection.query('delete FROM music where artist_id='+ req.body.id,function(error,result,fields){
           if(error) throw error 
            var obj ={
                c:result
            };
            res.append("Access-Control-Allow-Origin","*");
            res.send(JSON.stringify(obj));
            connection.end();
    })
})


app.post('/change',function(req,res){
    createConnection();
    connection.connect();
     // console.log(req.body.id)

    connection.query('SELECT * FROM music where artist_id='+ req.body.id,function(error,result,fields){
           if(error) throw error 
            var obj ={
                c:result
            };
            res.append("Access-Control-Allow-Origin","*");
            res.send(JSON.stringify(obj));
            connection.end();
    })
})

//app.post('/changeNum',function(req,res){
//  createConnection();
//  connection.connect();
//  console.log(req.body.page)
//  var pageCount = 10*(req.body.page-1)
//  connection.query('SELECT * FROM kehu limit '+pageCount+',10',function(error,result,fields){
//         if(error) throw error 
//          var obj ={
//              d:result
//          };
//          res.append("Access-Control-Allow-Origin","*");
//          res.send(JSON.stringify(obj));
//          connection.end();
//  })
//})



app.post('/xiugai',function(req,res){
    createConnection();
    connection.connect();
     // console.log(req.body.id)
         console.log(req.body.id)
    connection.query("update music set artist_name='"+req.body.artist_name +"', country='"+req.body.country +"', language='"+req.body.language +"', title='"+req.body.title +"' where artist_id='"+req.body.id+"'", function(error,result,fields){
            res.append("Access-Control-Allow-Origin","*");
            res.send("woshi");
           
    })
     connection.end();
})   





var server = app.listen(1233,function(){

    
})