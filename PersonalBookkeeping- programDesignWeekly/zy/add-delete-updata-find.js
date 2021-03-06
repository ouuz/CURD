var express = require('express');
var app = express();
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.all('*', function(req, res, next) {
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
//排序
app.get('/sort', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        var mysort = { time: 1 };
        dbo.collection("zy").find().sort(mysort).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.send({ status: 200, data: result });
        });
    });
});
//增加
app.get('/add', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        //var myobj = { id:0,time:'2019-03-26',type:'饮食',pay_type:'现金',num:15,note:'无' };
        req.query.id = parseInt(req.query.id);
        req.query.num = parseInt(req.query.num);
        dbo.collection("zy").insertOne(req.query, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
    res.end();
});
//更新
app.get('/updata', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        var myquery = { id: parseInt(req.query.id) };
        req.query.id = parseInt(req.query.id);
        req.query.num = parseInt(req.query.num);
        var newvalues = { $set: req.query };
        console.log(myquery, newvalues);
        dbo.collection("zy").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("更新完成");
            db.close();
        });
    });
    res.end();
});
//删除
app.get('/delete', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        req.query.id = parseInt(req.query.id);
        dbo.collection("zy").deleteOne(req.query, function(err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    });
    res.end();
});
//查找
app.get('/find', function(req, res) {
    var obj;
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        dbo.collection("zy").find(req.query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result); //结果
            obj = result;
            db.close();
            res.send({ status: 200, data: obj });
        });
    });
});
//聚合
app.get('/total/type', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        dbo.collection("zy").aggregate([
                { $match: {} },
                {
                    $group: { _id: '$type', total: { $sum: '$num' } }
                }
            ])
            .toArray(function(err, docs) {
                res.send({ docs })
                db.close();
            });
    });
});
app.get('/total/paytype', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        dbo.collection("zy").aggregate([
                { $match: {} },
                {
                    $group: { _id: '$pay_type', total: { $sum: '$num' } }
                }
            ])
            .toArray(function(err, docs) {
                res.send({ docs })
                db.close();
            });
    });
});
app.get('/total/time', function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("zyroot");
        dbo.collection("zy").aggregate([
                { $match: {} },
                {
                    $group: { _id: '$time', total: { $sum: '$num' } }
                }
            ])
            .toArray(function(err, docs) {
                res.send({ docs })
                db.close();
            });
    });
});
var server = app.listen(8022, '127.0.0.1', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("访问地址为 http://%s:%s", host, port)
});