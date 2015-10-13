import { fib } from 'task01'

function phiEstimation(n) {
	return fib(n) / fib(n - 1);
}

console.log(phiEstimation(55));
