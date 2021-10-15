type combinable = number | string;
type resultDescriptor = 'as-number' | 'as-text';
const combine = (input1: combinable, input2: combinable, resultConversion: resultDescriptor) => {
	let result;
	if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
	// if (resultConversion === 'as-number') {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
};

let combineAges = combine(30, 25, 'as-number');
console.log(combineAges);

let combineAgesText = combine('30', '25', 'as-text');
console.log(combineAgesText);

let combineNames = combine('Max', 'Anne', 'as-text');
console.log(combineNames);
