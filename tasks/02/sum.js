function sum(a, b) {
	if (b === undefined) {
		return function (c) {
			return a + c;
		}
	} else {
		return a + b;
	}
}

var partialSum = sum(5);
console.log(partialSum);

console.log(partialSum(10));
console.log(sum(5)(2));