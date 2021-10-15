const add = (n1: number, n2: number, show: boolean, displayText: string) => {
	const result = n1 + n2;
	if (show) {
		console.log(text + result);
	} else {
		return n1 + n2;
	}
};
const show = true;
const number1 = 5;
const number2 = 2.5;
const text = 'The result is: ';

add(number1, number2, show, text);
