// // function User() {
// // 	// 1. Create new Object
// // 	// 2. Bind this
// // 	this.firstName = 'John';
// // 	this.lastName = 'Snow';
// // 	// 3. return this
// // } 
// // console.log(typeof User, User, 'prototype exist: ', 'prototype' in User);
// // console.log(typeof User.prototype, User.prototype, 'prototype exist: ', 'prototype' in User.prototype);

// // const fakeProto = {
// // 	version: 1,
// // };

// // const user1 = new User();

// // console.log(user1.__proto__ === User.prototype);
// // console.log(Object.getPrototypeOf(user1) === User.prototype);

// // const user2 = new User();

// // console.log(user2);

// // Object.setPrototypeOf(user1, fakeProto);

// // console.log(user1);

// // console.log(user1.__proto__ === User.prototype);
// // console.log(user2.__proto__ === user1.__proto__);

// // console.log(user2.__proto__ === User.prototype);

// // User.prototype = {};

// // console.log(user1);
// // console.log(user2);

// // const user3 = new User();

// // console.log(user3);

// // function GoodGuy(firstName, lastName) {
// // 	// 1. Create new Object
// // 	// 2. Bind this
// // 	this.firstName = firstName;
// // 	this.lastName = lastName;
// // 	// 3. return this
// // } 

// // function BadGuy(firstName, lastName) {
// // 	// 1. Create new Object
// // 	// 2. Bind this
// // 	this.firstName = firstName;
// // 	this.lastName = lastName;
// // 	// 3. return this
// // } 

// // const johnSnow = new GoodGuy('John', 'Snow');
// // const sansaStark = new GoodGuy('Sansa', 'Stark');

// // console.log(johnSnow);
// // console.log(sansaStark);

// // console.log(typeof johnSnow);
// // console.log(typeof sansaStark);

// // const jophryBaratteon = new BadGuy('Jophry','Baratteon');

// // console.log(jophryBaratteon);

// // console.log(typeof jophryBaratteon);

// // console.log(typeof johnSnow === typeof jophryBaratteon);

// // console.log(johnSnow instanceof GoodGuy);

// // console.log(jophryBaratteon instanceof BadGuy);

// // console.log(sansaStark instanceof BadGuy);

// // const unit = {
// // 	firstName: 'Bob',
// // };

// // Object.setPrototypeOf(unit, Object.getPrototypeOf(sansaStark));

// // const simple = {};

// // console.log(simple);

// // const unit = Object.create(GoodGuy.prototype, {
// // 	firstName: {
// // 		value: 'Bob',
// // 		configurable: false
// // 	}
// // });

// // console.log(unit);

// // function GoodGuy(firstName, lastName) {
// // 	// 1. Create new Object
// // 	// 2. Bind this
// // 	this.firstName = firstName;
// // 	this.lastName = lastName;
// // 	// 3. return this
// // } 

// // function BadGuy(firstName, lastName) {
// // 	// 1. Create new Object
// // 	// 2. Bind this
// // 	this.firstName = firstName;
// // 	this.lastName = lastName;
// // 	// 3. return this
// // } 


// const Human = (() => {
// 	const invokes = [];

// 	function Human(name) {
// 		this.name = name; 
// 	}

// 	Human.prototype.walk = function walk() {
// 		invokes.push(this);
// 		console.log(`I'am ${this.name}, and I can walk`);
// 	};

// 	Human.prototype.getInvokesCount = function getInvokesCount() {
// 		console.log(invokes.length);
// 	};

// 	return Human;
// })();

// Human.staticField = 'STATIC_FIELD';

// Human.isInstanceOfHuman = function(obj) {
// 	console.log(obj instanceof Human);
// };

// const nancy = new Human('Nancy');
// const bradly = new Human('Bradly');

// console.log(nancy);
// console.log(bradly);

// nancy.walk();
// bradly.walk();

// nancy.getInvokesCount();

// console.log(Human.staticField);

// Human.isInstanceOfHuman(nancy);

// function Human(name) {
// 	this.name = name; 
// }

// Human.prototype.walk = function walk() {
// 	invokes.push(this);
// 	console.log(`I'am ${this.name}, and I can walk`);
// };

// Human.isInstanceOfHuman = function(obj) {
// 	console.log(obj instanceof Human);
// };

// const unit = new Human();

// console.log(unit.constructor.prototype);

// function Human(name) {
// 	this.name = name; 
// }

// Human.prototype.walk = function walk() {
// 	console.log(`I'am ${this.name}, and I can walk`);
// };

// Object.defineProperty(Human.prototype, {
// 	fullName: {
// 		get: function name(params) {
// 		}
// 	}
// })

