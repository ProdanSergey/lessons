// const fruits = ['banana', 'orange', 'lemon'];

// const toString = function() {
// 	return `I'm ${this.type}, and my name is ${this.name}`
// }

// const valueOf = function() {
// 	return this.points;
// }

// const paul = {
// 	name: 'Paul',
// 	type: 'harvester',
// 	department: 'vegetables',
// 	points: 500,
// 	toString,
// 	valueOf,
// 	[Symbol.toPrimitive]() {
// 		if ('valueOf' in this) {
// 			return this.valueOf()
// 		} else {
// 			return this.toString()
// 		}
// 	}
// };

// const bill = {
// 	name: 'Bill',
// 	type: 'manager',
// 	department: 'office',
// 	points: 250,
// 	toString
// };

// const sumMath = paul + bill;

// alert(fruits);
// alert(paul);
// alert(bill);

// console.log(sumMath);

// const container = {
// 	width: 300,
// 	height: 400,
// 	refs: [],
// 	logger(message) {
// 		console.log(message)
// 	},
// 	addRef(ref) {
// 		this.refs.push(ref);
// 	},
// 	getBoundaries() {
// 		const self = this;

// 		this.refs.forEach(function(ref) {
// 			self.logger(ref);
// 		});

// 		return {
// 			width: self.width,
// 			height: self.height
// 		}
// 	}
// }

// container.addRef(1)
// container.addRef(2)
// container.addRef(3)

// console.log(container.getBoundaries())

// const whoAmI = function(intro, outro) {
// 	return `${intro}, My name is ${this.name} and I am ${this.type}, ${outro}`
// }

// const paul = {
// 	name: 'Paul',
// 	type: 'harvester',
// 	department: 'vegetables',
// 	points: 500,
// 	say() {
// 		return `I'm a harvester`
// 	}
// };

// const bill = {
// 	name: 'Bill',
// 	type: 'manager',
// 	department: 'office',
// 	points: 250,
// 	say() {
// 		return `I'm a manage`
// 	}
// };

// const berny = {
// 	name: 'Berny',
// 	type: 'policeman',
// 	say() {
// 		return `I'm a policeman`
// 	}
// }

// call
// apply

// const result = whoAmI.call(berny, 'Hello World');

// bind
// const binded = whoAmI.bind(berny);

// console.log(binded());
// const sum = function(a,b,c)  {
// 	return a + b + c;
// }

// const carrySum = function(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c
// 		}
// 	}
// }

// const sumWithTen = carrySum(10);

// const sumWithHundred = sumWithTen(10);

// const sumWithThousand = sumWithHundred(100);

// console.log(sum(1, 2, 3))

// console.log(sumWithThousand);a


// const say = function(who, message) {
// 	console.log(`${who} says ${message}`)
// };

// const simonSays = say.bind(null, 'Simon')

// simonSays('Hello');
// simonSays('Lets Go');
// simonSays('Whatever')
// simonSays('Byu')

// const lanaSays = say.bind(null, 'Lana');

// lanaSays('Hello');
// lanaSays('Lets Go');
// lanaSays('Whatever')
// lanaSays('Byu')

// const simonSaysHello = say.bind(null, 'Simon', 'Hello');

// simonSaysHello();
// simonSaysHello();

// const sum = function(a, b, c) {
// 	return a + b + c;
// };

// const sumWithTwenty = sum.bind(null, 10, 10);

// console.log(sumWithTwenty(5))

// const paul = {
// 	name: 'Paul',
// 	type: 'harvester',
// 	department: 'vegetables',
// 	points: 500,
// };

// const bill = {
// 	name: 'Bill',
// 	type: 'manager',
// 	department: 'office',
// 	points: 250,
// };

// const berny = {
// 	name: 'Berny',
// 	type: 'policeman',
// }

// const jinny = {
// 	name: 'Jinny',
// 	type: 'policeman',
// 	say() {
// 		return this.name
// 	}
// }

// const authorize = (type, user) => {
// 	const authorizedUser = {};

// 	switch (type) {
// 		case 'ADMIN':
// 			authorizedUser.permissions = ['READ', 'WRITE', 'DELETE']
// 			break;
// 		case 'POWER_USER': 
// 			authorizedUser.permissions = ['READ', 'WRITE']
// 			break;
// 		default:
// 			authorizedUser.permissions = ['READ']
// 			break;
// 	}

