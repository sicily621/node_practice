//入口模块
var http = require('http'),
	  url =require('url');
var router = require('./router.js');
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	req.setEncoding('utf-8');
	res.writeHead(200,{'Content-Type':'text/html'});
	router.router(res,req,pathname);
}).listen(3000,'127.0.0.1');
console.log('Server running at 127.0.0.1:3000');
	  
