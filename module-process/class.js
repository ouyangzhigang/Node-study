let s = require('./students');
let t = require('./teacher');

function add (tname, sname) {
	t.add(tname);
	sname.forEach(function (item, index) {
		s.add(item)
	})	
}

exports.add = add;