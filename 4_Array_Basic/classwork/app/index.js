// let firstNumber = 5;

// let secondNumber = firstNumber;

// firstNumber = 5;

// firstNumber = 5;

// secondNumber = 5;

// console.log('numbers', firstNumber === secondNumber);

// let users = [];

// let newUsers = users;

// users = [];

// console.log('arrays', users === newUsers);

// const name = 'John' -> ['J', 'o', 'h', 'n'].length -> 4; 

// const numbers = [1, 2, 3, '✅'];

// console.log('length', numbers.length);

// console.log(numbers[3]);

// Как создать массив.

// const myArray = [5];
// const nextArray = new Array(5);

// console.log(myArray, nextArray);
// console.log(myArray === nextArray);

// {
// 	const users = ['first', 'next', 'true'];

// 	console.log(users.length);

// 	users.length = 1;

// 	console.log(users);

// 	users.length = 3;

// 	console.log(users);

// 	users[1] = 'Tom';
// 	users[2] = 'Jerry';
// 	users[3] = 'Walter';

// 	users[100] = 'Walter';

// 	console.log(users);
// }

// {
// 	const users = [1, 2, 3];

// 	users[1] = '555555'

// 	console.log(users);
// }

// 

// console.log(typeof []); -> 'object'
// console.log(Array.isArray([])); -> true/false

// const users = [1, 2, 3];

// const first = users[0];
// const last = users[users.length - 1];
// const various = users[1];

// console.log(first, last, various);

// console.log(('hello world').charAt(4))

// const users = ['cow', 'rabbit', 'dog'];

// users.push('cat');

// console.log(users, users.length);

// const poppedOut = users.pop();

// console.log(users, users.length, poppedOut);

// const users = ['dog', 'zebra', 'bull'];

// users.push('cat', 'dog');

// users.push('zebra');

// const shifted = users.shift();

// users.unshift('lion');

// console.log(users, users.length, shifted);

// push/pop -> быстро
// unshift/shift -> медленно


// console.log(users);
// console.log(users.length);
// console.log(Object.keys(users)); -> массив индексов исходного массива.

// const matrix = [
// 	[1, 2, 3],
// 	[3, 4, 5],
// 	[6, 7, 8]
// ];

// matrix[1][1]

// join(), reverse(), flat(), concat(), fill();

// const characters = ['%', '#', '^'];

// const words = ['hello', 'world']

// const reversedCharacters = words.concat(characters, [5, 5, 6], ['g', 'F'], 5, 't');

// console.log(characters);
// console.log(reversedCharacters);

// const matrix = [
// 	[1, 2, 3],
// 	[3, [4, [5, 7], 6], 5],
// 	[6, 7, 8]
// ];

// const unwrappedMatrix = matrix.flat(3);

// console.log(matrix);
// console.log(unwrappedMatrix);



// const users = ['tom', 'brad', 'jimmy'];

// console.log(users.fill('BUSTED!!!'));

// const range = new Array(6).fill(null);

// console.log(range);

// slice(), splice()

// const users = ['tom', 'brad', 'jimmy', 'tom', 'brad', 'jimmy', 'tom', 'brad', 'jimmy', 'tom', 'brad', 'jimmy'];

// const honorableUsers = users.slice(-4);

// console.log(users)

// console.log(honorableUsers);

// const users = [
// 	'tom', 
// 	'brad',
// 	'jimmy',
// 	'tom', 
// 	'brad', 
// 	'jimmy', 
// 	'tom', 
// 	'brad', 
// 	'jimmy', 
// 	'tom', 
// 	'brad', 
// 	'jimmy'
// ];

// users.splice(-5, 3, 50);

// console.log(users);

// indexOf(), includes()

// console.log(Object.keys(users))

// const winnerIndex = users.indexOf('tom');

// if (winnerIndex >= 0) {
// 	console.log('I know the winner is: ', users[winnerIndex]);
// } else {
// 	console.log('No winners');
// }

// const ALLOWED_OPERATIONS = ['delete', 'update', 'create'];

// const userOperation = prompt('Enter operation');

// if (ALLOWED_OPERATIONS.includes(userOperation)) {
// 	console.log('Do: ', userOperation);
// } else {
// 	console.log('RESTRICTED!!!');
// }

// const entities = [1, 2, 3, [1, 2]];

// console.log(entities.includes([1, 2]));


// const users = ['tom', 'brad', 'jimmy', 'tom', 'brad'];

// for(let cursor = users.length - 1; cursor >= 0; cursor--) {
// 	console.log(cursor);

// 	const currentElement = users[cursor];

// 	console.log(currentElement)
// }

// let user;
// while(user = users.shift()) console.log('Graduate User: ', user);

// for (let user of users) console.log(user);