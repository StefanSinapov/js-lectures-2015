function phiEstimation(n) {
	return fib(n) / fib(n - 1);
}

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

console.log(phiEstimation(55));