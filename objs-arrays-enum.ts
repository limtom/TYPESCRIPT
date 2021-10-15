// const person: {
// 	name: string,
// 	age: number,
// 	hobbies: string[],
// 	role: [number, string],
// } = {
// 	name: 'Tom',
// 	age: 30,
// 	hobbies: [
// 		'Sport',
// 		'Cooking',
// 	],
// 	role: [
// 		0,
// 		'Author',
// 	],
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };
const person = {
	name: 'Tom',
	age: 30,
	hobbies: [
		'Sport',
		'Cooking',
	],
    role: Role.AUTHOR
};

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

// person.role.push('Admin');
// person.role[1] = 10;

// Declare a string array type
let names: string[];
names = [
	'ade',
	'bolu',
	'titi',
	'tayo',
	'tolu',
];
console.log(names);
console.log(person.role);

console.log(person);
if (person.role === Role.AUTHOR) {
    console.log('Author')
} else {
    console.log('Not an author')
}
