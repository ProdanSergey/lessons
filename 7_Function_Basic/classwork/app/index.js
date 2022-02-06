// const entries = ["hello", "world", "foo", "baz"];

// for (const key in entries) {
// 	console.log(key);
// }

// const car = {
// 	vendor: "Tesla",
// 	model: "Model X",
// };

// for (const element of Object.values(car)) {
// 	console.log(element);
// }

// const carKeys = Object.keys(car);

// for (let index = 0; index < carKeys.length; index++) {
// 	const element = carKeys[index];

// 	console.log(element);
// }

// // Anonymous function
// (function () {});

// // Function Declaration
// function getAnswer() {
// 	console.log("declaration");
// }

// // Function expression
// const getAnswerExp = function () {
// 	console.log("exp");
// };

// // Function named expression
// const getAnswerNameExp = function getAnswerNameExp() {
// 	console.log(getAnswerNameExp.name);
// };

// let firstName, lastName, age;

// const getAnswer = function (message, check) {
// 	debugger;
// 	let answer;

// 	do {
// 		answer = prompt(message);
// 	} while (check(answer));

// 	return answer;
// };

// const checkFirstName = function (input) {
// 	debugger;
// 	const check = String(input);

// 	return check === null || check.length < 5 || check.length > 20;
// };

// const checkLastName = function (input) {
// 	const check = String(input);

// 	return check === null || check.length < 8 || check.length > 25;
// };

// const checkAge = function (input) {
// 	const check = Number(input);

// 	return isNaN(check);
// };

// debugger;
// firstName = getAnswer("Enter First Name", checkFirstName);

// lastName = getAnswer("Enter Last Name", checkLastName);
// age = getAnswer("Enter your Age", checkAge);

// console.log(firstName, lastName, age);

// const someOther = function (arg2) {
// 	console.log(arg2);
// };

// const someFunc = function (arg1) {
// 	someOther(arg1);
// };

// console.log("dsdsd");
// console.log("5");
// someFunc(55);
// console.log(77);
// console.log({});

// (function () {
// 	const myConst = 55;
// 	var myVar = 33;

// 	console.log("Hello From Inner Scope", myConst, myVar);
// })();

// console.log(myVar);
// console.loh(myConst);

const carFabric = function (vendor, model, year) {
	return {
		vendor: vendor,
		model: model,
		year: year,
	};
};

const teslaX = carFabric("Tesla", "ModelX", "2019");
const audiTT = carFabric("Audi", "TT", "2013");

console.log(teslaX);
console.log(audiTT);

console.log(teslaX.model);
console.log(audiTT.model);

console.log(teslaX.year);
console.log(audiTT.year);
