var fs = require('fs');
function getFileData(callback){
	fs.readFile('./text.txt','utf-8',function(err,data){
		if(err){
			throw err;
		}else{
			callback(data.toString());
		}
	})
}
function returnData(){
	getFileData(function(data){
		setTimeout(function(){
			console.log(data);
		},1000)
	})
}
returnData();

