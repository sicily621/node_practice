var http = require('http'),
	  fs = require('fs'),
	  url = require('url');
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	/*switch(pathname){
		case '/index' :resIndex(res);
		break;
		case '/img':resImg(res);
		break;
		default :resDefault(res);
		break;
	}*/
	var param = pathname.substr(2),
	firstParam = pathname.substr(1,1).toUpperCase();
	var functionName = 'res'+firstParam+param;
	response = res;
	if(pathname=='/'){
		resDefault(res)
	}else if(pathname=='/favicon.ico'){
		return;
	}else{
		eval(functionName+'()');
	}
}).listen(1337);
function resIndex(){
	var res = response;
	var readPath = __dirname+'/'+url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'text.html'});
	res.end(indexPage)
}
function resImg(){
	var res = response;
	var readPath = __dirname+'/'+url.parse('logo.png').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'Content-Type':'image/png'});
	res.end(indexPage)
}
function resDefault(){
	var res = response;
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.end('can not find sourse');
}
