// const fabric = () => {
// 	const entries = [];
	
// 	return {
// 		add(item) {
// 			entries.push(item);
// 		},
// 		get() {
// 			return entries;
// 		}
// 	};
// };

// class User {

// }

// class Account {

// }

// const AUTH = {
// 	accounts: fabric(),

// 	signIn() {
// 		return this.signUp();
// 	},

// 	signUp() {
// 		return new Account();
// 	}	
// };

// const APP = {
// 	account: null,

// 	users: fabric(),

// 	run() {
// 		this.account = AUTH.signIn();

// 		this.account.permissions; // ['READ', 'WRITE']
// 	}
// };


// const accounts = fabric();

// accounts.add(new Account());

// const users = fabric();

// users.add(new User());

// console.log(accounts.get() === users.get());

// const USER_DATA = {

// }

// class List {
// 	constructor() {
// 		this.list = document.querySelector('#list');
// 		this.timestamp = document.querySelector('#timestamp');
// 	}

// 	render() {
// 		for (const li of this.list.children) {
// 			for (const element of li.children) {
// 				const dataFiled = element.dataset.field;

// 				if (dataFiled in USER_DATA) {
// 					span.innerHtml = USER_DATA[dataFiled]();
// 				}
// 			}
// 		}
// 	}
// }

// const basicForm = document.forms.signUp;

// console.log(document.forms.signUp === document.forms[0]);

// const loginField = basicForm.login;
// const emailField = basicForm.email;

// const bioField = basicForm.bio;

// const themeField = basicForm.theme;

// const subField = basicForm.subscribe;

// const planField = basicForm.plan;

// const subscriptions = basicForm.subscriptions;

// console.log(loginField);
// console.log(emailField);
// console.log(subscriptions);

// console.log(subscriptions.elements);

// const newsSubscribe = subscriptions.elements[0];

// console.log(newsSubscribe.form.subscriptions);

// console.log(basicForm.elements);
// console.log(basicForm.children);

// console.log(basicForm.login === basicForm.elements[0]);
// console.log(basicForm.email === basicForm.elements[1]);

// console.log(loginField.form);

// console.log(basicForm.elements);

// console.log(loginField.value);
// console.log(bioField.value);

// console.log(themeField.options);

// themeField.options.dark.replaceWith(new Option('Dark', 'dark', true, true));

// console.log(themeField.selectedIndex);

// console.log(themeField.options.light, themeField.options.light.selected);
// console.log(themeField.options.dark, themeField.options.dark.selected);


// basicForm.elements.subscribe[0].checked = true;

// console.log(
// 	'checkbox 0', 
// 	basicForm.elements.subscribe[0].value, 
// 	basicForm.elements.subscribe[0].checked
// );
// console.log(
// 	'checkbox 1', 
// 	basicForm.elements.subscribe[1].value, 
// 	basicForm.elements.subscribe[1].checked
// );

// console.log(
// 	'radio 0', 
// 	basicForm.elements.plan[0].checked, 
// );
// console.log(
// 	'radio 1', 
// 	basicForm.elements.plan[1].checked, 
// );
// console.log('radio', planField.value);

const basicForm = document.forms.signUp;

const state = { };

const validation = {
	login: (value) => value.length < 5 || value.length > 20,
	password: (value) => value.length < 9 || value.length > 24,
	passwordConfirm: (value, rest) => rest.password !== value,
	email: (value) => !value.includes('@'),
	bio: (value) => value.length < 25,
	consent: (checked) => !checked,
};

const errors = {
	login: true,
	email: true,
	password: true,
	passwordConfirm: true,
	bio: true,
	consent: true
};

const handleEvent = (event) => {
	// console.log('type', event.type);
	// console.log('target', event.target);
	// console.log('target', event.currentTarget);
	// console.log('value', event.target.value, event.target.checked);

	const { type, name, value, checked } = event.target;


	switch (type) {
	case 'checkbox':
		state[name] = checked;
		break;
	
	default:
		state[name] = value;
		break;
	}

	errors[name] = name in validation ? validation[name](state[name], state) : false;

	event.currentTarget.submitBtn.disabled = Object.keys(errors).some(key => errors[key]);
};

const handleFocus = (event) => {
	console.log('FOCUSED!');
};

const handleBlur = (event) => {
	event.currentTarget.submitBtn.disabled = !state.consent;
};

const handleSubmit = (event) => {
	event.preventDefault();

	console.log(event.type);

	console.log('state', state);
};

const handleReset = (event) => {
	event.preventDefault();

	if(confirm('Do you really want to reset a form')) {
		console.log(event.target);
		event.target.reset();
	}

	console.log('form has not been reset');
};

// basicForm.addEventListener('input', handleEvent);
basicForm.addEventListener('change', handleEvent);
// basicForm.addEventListener('focusin', handleFocus);
// basicForm.addEventListener('focusout', handleBlur);

// basicForm.login.addEventListener('focus', handleFocus);
// basicForm.login.addEventListener('blur', handleBlur);


basicForm.addEventListener('submit', handleSubmit);

basicForm.addEventListener('reset', handleReset);

// const sbBtn = document.querySelector('#submitBtn');

// sbBtn.addEventListener('click', () => {
// 	basicForm.requestSubmit();
// });

// const rstBtn = document.querySelector('#resetBtn');

// rstBtn.addEventListener('click', () => {
// 	basicForm.reset();
// });