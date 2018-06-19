var util = require('util');
var events = require('events');
function MyStream(){
	events.EventEmitter.call(this);
}
util.inherits(MyStream,events.EventEmitter);
MyStream.prototype.write = function(data){
	this.emit('data',data);
}
var stream = new MyStream();
console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_ === events.EventEmitter);//通过_super获取父类
stream.on('data',function(data){
	console.log('received data:'+data)
})
stream.write('It works!');
