const http = require('http');
const mysql = require('mysql');
//const forEach = require('async-foreach').forEach;

const hostname = "127.0.0.1";
const port = 3000;

var connect = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1",
	database: "watchdailyTV"
});
const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello');
});

server.listen(port, hostname, () => {
	connect.connect(function(err){
		if (err) throw err;
		// for (var i = 10; i <= 100; i++) {
		// 	var sqlInsert = "insert into wtv_group(group_id,group_code,group_creater_user_code,group_title,group_status,created) value("+i+",001,002,'group 1',0,'2017-11-14')";
		// 	connect.query(sqlInsert, function(err,result){
		// 	if (err) throw err;
		// 	console.log('1 record inserted');
		// });
		// }
		
		var sqlSelect = "select * from wtv_group where 1";
		connect.query(sqlSelect, function(err,result){
			if (err) throw err;
			result.forEach(function(item, index, arr) {
  				//console.log(index, item['group_id']);
  				console.log(arr);
			});
			// console.log(result);
		});
		console.log("Connected");
	});
});