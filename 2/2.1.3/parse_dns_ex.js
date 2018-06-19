var http = require('http'),
      dns = require('dns'),
      fs = require('fs'),
      url = require('url'),
      querystring = require('querystring');
      
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	var readPath = __dirname + '/' +url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}).listen(3000,'127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');

function router(res,req,pathname){
	switch(pathname){
		case "/parse":
				parseDns(res,req);
		break;
		default:
				goIndex(res,req);
	}
}
function goIndex(res,req){
		var readPath = __dirname +'/'+url.parse('index.html').pathname;
		var indexPath = fs.readFileSync(readPath);
		res.end(indexPath);
}
