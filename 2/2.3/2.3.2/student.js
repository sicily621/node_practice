var util = require('util');
var Person = require('./person')
function Student(){
	Person.call(this);
	util.inherits(Student,Person);
	this.study = function(){
		console.log('study~~~')
	}
}
util.inherits(Student,Person);
Student.prototype.study = function(){
	console.log('I am studing');
}
module.exports = Student;
