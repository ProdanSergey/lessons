const UTILS = (function() {
	const version = '0.0.1';

	const write = function(text) {
		document.write(text);
	};
	
	const action = function(message, cb) {
		console.log('before');
		cb(message);
		console.log('after');
	};
	
	const tripleWrite = function(text) {
		document.write(text.repeat(3));
	};
	
	const reversedWrite = function(text) {
		document.write(text.split('').reverse().join(''));
	};

	return {
		version,
		write: write,
		action: action,
		tripleWrite,
		reversedWrite
	}
})()