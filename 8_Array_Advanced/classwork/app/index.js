// const target = ["👋", "😍", "🙌", "🍐"];

// let first, last;

// console.log(target === target.concat(["Hello", "World"]));

// console.log([...target, ...["Hello", "World"]]);

// const [firstElement, ...restElements] = target;

// console.log(firstElement);
// console.log(restElements);

// const [handEmojie, faceEmojie, doubleHandEmojie, ...allOtherElements] = target;

// {
// 	let handEmojie, faceEmojie, doubleHandEmojie, pearEmojie, unknownEmojie;

// 	handEmojie = target[0];
// 	faceEmojie = target[1];
// 	doubleHandEmojie = target[2];

// 	const rest = target.slice(3);

// 	console.log(handEmojie, faceEmojie, doubleHandEmojie);

// 	console.log(rest);
// }

// console.log(
// 	handEmojie,
// 	faceEmojie,
// 	doubleHandEmojie,
// 	pearEmojie,
// 	unknownEmojie
// );

// console.log(">>>>>>>");

// const forEach = function (arr, callback) {
// 	for (let index = 0; index < arr.length; index++) {
// 		callback(arr[index], index, arr);
// 	}
// };

// console.log("<<<<<<<<");

//// ВЫЗОВ FOR EACH

/// Зачем нужен третий аргумент в forEach
// (function () {
// 	const target = ["👋", "😍", "🙌", "🍐"];

// 	target.forEach(goThroughEachElement);
// })();

// const target = ["👋", "😍", "🙌", "🍐"];

// const newForEach = target.forEach(function (el) {
// 	return console.log(el);
// });

// console.log(newForEach);
// console.log(target);

// const map = function (arr, callback) {
// 	const newState = [];

// 	for (let index = 0; index < arr.length; index++) {
// 		const el = arr[index];

// 		const newElState = callback(el, index, arr);

// 		newState[index] = newElState;
// 	}

// 	return newState;
// };

// const callback = function (prevState) {
// 	return prevState.charCodeAt();
// };

// const newTarget = map(target, callback);

// const target = [1, 2, 3, 4];

// const newTarget = target.map(function (num, index, self) {
// 	return num * index + self.length;
// });

// console.log(newTarget);

// const nums = [1, 2, 3, 4];

// const filteredNums = nums.filter(function (el, index, self) {
// 	return index % 2 === 0;
// });

// const filter = function (target, callback) {
// 	const newTarget = [];

// 	for (let index = 0; index < target.length; index++) {
// 		const element = target[index];

// 		const result = callback(element, index, target); // true, false

// 		if (result) {
// 			newTarget.push(element);
// 		}
// 	}

// 	return newTarget;
// };

// const nums = [1, 2, 3, 4];

// const filteredNums = nums.filter(function (el, index, self) {});

// console.log(filteredNums);
// console.log(nums);

// const result = nums.find(function (el, index, self) {
// 	return index === 1;
// });

// const find = function (target, callback) {
// 	for (let index = 0; index < target.length; index++) {
// 		const element = target[index];

// 		const match = callback(element, index, target); // true, false

// 		console.log("Iteration", index);

// 		if (match) {
// 			return element;
// 		}
// 	}
// };

// const result = find(nums, function (el, index, self) {
// 	return index === 1;
// });

// const nums = ["apple", "banana", "orange"];

// const result = nums.findIndex(function (el, index, self) {
// 	return el === "apple";
// });

// console.log(result);

// const values = [5, 5, 3, 5, 5, 5, 5];

// const every = function (target, callback) {
// 	for (let index = 0; index < target.length; index++) {
// 		const element = target[index];

// 		const currentResult = callback(element, index, target);

// 		if (!currentResult) {
// 			return false;
// 		}
// 	}

// 	return true;
// };

// const isEveryTrue = every(values, function (el) {
// 	return el === 5;
// });

// console.log(isEveryTrue);

// const values = [5, 5, 3, 5, 5, 5, 5];

// const result = values.some(function(el) {
// 	return el === 3;
// });

// const nums = [5, 2, 3, 6, 2, 9];

// const callback = function (accumulator, element, index, self) {
// 	return accumulator + element;
// };

// const initialValue = 0;

// const sum = nums.reduce(callback, initialValue);

// console.log(sum);

// const FARM = [
// 	{
// 		type: "cow",
// 		name: "Lusy",
// 	},
// 	{
// 		type: "pig",
// 		name: "Andy",
// 	},
// 	{
// 		type: "cow",
// 		name: "Bill",
// 	},
// 	{
// 		type: "chicken",
// 		name: "Hunny",
// 	},
// 	{
// 		type: "cow",
// 		name: "Lusy",
// 	},
// 	{
// 		type: "pig",
// 		name: "Andy",
// 	},
// 	{
// 		type: "cow",
// 		name: "Bill",
// 	},
// 	{
// 		type: "chicken",
// 		name: "Hunny",
// 	},
// 	{
// 		type: "cow",
// 		name: "Bill",
// 	},
// 	{
// 		type: "chicken",
// 		name: "Hunny",
// 	},
// 	{
// 		type: "cow",
// 		name: "Lusy",
// 	},
// ];

// const cowCount = FARM.reduce(function (totalFarmCount, animal, index, self) {
// 	if (animal.type in totalFarmCount) {
// 		totalFarmCount[animal.type] = totalFarmCount[animal.type] + 1;
// 	} else {
// 		totalFarmCount[animal.type] = 1;
// 	}

// 	return totalFarmCount;
// }, {});

// console.log(cowCount);

// const message = ["hello", "world", "of", "javascript"].reduceRight(function (
// 	phrase,
// 	word
// ) {
// 	return phrase + " " + word;
// });

// console.log(message);

// const reduce = function (target, callback, initialValue) {
// 	let reducedValue = initialValue;

// 	for (let index = target.length; index > 0; index--) {
// 		const element = target[index - 1];

// 		reducedValue = callback(reducedValue, element, index, target);
// 	}

// 	return reducedValue;
// };

// const cowCount = reduce(
// 	FARM,
// 	function (totalFarmCount, animal, index, self) {
// 		if (animal.type in totalFarmCount) {
// 			totalFarmCount[animal.type] = totalFarmCount[animal.type] + 1;
// 		} else {
// 			totalFarmCount[animal.type] = 1;
// 		}

// 		return totalFarmCount;
// 	},
// 	{}
// );

// console.log(cowCount);

// target.map().filter().find()

// const elems = [{ value: "orange" }, { value: "Ora" }, { value: "Oka" }];

// elems.sort(function (a, b) {
// 	if (a.value.length - b.value.length === 0) {
// 		if (a.value < b.value) {
// 			return -1000;
// 		} else if (a.value > b.value) {
// 			return 5;
// 		} else {
// 			return 0;
// 		}
// 	}
// 	return a.value.length - b.value.length;
// });

// console.log(elems);
