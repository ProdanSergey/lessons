export const logInfo = (message) => {
	console.log(message);
};

export const logWarn = (message) => {
	console.warn(message);
};

export const logImportant = (message) => {
	console.warn(message);
};

export const logError = (error) => {
	console.error("ERROR", error);
};

export const clear = () => {
	console.clear();
};
