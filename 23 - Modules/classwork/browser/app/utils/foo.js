import { log } from './logger/index.js';

let version = 'version: 1.1.1';
let author = 'author: Serhii Prodan';

const tags = ['modules', 'ES', 'ES2015'];

export const changeAuthor = (name) => {
	author = name;
};

export const showAuthor = () => {
	log(author);
};

export { version as fooVersion, author, tags };

export default () => {
	log('default foo');
}; 

export const foo = () => {
	log('foo');
};