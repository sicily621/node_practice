var util = require('./util');
var component = require('./component');
function ConcreteComponent(){
	component.call(this);
	this.operation = function(){
		console.log('output by concrete component');
	}
}
util.inherits(ConcreteComponent,component);
module.exports = ConcreteComponent;
