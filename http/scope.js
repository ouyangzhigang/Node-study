var globalVariable = 'that is a global variable';

!function (inner) {
	let localVariable = 'this is a location variable';
	console.log(globalVariable);
	console.log(localVariable);

	globalVariable = 'this is change variable';
	console.log(globalVariable);

	inner = function inner () {
		let innerVariable = 'this is inner variable';
		console.log(innerVariable);
	}
	
	inner();
}()


// 全局变量几种方法： 1.window  2.global 3.var 