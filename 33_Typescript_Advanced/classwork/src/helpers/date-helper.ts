export abstract class DateHelper {
	abstract date: Date;

	format() {
		return this.date.toISOString();
	}
}

export class ISODateHelper extends DateHelper {
	date = new Date();

	constructor() {
		super();
	}
}
