const http = require('http');
var mysql = require('mysql');

const hostname = "127.0.0.1";
const port = 3000;

var connect = mysql.creatrConnection({
	host: "localhost",
	user: "root",
	password: "1"
});

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello');
});

server.listen(port, hostname, () => {
	con.connect(function(err){
		if (err) throw err;
		console.log("Connected");
	});
});