// Human.prototype = {
// 	constructor: Human,

// 	walk() {
// 		console.log(`I'am ${this.name}, and I can walk`);
// 	},

// 	get fullName() {

// 	}
// };

// const unit = new Human('Fred');

// console.log(unit);

// unit.walk();

// const sardaucar = new unit.constructor('Hassan');

// console.log(sardaucar);

// sardaucar.walk();

// console.log(sardaucar);

// const archiveFabric = () => {
// 	const entries = [];

// 	return {
// 		add(item) {
// 			entries.add[item];
// 		},
// 		delete() {

// 		}
// 	};
// };

// const Archive = (() => {
// 	const archives = new WeakMap();

// 	function Archive(name) {
// 		this.name = name; 
		
// 		archives.set(this, []);
// 	}
	
// 	Archive.prototype.add = function add(item) {
// 		archives.get(this).push(item);
// 	};

// 	Archive.prototype.getEntries = function getEntries() {
// 		return console.log(archives.get(this));
// 	};

// 	return Archive;
// })();

// let userArchive = new Archive('users');
// let accountArchive = new Archive('accounts');

// userArchive.add('HELLO WORLD');

// accountArchive.add('FOO BAR');

// userArchive = null;

// accountArchive.add('BAZ BAD');

// accountArchive.getEntries();

// function Humanoid(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// Humanoid.prototype.ride = function ride() {
// 	console.log(`${this.firstName} is riding on horse`);
// };

// ////////

// function GoodGuy(firstName, lastName) {
// 	Humanoid.call(this, firstName, lastName);
// 	this.type = 'good';
// };

// GoodGuy.prototype = Object.create(Humanoid.prototype, {
// 	constructor: {
// 		value: GoodGuy
// 	}
// });

// GoodGuy.prototype.help = function help() {
// 	console.log('Help somebody');
// };

// ///


// function BadGuy(firstName, lastName) {
// 	Humanoid.call(this, firstName, lastName);
// 	this.type = 'bad';
// };

// BadGuy.prototype = Object.create(Humanoid.prototype, {
// 	constructor: {
// 		value: BadGuy
// 	}
// });

// BadGuy.prototype.offend = function offend() {
// 	console.log('Offend somebody');
// };


// const paladin = new GoodGuy('Uther', 'Ligh');

// const darkKnight = new BadGuy('Arthas', 'The Darkknight');

// console.log(paladin.constructor);
// console.log(darkKnight);

// paladin.help();
// darkKnight.offend();


// Admin -> ['WRITE', 'READ']
// Guest -> ['READ']

// function Account(email, password, firstName, lastName) {
// 	this.email = ...
// }

// function Admin(params) {
// 	SuperClass

// 	type= 'Admin'

// 	permission = ['READ', 'WRITE']
// }

// function Guest(params) {
// 	SuperClass

// 	type ='Gueest'

// 	permission = ['READ', 'WRITE']
// }


// const AUTHORIZE = {
// 	accounts: archiveFactory([
// 		new Admin({
// 			email: 'example@admin.com',
// 			password: 'admin',
// 			firstName: 'admin',
// 			lastName: 'admin'
// 		})
// 	])

// 	register() {
// 		const email = STDIN.string(message, valdiation -> !in accounts);
// 		const password = STDIN.string(message, valdiation);

// 		return new Guest();
// 	},


// 	logIn() {
// 		const email = STDIN.string(message, valdiation -> includes('@'));
// 		const password = STDIN.string(message, valdiation -> length > 5);

// 		const user = this.accounts.getByEmail(email);

// 		if (user) {
// 			return user;
// 		}

// 		if (confirm('Want to register?')) {
// 			return this.register();
// 		}

// 		return null;
// 	}

// 	getByEmail(email) {
// 		this.accounts.find((user) => user.email === email);
// 	}
// }

// const APP = {
// 	this.account: null;
// 	users: archiveFactory();

// 	run() {
// 		this.account = AUTHORIZE.logIn();
	
// 		do() {
// 			const index = this.getOp();
		
// 			this.doOp(index)
// 		} while()
// 	}
	
// 	getOp() {
// 		const permission = this.account.permission;

// 		let OPERATIONS = [
// 			['Help', 'showHelp'];
// 		];

// 		if (has 'Write') {
// 			OPERATIONS = [
// 				...OPERATIONS,
// 				['AddUser', 'addUser'],
// 				['DeleteUser', 'deleteUser'],
// 			]
// 		}

// 		if (has 'Read') {
// 			OPERATIONS = [
// 				...OPERATIONS,	
// 				[..]
// 			]
// 		}

		
// 	}
// }