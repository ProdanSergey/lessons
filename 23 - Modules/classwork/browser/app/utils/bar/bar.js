import { log, notify } from '../logger/index.js';

export const doubleBar = () => {
	log('bar bar');
};

export const bar = () => {
	log('bar');
};

export default () => {
	log('default bar');
}; 
