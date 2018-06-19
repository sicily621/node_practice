/*var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('you are so good\n');
}).listen(1377,"127.0.0.1");*/
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.end('<html><head><title>node.js</title></head><body><div>hi node,i like you so much!</div></body></html>')
}).listen(1377,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1377/');
