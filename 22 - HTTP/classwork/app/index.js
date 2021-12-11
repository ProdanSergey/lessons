// const form = document.forms.signup;
// const output = document.getElementById('output');

// const state = {
// 	email: '',
// 	password: ''
// };

// const validators = {
// 	email: (value) => !value.includes('@'),
// 	password: (value) => value < 5 || value > 24
// };

// const handleChange = ({ target }) => {
// 	const { name, value } = target;

// 	target.dataset.error = validators[name] ? validators[name](value) : false;

// 	state[name] = value;

// 	const form = target.form;

// 	form.btn.disabled = form.querySelectorAll('[data-error="true"]').length > 0;
// };

// const handleSubmit = (event) => {
// 	event.preventDefault();

// 	let nodes = [];

// 	for (const stateKey of Object.getOwnPropertyNames(state)) {
// 		const value = state[stateKey];

// 		const span = document.createElement('p');

// 		span.innerText = `${stateKey}: ${value}`;

// 		nodes.push(span);
// 	}

// 	output.replaceChildren(...nodes);
// };

// form.addEventListener('change', handleChange);
// form.addEventListener('submit', handleSubmit);

// const xhr = new XMLHttpRequest();

// xhr.responseType = "json";

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

// xhr.onload = (event) => {
// 	console.log(event.type);
// 	console.log(event.target.status);

// 	if (event.target.status < 300) {
// 		console.log(event.target.response);
// 	} else {
// 		console.error(new Error(event.target.statusText));
// 	}
// };

// xhr.onerror = (event) => {
// 	console.log(event.type);
// 	console.log(event);
// };

// xhr.send();


const requestXhr = (method, url, body) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.responseType = "json";
	
		xhr.open(method, url);
	
		const handleLoad = (event) => {
			console.log(event.type);
			console.log(event.target.status);
	
			if (event.target.status < 300) {
				resolve(event.target.response);
			} else {
				reject(new Error(event.target.statusText));
			}
		};
	
		const handleError = (event) => {
			reject(new Error(event.target.statusText));
		};

		xhr.addEventListener('load', handleLoad);
		xhr.addEventListener('error', handleError);
	
		xhr.send(body ? JSON.stringify(body) : body);
	});
};

const request = (method, url, body, signal) => {
	const headers = new Headers({
		'Content-type': 'application/json; charset=UTF-8',
	});

	headers.append('X-Request-Data', 'superadmin');

	console.log(headers);

	// url.searchParams.append('role', 'superhero');

	// for (const [paramKey, paramValue] of url.searchParams) {
	// 	console.log(paramKey, paramValue);
	// }

	return fetch(url, {
		method,
		body: body ? JSON.stringify(body) : body,
		headers,
		signal
	}).then(async response => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		let data;

		if(response.headers.get('content-type').includes('application/json')) {
			data = await response.json();
		} else {
			data = await response.text();
		}

		return data;
	});
};

const btn = document.getElementById('send');

const sendPost = async () => {
	try {
		const url = new URL('https://jsonplaceholder.typicode.com/posts/1?name=john&surname=snow'); 

		const data = await request('PUT', url, {
			value: 123
		});

		console.log(data);
	} catch (error) {
		console.error(err);
	}

	// try {
	// 	const url = new URL('https://jsonplaceholder.typicode.com/posts/1?name=john&surname=snow'); 

	// 	const controller = new AbortController();

	// 	const data = request('PUT', url, {
	// 		value: 123,
	// 	}, controller.signal).then(console.log).catch(console.error);

	// 	controller.abort();
		
	// } catch (err) {
	// 	console.error(err);
	// }
};

btn.addEventListener('click', sendPost);

// console.log(xhr);

// Get 
// https://example.com/users
// https://example.com/users/1

// Req -> Server -> DB -> find -> Server -> Res

// Post
// https://example.com/users

// email
// password

// Req -> Server -> DB -> create -> Server -> Res

// Put
// https://example.com/users/1

// email
// password

// Req -> Server -> DB -> create/update -> Server -> Res

// Patch
// https://example.com/users/1

// email

// Req -> Server -> DB -> partial update -> Server -> Res

// Delete
// https://example.com/users
// https://example.com/users/1

// Req -> Server -> DB -> remove -> Server -> OK/ERR

// Options - preflight request
// Head - 

// Headers 

// 'Authorization': 'asdkbasdjasdnkasndjkasndjkabnsjdkbskdbjkhsbdhj'

// http://client.supermario.com
// http://server.hotpizza.com

// CORS

// status

// 1xx
// 2xx - Success
// 3xx - Redirect
// 4xx - Error Client 404 - Not Found, 401 - Unauthorized
// 5xx - Error Server

// query params

// 'https://jsonplaceholder.typicode.com/posts/1?name=john&surname=snow'