function curry(fn) {
	return function () {
		var outerArgs = [].slice.call(arguments, 0);
		if (outerArgs.length < fn.length) {
			return function () {
				var innerArgs = [].slice.call(arguments, 0);
				var totalArgsLength = outerArgs.length + innerArgs.length;

				if (totalArgsLength < fn.length) {
					return fn.apply(this, outerArgs.concat(innerArgs).concat([].splice.call(arguments, 0)));
				}

				return fn.apply(this, outerArgs.concat(innerArgs));
			}
		}

		return fn.apply(this, outerArgs);
	};
}

// function curry(func,args,space) {
// var n  = func.length - args.length; //arguments still to come
// var sa = Array.prototype.slice.apply(args); // saved accumulator array
// function accumulator(moreArgs,sa,n) {
// var saPrev = sa.slice(0); // to reset
// var nPrev  = n; // to reset
// for(var i=0;i<moreArgs.length;i++,n--) {
// sa[sa.length] = moreArgs[i];
// }
// if ((n-moreArgs.length)<=0) {
// var res = func.apply(space,sa);
// // reset vars, so curried function can be applied to new params.
// sa = saPrev;
// n  = nPrev;
// return res;
// } else {
// return function (){
// // arguments are params, so closure bussiness is avoided.
// return accumulator(arguments,sa.slice(0),n);
// }
// }
// }
// return accumulator([],sa,n);
// }

var curry2 = function (fn) {
	return function () {
		var args = [].slice.call(arguments);
		if (args.length >= fn.length) {
			fn.apply(null, args);
		} else {
			return function () {
				var innerArgs = [].slice.call(arguments)
				fn.apply(null, args.concat(arguments));
			}
		}
	}
}


var curried = curry(function (a, b, c, d) {
	return a + b + c;
});

console.log(curried(6, 5));

console.log(curried(6, 6)(6, 6));