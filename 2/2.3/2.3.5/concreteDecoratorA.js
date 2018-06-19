var util = require('util');
var Decorator = require('./decorator');
function ConcreteDecoratorA(){
	Decorator.call(this);
	this.operation = function(){
		Decorator.operation;
		console.log('add some decorator by ConcreteComponentA');
	}
}
util.inherits(ConcreteDecoratorA,Decorator);
module.exports = ConcreteDecoratorA;
