function cons(a, b) {
	return function (c) {
		return c(a, b)
	}
}

// CAR
console.log('=============== CAR ===========')
function car(c) {
	return c(function (x, y) {
		return x;
	});
}

console.log(cons(5, 6));

var pair = cons(7, 8);
console.log(car(pair));

// CDR
console.log('=============== CDR ===========')
function cdr(c) {
	return c(function (x, y) {
		return y;
	})
}


var list = cons(7, cons(8, 9));
var tail = cdr(list);

console.log(tail);

console.log(cdr(tail));


// FOREACH
console.log('=============== FOREACH ===========')
function forEach(c, fn) {
	return c(function forFn(a, b) {
		if (b instanceof Function) {
			fn(a);
			b(forFn);
		} else {
			fn(a);
			return fn(b);
		}
	})
}

function forEach2(pair, fn) {
	if (typeof list === 'function') {
		fn(car(list));
		forEach(cdr(list), fn);
	} else {
		fn(list);
	}
}

var log = console.log.bind(console);
var list = cons(1, cons(2, cons(3, cons(4, cons(1, 5)))));
// var list = cons(1, 3); // //cons(2, cons(3, cons(4, 5))))

forEach(list, log);

// MAP
console.log('========= MAP =============');

function map(list, fn) {
	if (typeof list === 'undefined') {
		return cons(fn(car(list)), map(cdr(list), fn));
	}
}

var list = cons(1, cons(2, cons(3, cons(4, 5))));
var mapped = map(list, function (el) {
	return el * el;
});

forEach(mapped, log);