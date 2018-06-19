var _res,req,
	  url=require('url'),
	  querystring = require('querystring');
exports.init = function(req,res){
	_res = res;
	_req = req;
}
exports.GET = function(key){
	var paramStr = url.parse(_res.url).query,
		  param = querystring.parse(paramStr);
    return param[key] ? param[key] : '';
}
exports.POST = function(key,callback){
	var postData = '';
	_req.addListener('data',function(postDataChunk){
		postData+= postDataChunk;
	})
	_req.addListener(function('end',function(){
		var param = querystring.parse(postData);
		var value = param[key] ? param[key] :'';
		callback(value);
	}){
		
	})
}
