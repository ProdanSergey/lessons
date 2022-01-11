// console.log(UTILS.version)

// const message = 'Hello World';

// UTILS.action(message, UTILS.write);

// const GLOBAL_VAR = 255;

// // window: { GLOBAL_VAR, console, [[scope]]: null }

// const count = function(n) {
// 	// LE: {n, message, summary, index, [[scope]]: window }

// 	const message = "Index: ";
	
// 	let summaryMessage = 'Done!!';

// 	const summary = function () {
// 		// LE: {[[scope]]: count }
// 		console.log(summaryMessage);
// 	}

// 	summaryMessage = 'Totally Done!!';

// 	for (let index = n; 0 < index; index--) {
// 		console.log(message + index);
// 	}

// 	summary();

// 	summaryMessage = 'Im pretty sure its done!!';

// 	console.log(GLOBAL_VAR);
// }

// count(5);

// let user = {
// 	firstName: 'John',
// 	lastName: 'Rembo'
// };

// let rembo = user;

// user = null;

// console.log(rembo);

// // 500 lines...

// rembo = null;

// const count = (n) => {
// 	// LE: {}
// 	for (let index = n; 0 < index; index--) {
// 		console.log(index);
// 	}
// };

///a..///

// count(5);

// const makeCounter = function (name, start = 0) {
// 	// LE: { from, [[scope]]: window };

// 	let from = start;

// 	return function () {
// 		// LE: { [[scope]]: makeCounter }
// 		console.log(name, from++)
// 	}
// }

// const counter = makeCounter('first');
// const nextCounter = makeCounter('next');

// nextCounter();
// nextCounter();
// counter();
// counter();
// nextCounter();
// nextCounter();
// counter();
// counter();
// nextCounter();
// nextCounter();
// counter();

// const thunderbolt = function (power, addPower) {
// 	console.log('KABOOM!!!', `${power}V`, `and ${addPower}V`);
// };

// // REST/SPREAD

// const once = function (f) {
// 	once.callCount = isFinite(once.callCount) ? ++once.callCount : 1; 

// 	let isExecuted = false;

// 	return function (...args) {
// 		if (!isExecuted) {
// 			f(...args)

// 			isExecuted = true;
// 		}
// 	}
// }

// const doThunderboltOnce = once(thunderbolt);

// doThunderboltOnce(500, 500);
// doThunderboltOnce(1000);
// doThunderboltOnce(300);
// doThunderboltOnce(500);
// doThunderboltOnce(500);
// doThunderboltOnce(500);
// doThunderboltOnce(400);

// const makePayment = function(amount) {
// 	console.log('PAY:', amount)
// };

// const makeSafePayment = once(makePayment);

// makeSafePayment(500);
// makeSafePayment(100);
// makeSafePayment(100);
// makeSafePayment(100);
// makeSafePayment(400);
// makeSafePayment(300);
// makeSafePayment(200);
// makeSafePayment(100);
// makeSafePayment(100);

// once.getCallCount = function () {
// 	console.log('once was executed', once.callCount, 'times');
// };

// once.getCallCount();

// Императивный, итеративный
// const sum = function (n) {
// 	let result = 0;
	
// 	for (let index = n; index > 0; index--) {
// 		result += index;
// 	}

// 	return result;
// };

// const sumOfAll = sum(10);

// console.log(sumOfAll);

// // Декларативный
// const sumFunc = function (n) {
// 	return n > 0 ? n + sumFunc(n - 1) : n;
// };

// const sumOfAllFunc = sumFunc(10);

// console.log(sumOfAllFunc)

// console.log(this)

const myFunc = function(message) {
	console.log(message);
	console.log(this);
};

myFunc('Hello World');


const user = {
	firstName: 'John',
	lastName: 'Rambo',
	getFullName: function() {
		console.log(this);
	}
};

user.getFullName();

const getFullName = user.getFullName;

getFullName();