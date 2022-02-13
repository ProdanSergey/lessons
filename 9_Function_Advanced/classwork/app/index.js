// const address = ["Dom", "Kalatuskina", "Ulitsa", "Pushkina"];

// const arrayStringToLowerCase = function (target) {
// 	const result = [].concat(target);

// 	for (let index = 0; index < target.length; index++) {
// 		const element = result[index];

// 		result[index] = element.toLowerCase();
// 	}

// 	return result;
// };

// const transform = function (target) {
// 	arrayStringToLowerCase(target);

// 	return {
// 		house: address[0],
// 		name: address[1],
// 		street: address[2],
// 		streetName: address[3],
// 	};
// };

// console.log(address);

// console.log(transform(address));

// const isObject = function (target) {
// 	if (typeof target === "object" && !Array.isArray(target) && target !== null) {
// 		return true;
// 	}

// 	return false;
// };

// const valueToCheck = 5;

// console.log(isObject({}));
// console.log(isObject({}));
// console.log(isObject({}));
// console.log(isObject({}));
// console.log(isObject({}));
// console.log(isObject({}));
// console.log(isObject({}));

// const castToNumbersAndFindMaximum = function (a, b, c) {
// 	const args = Array.from(arguments);

// 	const casted = args
// 		.filter(function (a) {
// 			return !isNaN(a);
// 		})
// 		.map(Number);

// 	console.log(b);

// 	return Math.max(...casted);
// };

// const castToNumbersAndFindMaximum = function (a = 5, b = 25, ...args) {
// 	console.log(a, b);
// 	console.log(args);

// 	// const casted = args
// 	// 	.filter(function (a) {
// 	// 		return !isNaN(a);
// 	// 	})
// 	// 	.map(Number);

// 	// return Math.max(...casted);
// };

// console.log(castToNumbersAndFindMaximum());

// const addressFabric = (
// 	city,
// 	street,
// 	houseNumber = "1",
// 	country = "Ukraine"
// ) => {
// 	return {
// 		city: city,
// 		street: street,
// 		houseNumber: houseNumber,
// 		country: country,
// 	};
// };

// console.log(addressFabric("Mykolaiv", "Shevchenka"));
// console.log(addressFabric("Paris", "Ludovic Ave.", "5", "France"));

// const globalFunction = function () {
// 	const globalA = "GLOBAL_A";

// 	const globalToMiddle = "MIDDLE_A";

// 	const middleFunction = function (fromGlobal) {
// 		const middleA = fromGlobal;

// 		console.log("M:", middleA);

// 		const innerFunction = function () {
// 			const innerA = "INNER_A";

// 			console.log("I:", innerA, middleA, globalA);
// 		};

// 		innerFunction();
// 	};

// 	console.log("G:", globalA, globalToMiddle);

// 	middleFunction(globalToMiddle);
// };

// globalFunction();

// const upper = function (uValue) {
// 	const upperArg = "UPPER";

// 	const middle = function (mValue) {
// 		const middleArg = "MIDDLE";

// 		console.log("M:", middleArg);

// 		const inner = function (iValue) {
// 			const innerArg = "INNER";

// 			console.log("I:", innerArg);

// 			return innerArg + " " + iValue;
// 		};

// 		return middleArg + " " + inner(mValue);
// 	};

// 	console.log("U:", upperArg);

// 	return upperArg + " " + middle(uValue);
// };

// const expected = upper("@");

// console.log(expected);

/* 
CS Frame 1 -> upper(upperV) -> upperCtx{
	ref: window
	upperV: upperV,
	upperArg: "UPPER",
	middle: function() {}
}
CS Frame 2 -> middle(middleV) -> middleCtx{
	ref: upperCtx,
	middleV: middleV,
	middleArg: "MIDDLE"
	inner: function() {},
}
CS Frame 3 -> inner(innerV) -> innerCtx{
	ref: middleCtx,
	innerV: innerV,
	innerArg: "INNER"
}
*/

// const sandbox = (function () {
// 	const securityData = {
// 		foo: "foo",
// 		bar: "bar",
// 	};

// 	return {
// 		getSecurityData: function (key) {
// 			return securityData[key];
// 		},
// 		setSecurityData: function (key, value) {
// 			// validation
// 			// coercion
// 			// transform
// 			securityData[key] = value;
// 		},
// 	};
// })();

// const makeCounter = function () {
// 	let increment = 0;

// 	return function () {
// 		const toReturn = increment;

// 		increment = increment + 1;

// 		return toReturn;
// 	};
// };

// const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const nextCounter = makeCounter();

// console.log(nextCounter());
// console.log(nextCounter());
// console.log(nextCounter());
// console.log(nextCounter());

/*
CStack

makeCounter  -> Frame -> makeCounterCTX{
	increment: 0
} -> return anon funct;

*/

// const logger = function (message) {
// 	logger.invocations = logger.invocations + 1;

// 	console.log(logger.PREFIX, message);
// };

// logger.invocations = 0;
// logger.PREFIX = "[Hello LOG]";

// logger.invocationCount = function () {
// 	return logger.invocations;
// };

// logger("First");
// logger("First");
// logger("First");
// logger("ADQSAdasdasdasdsqd");
// logger("dasdasdasdasd");

// console.log(logger.invocationCount());

// const sumWithTen = function (a) {
// 	if (a in sumWithTen.cache) {
// 		return sumWithTen.cache[a];
// 	}

// 	const result = a + 10;

// 	sumWithTen.cache[a] = result;

// 	console.log("invocation");
// 	console.log(sumWithTen.cache);
// 	return result;
// };

// sumWithTen.cache = {};

// console.log(sumWithTen(5));
// console.log(sumWithTen(6));
// console.log(sumWithTen(6));
// console.log(sumWithTen(5));
// console.log(sumWithTen(5));
// console.log(sumWithTen(6));

// const sum = function (a, b) {
// 	return a + b;
// };

// const sumWithTen = function (a) {
// 	return sum(a, 10);
// };

// const sumWithTwenty = function (a) {
// 	return sum(a, 20);
// };

// console.log(sumWithTen(5));
// console.log(sumWithTwenty(20));

// const sum = function (a, b) {
// 	return a + b;
// };

// const currySum = function (a) {
// 	return function (b) {
// 		return a + b;
// 	};
// };

// // const result = currySum(5)(5);

// // console.log(result);

// const sumWithTen = currySum(10);
// const sumWithSix = currySum(6);

// console.log(sumWithTen(3));
// console.log(sumWithSix(6));

// const recursion = function (value) {
// 	if (isNaN(value)) {
// 		return 0;
// 	}

// 	if (value >= 10) {
// 		return value;
// 	}

// 	return recursion(value + 1);
// };

// console.log(recursion());

// ПЛОХОЙЙЙЙЙЙ пример!!!!!!!
// const wrap = function (value = "$", depth = 5) {
// 	let currentDepth

// 	const recursion = function() {
// 		if (currentDepth === depth ) {
// 			return value;
// 		} else {
// 			wrap(value, currentDepth + 1)
// 		}
// 	}

// 	recursion(value, currentDepth)
// }

// РЕЗУЛЬТАТ WRAP
// {
// 	value: {
// 		value: {
// 			value: {
// 				value: {
// 					value: "$"
// 				}
// 			}
// 		}
// 	}
// }

// typeof t === 'object'

// const unwrap = function (target) {

// }

// "$";

// const random = generateRandom(5, 10);

// const wrappedObject = wrap("$", random);

// console.log(wrappedObject);

// const result = unwrap(wrappedObject);

// console.log(result);
