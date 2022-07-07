// var firstName;

// console.log(firstName);

// firstName = 'john';

// console.log(firstName);

// console.log('-------');

// Expression

//

// var firstName;
// var lastName;

// var fullName = (firstName = prompt('Enter firstName')) + ' ' + (lastName = prompt('Enter lastName'));

// console.log(fullName);

console.log("-------");

// var isFirstNameAvailable = false;
// var isLastNameAvailable = true;

// var tempString = '';

// if (isFirstNameAvailable) {
// 	tempString += prompt('Enter First Name');
// }

// if (isLastNameAvailable) {
// 	tempString += ' ' + prompt('Enter Last Name');
// }

// console.log(tempString);

// String
// Number
// Boolean
// null
// undefined
// *Symbol
// *BigInt

// console.log('-------');

// const example = 'global variable'; // A001

// {
// 	const example = 'first level variable'; // A002

// 	example = 'new value'

// 	console.log(example);

// 	{
// 		const example = 'second level variable'; // A003

// 		console.log(example);
// 	}
// }

// console.log(example);

console.log("-------");

// const CURRENT_YEAR = 2022;

// const birthday_year = prompt();

// const userRole = 'USER';

// let userAction = null;

// switch (userRole) {
// 	case 'ADMIN':
// 		userAction = 'observe';
// 		break;
// 	case 'USER':
// 		userAction = 'do';
// 	default:
// 		break;
// }

// {
// 	console.log(really);

// 	let really = 'O.o';
// }

const randomText = "How much is the fish?!";

console.log(randomText.length);
console.log(randomText[2]);
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21

console.log(randomText[randomText.length - 1]);

// ''
// ""
// ``

// const formatted = `

// 					вывы
// sdsds`;

// console.log(formatted);

// const firstName = 'John';
// const lastName = 'Doe';

// const template = `User's fullName: ${firstName} ${lastName}`;

// console.log(template);

let stringExample = "Yellow Submarine";

// console.log(stringExample.toLowerCase());
// console.log(stringExample.toUpperCase());

// stringExample = '    Yellow Submarine      ';

// console.log(stringExample.trimStart());
// console.log(stringExample.trimEnd());
// console.log(stringExample.trim());

// stringExample = 'Yellow Submarine';

// console.log(stringExample.length);

// console.log(stringExample.padStart(30, '_'))
// console.log(stringExample.padEnd(30, '_'))

// stringExample = 'Yellow Submarine';

// console.log(stringExample.repeat(0));

// stringExample = 'Yellow Submarine ';

// console.log(stringExample.split(' '))

// stringExample = 'How mach is the fish?';

// console.log(stringExample.replace(' ', '%'));
// console.log(stringExample.replaceAll(' ', '%'));

// stringExample = 'How mach is the fish?';

// console.log(stringExample.slice(3, -1));
// console.log(stringExample.substring(3, -1));

// stringExample = 'How mach is the fish?';

// const index = stringExample.lastIndexOf('Q');

// if (index >= 0) {
// 	console.log(index);

// 	console.log(stringExample[index]);
// }

stringExample = "How mach is the fish?";

console.log(stringExample.includes("!"));
