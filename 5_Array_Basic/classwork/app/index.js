const apple = "🍎";
const banana = "🍌";

const pear = "🍐";

const fruits = [apple, banana];

console.log(fruits.length);

const firstEl = fruits[0];
const secondEl = fruits[1];

console.log(firstEl);
console.log(secondEl);

fruits[0] = pear;

console.log(apple);
console.log(fruits);

// type casting

const numbers = [5];

console.log(Boolean([]));
console.log(Boolean(numbers));
console.log(Boolean(["str", "str"]));
console.log(Boolean([[]]));

console.log(numbers.toString());

console.log(2 + numbers);

console.log(2 * numbers);

// 1. valueOf numbers // failed
// 2. toString number // '5'
// 3. valueOf "5" // 5
// 4. 2 * 5 // 10

const sampleObj = {
  firstName: "John",
  length: "Hallo World",
};

// sampleObj.firstName;

// const arrayObj = {
// 	0: "🍎",
// 	1: "🍌",
// 	length: 2
// }

console.log(typeof 5);
console.log(typeof "5");
console.log(typeof sampleObj);
console.log(typeof numbers);
console.log(typeof console.log);

const target = sampleObj;

if (typeof target !== "string" && target.length !== undefined) {
  console.log("That is an array");
} else {
  console.log("It is not an array");
}

const randomEl = ["John", "Doe", 5, null, "Hallo", "Value"];

// console.log(randomEl[0]);
// console.log(randomEl[2]);
// console.log(randomEl[randomEl.length - 1]);

// console.log(Object.keys(randomEl));

console.log(randomEl.length);

randomEl.length = 12;

console.log(randomEl.length);
console.log(randomEl);

randomEl[8] = "GOTCHA";

console.log(randomEl[8]);

const theMatrix = [
  [1, [2, 2.25, 2.5, 2.75], 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(theMatrix);

console.log("-------------");

const stack = [];

console.log(stack);

console.log(stack.push(apple));
console.log(stack.push(banana));

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());

console.log(stack);

console.log("-------------");

const queue = [];

console.log(queue);

console.log(queue.unshift(apple));
console.log(queue.unshift(banana));

console.log(queue);

console.log(queue.shift(apple));
console.log(queue.shift(banana));

console.log(queue);

// arg: 0 - index of start; start position;
// arg: 1 - count to delete;
// arg: 2 - n - elements to be inserted;
fruits.splice(0, 1, "🍉", "🍐");

console.log(fruits);

console.log("-------------");

const buildingNumbers = [21, 22, 23, 24, 25];

console.log(buildingNumbers.slice(1, 4));
console.log(buildingNumbers);

console.log("-------------");

const joined = buildingNumbers.join("/");

console.log(joined);
console.log(joined.split("/"));

// const birthday = [11, 12, 1988];

// console.log(birthday.join("."));

const shevchenkoStrNumbers = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const svobodyAvenyNumbers = [5, 6, 7, 8];
const lesyUkrainkyNumbers = [9, 10, 11, 12];

const wholeBlockNumbers = shevchenkoStrNumbers.concat(
  svobodyAvenyNumbers,
  lesyUkrainkyNumbers,
  "Hello World"
);

console.log(wholeBlockNumbers);

svobodyAvenyNumbers.reverse();
svobodyAvenyNumbers.reverse();

console.log(svobodyAvenyNumbers);

console.log("-------------");

const subtarget = [5, 6];

const target2 = ["Foo", "Bar", "John", subtarget];

console.log(target2.includes(subtarget));

console.log("-------------");

const targetToCheck = "Foo";

if (target2.indexOf(targetToCheck) >= 0) {
  console.log("Yes it there");
}

console.log("-------------");

// for (let index = 0; index < fruits.length; index++) {
//   const element = fruits[index];

//   console.log(element, index);
// }

// for (const element of fruits) {
//   console.log(element);
// }

const toSum = [1, 2, 3, 4, 5];

let sum = "";

while (toSum.length) {
  sum += toSum.pop();
}

console.log(sum);
