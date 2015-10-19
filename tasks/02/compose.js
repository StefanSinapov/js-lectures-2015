function compose() {
	var fns = [].splice.call(arguments, 0);

	return function (el) {
		fns.reduceRight(function (prev, current) {
			el = current(el);
		}, el)

		return el;
	}
}


var number = compose(Math.round, parseFloat);
console.log(number(66.6));