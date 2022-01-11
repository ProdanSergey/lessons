const sum = (a, b) => {
	return a + b;
};

module.exports.multiply = (a, b) => {
	return a * b;
};

const double = (a) => {
	return a * 2;
};

// exports.double = double;

// module.exports.sum = sum;

module.exports = {
	sum,
	double
};