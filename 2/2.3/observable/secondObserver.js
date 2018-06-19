var util = require('util');
var Iobserver = require('./iobserver');
function second(){
	Iobserver.call(this);
	this.update = function(){
		console.log('second observer');
	}
}
util.inherits(second,Iobserver);
module.exports = second;
