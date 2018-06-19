//首页展示模块
var fs =require('fs'),
	  url = require('url');
exports.goIndex = function(res,req){
		var readPath = __dirname +'/'+url.parse('index.html').pathname;
		var indexPath = fs.readFileSync(readPath);
		res.end(indexPath);
}