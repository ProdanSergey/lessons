// const STDIN = (function () {
// 	const runValidation = (callback, value) => {
// 		return typeof callback === 'function' ? callback(value) : !value;
// 	};
	
// 	return {
// 		number(message, validate) {
			
// 			let input;
// 			do {
// 				input = +prompt(message);
// 			} while(input !== input || runValidation(validate, input));

// 			return input;
// 		},
// 		string(message, validate) {
// 			let input;
// 			do {
// 				input = prompt(message);
// 			} while(runValidation(validate, input));

// 			return input;
// 		}
// 	};
// })();

// const DATE = (function () {
// 	isLeapYear(year) {

// 	},
// 	getMaxDay(year, month) {

// 	},
// 	zodiac(month, day) {
		
// 	}
// })();

// const archiveFabric = () => {
// 	const archive = [];
		
// 	return {
// 		take(from, to) {
// 			return archive.slice(from, to);
// 		}
// 	};
// };

// const userFabric = () => {
// 	return {
// 		firstName: null,
// 		lastName: null,
// 		year: null,
// 		month: null,
// 		day: null,

// 		get fullName() {

// 		},

// 		get age() {
// 			return this.age;
// 		}
// 	}
// };

// const APPLICATION = (() => {
// 	const FIRST_NAME_MIN_LENGTH = 5;
// 	const FIRST_NAME_MAX_LENGTH = 20;

// 	const validateFirstName = (input) => {
// 		return input < FIRST_NAME_MIN_LENGTH || input > FIRST_NAME_MAX_LENGTH;
// 	};

// 	const OPERATIONS = [
// 		['Add User', 'addUser']
// 	];

// 	return {
// 		run() {
// 			do {
// 				const opIndex = this.getOperation();
	
// 				this.doOperation(opIndex);
// 			} while (confirm('Do you want to repeat?'));
// 		},
// 		doOperation(index) {
// 			const [, methodName] = OPERATIONS[index];

// 			if (typeof this[methodName] === 'function') {
// 				this[methodName]();
// 			}
// 		},
// 		getOperation() {
// 			const availables = Object.keys(OPERATIONS).map(Number);
// 			const validate = (input /* 0 || 1 || 2 || NaN || 'sdsadasd'*/) => {
// 				return !availables.includes(input);
// 			};
// 			return STDIN.number(`Enter operation index: one of the ${availables.join(',')}`, validate); 
// 		},
// 		addUser() {
// 			const firstName = STDIN.string('Enter firstName', validateFirstName);

// 			console.log(firstName);
// 		},
// 		updateUser() {
// 			const firstName = STDIN.string('Enter firstName', validateFirstName);

// 			console.log(firstName);
// 		}
// 	};
// })();

// APPLICATION.run();

// class Person {
// 	constructor(firstName, lastName, abilities = []) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.abilities = abilities;
// 	}

// 	walk() {
// 		console.log(`${this.fullName} is walking`);
// 	}

// 	learn() {
// 		if (this.abilities.includes('INT')) {
// 			console.log('I can learn smt');
// 		} else {
// 			console.log('Forbidden');
// 		}
// 	}

// 	get fullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	static isPerson(target) {
// 		console.log(target instanceof Person);
// 	}
// }

// const john = new Person('John', 'Rambo', ['STR']);

// john.walk();

// Person.isPerson(john);

// const einstein = new Person('Albert', 'Einstein', ['INT']);

// john.learn();

// einstein.learn();

// function IntelligentPerson = function(firstName, lastName) {
// 	Person.call(this, )
// }

// IntelligentPerson.prototype = Object.create(Person.prototype, {
// 	constructor: {
// 		value: function() {

// 		}
// 	}
// })

// class IntelligentPerson extends Person {
// 	constructor(firstName, lastName) {
// 		super(firstName, lastName, ['INT']);
// 	}
// }

// class StrengthPerson extends Person {
// 	constructor(firstName, lastName) {
// 		super(firstName, lastName, ['STR']);
// 	}
// }

// class CoolPerson extends Person {
// 	constructor(firstName, lastName) {
// 		super(firstName, lastName, ['AGL']);
// 	}

// 	walk() {
// 		console.log(`${this.firstName} ${this.lastName} is walking fabulous`);
// 	}
// }

// class MadPerson extends Person {
// 	constructor(firstName, lastName) {
// 		super(firstName, lastName, ['INT']);
// 	}

// 	walkAndJump() {
// 		super.walk();
// 		console.log('And I am jumping');
// 	}
// }

// const stethem = new StrengthPerson('Jason', 'Statham');

// const dolph = new IntelligentPerson('Dolph', 'Lundgrem');

// console.log(stethem);

// stethem.walk();

// stethem.learn();

// dolph.walk();

// dolph.learn();

// const hellboyMate = new CoolPerson('Some', 'Name');

// hellboyMate.walk();

// console.log(hellboyMate instanceof Person);

// const joker = new MadPerson('Joker', 'From DC');

// joker.walk();
// joker.walkAndJump();
// joker.learn();

// class Person {
// 	constructor(firstName, lastName, abilities = []) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.abilities = abilities;
// 	}

// 	walk() {
// 		throw new Error('You must implement me!');
// 	}

// 	learn() {
// 		throw new Error('You must implement me!');
// 	}

// 	get fullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// class HomoSapiens extends Person {
// 	constructor(firstName, lastName, abilities) {
// 		super(firstName, lastName, abilities);
// 	}

// 	walk() {
// 		console.log('I can walk standing');
// 	}

// 	learn() {
// 		console.log('I can learn');
// 	}
// }

// class Тeanderthalensis extends Person {
// 	constructor(firstName, lastName, abilities) {
// 		super(firstName, lastName, abilities);
// 	}

// 	walk() {
// 		console.log('I can walk on hands and feet');
// 	}

// 	learn() {
// 		console.log('I dont know what it is');
// 	}
// }


// const MyPrivateClass = (() => {
// 	const log = function(message) {
// 		console.log(message);
// 	};
	
// 	class MyPrivateClass {
// 		constructor() {

// 		}

// 		hello() {
// 			log('Hello World');
// 		}
// 	};

// 	return MyPrivateClass;
// })();

// const entity = new MyPrivateClass();

// entity.hello();

// entity.log();