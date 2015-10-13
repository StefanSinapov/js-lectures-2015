function fib(n) {

	var first = 0;
	var second = 1;
	var temp;

	while (n > 0) {
		temp = first;
		first = second;
		second += temp;
		n--;
	}

	return first;
};

for (var i = 1; i <= 15; i++) {
	console.log('Index ' + i + ": " + fib(i));
}

