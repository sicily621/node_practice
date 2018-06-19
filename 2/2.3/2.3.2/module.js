exports.name='sicily';
var myName = 'becky';
exports.init = function(itName){
	if(!itName){
		setName(myName)
	}else{
		setName(itName)
	}
};
exports.show = function(){
	console.log(name)
};
function setName(myName){
	name = myName;
}
