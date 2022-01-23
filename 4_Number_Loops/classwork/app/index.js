// const str = "It\ts my life";

// console.log(str);

// // 1. Boolean
// // 2. String
// // 3. Number
// // 4. null
// // 5. undefined

// // 6. BigInt
// // 7. Symbol

// // Number proto

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// // integer, float, double

// // int:

// // 1, 2, 55, 124, 10000, 524432

// // float

// // 1.25, 2.6543, 55.342

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.NaN);
// console.log(NaN);
// console.log(Number.NaN === NaN);
// console.log(NaN === NaN);

// let someCheck = NaN;

// if (someCheck !== someCheck) {
//   console.log("Stop it!", "It's a NaN");
// }

// console.log(Number.isNaN("NaN"));
// console.log(isNaN("NaN"));

// if (Number.isNaN(5 + "fifty")) {
//   console.log("Not A Number");
// } else {
//   console.log("NaN", "Number is ok");
// }

// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(+Infinity);
// console.log(-Infinity);

// if (Number.isFinite(9 / 0)) {
//   console.log("Finite", "Number is ok");
// } else {
//   console.log("Infinity");
// }

// if (Number.isSafeInteger(56734234)) {
//   console.log("Safe", "Number is ok");
// } else {
//   console.log("Not Safe");
// }

// // console.log((5255).toExponential());

// let target = 5.01;

// console.log(target.toFixed(5));

// console.log(00001);

// console.log(Math.cos(5));
// console.log(Math.sin(25));
// console.log(Math.sqrt(25));
// console.log(Math.pow(25, 5));

// console.log("----------");

// console.log(Math.round(target));
// console.log(Math.floor(target));
// console.log(Math.ceil(target));

// console.log("----------");

// target = 5.456;

// console.log(target.toPrecision(3));

// let messages = "";

// let count = 0;

// while (count < 0) {
//   messages += "22 ";

//   count++;
// }

// do {
//   messages += "22 ";

//   count++;
// } while (count < 0);

// for (
//   let count = 0, stage = 0;
//   count < 5 && stage < 1;
//   count++, count % 2 === 0 ? stage++ : stage
// ) {
//   console.log(stage);
//   messages += "22 ";
// }

// console.log(messages);

// let sum = 0;

// for (let i = 0; i < 5; i++) {
//   console.log("I", i);

//   let input = parseInt(prompt("Enter integer"));

//   for (let j = 1; j <= 5; j++) {
//     if (j === 3) {
//       break;
//     }

//     console.log("J", j);

//     input *= j;
//   }

//   sum += input;
// }

// document.write(`<h1>${sum}</h1>`);

// let isReady = false;

// candyShop: {
//   console.log("Candy shop block");

//   {
//     if (!isReady) {
//       break candyShop;
//     }
//   }

//   console.log("Some Action");
// }

// console.log("Global");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while (true) {
//   if (count-- === 0) {
//     break;
//   }

//   console.log("Hello World");
// }

// for (let count = 10; ; ) {
//   if (count-- === 0) {
//     break;
//   }

//   console.log("Hello World");
// }

const CURRENT_YEAR = 2022;

let birthYear = null;

const min_birthYear = 1900;
const max_birthYear = CURRENT_YEAR;

do {
  const input = Number(
    prompt(
      `Enter your birthday year: only integers, min ${min_birthYear}, max ${max_birthYear}`,
      1988
    )
  );

  birthYear = input;
} while (birthYear < min_birthYear || birthYear > max_birthYear);

console.log(birthYear);

// отмена -> новый ввод
// nan -> новый ввод
// < min -> новый ввод
// > max -> новый ввод
