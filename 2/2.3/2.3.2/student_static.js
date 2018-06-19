var util = require('util');
var Person = require('./person')
function Student(){
	Person.call(this);
	util.inherits(Student,Person);
}
function study(){
		console.log('study~~~')
}
var person =new Person();
exports.study = study;
exports.eat = person.eat;
exports.sleep = person.sleep;
