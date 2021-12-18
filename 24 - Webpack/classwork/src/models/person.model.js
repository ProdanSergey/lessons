export class Person {
	constructor(data) {
		for (const key of Object.getOwnPropertyNames(data)) {
			this[key] = data[key];
		}
	}

	toString() {
		return `${this.firstName} ${this.lastName}`;
	}
}