//异步调用
function Person(){
	this.think = function(callback){
		setTimeout(function(){
			console.log('thinking')
			callback()
		},5000)
	};
	this.answer = function(){
		console.log('I am answering othor question')
	}
};
var person = new Person();
person.think(function(){
	console.log('thinking 5 second,get the right answer!');
})
person.answer();

/*Person.think()是一个异步方法,因为调用了node.js异步函数setTimeout,Person.answer()并不是一个异步方法
这取决于是否调用了异步方法*/

