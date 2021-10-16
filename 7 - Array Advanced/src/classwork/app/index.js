// const CURRENT_YEAR = 2021;

// const MIN_AGE = 1900;
// const MAX_AGE = CURRENT_YEAR;
// const AGE_MESSAGE = 'Enter age';

// const getInput = function(message, validate, coerce) {
// 	let input;

// 	do {
// 		const beforeAssign = prompt(message);

// 		input = coerce ? coerce(beforeAssign) : beforeAssign
// 	} while (validate(input));

// 	return input;
// };

// const validateAge = function(input) {
// 	return isNaN(input) || input < MIN_AGE || input > MAX_AGE;
// }

// const coerceAgeToNumber = function(beforeInput) {
// 	return Number(beforeInput);
// }

// const age = getInput(AGE_MESSAGE, validateAge, coerceAgeToNumber);

// console.log(age);

// const MIN_LENGTH= 5;
// const MAX_LENGTH = 20;

// const validateFirstName = function(input) {
// 	return input === null || input.length < MIN_LENGTH || input.length > MAX_LENGTH;
// }

// const firstName = getInput('Enter name', validateFirstName);

// console.log(firstName);

// Array Iteration Methods

// const users = ['Fred', 'Bred', 'Mat'];

// const forEachElement = function(target, callback) {
// 	for (let index = 0; index < target.length; index++) {
// 		const element = target[index];
		
// 		callback(element, index, target);
// 	}	
// }

// forEachElement(users, function(user, index) {
// 	console.log(`My index is: ${index}`);
// });

// 1 - element, 2 - index, 3 - rel

// const showUserName = function(user, index, rel) {
// 	console.log(`Hello! My name is: ${user} of ${rel}`);
// }

// users.forEach(showUserName);

// const showUserIndex = function(element, index) {
// 	console.log(`My index is: ${index}`);
// }

// users.forEach(showUserIndex);

// const users = ['Fred', 'Bred', 'Mat'];

// const mapUserName = function(element, index, rel) {
// 	return Math.random();
// }

// const reversedUsers = users.map(mapUserName);

// console.log(users);
// console.log(reversedUsers);

// console.log(users === reversedUsers)

// const users = ['Freddy', 'Bred', 'Mat', 'Johnny'];

// const filterUser = function (element, index, rel) {
// 	return element.length > 4;
// };

// const filteredUsers = users.filter(filterUser);

// console.log(users);
// console.log(filteredUsers);

// const users = ['Freddy', 'Johnny', 'Bred', 'Mat', 'Johnny'];

// const findJohnny = function (element, index) {
// 	return element === 'Johnny';
// };

// const match = users.find(findJohnny);

// console.log(match)

// const findJohnnyPosition = function (element, index) {
// 	return element === 'Johnny';
// };

// const matchedIndex = users.findIndex(findJohnnyPosition);

// console.log(matchedIndex);

// const elements = ['string', 123, null, {}];

// const checkElement = function(element) {
// 	return Boolean(element);
// }

// const allTrue = elements.every(checkElement); // &&
// const someTrue = elements.some(checkElement); // ||

// console.log('all', allTrue);
// console.log('some', someTrue);

// const users = [
// 	{firstName: 'John', age: 25}, 
// 	{firstName: 'Bob', age: 16}, 
// 	{firstName: 'Dylan', age: 54}, 
// 	{firstName: 'Peter', age: 32}
// ];

// // 1 - accumulator (previous state), 2 - element, 3 - index, 4 - rel
// const findSumAge = function(sum, currentUser) {
// 	const newState = sum + currentUser.age

// 	return newState;
// }

// const sumAge = users.reduce(findSumAge, 0)

// console.log('Sum Age is:', sumAge);
// console.log('Aprox is:', Math.round(sumAge / users.length));

// const address = {
// 	buildingNumber: 50,
// 	street: 'Shevchenko str',
// 	floor: 2,
// 	flat: 24,
// 	owner: 'Ivan',
// 	type: 'Apartment'
// };

// const ADDRESS_FIELDS = ['street', 'buildingNumber', 'floor', 'flat'];

// // 1 - accumulator (previous state), 2 - element, 3 - index, 4 - rel
// const buildAddress = function(currentKey) {
// 	return address[currentKey]
// }

// const resultAddress = ADDRESS_FIELDS.map(buildAddress)

// console.log(resultAddress.join(','));


// const numbers = [5, 15, 3, 23, 1];

// let count = 0;

// // 1 - a, 2 - b
// const sortNumbers = function(a, b) {
// 	console.log('iteration', count++);
// 	console.log('a', a);
// 	console.log('b', b);

// 	return a - b;
// };

// numbers.sort(sortNumbers)

// console.log(numbers)

// const now = new Date();

// console.log(Number(now))

// console.log(Date.now())

// const birthday = new Date(1988, 10, 12);

// // +3 Local Timezone
// console.log(birthday.getFullYear())
// console.log(birthday.getMonth())
// console.log(birthday.getDate())
// console.log(birthday.getHours())
// // 0 UTC Timezone
// console.log(birthday.getUTCFullYear())
// console.log(birthday.getUTCMonth())
// console.log(birthday.getUTCDate())
// console.log(birthday.getUTCHours())

// birthday.setFullYear(2010);
// birthday.setMonth(5);

// console.log(birthday);

// birthday.setFullYear(birthday.getFullYear() + 2);
// birthday.setDate(birthday.getDate() + 50);

// console.log(birthday);

// console.log(birthday)

// const msOnPrevDate = birthday.setDate(0);

// console.log(msOnPrevDate);

// const timestampOnPrevDate = new Date(msOnPrevDate);

// const currentDayOfTimestamp = timestampOnPrevDate.getDate();

// console.log(currentDayOfTimestamp);