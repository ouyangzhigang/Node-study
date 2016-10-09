'use strict';
let c = require('./class');

c.add('scott', ['s', 'ew', 'ew']);

// 如果还想要暴露出来
exports.add = function (class) {
	class.forEach(function(item, index) {
		let class = item;
		let teacher = item.teacher;
		let students = item.students;
		c.add(teacher, students);
	})
}