// 	return Object.assign({}, user, authorizedUser);
// };

// const giveAdminPermissions = authorize.bind(null, 'ADMIN');
// const giveSuperUserPermissions = authorize.bind(null, 'POWER_USER');
// const giveUserPermissions = authorize.bind(null, 'USER');

// const admin = giveAdminPermissions(paul);
// const superUserBill = giveSuperUserPermissions(bill);
// const superUserBerny = giveSuperUserPermissions(berny);
// const user = giveUserPermissions(jinny);

// console.log(user);

// const billSays = jinny.say.bind(bill);

// console.log(billSays());

// const users = {
// 	0: 'Jinny',
// 	1: 'Brad',
// 	2: 'Fred',
// 	length: 3
// };

// Object.defineProperty(users, 'length', {
// 	enumerable: false,
// 	writable,
// 	configurable,
// 	get,
// 	set
// })

// console.log(users);

// for (const index in users) {
// 	console.log(index);

// 	console.log(users[index]);
// }

const DATA = {
	getMaxDay(year, month) {
		return new Date(year, month, 0);
	},
	isLeapYear(year) {
		return this.getMaxDay(year, 2).getDate() === 29
	},
}


const userFabric = function (firstName, lastName, year, month, day) {
	return {
		firstName,
		lastName,
		year,
		month, // 1...12
		day,
		get fullName() {
			return `${this.firstName} ${this.lastName}`;
		},
	
		set fullName(value) {
			const firstName = value.split(' ')[0];
			const lastName = value.split(' ')[1];
	
			if (firstName) {
				this.firstName = firstName;
			}
	
			if (lastName) {
				this.lastName = lastName;
			}
		},

		get age() {
			const month = this.month - 1

			const now = new Date();

			const originBirthDay = new Date(this.year, month, this.day);
			const birthDay = new Date(now.getFullYear(), month, this.day);

			const fullAge = birthDay.getFullYear() - originBirthDay.getFullYear();

			if (now > birthDay) {
				return fullAge;
			} else {
				return fullAge - 1;
			}
		} 
	}}

const GeneralUser = {
	class: 'Humanoid'
}

const JinnyPerkins = userFabric('Jinny', 'Perkins', 1975, 11, 12);
const BrendaHopkins = userFabric('Brenda', 'Hopkins', 2000, 5, 20);

// console.log(JinnyPerkins.age);
// console.log(BrendaHopkins.age);

// const jinnyName = JinnyPerkins.firstName;
// const jinnSurname = JinnyPerkins.lastName;
// const age = JinnyPerkins.age;

// console.log(jinnyName, jinnSurname, age);

// const { firstName, ...restProps } = JinnyPerkins;

// console.log(firstName)

// console.log(restProps)

// const example = {
// 	firstName: 'Some Value',
// 	...GeneralUser,
// 	...JinnyPerkins,
// };

// console.log(example);

// Object.assign({firstName: 'Some Value' }, GeneralUser, JinnyPerkins)

// const values = [1, 21, 2, 2, 2, 2, 3, 1, 3, 2, 1];

// // const date = new Date();
// // const error = new Error();

// const set = new Set(values);

// // console.log(set.add(8))
// // console.log(set.add(8))
// // console.log(set.add(8))
// // console.log(set.add(8))
// // console.log(set.add(8))
// // console.log(set.add(8))

// // console.log(set.has(8))

// // for (const iterator of set.values()) {
// // 	console.log(iterator)
// // }

// const uniqArray = Array.from(set);

// console.log(uniqArray[2])

// const map = new Map([
// 	['hello', 'world'],
// 	['foo', 'bar'],
// 	['baz', 20]
// ])

// console.log(map)

// console.log(map.get('hello'))

// console.log(map.get('baz'))

// map.set('baz', 20000);

// console.log(map.get('baz'))

// console.log(map.values())
// console.log(map.keys())

// for (const iterator of map.values()) {
// 	console.log(iterator)
// }

// const mapped = Array.from(map.values());

// console.log(mapped)

