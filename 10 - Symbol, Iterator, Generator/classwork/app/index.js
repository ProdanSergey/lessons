// const commonFunction = function(arg) {
// 	console.log(this, arg);
// };

// const arrowFunction = (arg) => {
// 	console.log(this, arg);
// }

// const arrowFunction = arg => {
// 	console.log(this, arg);
// }

// const arrowFunction = arg => console.log(this, arg); // one liner 

// const arrowFunction = arg => {
// 	console.log(this, arg);
// 	// ...

// 	return {};
// }

// const arrowFunction = (arg = 2, arg2 = 1, {firstName = 'Serhii', lastName = 'Prodan'}, ...rest) => {
// 	console.log(this, arg);

// 	console.log(rest)
// 	// ...

// 	return {};
// }

// arg => console.log(arg);

// const animals = ['🦎', '🦕', '🐓', '🐈'];

// animals.forEach(animal => console.log(animal));

// animals.forEach(function (animal) {
// 	console.log(animal);
// });

// animals.forEach(console.log);

// // this -> Window
// const zoo = {
// 	animals: ['🦎', '🦕', '🐓', '🐈'],
// 	sound(animal) {
// 		console.log(this);
// 		console.log(`I'am ${animal}`);
// 	},
// 	each() {
// 		this.animals.forEach(this.sound);
// 	}
// };


// zoo.sound('🦌');
// zoo.each();

// _self;
// call;
// apply;
// bind;
// Lambda - ArrowFunction;

// const zoo = {
// 	animals: ['🦎', '🦕', '🐓', '🐈'],
// 	getAll: () => {
// 		return this.animals;
// 	},
// 	sound(animal) {
// 		console.log(`I'am ${animal}`);
// 	},
// 	each() {
// 		const sound = myCalculationFunction;

// 		this.animals.forEach(sound);
// 	}
// };

// const getAll = zoo.getAll;


// console.log(getAll.call(zoo));
// console.log(getAll.apply(zoo));

// const bounded = getAll.bind(zoo);
// console.log(bounded(zoo));

// const myCalculationFunction = () => {
// 	this! function
// 	// ...1
// 	// ...1000000/
// };

// 1. String
// 2. Number
// 3. null
// 4. undefined
// 5. Boolean
// 6. BigInt
// 7. Symbol

// 6. Object
// 	1. Array
// 	2. Function

// const user = {
// 	firstName: 'John',
// 	lastName: 'Snow',
// 	[Symbol.for('id')]: 'strongly secured data',
// };

// // for (const sym of Object.getOwnPropertySymbols(user)) {
// // 	console.log(user[sym]);
// // }


// console.log(user[Symbol.for('id')]);

// const mySymbolId = Symbol.for('id');
// const mySymbolName = Symbol.for('name');

// console.log(Symbol.keyFor(mySymbolId));
// console.log(Symbol.keyFor(mySymbolName));


// console.log(Symbol.for(Symbol.keyFor(mySymbolId)));

// [Symbol.isConcatSpreadable]: false

// const arr = [1, 2 ,3].concat([4, 5], [6, 7], [8, 9]);

// console.log(arr);

// console.log(Symbol.isConcatSpreadable);
// const pseudoArr = {
// 	0: 'Hi',
// 	1: 'foo',
// 	2: ['bar', 'baz', 'zoo'],
// 	[Symbol.isConcatSpreadable]: true,
// 	length: 3
// };

// const arr = Array.from(pseudoArr);

// console.log([1, 2, 3].concat(arr));


// const zoo = {
// 	animals: ['🦎', '🦕', '🐓', '🐈'],
// 	current: 0,

// 	next() {
// 		const element = this.animals[this.current++];
// 		return {
// 			value: `look at me ${element}, wrrrrrr`,
// 			done: this.current > this.animals.length - 1
// 		};
// 	},

// 	[Symbol.iterator]() {
// 		return this;
// 	}	
// };


// iterator.next() -> {value: '🦎', done: false}
// iterator.next() -> {value: '🦕', done: false}
// iterator.next() -> {value: '🐓', done: false}
// iterator.next() -> {value: '🐈', done: true}

// for (const element of Map.values()) {
// 	console.log(element);
// }

// let done = false;
// do {
// 	const { value, done: isDone } = iterator.next();

// 	console.log(value);

// 	done = isDone;
// } while (!done);

// const allAnimals = ['🐈', '🐲', ...zoo];

// console.log(allAnimals);

// console.log(typeof iteratora);

// typeof iterator === 'object';

// const arrowFunc = () => iterator ❌ 

// const zooGenerator = function* () {
// 	const animals = ['🦎', '🦕', '🐓', '🐈'];

// 	const response = yield 'Hi, Im ready to start';

// 	const response2 = yield 'sdadasdasdt';

// 	for (let index = 0; index < animals.length; index++) {
// 		const animal = animals[index];
		
// 		yield animal;
// 	}
	

// 	return 'Its done';
// };

// for (const iterator of zooGenerator()) {
// 	console.log(iterator);
// }

// const iterator = zooGenerator();

// console.log(iterator.next('Accepted'));

// console.log('Before solid loop');

// for (let index = 0; index < 1000000000; index++) {}

// console.log('After loop');

// console.log(iterator.next('2323'));