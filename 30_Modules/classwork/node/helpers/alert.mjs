const mapToEntry = (message) => ({
	message,
	timestamp: new Date().toISOString(),
});

export const alertInfo = (message) => {
	console.log(mapToEntry(message));
};

export const alertWarn = (message) => {
	console.warn(mapToEntry(message));
};
