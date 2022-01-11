const root = document.getElementById('root');

// const section = root.querySelector('#section');

// const handleUserActions = (event) => {
// 	console.log('bubbles', event.bubbles);
// 	console.log('cancelable', event.cancelable);
// 	console.log('document handler', event.target);
// };

// document.addEventListener('submit', handleUserActions);

// const handleSectionClick = function(event) {
// 	// console.log('i can bubble', event.bubbles);
// 	console.log('section handler', event.target);
// 	console.log('and stage is: ', event.eventPhase);

// 	event.stopImmediatePropagation();
// };

// const handleSectionFollowAction = (event) => {
// 	console.log('section sibling handler', event.target);
// };

// const listen = (element, type, callback) => {
// 	return element.addEventListener(type, callback.bind({ foo: 'bar'}));
// };

// listen(section, 'click', handleClick);


// section.addEventListener('click', handleSectionClick);
// section.addEventListener('click', handleSectionFollowAction);

// const options = {
// 	capture,
// 	once,
// 	passive,
// 	consume
// }

// section.addEventListener('click', handleSectionClick, true);

// const para = section.querySelector('p');

// const handleParaAction = (event) => {
// 	console.log('para handler', event.target);
// };

// para.addEventListener('click', handleParaAction);

// const anchor = section.querySelector('a');

// const handleLink = (event) => {
// 	const href = event.currentTarget.href; // event.currentTarget.getAttribute('href');

// 	console.log('i have opened: ', href);

// 	event.preventDefault();
// };


// anchor.addEventListener('click', handleLink);

// const form = document.getElementById('form');

// const handleSubmit = (event) => {
// 	console.log('submit');

// 	event.preventDefault();
// };

// form.addEventListener('submit', handleSubmit);

// const section = root.querySelector('#section');

// const addItem = () => {
// 	const li = document.createElement('li');

// 	li.innerText = 'New Item';

// 	const ul = section.querySelector('ul');

// 	ul.append(li);
// };

// const handler = {
// 	handleEvent({ target }) {

// 		if (target.tagName === 'LI') {
// 			console.log('i clicked on LI');
// 			return;
// 		};

// 		switch (target.innerText) {
// 		case 'Add':
// 			this.handleAdd(target);
// 			break;
// 		case 'Reset':
// 			this.handleReset(target);
// 			break;
// 		case 'Send':
// 			this.handleSend(target);
// 			break;
// 		default:
// 			break;
// 		}
// 	},
// 	handleAdd(target) {
// 		console.log('add');
// 		addItem();
// 	},
// 	handleSend(target) {
// 		console.log('send');
// 	},
// 	handleReset(target) {
// 		console.log('reset');
// 	}
// };

// section.addEventListener('click', handler);

// const handler = {
// 	handleEvent({ target }) {

// 		if (target.tagName === 'LI') {
// 			console.log('i clicked on LI');
// 			return;
// 		};

// 		switch (target.innerText) {
// 		case 'Add':
// 			this.handleAdd(target);
// 			break;
// 		case 'Reset':
// 			this.handleReset(target);
// 			break;
// 		case 'Send':
// 			this.handleSend(target);
// 			break;
// 		default:
// 			break;
// 		}
// 	},
// 	handleAdd(target) {
// 		console.log('add');
// 		addItem();
// 	},
// 	handleSend(target) {
// 		console.log('send');
// 	},
// 	handleReset(target) {
// 		console.log('reset');
// 	}
// };

// class AddItemEvent extends CustomEvent {
// 	constructor(...args) {
// 		super(...args);
// 	}
// };

// document.addEventListener('addItem', (event) => {
// 	console.log(event);
// 	console.log(event.type);
// 	console.log(event instanceof AddItemEvent);

// 	console.log(event.detail);
// 	console.log(event.target, 'item added');
// });

// const section = root.querySelector('#section');

// // section.addEventListener('click', handler);

// const ev = new AddItemEvent('addItem', {
// 	bubbles: true,
// 	detail: {
// 		itemId: 10
// 	}
// });

// // ev.clientX = 10;
// // ev.clientY = 0;

// section.dispatchEvent(ev);

class ItemAddEvent extends CustomEvent {
	constructor(detail) {
		super('item:add', {
			bubbles: true,
			detail
		});
	}
};

class ItemSendEvent extends CustomEvent {
	constructor(detail) {
		super('item:send', {
			bubbles: true,
			detail
		});
	}
};

class ItemResetEvent extends CustomEvent {
	constructor(detail) {
		super('item:reset', {
			bubbles: true,
			detail
		});
	}
};

const section = root.querySelector('#section');

const buttons = section.querySelectorAll('button');

const handleClick = ({ target }) => {
	let event;
	
	switch (target.innerText) {
	case 'Add':
		event = new ItemAddEvent(); 
		break;
	case 'Send':
		event = new ItemSendEvent();
		break;
	case 'Reset':
		event = new ItemResetEvent();
		break;	
	default:
		break;
	}

	target.dispatchEvent(event);
};

for (const b of buttons) {
	b.addEventListener('click', handleClick);
}


class SectionApp {
	handleEvent(event) {
		switch (event.type) {
		case 'item:add':
			this.handleAdd();
			break;
		case 'item:send':
			this.handleSend();
			break;
		case 'item:reset':
			this.handleReset();
			break;
		default:
			break;
		}
	}
	handleAdd() {
		console.log('add');
	}
	handleSend() {
		console.log('send');
	}
	handleReset() {
		console.log('reset');
	}
}

const appHandler = new SectionApp(); 

section.addEventListener('item:add', appHandler);
section.addEventListener('item:send', appHandler);
section.addEventListener('item:reset', appHandler);

document.addEventListener('item:add', ({ target }) => {
	console.log('item added', target);
});
