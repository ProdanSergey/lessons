'use strict'

// const myFunc = function () {
// 	// 'use strict'

// 	undefined = "defined";

// 	console.log(undefined);
// }

// myFunc();

// const dictionary = {
// 	x: 2,
// 	y: 2,
// 	horizon: "z",
// }

// Object.freeze(dictionary);

// dictionary.x = 5;

// console.log(dictionary);

// const user = { name: "john", surname: "doe"}

// console.log(user);

// const num = requestBody;

// requestBody.userId = 25;

// if (requestBody.userId === undefined) {
// 	fallback()
// }

// const foo = function foo() {
// 	console.log(foo.caller);
// 	console.log(foo.arguments)
// };

// const baz = function baz() {
// 	foo();
// }

// baz();

// const user = { firstName: "john", lastName: "doe", age: 50};

// const firstName = "Bob";
// const lastName = "Jenkins";

// const { firstName: userFirstName, lastName: userLastName } = user;

// const mapUserData = (target, key) => {
// 	const { [key]: value } = target;

// 	return value;
// };

// console.log(mapUserData(user, 'lastName'));

// const err = new Error("general error");
// const rangeErr = new RangeError("general range error");
// const syntaxError = new SyntaxError("general range error");

// console.log(err);
// console.log(rangeErr);
// console.log(syntaxError);

// const handleError = (err) => {
// 	if (err instanceof RangeError) {
// 		// ... do smt with range Erorr
// 	}

// 	if (err instanceof SyntaxError) {
// 			// ... do smt with syntax Erorr
// 	}


// };

// class NotFoundError extends Error {
// 	constructor() {
// 		super('Entity not found');
// 	}
// }

// class ValidationError extends Error {
// 	constructor(field) {
// 		const timestamp = new Date().toISOString();

// 		super(`Validation Error: for ${field}, at ${timestamp}`);

// 		this.field = field;
// 		this.timestamp = new Date().toISOString();
// 	}
// }

// const DB = {
// 	bob: "Bob Johnson"
// };

// class Repository {
// 	has(key) {
// 		return Object.prototype.hasOwnProperty.call(DB, key);
// 	}
// 	get(key) {
// 		if (this.has(key)) {
// 			return DB[key];
// 		}

// 		throw new NotFoundError();
// 	}
// }

// const repo = new Repository(); 

// console.log(repo.get('fred'));


// const handleUserInput = (field, input) => {
// 	if (input > 500) {
// 		throw new ValidationError(field);
// 	}
// };


// let isLoading = false;

// try {
// 	isLoading = true;
// 	// handleUserInput("totalSalary", 300);

// 	// request();
// } catch (error) {
// 	console.log(error)
// } finally {
// 	isLoading = false;
// }

// const FizzBuzz = (() => {
	

// 	const store = new WeakMap();

// 	const fizzBuzz = (num) => {
// 		if (num % 3 === 0 && num % 5 === 0) {
// 			this.logger('FizzBuzz');
// 		}
// 	};

// 	class FizzBuzz {	
// 		constructor(logger) {
// 			this.logger = logger;

// 			store.set(this, {
// 				fizzBuzz: fizzBuzz.bind(this)
// 			});
// 		}

// 		static version = "1.1.2";

// 		static getVersion() {
// 			return FizzBuzz.version;
// 		}
	
// 		shuffle(num) {
// 			const { fizzBuzz } = store.get(this);
// 			fizzBuzz();
// 			// if (num % 3 === 0) {
// 			// 	this.logger('Fizz');
// 			// 	return;
// 			// }
// 			// if (num % 5 === 0) {
// 			// 	this.logger('Buzz');
// 			// 	return;
// 			// }
	
// 			this.logger(String(num));
// 		}
// 	};

// 	return FizzBuzz;
// })()


// const fizzBuzz = new FizzBuzz(console.log);

// fizzBuzz.shuffle(1);
// fizzBuzz.shuffle(2);
// fizzBuzz.shuffle(3);
// fizzBuzz.shuffle(4);
// fizzBuzz.shuffle(5);
// fizzBuzz.shuffle(15);

// console.log(FizzBuzz.getVersion());