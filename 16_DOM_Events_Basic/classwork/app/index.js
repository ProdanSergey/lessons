// const desc = document.getElementById('desc');

// const buttons = desc.querySelectorAll('button');

// const logger = () => {
// 	console.log('log');
// };

// const handlePointer = (event) => {
// 	console.log('i got pointer event', event);
// };

// const handleMouse = (event) => {
// 	console.log('i got mouse event', event);
// };

// const handleEvent = (event) => {
// 	// console.log(event);
// 	// console.log(event.target);
// 	// console.log(event.type);

// 	// event.target.removeEventLister('click', handleEvent);

// 	if (event.type === 'click') {
// 		return handlePointer(event);
// 	}

// 	if (event.type.includes('mouse')) {
// 		return handleMouse(event);
// 	}
// };

// const clickOnce = (event) => {
// 	console.log(event.target);

// 	event.target.onclick = "";
// };

// const handleHover = (event) => {
// 	console.log('hovered');
// };

// button.onclick = handleClick;

// button.onmouseenter = handleHover;

// for (const b of buttons) {
// 	['onclick', 'onmouseenter', 'onmouseleave'].forEach(type => {
// 		b[type] = handleEvent;
// 	});
// }

// button.onclick = clickOnce;

// class ButtonElement {
// 	constructor(el) {
// 		this.el = el;

// 		this.handleEvent = this.handleEvent.bind(this);
// 		this.handleDrop = this.handleDrop.bind(this);

// 		el.addEventListener('click', this.handleEvent);
// 	}

// 	handleEvent(event) {
// 		// console.log(event);
// 		// console.log(event.target);
// 		// console.log(event.type);
	
// 		// event.target.removeEventLister('click', handleEvent);

// 		console.log(this);
	
// 		if (event.type === 'click') {
// 			return handlePointer(event);
// 		}
	
// 		if (event.type.includes('mouse')) {
// 			return handleMouse(event);
// 		}
// 	};

// 	handleDrop() {

// 	}
// }

// const button = new ButtonElement(desc.querySelector('button'));

// const handleClick = (event) => {
// 	console.log(event);
// 	console.log(event.target);
// 	console.log(event.type);

// event.target.removeEventLister('click', handleEvent);

// if (event.type === 'click') {
// 	return handlePointer(event);
// }

// if (event.type.includes('mouse')) {
// 	return handleMouse(event);
// }
// };

// const button = desc.querySelector('button');

// const handler = {
// 	handleEvent: handleClick
// };

// class Handler {
// 	handleEvent(event) {
// 		console.log(event);
// 	}
// }

// const handler = new Handler();


// const handleUserClick = () => {
// 	console.log('user clicked');
// };

// const handleAnalytics = () => {
// 	console.log('analytics send');
// };

// const handleTracking = () => {
// 	console.log('action is tracked');
// };


// [
// 	handleUserClick,
// 	handleAnalytics,
// 	handleTracking
// ].forEach(
// 	handler => {
// 		button.addEventListener('click', handler);
// 	}
// );

// button.addEventListener('click', handleUserClick);
// button.addEventListener('click', handleAnalytics);
// button.addEventListener('click', handleTracking);
