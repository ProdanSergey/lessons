// HOMEWORK

// var isLeap = false;

// var year = 1988;

// var moduleOf400 = year % 400 === 0;
// var moduleOf100 = year % 100 === 0;
// var moduleOf4 = year % 4 === 0;

// if (moduleOf400 || (!moduleOf100 && moduleOf4)) {
//   isLeap = true;
// } else {
// 	isLeap = false;
// }

// if (isLeap) {
// 	document.write('(leap year)');
// } else {
// 	document.write('(common year)');
// }

// if (isLeap) {
// 	document.write('29 day in February');
// } else {
// 	document.write('28 day in February');
// }

// EXPRESSIONS

// (5) ->> 5

// var x;
// var y;

// var xAndY;

// var num = (xAndY = (x = 5) + (y = 5)) + (10 + 10);

// console.log(x);
// console.log(y);
// console.log(xAndY);
// console.log(num)

// let, const !== hoisting;

// var age = 24;

// 	if (age > 20) {
// 		var age;
		
// 		age = 30;
// 	}

// console.log(age);

// BLOCKS

// outer: {
// 	console.log('outer block');

// 	inner: {
// 		console.log('inner block');

// 		break outer;
// 	}

// 	console.log('end of the outer block');
// }

// console.log('global code')

// TERNARY OPERATOR

// const userLogin = prompt('Enter your username');

// console.log(userLogin === 'Admin' ? 'user is admin' : 'user not authorized');

// DO/WHILE

// let counter = 5;

// do {
// 	console.log('current: ' + counter-- + ', Hello World');
// } while (counter > 0);

// while

// let counter = 5;

// while (counter > 0) {
// 	console.log('current: ' + counter-- + ', Hello World');
// }

// for (
// 	let counter = 0; 
// 	counter < 100; 
// 	counter++
// ) {
// 	if (counter % 5 !== 0) {
// 		console.log('current: ' + counter + ', Skipped')
// 		continue;
// 	}

// 	if (counter === 100 / 2) {
// 		console.log('current: ' + counter + ', Got you!!!');

// 		break;
// 	}

// 	console.log('current: ' + counter + ', Hello World');
// }

// outer: for (
// 	let outerIndex = 0; 
// 	outerIndex < 10; 
// 	outerIndex++
// ) {
// 	for (let j = 0; j < 10; j++) {
// 		if (outerIndex === 5) {
// 			continue outer;
// 		}

// 		// console.log('current inner: ' + j + ', bar');
// 	}

// 	console.log('current outer: ' + outerIndex + ', foo');
// }

// let loves = 0, notLoves = 0;

// const attempts = 10;

// for (let i = 0; i < attempts; i++) {
// 	const random = Math.round(Math.random());

// 	if (random === 0) {
// 		notLoves++;
// 	} else {
// 		loves++ 
// 	}
// }

// console.log(loves - notLoves > 0 ? 'Loves Me' : 'Not Loves Me');

// const start = 0;
// const finish = 20;

// for (let index = start; index < finish; index++) {
// 	if (index / finish === 5) {
// 		console.log('Half');
// 	}

// 	if (index / finish === 2.5) {
// 		console.log('Quarter');
// 	}
// }

// String

// const firstName = 'John';
// const lastName = 'Snow';

// const isAdmin = true;

// const fullName = `My fullname is: ${firstName} ${lastName}. And I'm ${isAdmin ? 'Admin' : 'Common User'}`;

// const userName = console.log(fullName);

// let message = 'Hello%World%Again';

// console.log(`SOURCE: ${message}`);

// let newLine;

// newLine = message.toLowerCase();

// newLine = message.toUpperCase();

// newLine = message.trimEnd();

// newLine = message.padEnd(20, '%');

// newLine = message.repeat(25);

// let characters = message.split('%');

// console.log(characters)

// newLine = message.slice(1, 5);

// newLine === message;

// console.log(newLine, newLine === message);

// newLine = message.substring(5, -20);

// console.log(newLine);

// const index = 7;

// const itemAt4 = message.charAt(index);
// const uniCodeAt4 = message.charCodeAt(index);

// console.log(itemAt4, uniCodeAt4);

// message = 'Hello%World%Wide';

// const indexOfW = message.indexOf('W');
// const lastIndexOfW = message.lastIndexOf('W');

// console.log(indexOfW, message[indexOfW]);
// console.log(lastIndexOfW, message[lastIndexOfW]);

// const isWorldIncludes = message.includes('World2');

// console.log(isWorldIncludes);


// let myNumber = 0.1 + 0.2;

// let result;

// result = number.toFixed(3); // -> STRING!
// result = Math.floor / Math.ceil / Math.round;

// result = Math.round(number);

// console.log(result);

// result = 22.2;

// console.log(Number.isInteger(result));

// if (isFinite(0)) {
// 	console.log('Hello World')
// }

// HOMEWORK!!!

// Валидация ввода.
// let dayOfBirth;

// do {
// 	dayOfBirth = prompt(validationMessage)
// } while (isNaN(Number(dayOfBirth)));

// isNaN(null); -> отдельно

// Повтор программы!

// do {

// 	const isLeapYear = true;

// 	const min = 1;
// 	const max = isLeapYear ? 29 : 28;

// 	const validationMessage = `Put your day of birthday: only numbers, min: ${min}, max: ${max}`;


// 	const promptResult = prompt('Enter Some Message');

// 	console.log(promptResult);


// } while (confirm('Do you want to continue?'))