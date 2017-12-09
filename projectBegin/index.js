var url = require("url");
var express = require("express");
var storage = require("node-persist");
var socket = require("socket.io");
var http = require('http');


var server = http.createServer(function(req,res){
	res.end("xin chao");
}).listen(7000);
console.log(express);