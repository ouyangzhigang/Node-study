let a = {
	a1: '...',
	a2: function (a21) {
		console.log(this.a1 + 'this is az a1! ' + a21);
	}
}
// a.a2('a21String'); // ...this is az a1! a21String


let b = {
	a1: 'b1String'
}

// a.a2.call(b, 'addString'); // b1Stringthis is az a1! addString


////////////////////////////////

function cfn (words) {
	this.words = words;
	this.fn = function () {
		console.log(this.words + ' call_apply_extend log')
	}
	this.fn();
}

let dfn = function (words) {
	// cfn.call(this, words);
	cfn.apply(this, arguments);
}('express');
// express call_apply_extend log



