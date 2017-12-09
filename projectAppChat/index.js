var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8000);

var listUsers = ["huy"]; 

io.on("connection",function(socket){
	socket.on("SEND-USER-NAME",function(data){
		if (listUsers.indexOf(data) >= 0 || data == "") {
			socket.emit("server-send-message-err","Register fail!!");
		} else {
			listUsers.push(data);
			console.log(listUsers);
			socket.emit("server-send-message-success",listUsers);
			io.sockets.emit("notis-all-user-have-user-login",listUsers);
		}
	});
});

app.get("/",function(req,res){
	res.render("homepage");
});