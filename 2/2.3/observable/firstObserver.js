var util = require('util');
var Iobserver = require('./iobserver');
function first(){
	Iobserver.call(this);
	this.update = function(){
		console.log('first observer')
	}
}
util.inherits(first,Iobserver);
module.exports = first;
