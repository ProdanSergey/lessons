"use strict";

// const STDIN = {
// 	number() {},
// 	string() {},
// };

// const app = () => {
// 	return {
// 		addEntry() {
// 			const firstName = STDIN.string("Enter some Data", () => {
// do validation here.
// 			});
// 			const lastName = STDIN.string();

// 			const year = STDIN.string();
// 			const month = STDIN.string();
// 			const day = STDIN.string();
// 		},
// 		deleteEntry() {
// 			const index = STDIN.string(validate);
// 		},
// 	};
// };

// const point = {
// 	x: 22.5,
// 	y: 37.5,
// 	valueOf() {
// 		return this.x + this.y;
// 	},
// 	toString() {
// 		return this.x + "," + this.y;
// 	},
// }; // new Object()

// const point2 = {
// 	x: 52.5,
// 	y: 17.5,
// 	valueOf() {
// 		return this.x + this.y;
// 	},
// 	toString() {
// 		return this.x + "," + this.y;
// 	},
// 	// toJSON() {

// 	// }
// };

// console.log(obj);
// console.log(typeof obj);

// console.log(String([1, 2, 3, 4]));
// console.log(String(point));
// console.log(Number(point));

// const result = `${point} & ${point2}`;

// console.log(result);

// Date

// const fakeAsyncAction = () => {
// 	let sum = 0;
// 	for (let index = 0; index < 1000000000; index++) {
// 		sum += index;
// 	}
// };

// const someCustomObj = {
// 	doAction() {
// 		console.log("before", new Date());

// 		fakeAsyncAction();

// 		console.log("after", new Date());
// 	},
// 	doOtherAction() {
// 		console.log("now", new Date());
// 	},
// 	toDateObject() {
// 		const now = new Date();

// 		const output = {
// 			year: now.getFullYear(),
// 			month: now.getMonth(),
// 			day: now.getMonth(),
// 		};

// 		console.log(now.getSeconds());

// 		fakeAsyncAction();

// 		output.s = now.getSeconds();

// 		return output;
// 	},
// };

// someCustomObj.doAction();
// someCustomObj.doOtherAction();

// console.log(someCustomObj.toDateObject());

// console.log(now.toString());

// setTimeout(() => {
// 	console.log(now.toString());
// }, 5000);

// const before = new Date("before");
// const after = new Date("after");

// const now = new Date();

// console.log("year", now.getFullYear());
// console.log("month", now.getMonth());
// console.log("day", now.getDate());
// console.log("day of week", now.getDay());
// console.log("hour", now.getHours());
// console.log("minute", now.getMinutes());
// console.log("second", now.getSeconds());
// console.log("ms", now.getMilliseconds());
// console.log("ms from unix epoch", now.getTime());

// timestamp.setFullYear(2024);

// timestamp.setDate(31);
// timestamp.setMonth(-1);

// console.log(new Date(1000, 0, 1));
// console.log(new Date(1892, 2, 0).getDate() > 28);

// const now = new Date();

// console.log("iso", now.toISOString());
// console.log("utc", now.toUTCString());
// console.log("gmt", now.toGMTString());
// console.log("string", now.toString());
// console.log("string date", now.toDateString());
// console.log("string time", now.toTimeString());
// console.log("local string", now.toLocaleString());
// console.log("local string date", now.toLocaleDateString());
// console.log("local string time", now.toLocaleTimeString());

// console.log(now.getTimezoneOffset());

// let theLordOfTheRings = {
// 	author: "J.R.R. Tolkien",
// 	title: "The Lord Of The Rings",
// 	genre: "fantasy",
// };

// const theHobbit = {
// 	author: "J.R.R. Tolkien",
// 	title: "The Hobbit",
// 	genre: "fantasy",
// };

// const JRRTolkien = {
// 	firstName: "John",
// 	middleName: "Ronald",
// 	lastName: "Tolkien",
// 	origin: "UK",
// };

// const map = new Map([
// 	["foo", "bar"],
// 	[1, "one"],
// 	[5, "five"],
// 	[3, "three"],
// 	["bar", "bar"],
// 	[theLordOfTheRings, JRRTolkien],
// ]);

// theLordOfTheRings = null;

// console.log(map.size);
// console.log(map.keys());

// console.log(map.get("foo"));
// console.log(map.get(3));
// console.log(map.get("3"));
// console.log(map.get(theLordOfTheRings));

// const readBook = (book) => {
// 	console.log("Start reading", book.author, book.title);
// };

// map.set(readBook, "function");

// console.log(map.get(readBook));

// console.log(map.has(theHobbit));

// console.log(map.size);

// for (const iterator of map) {
// 	console.log(iterator);
// }

// for (const key of map.keys()) {
// 	console.log(key);
// }

// for (const key of map.values()) {
// 	console.log(key);
// }

// for (const key of map.entries()) {
// 	console.log(key);
// }

// let result = [...map];
// result = [...map.values()];

// console.log(result);

// const arrayFromMap = Array.from(map);

// console.log(arrayFromMap);

// const mapFromArray = new Map(arrayFromMap);

// console.log(mapFromArray);

// const counter = {
// 	value: 10,
// };

// const initial = [
// 	1,
// 	5,
// 	5,
// 	5,
// 	1,
// 	3,
// 	2,
// 	Infinity,
// 	Infinity,
// 	NaN,
// 	NaN,
// 	counter,
// 	counter,
// 	2,
// 	[],
// ];

// const set = new Set(initial);

// console.log(initial);
// console.log(Array.from(set));

// set.add(32);

// console.log(set.has(false));

// set.delete(NaN);
// set.delete(counter);

// console.log(set.size);

// const values = [...set];

// console.log(values);

// const newSet = new Set(values);

// console.log(newSet);

// console.log(set === newSet);

let theLordOfTheRings = {
  author: "J.R.R. Tolkien",
  title: "The Lord Of The Rings",
  genre: "fantasy",
};

const theHobbit = {
  author: "J.R.R. Tolkien",
  title: "The Hobbit",
  genre: "fantasy",
};

const JRRTolkien = {
  firstName: "John",
  middleName: "Ronald",
  lastName: "Tolkien",
  origin: "UK",
};

const weakmap = new WeakMap([
  // ["foo", "bar"],
  // [1, "one"],
  // [5, "five"],
  // [3, "three"],
  // ["bar", "bar"],
  [theHobbit, JRRTolkien],
  [theLordOfTheRings, JRRTolkien],
]);

// no size
// only objects/arrays/functions/other objects

theLordOfTheRings = null;

console.log(weakmap.has(theLordOfTheRings));
console.log(weakmap.has(theHobbit));

console.log(weakmap.get(theLordOfTheRings));
console.log(weakmap.get(theHobbit));
