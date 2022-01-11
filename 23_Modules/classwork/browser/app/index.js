// import { author, version as fooVersion, tags, changeAuthor, showAuthor } from './utils/foo.js';
// import { version as barVersion } from './utils/bar.js';

// import { author, fooVersion, tags, changeAuthor, showAuthor } from './utils/foo.js';
// import { barVersion } from './utils/bar/bar.js';

// console.log(fooVersion);
// console.log(barVersion);

// // showAuthor();

// // console.log(version);

// // changeAuthor('John Snow');

// // console.log(author);

// // tags.push('hello world');

// // console.log(tags);

// import * as CONSTANTS from './constants/index.js';

// console.log(
// 	CONSTANTS.APP_NAME, 
// 	CONSTANTS.APP_VERSION, 
// 	CONSTANTS.APP_LICENSE, 
// 	CONSTANTS.APP_TAGS,
// 	CONSTANTS.APP_REPO,
// 	CONSTANTS.APP_NPM
// );

// import { bar, doubleBar, defaultBar } from './utils/index.js';

// bar();

// doubleBar();

// defaultBar();

const login = prompt('Pls. enter your login');

const doAuth = async (condition) => {
	let module;

	try {
		switch (condition) {
		case 'ADMIN':
			module = await import('./dynamics/private.js');
			break;
		
		default:
			module = await import('./dynamics/public.js');
			break;
		}
	} catch(err) {
		console.log(err);
	}

	module.action();
};

doAuth(login);


// fetch() -> Promise -> Response -> Response.body -> ReadebleStrem -> Promise -> {}
// import() -> Promise -> {}