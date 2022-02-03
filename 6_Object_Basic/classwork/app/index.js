// const obj = {
//   key: "value1",
//   key1: "value2",
// };

// const keys = ["key", "key1"];
// const values = ["value1", "value2"]

// keys[0] === "key"
// values[0] === "value1"

// keys[1] === "key1"
// values[1] === "value2"

// const arr = [1,2,3,4,5,6,7,8,9,9,0,0,878,"two",,42,3,23,123,12,31,23,123, "one", "two", "three"];

// for (const element of arr) {
//   if (element === "two") {
//     console.log(element);
//   }
// }

// console.log(obj.key);

// const john = {
//   latin: "John",
//   cyrillic: "Джон",
// };

// const doe = {
//   latin: "Doe",
//   cyrillic: "Доу",
// };

// const user = {
//   firstName: john,
//   lastName: doe,
//   isAdmin: "",
// };

// user.firstName.latin = "Peter";

// const result = delete user.isUser;

// console.log(result);

// console.log("isAdmin exists?", "isAdmin" in user);

// const nameType = prompt("Enter key: [firstName] or [lastName]", "firstName");

// console.log(user[nameType].latin);
// console.log(user[nameType].cyrillic);

// if (user.firstName) {
//   console.log(user.firstName);
// }

// вхождение свойства в объект

// console.log("in", "age" in user);
// console.log("computed property", Boolean(user.age));

// const dictionary = {
//   hello: "привет",
//   morning: "утро",
//   duck: "утка",
// };

// dictionary.pool = "бассейн";

// dictionary.apple = "яблоко";

// dictionary[String(1.25)] = "one point twenty five";

// dictionary["50"] = "fifty";

// dictionary["0"] = "zero";

// console.log(dictionary);

// const initial = { foo: "foo" };

// const end = { baz: "end" };

// const spread = Object.assign({}, initial, { bar: "bar" }, { baz: "baz" });

// const spread = {
//   ...initial,
//   bar: "bar",
//   baz: "baz",
//   ...end,
// };

// console.log(spread);

// console.log(spread === initial);

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   isAdmin: true,
// };

// const descriptor = {
//   configurable: false,
//   writable: false,
//   enumerable: false,
// };

// Object.defineProperty(user, "firstName", descriptor);
// Object.defineProperty(user, "lastName", descriptor);
// Object.defineProperty(user, "isAdmin", descriptor);

// Object.defineProperties(user, {
//   firstName: {
//     configurable: true,
//     writable: false,
//     enumerable: false,
//   },
//   lastName: {
//     configurable: true,
//     writable: false,
//     enumerable: false,
//   },
// });

// user.isAdmin = false;

// console.log(delete user.isAdmin);

// console.log(user);

// ==
// Object.is
// ===

// 0;
// +0;
// -0;

// console.log(-0 === +0);
// console.log(+0 === -0);
// console.log(-0 === 0);
// console.log(0 === -0);
// console.log(+0 === 0);
// console.log(0 === +0);

// console.log(Object.is(-0, +0));
// console.log(Object.is(+0, -0));
// console.log(Object.is(-0, 0));
// console.log(Object.is(0, -0));
// console.log(Object.is(+0, 0));
// console.log(Object.is(0, +0));

// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

// const x = NaN;
// const y = NaN;

// console.log(Object.is(x, y));
// console.log(isNaN(x) === isNaN(y));

// const dictionary = {
//   hello: "привет",
//   morning: "утро",
//   duck: "утка",
// };

// dictionary.pool = "бассейн";

// dictionary.apple = "яблоко";

// dictionary[String(1.25)] = "one point twenty five";

// dictionary["50"] = "fifty";

// dictionary["0"] = "zero";

// const arr = [1, 2, 3];

// arr.foo = "2";

// for (const key in dictionary) {
//   console.log(key);

//   const value = dictionary[key];

//   console.log(value);
// }

// console.log(Object.keys(dictionary));
// console.log(Object.values(dictionary));
// console.log(Object.entries(dictionary));

// for (const entries of Object.getOwnPropertyNames(dictionary)) {
//   console.log(entries);
// }

// const keys = Object.keys(dictionary);

// for (let index = 0; index < keys.length; index++) {
//   const key = keys[index];
//   const value = dictionary[key];

//   console.log(index, key, value);
// }
