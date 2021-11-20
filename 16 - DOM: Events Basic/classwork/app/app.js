const DOM = ((root) => {
	const mount = (element) => {
		root.replaceChildren(element);
	};

	const create = (node) => {
		switch (typeof node) {
		case 'function':
			return node();
		case 'object':
			return node;
		default:
			return document.createElement(node);
		}	
	};

	const setClass = (el, className) => {
		el.className = className;
	};

	const setAttributes = (el, attrs) => {
		for (const attrKey of Object.getOwnPropertyNames(attrs)) {
			el.setAttribute(attrKey, attrs[attrKey]);
		}
	};

	const setListeners = (el, handlers) => {
		for (const type of Object.getOwnPropertyNames(handlers)) {
			el.addEventListener(type, handlers[type]);
		}
	};

	const setChildren = (el, children) => {
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
	};

	const element = (node, {
		attrs = {},
		className,
		children = [],
		handlers = {}
	} = {}) => {
		const el = create(node);

		if (className) {
			setClass(el, className);
		}
		setAttributes(el, attrs);
		setListeners(el, handlers);
		setChildren(el, children);
	
		return el;
	};

	return {
		element,
		mount
	};
})(document.getElementById('root'));

const withState = (initial, component) => {
	let element, reRender;
	
	let state = initial;

	const setState = (update) => {
		state = typeof update === 'function' ? update(state) : update;

		element.replaceWith(reRender(state, setState));
	};

	const renderComponent = () => {
		return element = component.call(null, state, setState);
	};
	
	reRender = renderComponent;
	
	return renderComponent;
};

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
	return DOM.element('header', {
		className: 'section header',
		children: [
			`<h1>Hello World</h1>`,
		]
	});
};

const MainComponent = (state, setState) => {
	const addUser = () => {
		const firstName = STDIN.string('Enter user name');

		const lastName = STDIN.string('Enter user surname');

		const user = new User({
			firstName,
			lastName
		});

		setState(users => [...users, user]);
	};

	return DOM.element('main', {
		className: 'section main',
		children: [
			DOM.element(Container, {
				children: [
					DOM.element(Column, {
						children: [
							DOM.element('button', {
								children: [
									'Add User'
								],
								handlers: {
									'click': addUser
								}
							}),
							DOM.element('ul', {
								children: state.map(user => DOM.element('li', {
									children: [
										user.fullName
									]
								}))
							})
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

// const USERS = [];
const Main = withState([], MainComponent);

const Footer = () => {
	const handleDonate = () => {
		console.log('user donate some money');
	};

	const handleHover = () => {
		console.log('hovered');
	};

	return DOM.element('footer', {
		className: 'section footer',
		children: [
			'<p><em>copyright: everything is legal. Trust me... Im an engineer</em></p>',
			DOM.element('button', {
				children: [
					'Donate'
				],
				handlers: {
					'click': handleDonate,
					'mouseenter': handleHover
				}
			})
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