var express = require('express');
var mysql = require('mysql');
var router = express.Router();

//connect database
var connect = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1",
	database: "watchdailyTV"
});
/* GET home page. */
router.get('/', function(req, res, next) {
	var arr = {};
	connect.connect(function(err){
		var sql = "select * from wtv_group where 1";
		connect.query(sql,function(err, result){
			if (err) throw err;
			//var arrJsonString = JSON.stringify(result);

			res.render('demo', { title: 'Express' , data: result});
			console.log(arr);
		});
	});
	
});

module.exports = router;
