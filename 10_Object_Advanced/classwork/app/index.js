/* 

return (value) -> return ({ value }) -> return ({ value.value }) -> return ({ value.value.value })

[
	frame 4 -> { value.value.value }
	frame 3 -> { value.value.value }
	frame 2 -> { value.value.value }
	frame 1 -> { value.value.value }
]

{ value.value.value }

next code

*/

// const bob = {};

// const user = Object.assign(
// 	bob,
// 	{ firstName: "Bob" },
// 	{ firstName: "John", lastName: "Doe" }
// );

// const user = {
// 	...bob,
// 	...{ firstName: "Bob" },
// 	...{ firstName: "John", lastName: "Doe" },
// 	...{ role: "Super User" },
// 	...{ origin: "USA" },
// };

// const { firstName, restProperties } = user;

// console.log(firstName);
// console.log(restProperties);
// console.log(user === restProperties);
// console.log(user);

// const RECORDS = [];

// const sentryLogger = function (record) {
// 	const { isAdmin, ...rest } = record;

// 	RECORDS.push(rest);
// };

// const getFullName = function (arg1, arg2) {
// 	console.log(this.firstName + " " + this.lastName, arg1, arg2);
// };

// const accountFabric = function (firstName, lastName, origin, isAdmin) {
// 	return {
// 		firstName,
// 		lastName,
// 		origin,
// 		isAdmin,
// 		getFullName,
// 		get fullName() {
// 			return this.firstName + " " + this.lastName;
// 		},
// 	};
// };

// const bob = accountFabric("Bob", "Johnson", "USA", true);
// const jenny = accountFabric("Jenny", "Smith", "UK", false);

// getFullName.call(bob, 1, 2);
// getFullName.apply(bob, [3, 4]);

// console.log(getFullName === getFullName.call()); // pseudo code:

// const bindFunction = getFullName.bind(bob, 5);

// console.log(getFullName === bindFunction);

// bindFunction(6);

// console.log(bob.fullName);

// bob.fullName = "Peter Parker";

// console.log(bob);

// const bobGetFullName = bob.getFullName;

// console.log(bob.getFullName());

// console.log(bob.getFullName === jenny.getFullName);

// console.log(bob.getFullName());
// console.log(jenny.getFullName());

// sentryLogger(bob);
// sentryLogger(jenny);

// console.log(RECORDS);

// const NORTH = "north";
// const WEST = "west";
// const SOUTH = "south";
// const EAST = "east";

// const turnMethod = function () {
// 	console.log(COMPASS);
// };

// const COMPASS = {
// 	direction: NORTH,

// 	[NORTH]: {
// 		left: WEST,
// 		right: EAST,
// 	},
// 	[WEST]: {
// 		left: SOUTH,
// 		right: NORTH,
// 	},
// 	[SOUTH]: {
// 		left: EAST,
// 		right: WEST,
// 	},
// 	[EAST]: {
// 		left: NORTH,
// 		right: SOUTH,
// 	},

// 	turnLeft() {
// 		const direction = this[this.direction];

// 		this.direction = direction.left;

// 		// console.log(this.direction);
// 	},

// 	// thisTurnRight
// 	turnRight() {
// 		// const getCurrentDirection = () => {
// 		// 	return this[this.direction];
// 		// };

// 		const direction = this[this.direction];

// 		this.direction = direction.right;

// 		// console.log(this.direction);
// 	},
// };

// COMPASS.turnLeft(); // -> WEST
// COMPASS.turnLeft(); // -> SOUTH
// COMPASS.turnRight(); // -> EAST
// COMPASS.turnLeft(); // -> NORTH
// COMPASS.turnRight(); // -> WEST
// COMPASS.turnLeft(); // -> SOUTH
// COMPASS.turnLeft(); // -> EAST
// COMPASS.turnRight(); // -> NORTH

// eslint-disable prettier/prettier
// const arrowFunction = (message) =>
// 	message
// 		.replace(" ", "")
// 		.split("")
// 		.map((character) => character.toUpperCase());

// const arrowFunction = (message) => [1, 2, 3, 4, 5];

// eslint-disable-next-line prettier/prettier
// [1, 2, 3, 4].forEach(message => console.log(message));

// const value = arrowFunction();

// console.log(value);

// console.log(value);
