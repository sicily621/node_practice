var request = require('request');
request.get('http://127.0.0.1:1377',function(err,response,result){
	console.log(result);
})
