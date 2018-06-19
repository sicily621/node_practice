function waitFive(name,func_name){
	var pus = 0;
	var currentTime = new Date();
	while(pus<5000){
		var now = new Date();
		pus = now-currentTime;
	}
	func_name(name);
}
function echo(name){
	console.log(name)
}
waitFive('sicily',echo);
console.log("it's over");
