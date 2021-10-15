const add = (n1: number, n2: number) => {
	return n1 + n2;
};

const printResult = (num: number) => {
	console.log('Result: ' + num);
};

printResult(add(3, 15));

let newFunction: (a: number, b: number) => number;
newFunction = add;
// newFunction = 5

console.log(newFunction(8, 9));

let addAndHandle = (a: number, b: number, cb: (num: number) => void) => {
	const result = a + b;
	cb(result);
};

addAndHandle(56, 8, (num) => {
	console.log(num);
});
