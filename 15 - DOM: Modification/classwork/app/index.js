// const STDIN = (() => {
// 	const normalizeMessage = (message) => {
// 		return message.toLowerString();
// 	};

// 	const message = prompt();

// 	return {
// 		number(message) {
// 			const validationMessage = normalizeMessage(message);
// 		},
// 		string(message) {
// 			const validationMessage = normalizeMessage(message);
// 		}
// 	};
// })();


// class UserMethods {

// 	firstName() {
// 		const firstName = STDIN.getOperationInput();

// 		return firstName;
// 	}

// 	lastName() {

// 	}

// 	age() {

// 	}
// }


// const operations = new UserMethods();

// [1, 2, 3 ,4 ,5, 6 ,7 ,8 ,9];

// for (let index = 0; index < array.length; index + 2) {
// 	const element = array[index];
// }

// for (let index = 1; index < array.length; index + 2) {
// 	const element = array[index];
// }

// const generateCounter = function* generateCounter(start = 0, defaultInterval = 1) {
// 	let counter = start, interval = defaultInterval;
	
// 	while(true) {
// 		let newInterval = yield counter += interval;

// 		if (newInterval) {
// 			interval = newInterval;
// 		}
// 	}
// };

// const counter = generateCounter();

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next(10).value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// const counter2 = generateCounter(5, 100);

// console.log(counter2.next().value);
// console.log(counter2.next().value);
// console.log(counter2.next().value);
// console.log(counter2.next().value);
// console.log(counter2.next(1).value);
// console.log(counter2.next().value);
// console.log(counter2.next().value);
// console.log(counter2.next().value);

// [2, 4, 6, 10]
// [6, 8, 10, 12]
// [2, 4, 6, 8]
// [18, 20, 22, 24]
// [10, 12, 14, 16]

const DOM = ((root) => {
	const mount = (node) => {
		root.replaceChildren(node);
	};

	const element = (node, {
		attrs = {},
		className,
		children = []
	} = {}) => {
		let el;

		switch (typeof node) {
		case 'function':
			el = node();
			break;
		case 'object':
			el = node;
			break;
		default:
			el = document.createElement(node);
		}	

		if (className) {
			el.className = className;
		}
	
		for (const attrKey of Object.getOwnPropertyNames(attrs)) {
			el.setAttribute(attrKey, attrs[attrKey]);
		}
	
		for (const child of children) {
			switch (typeof child) {
			case 'string':
				el.insertAdjacentHTML('afterbegin', child);
				break;
			
			default:
				el.append(child);
				break;
			}
		}
	
		return el;
	};

	return {
		element,
		mount
	};
})(document.getElementById('root'));

const Container = () => {
	return DOM.element('div', {
		className: 'container'
	});
};

const Column = () => {
	return DOM.element('div', {
		className: 'column'
	});
}; 

const Header = () => {
	const title = prompt('Enter some Title', 'Hello World');

	return DOM.element('header', {
		className: 'section header',
		children: [
			`<h1>${title}</h1>`
		]
	});
};

const Main = () => {
	return DOM.element('main', {
		className: 'section main',
		children: [
			DOM.element(Container, {
				children: [
					DOM.element(Column, {
						children: [
							'<p>My first dynamic page!!! Hurah!!!</p>'
						]
					}),
					DOM.element(Column, {
						children: [
							'<p>How it looks like?! ha!</p>'
						]
					})
				]
			})
		]
	});
};

// children:  [
// 	'<p>My first dynamic page!!! Hurah!!!</p>', 
// 	'<p>How it looks like?! ha!</p>'
// ].map(child => elementFabric(Column, {
// 	children: [
// 		child
// 	]
// }))

const Footer = () => {
	return DOM.element('footer', {
		className: 'section footer',
		children: [
			'<p><em>copyright: everything is legal. Trust me... Im an engineer</em></p>'
		]
	});
};

const App = () => {
	return DOM.element(() => document.createDocumentFragment(), {
		children: [
			Header(),
			Main(),
			Footer()
		]
	});
};

DOM.mount(App());