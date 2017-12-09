var socket = io("http://localhost:8000");
	
	$(document).ready(function(){
		$("#formLogin").show();
		$("#formSendMessage").hide();

		$("#Register").click(registerUserName);

		function registerUserName(){
			var userName = $("#userName").val();
			socket.emit("SEND-USER-NAME",userName);
			$("#userName").val("");
			$("#userName").focus();
		}
	});

	socket.on("server-send-message-err", function(data){
		alert(data);
	});
	socket.on("server-send-message-success", function(data){
		var listUsers = "";
		for (var i = 0;i < data.length; i++) {
			itemUser = "<div>" + data[i] + "</div";
			listUsers += itemUser;
		}
		$("#user-online").html(listUsers);
		$("#formLogin").hide();
		$("#formSendMessage").show();
	});
	
	