function sequence() {
	var fns = [].splice.call(arguments, 0);
	return function (arg) {
		fns.reduce(function (prev, current) {
			arg = current(arg);
		}, arg)

		return arg;
	}
}

var number = sequence();
var toNumber = sequence(parseFloat, Math.round);

console.log(toNumber('66.7'));