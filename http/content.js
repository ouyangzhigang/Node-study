const as = 'da';
let pet = {
	a: '121',
	c: 'efjoq',
	b: function () {
		console.log(this == pet)
	}
}

pet.b();// true


let world = function (words) {
	this.words = words;
	this.f = function () {
		console.log(this.words);
		console.log(this);
	}
	// this.f();
}('words'); // words  和那天长地长的对象代表world   有node里面的很多方法

function worlds (word) {
	this.word = word;
	this.f = function () {
		console.log(this.word);
		console.log(this);
	}
};
let you = new worlds()
you.f(); // undefined   worlds { word: undefined, f: [Function] }





