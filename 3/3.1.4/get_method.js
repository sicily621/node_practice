var http = require('http'),
	  url = require('url'),
	  querystring = require('querystring');
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;//获取请求路径
	var paramStr = url.parse(req.url).query;//获取请求GET数据字符串
	var params = querystring.parse(paramStr);//解析GET数据字符串为JSON对象
	if(pathname=='/favicon.ico'){
		return;
	}
	console.log(pathname);
	console.log(paramStr);
	console.log(params);
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('success');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337');
