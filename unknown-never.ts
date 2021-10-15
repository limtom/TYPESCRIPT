let userInput: unknown;
let userName: string;

userInput = 'Just kidding';
userInput = 5;

if (typeof userInput === 'string') {
	userName = userInput;
}

const generateError = (message: string, code: number):never => {
	throw { message: message, status: code };
};

generateError('There was an error', 400);
