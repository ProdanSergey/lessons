// const user = {
// 	firstName: 'John',
// 	lastName: 'Snow',
// 	fullName: 'John Snow',
// 	'complex-key': 'data',
// 	500: 'computed data',
// 	bar: {
// 		foo: {
// 			hello: 'world'
// 		},
// 		baz: 'baz'
// 	}
// };

// const newUser = user;

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.fullName);
// console.log(user['complex-key']);

// console.log(user['computed-key'])

// let hello = user && user.bar && user.bar.foo && user.bar.foo.hello;

// let hello = (user?.bar?.tor?.hello) ?? 'DEFAULT' ;

// newUser.firstName = 'Peter';
// user.lastName = 'Parker';

// console.log('equals? ', user === newUser);

// const user = {
// 	firstName: 'John',
// 	'last-name': 'Snow',
// 	fullName: 'John Snow',
// 	isRegistered: false,
// 	unknown: undefined
// }

// user.firstName = 'Peter';
// user['last-name'] = 'Parker';

// console.log(JSON.stringify(user));

// const isDeleted = delete user.fullName;

// console.log('FullName was deleted?', isDeleted);

// console.log(JSON.stringify(user));

// if ('unknown' in user) {
// 	console.log('presented');
// }

// Object.assign()

// const user = {
// 	firstName: 'John',
// 	lastName: 'Snow',
// 	fullName: 'John Snow',
// 	bar: {
// 		foo: {
// 			hello: 'world'
// 		},
// 		baz: 'baz'
// 	}
// };

// // Shallow Copy

// const copyOfUser = Object.assign({}, user);

// console.log(user.bar === copyOfUser.bar);

// 2. Object.fromEntries().

// const entries = [
// 	['foo', 'bar'],
// 	['bar', 'foo'],
// 	['baz', 'beep']
// ];

// console.log(entries);

// const obj = Object.fromEntries(entries);

// console.log(obj)

// 3. Object.preventExtensions(), Object.seal(), Object.freeze().

// const user = {
// 	firstName: 'John',
// 	lastName: 'Snow',
// 	fullName: 'John Snow',
// 	bar: {
// 		foo: {
// 			hello: 'world'
// 		},
// 		baz: 'baz'
// 	}
// };

// Object.seal(user);

// const isDeleted = delete user.firstName;

// console.log(isDeleted)

// console.log(JSON.stringify(user));

// user.role = 'power user';

// console.log(JSON.stringify(user));

// user.fullName = 'Adam Johnson';

// console.log(JSON.stringify(user));

// Object.freeze(user);

// const isDeleted = delete user.firstName;

// console.log(isDeleted)

// console.log(JSON.stringify(user));

// user.role = 'power user';

// console.log(JSON.stringify(user));

// user.fullName = 'Adam Johnson';

// console.log(JSON.stringify(user));

// Object.preventExtensions(user);

// const isDeleted = delete user.firstName;

// console.log(isDeleted)

// console.log(JSON.stringify(user));

// user.role = 'power user';

// console.log(JSON.stringify(user));

// user.fullName = 'Adam Johnson';

// console.log(JSON.stringify(user));

// 4. Object.isExtensible(), Object.isSealed(), Object.isFrozen().

// console.log(Object.isExtensible(user));


// const user = {

// };

// Object.defineProperty(user, 'firstName', {
// 	configurable: true,
// 	enumerable: true,
// 	writable: false,
// 	value: 'John'
// })

// Object.defineProperties(user, {
// 	firstName: {
// 		configurable: true,
// 		enumerable: true,
// 		writable: false,
// 		value: 'John'
// 	},
// 	lastName: {
// 		configurable: false,
// 		enumerable: true,
// 		writable: true,
// 		value: 'Snow'
// 	}
// })

// user.firstName = 'Peter'

// console.log(user)

// Iterations

// const user = {
// 	firstName: 'John',
// 	lastName: 'Snow',
// 	fullName: 'John Snow',
// 	bar: {
// 		foo: {
// 			hello: 'world'
// 		},
// 		baz: 'baz'
// 	},
// 	'+41': 25,
// 	'+11': 55
// };

// const arr = [1, 2, 3];

// arr.firstName = 'John';

// console.log(arr);

// for (const element of user) console.log(element);

// for (const key in user) {
// 	console.log(key);
// }

// for (const element of Object.values(user)) {
// 	console.log(element);
// }