// let paul = {
// 	name: 'Paul',
// 	type: 'harvester',
// 	department: 'vegetables',
// 	points: 500,
// };

// const bill = {
// 	name: 'Bill',
// 	type: 'manager',
// 	department: 'office',
// 	points: 250,
// };

// const berny = {
// 	name: 'Berny',
// 	type: 'policeman',
// }

// const jinny = {
// 	name: 'Jinny',
// 	type: 'policeman'
// }

// const map = new Map();

// map.set(paul, 'Hello Im Paul');
// map.set(berny, 'Hello Im Berny');


// console.log(map.get(paul))
// console.log(map.get(berny))

// for (const iterator of map.keys()) {
// 	console.log(iterator);
// }

// const wSet = new WeakSet([paul, paul, paul, paul, paul, berny, jinny]);

// console.log(wSet.has(paul))

// paul = null;

// console.log(wSet.has(paul))



// const DATA = {
// ... 
// };


// const INPUT = {
// 	number(message, validationCallback) {
// 		let input
// 		do {
// 			input = +prompt(message);
// 		} while (input !== input || validationCallback(input));

// 		return input;
// 	},

// 	string(message, validationCallback) {
// 		let input
// 		do {
// 			input = prompt(message);
// 		} while (validationCallback(input));

// 		return input;
// 	}
// }

// const userFabric = function (firstName, lastName, year, month, day) {
// 	return {
// 		firstName,
// 		lastName,
// 		year,
// 		month, // 1...12
// 		day,
// 		get fullName() {
// 			return `${this.firstName} ${this.lastName}`;
// 		},
	
// 		set fullName(value) {
// 			const firstName = value.split(' ')[0];
// 			const lastName = value.split(' ')[1];
	
// 			if (firstName) {
// 				this.firstName = firstName;
// 			}
	
// 			if (lastName) {
// 				this.lastName = lastName;
// 			}
// 		},

// 		get age() {
// 			const month = this.month - 1

// 			const now = new Date();

// 			const originBirthDay = new Date(this.year, month, this.day);
// 			const birthDay = new Date(now.getFullYear(), month, this.day);

// 			const fullAge = birthDay.getFullYear() - originBirthDay.getFullYear();

// 			if (now > birthDay) {
// 				return fullAge;
// 			} else {
// 				return fullAge - 1;
// 			}
// 		} 
// 	}}

// const archiveFabric = function () {
// 	const entries = [];

// 	return {
// 		add(item) {
// 			entries.push(item);
// 		},
// 		delete(index) {
// 			const deleted = entries.slice(index, 1);

// 			return deleted[0];
// 		},
// 		find(cb) {
// 			return entries.find(cb)
// 		},
// 		filter(){
// 			return entries.filter(cb)
// 		},
// 		isEmpty() {
// 			return entries.length <= 0
// 		},
// 		count() {
// 			return entries.length;
// 		}
// 	}
// }

// const APPLICATION  = {
// 	archive: archiveFabric(),
// 	operations: [
// 		['Add User', 'addUser'],
// 		['Delete User', 'deleteUser']
// 	],

// 	run () {
// 		const index = this.getOperation();

// 		do {
// 			this.doOperation(index)
// 		} while (confirm());

// 		this.end();
// 	},

// 	getOperation() {
// 		let operation = INPUT.number();
// 	},

// 	doOperation(index) {
// 		const operation = this.operations[index];

// 		if (operation) {
// 			const methodName = operation[1];

// 			this[methodName]();
// 		}
// 	},

// 	end () {
// 		console.log('Buy Buy')
// 	},

// 	addUser() {
// 		const firstName = INPUT.string();
// 		const lastName = INPUT.string();



// 		const user = userFabric(firstName, lastName);

// 		this.archive.add(user);
// 	},

// 	deleteUser() {
// 		if (this.archive.isEmpty()) {
// 			console.log('Eadasdasdasd');
// 			return undefined;
// 		}

// 		const minIndex = 0;
// 		const maxIndex = this.archive.count() - 1;

// 		const indexToDElete = INPUT.number();

// 		const deleted = this.archive.delete(indexToDElete);


// 		console.log('..sdqwdqwdqwdsqwdq')
// 	}
}
