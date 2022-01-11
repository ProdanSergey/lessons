// const targets = document.body.querySelectorAll('div');

// HTMLDivElement.prototype.helloWorld = function helloWorld() {
// 	console.log(this);
// };

// const customDivPrototype = Object.create(HTMLElement.prototype);

// customDivPrototype.constructor = HTMLElement;

// customDivPrototype.helloWorld = function helloWorld() {
// 	console.log(this);
// };

// HTMLDivElement.prototype = Object.create(customDivPrototype);

// for (const iterator of targets) {
// 	console.dir(iterator);
// 	iterator.helloWorld();
// }

// // EventTarget < - Node < - Element < - HTMLElement < - HTMLDivElement;

// const target = document.body.querySelector('#target');

// console.dir(target);
// console.log(target.href);

// console.log(target.hasAttribute('hello'));

// console.log(target.getAttribute('hello'));

// console.log(target.setAttribute('href', 'bar'));

// console.log(target.setAttribute('foo', 'baz'));

// console.log(target.removeAttribute('foo'));

// console.log(target.dataset);

// target.setAttribute('data-hello', 'world');

// console.log(target.dataset);

// target.dataset.count = 5;

// console.log(target.dataset);

// console.log(Number(target.dataset.count) + 10);

// const targets = document.body.querySelectorAll('div');

// Array.from(targets).forEach((element, index) => {
// 	if (index % 2 === 0) {
// 		element.style.backgroundColor = 'red';
// 		element.style.color = 'white';
// 		element.style.border = '1px solid black';
// 		element.style.margin = '1px';

// 		element.style.fontSize = '';

// 		// element.style.cssText = 'background-color: red; color: white; border: 1px solid black; margin: 1px;';

// 		// element.setAttribute('style', 'background-color: green; color: white; border: 1px solid black; margin: 1px;');
// 	}
// });

// for (const property of targets[0].style) {
// 	console.log(property);
// }

// const targets = document.body.querySelectorAll('.box');

// console.log(targets);

// const uniq = targets[2];

// console.log(uniq.classList);

// uniq.classList.add('uniq');

// uniq.classList.remove('box');

// uniq.classList.add('box');

// uniq.classList.toggle('uniq');

// console.log(uniq.classList.contains('uniq'));

// uniq.classList.toggle('uniq');


// console.log(uniq.classList.contains('uniq'));

// uniq.setAttribute('class', 'uniq');

// console.log(uniq.className);

// uniq.className = 'box uniq first';

// const uniq = document.getElementById('uniq');

// console.dir(uniq);

// console.log(uniq.attributes);

// for (const attr of uniq.attributes) {
// 	console.dir(attr);
// }

const STDIN = {
	
};

const DATE = {
	toString() {
		const now = new Date();
		

		return now;
	},
	getDateByFormat(format) {
		const now = new Date();

		switch (format) {
		case 'yyyy/mm/dd hh:mm':
			return '2021/11/13 13:56';
		case 'mm/dd/yyyy':
			return '11/13/2021';
		default:
			return now.toDateString();
		}
	}
};

/*   */

class Timestamp {
	constructor() {
		this.moment = new Date();
	}

	toFormattedString() {}

	toString() {

	}
}

const USER_DATE = {
	firstName() {},
	lastName() {},
	age() {},
};

class App {
	constructor() {
		this.list = document.querySelector();
		this.timestamp = document.querySelector();
	}


	render() {
		// ...list_item {
		// 	...data-field {
		// 		if (USER_DATE has data-filed) {
		// 			do USER_DATE[data-filed]
		// 		}
		// 	}
		// }
	}

	update() {
		// this.timestamp
	}
}

new App.render();
