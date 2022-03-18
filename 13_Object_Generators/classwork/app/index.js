// const counter = {
// 	i: 1,

// 	[Symbol.iterator]() {
// 		return this;
// 	},

// 	next() {
// 		return {
// 			done: this.i > 3,
// 			value: this.i++,
// 		};
// 	},
// };

// for (const i of counter) {
// 	console.log(i);
// }

// function* generator(target) {
// 	for (let index = 0; index < target.length; index += 2) {
// 		const element = target[index];

// 		yield element;
// 	}
// }

// const evens = generator([
// 	"sdsdsd",
// 	() => void 0,
// 	null,
// 	{},
// 	[],
// 	55,
// 	Symbol.isConcatSpreadable,
// 	false,
// ]);

// for (const i of evens) {
// 	console.log(i);
// }

// const counter2 = generator();

// const counts = [...counter2];

// console.log(counts);

// debugger;

// const counter = generator();

// console.log(counter.next());

// [
// 	[1, 2, 3],
// 	[2, 3],
// ].map((a) => a.reduce((a, s) => (a += s), 0));

// console.log(counter.next());

// [
// 	[1, 2, 3],
// 	[2, 3],
// ].map((a) => a.reduce((a, s) => (a += s), 0));

// console.log(counter.next());
// console.log(counter.next());

// const logInToMySite = () => {
// 	console.log("User has logged into my site");
// };

// const openedAccountPage = () => {
// 	console.log("User has opened an accounbt page");
// };

// const changeUserName = () => {
// 	console.log("Changed User Name");
// };

// (async () => {
// 	function* generator() {
// 		yield logInToMySite();
// 		yield openedAccountPage();
// 		yield changeUserName();
// 	}

// 	const asyncCode = (callback) => {
// 		return new Promise((resolve) => {
// 			setTimeout(() => {
// 				resolve(callback());
// 			}, 2000);
// 		});
// 	};

// 	console.log(1);

// 	const evens = generator([
// 		"sdsdsd",
// 		() => void 0,
// 		null,
// 		{},
// 		[],
// 		55,
// 		Symbol.isConcatSpreadable,
// 		false,
// 	]);

// 	console.log(evens.next());

// 	await asyncCode(() => console.log(evens.next()));

// 	await asyncCode(() => console.log(evens.next()));

// 	await asyncCode(() => console.log(evens.next()));
// })();

// const forEach = function* (target, callback, before, after) {
// 	yield "length before" + target.length;

// 	for (let index = 0; index < target.length; index++) {
// 		const element = target[index];

// 		yield element;
// 	}

// 	yield "length after" + target.length;
// };

// const target = [1, 2, 3];

// const generator = forEach(target);

// console.log("length before", generator.next());

// console.log(generator.next());

// for (let index = 0; index < 10000000000; index++) {}

// console.log(generator.next());
// console.log(generator.next());

// console.log("length after", generator.next());

// итерировать всех животных на ферме.

// const farm = {
// 	west: [
// 		{ type: "cow", weight: 200 },
// 		{ type: "goat", weight: 50 },
// 		{ type: "pig", weight: 120 },
// 	],
// 	east: [
// 		{ type: "cow", weight: 200 },
// 		{ type: "cow", weight: 200 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 	],
// 	north: [
// 		{ type: "cow", weight: 200 },
// 		{ type: "goat", weight: 200 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 	],
// 	north2: [
// 		{ type: "cow", weight: 200 },
// 		{ type: "goat", weight: 200 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 	],
// 	outer: [
// 		{ type: "cow", weight: 200 },
// 		{ type: "goat", weight: 200 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 	],
// 	inner: [
// 		{ type: "cow", weight: 200 },
// 		{ type: "goat", weight: 200 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 		{ type: "pig", weight: 120 },
// 	],

// 	goats: function* () {
// 		yield* this.animal("goat");
// 	},

// 	cows: function* () {
// 		yield* this.animal("cow");
// 	},

// 	pigs: function* () {
// 		yield* this.animal("pig");
// 	},

// 	animal: function* (type) {
// 		for (const animal of Object.values(this).reduce(
// 			(acc, field) => [...acc, ...field],
// 			[]
// 		)) {
// 			if (type) {
// 				if (type === animal.type) {
// 					yield animal;
// 				} else continue;
// 			} else yield animal;
// 		}
// 	},

// 	*[Symbol.iterator]() {
// 		yield* this.animal();
// 	},
// };

// Object.defineProperties(farm, {
// 	goats: {
// 		enumerable: false,
// 	},
// 	cows: {
// 		enumerable: false,
// 	},
// 	pigs: {
// 		enumerable: false,
// 	},
// 	animal: {
// 		enumerable: false,
// 	},
// 	[Symbol.iterator]: {
// 		enumerable: false,
// 	},
// });

// for (const animal of farm) {
// 	console.log(animal);
// }

// for (const key in farm) {
// 	const field = farm[key];

// 	for (const animal of field) {
// 		console.log(animal);
// 	}
// }

// for (const key in farm) {
// 	const field = farm[key];

// 	for (const animal of field) {
// 		if (animal.type === "pig") {
// 			console.log(animal);
// 		}
// 	}
// }

// const getSurveyQuestion = () => {
// 	return "Simon Says!";
// };

// const simonSays = function* () {
// 	console.log("start");

// 	let answer;

// 	while (Infinity) {
// 		answer = yield getSurveyQuestion();

// 		console.log(answer);
// 	}
// };

// const simon = simonSays();

// let question;

// question = simon.next();
// console.log(question);
// question = simon.next("Fred");
// console.log(question);
// question = simon.next("George");
// console.log(question);
// question = simon.next("Jinny");
// console.log(question);
// question = simon.next("Ron");
// console.log(question);

// const fakeDBQuery = async (url) => {
// 	return new Promise((resolve) => {
// 		console.log("making a request to", url);
// 		setTimeout(() => {
// 			resolve([
// 				{ id: 1, name: "sdadasd" },
// 				{ id: 2, name: "sdadasd" },
// 			]);
// 		}, 2000);
// 	});
// };

// const action = async (generator, request) => {
// 	const url = generator.next("start");

// 	const response = await request(url);

// 	generator.next();
// 	generator.next(response);
// };

const actionGenerator = function* () {
	const loadingState = yield "http://example.com";

	const data = yield;

	console.log(data);
};

const generator = actionGenerator();

// action(generator, fakeDBQuery);
