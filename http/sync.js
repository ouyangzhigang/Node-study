const fs = require('fs');

// 异步
fs.readFile('readme.md', function (err, data) {
	if(err) return
    console.log(err);
	console.log(data.toString());
})
console.log("程序开始执行");

// 阻塞式
let data = fs.readFileSync('readme.md');
console.log(data.toString());
console.log("程序开始执行");




let c = 0;
function a () {
	console.log(c);
}

function b () {
	c += 1;
}
a();
b(); // 1

function c (callback) {
	setTimeout(function () {
		c += 8;
		callback();
	}, 3000); 
}
c(a); // 9  这里一定是c()执行完后再执行的a()






