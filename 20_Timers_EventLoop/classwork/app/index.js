const createElement = (parent, options = {}) => {
	let el;
	if (typeof parent === 'string') {
		el = document.createElement(parent);
	} else if (parent.nodeType === 1) {
		// parent is element;
		el = parent;
	} else if (parent.nodeType === 11) {
		// parent is fragment
		el = parent;
	}

	const { props = {}, children = [], handlers = {} } = options;

	for (const propKey of Object.getOwnPropertyNames(props)) {
		const prop = props[propKey];

		el.setAttribute(propKey, prop);
	}

	for (const eventType of Object.getOwnPropertyNames(handlers)) {
		el.addEventListener(eventType, handlers[eventType]);
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

// const div = createElement('div', {
// 	children: [
// 		createElement('p', {
// 			children: [
// 				'<strong>Hello World</strong>'
// 			]
// 		})
// 	]
// });

// const timerId = setTimeout(() => {
// 	div.remove();
// 	console.log('removed');
// }, 5000);


// const reject = createElement('button', {
// 	children: [
// 		'Reject Delete'
// 	],
// 	handlers: {
// 		click: () => {
// 			console.log('timeout rejected');
// 			clearTimeout(timerId);
// 		}
// 	}
// });

// console.log(timerId);

// document.body.append(div, reject);


// const timerId = setTimeout(() => {
// 	console.log(1, 'done');

// 	setTimeout(() => {
// 		console.log(2, 'done');

// 		setTimeout(() => {
// 			console.log(3, 'done');
// 		}, 1000);
// 	}, 1000);
// }, 1000);


// const button = createElement('button', {
// 	children: [
// 		'Reject Delete'
// 	],
// 	handlers: {
// 		click: () => {
// 			let i = 1;

// 			const timerId = setInterval(() => {
// 				console.log(i++, 'done');

// 				if (i > 5) {
// 					clearInterval(timerId);
// 				}
// 			}, 1000);
// 		}
// 	}
// });

// document.body.append(button);

// const APP = {
// 	button: createElement('button', {
// 		children: [
// 			'Start'
// 		],
// 	}),

// 	runCounter() {
// 		let i = 1;

// 		const timerId = setInterval(() => {
// 			this.button.replaceChildren(i);

// 			if (i++ > 5) {
// 				this.button.replaceChildren('Start');
// 				clearInterval(timerId);
// 			}
// 		}, 1000);
// 	},

// 	render() {
// 		this.button.addEventListener('click', () => {
// 			this.runCounter();
// 		});

// 		document.body.replaceChildren(this.button);
// 	}
// };

// APP.render();

// let i = 1, prevTick = new Date();

// const timerId = setInterval(() => {
// 	const tick = new Date();

// 	console.log(i, tick - prevTick);

// 	prevTick = tick;

// 	for (let index = 0; index < 1e9; index++) {}
	
// 	if (i++ > 15) {
// 		clearInterval(timerId);
// 	}
// }, 100);

queueMicrotask(() => {
	console.log('microtask');
});

console.log(1);

requestAnimationFrame(() => {
	console.log('Request Animation Frame');
});

setTimeout(() => {
	console.log(2);
}, 0);

console.log(3);

const requestForUser = () => {
	setTimeout(() => {
		console.log('user is given', {name:'John Snow'});
	}, 2000);
};

const btn = createElement('button', {
	children: [
		'Click Me'
	],
	handlers: {
		click: () => {
			requestForUser();

			console.log('button clicked');
		}
	}
});

document.body.append(btn);

console.log(4);

queueMicrotask(() => {
	console.log('microtask');
});
queueMicrotask(() => {
	console.log('microtask');
});

requestAnimationFrame(() => {
	console.log('Request Animation Frame');
});