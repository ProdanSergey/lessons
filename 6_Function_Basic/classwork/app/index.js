// console.log(helloWorld)

// Function Declaration;
// function helloWorld() {
// 	myVar = 'Hello Again';

// 	console.log(myVar);
// }

// var helloWorld = function() {
// 	console.log('Hello Again');
// }

// Function Named Expression
// var helloWorld = function helloWorld() {
// 	myVar = 'Hello Again';

// 	console.log(myVar);
// }

// helloWorld();

// Annon function
// function() {
// 	console.log('Hello Again');
// }

// const user = {
// 	firstName: 'John',
// 	lastName: 'Snow',
// 	age: Number.MAX_SAFE_INTEGER
// }

// var logUser = function(firstName) {
// 	console.log(firstName);
// 	// console.log(args);
// 	// console.log(args.length);

// 	// for (const arg of args) {
// 	// 	console.log(arg);
// 	// }

// 	// return firstName + ' ' + lastName + ' ' + age;
// }

// const logUserArgs = ['Peter', 'Snow', Number.MAX_SAFE_INTEGER, 55, 553, 123123, 232, 323];

// const result1 = logUser(...logUserArgs);

// console.log(result1);

// const doSomeInternalJob = function(data) {
// 	console.log('Job', data)
// };

// const doSmt = function(callback) {
// 	console.log(1, 'Do');

// 	console.log(2, 'Do');

// 	if (typeof callback === 'function') {
// 		callback('callback data');
// 	}
	
// 	console.log(3, 'Do');

// 	console.log(4, 'Do');
// };


// doSmt(doSomeInternalJob);


// Imediate Invoke Function Expression

// const module = (function() {
// 	let firstName = 'Peter';

// 	return {
// 		firstName: firstName
// 	}
// })()


// console.log(firstName);

// console.log(module);

// const kick = function(power) {
// 	console.log('You Dead!', `${power}N`);
// }

// const userFabric = function(firstName = 'John', lastName = 'Snow') {
// 	return {
// 		firstName,
// 		lastName,
// 		whoAmI() {
// 			console.log(`${firstName} ${lastName}`);
// 		},
// 		kick
// 	};
// }

// const chackNoris = userFabric('Chack', 'Noris');
// const annon = userFabric();


// chackNoris.kick(400);
// chackNoris.kick(600);

// chackNoris.whoAmI();
// annon.whoAmI();

// annon.kick(3)

// console.log(chackNoris.whoAmI === annon.whoAmI)

// console.log(chackNoris.kick === annon.kick)
