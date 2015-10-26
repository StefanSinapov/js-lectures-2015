Array.prototype.myMap = function(fn) {
	var newArr = []
	this.forEach(function(el) {
		newArr.push(fn(el));
	});

	return newArr;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].myMap(function(el) {
	return el + 10;
}));
