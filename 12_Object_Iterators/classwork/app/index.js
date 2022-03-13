const fetchFakeData = () => {
	const DATA = {
		records: [
			null,
			{ id: 1, data: "click" },
			[
				{ id: 2, data: "buy" },
				{ id: 3, data: "buy" },
				{ id: 4, data: "buy" },
			],
			null,
			{ id: 5, data: "click" },
			null,
			{ id: 6, data: "click" },
		],
	};

	return DATA;
};

// const car = {
// 	amount: 0,
// 	vendor: "Tesla",
// 	model: "X",
// 	[Symbol.for("produce")]() {
// 		this.amount++;
// 		return `${this.vendor} has produced a ${this.model} car`;
// 	},
// 	count() {
// 		return this.amount;
// 	},
// };

// const strForSym = Symbol.keyFor(Symbol.for("produce"));

// console.log(car[Symbol.for(strForSym)]());
// console.log(car[Symbol.for(strForSym)]());
// console.log(car[Symbol.for(strForSym)]());

// console.log(car.count());

// Iterable object
// Object Iterator

// const getCounter = () => {
// 	return {
// 		i: 0,

// 		[Symbol.iterator]() {
// 			const parent = this;

// 			const iterator = {
// 				next() {
// 					return {
// 						value: ++parent.i,
// 						done: parent.i >= 10,
// 					};
// 				},
// 			};

// 			return iterator;
// 		},
// 	};
// };

// const counter = getCounter();

// for (const count of counter) {
// 	console.log(count);
// }

// const range = [...getCounter()];

// console.log(range);

// Вам приходит объект с рандомным набором ключей и значений.
// Вам необходимо написать программу, которая возвращает в цикле значение.
// каждого четного ключа в этом объекте.
// const dictionary = {
// 	dsdsdad12sd: null,
// 	xxc1231sds: 23,
// 	"32dsda": ["Hello", "World"],
// 	"1231dsfasfadf": 123,
// };

// const user = {
// 	firstName: "Jessica",
// 	lastName: "Doe",
// 	age: 25,
// 	gender: "female",
// };

// const getDictionaryIterator = (target) => {
// 	return {
// 		...target,
// 		[Symbol.iterator]() {
// 			const keys = Object.keys(target); // ['dsdsdad12sd', 'xxc1231sds', '32dsda']
// 			let index = -2;

// 			return {
// 				next() {
// 					const key = keys[(index += 2)];

// 					return {
// 						value: target[key],
// 						done: index > keys.length - 1,
// 					};
// 				},
// 			};
// 		},
// 	};
// };

// const dictionaryIterator = getDictionaryIterator(dictionary);

// for (const evenValue of dictionaryIterator) console.log(evenValue);

// const evenValues = [...getDictionaryIterator(dictionary)];

// console.log(evenValues);

// counter[Symbol.iterator]() -> iterator

// iterator.next()

// let current;

// do {
// 	current = counter.next();

// 	console.log(current.value);
// } while (!current.done);

// console.log("Done");

// for (const char of "HelloWorld") {
// 	console.log(char);
// }

// next()
// next -> {}
// {} -> value, done

// const isIterator = (target) => {
// 	return 'next' in target;
// }

// Нам необходимо принять объект типа Records.
// Используя API 3rdParty провайдера агрегации метрик.

const response = fetchFakeData();

const isRecord = (value) => {
	return typeof value?.id === "number" && typeof value?.data === "string";
};

const getCurrentState = (targets, index) => {
	const value = targets[index];

	const nextIndex = index + 1;

	if (index > targets.length - 1) {
		return [true, value, nextIndex];
	}

	if (isRecord(value)) {
		return [false, value, nextIndex];
	}

	return getCurrentState(targets, nextIndex);
};

const getIterableRecords = (records) => {
	return {
		[Symbol.iterator]() {
			let elements = [...records];
			let pointer = 0;

			return {
				next() {
					if (Array.isArray(records[pointer])) {
						elements.splice(pointer, 0, ...records[pointer]);
					}

					const [done, value, newIndex] = getCurrentState(elements, pointer);

					pointer = newIndex;

					return {
						value,
						done,
					};
				},
			};
		},
	};
};

for (const record of getIterableRecords(response.records)) console.log(record);

const records = [...getIterableRecords(response.records)];

console.log(records);
