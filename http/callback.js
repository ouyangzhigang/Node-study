function a (transform) {
	console.log(transform);
}

function b (callback, transform) {
	transform += ' is callback data';
	callback(transform);
}

b(a, 'Nodejs');

b(function (transform) {
	console.log(transform)
}, 'nodejs')
