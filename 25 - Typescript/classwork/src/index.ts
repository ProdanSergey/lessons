const year = 2021;
const message = "Hello World";
const date = new Date();
const isToday = date.getDate() === 21;
const nothing = null;

console.log(`[STDOUT: ${date.toDateString()}]: ${message}`);

// Primitives:
// 	number;
// 	string;
// 	boolean;
// 	null;
// 	undefined;
// 	bigint;
// 	symbol;

// Special
	// any
	// void
	// never
	// unknown

// let someValue: string;

// someValue = 'string';

// someValue = 5;

// someValue = false;

interface IUser {
	firstName: string;
	lastName: string;
}

interface IPowerUser extends IUser {
	role: string
}

interface ISuperPowerUser extends IPowerUser {
	perm: string[]
}

// type User = {
// 	firstName: string;
// 	lastName: string;
// }

const john: IUser = {
	firstName: 'John',
	lastName: 'Snow'
};

const peter: IPowerUser = {
	firstName: 'Peter',
	lastName: 'Jackson',
	role: 'guest'
};

const jain: ISuperPowerUser = {
	firstName: 'Jain',
	lastName: 'Watson',
	role: 'admin',
	perm: ['write', 'read']
};

john.firstName
peter.lastName

type Greeting = {
	(user: IUser): void
}

const greeting = (user: IUser): void => {
	console.log('Welcome', user.firstName, user.lastName);
}

const handleResponse = (url: string, cb: Greeting): void => {
	console.log('Simulate request to', url);

	const response: IUser = {
		firstName: 'John',
		lastName: 'Doe'
	};

	cb(response);
}

// type ColorTheme = 'dark' | 'light';

enum ColorTheme {
	DARK = 'dark',
	LIGHT = 'light'
}

interface ITheme {
	color: string;
	backgroundColor: string;
}

interface IDarkTheme extends ITheme {}

interface ILightTheme extends ITheme {
	textShadow: string;
}

const getColorTheme = (theme: ColorTheme): IDarkTheme | ILightTheme | null => {
	if (theme === ColorTheme.DARK) {
		return { color: 'white', backgroundColor: 'black' }
	}

	if (theme === ColorTheme.LIGHT) {
		return { color: 'black', backgroundColor: 'white', textShadow: 'grey' }
	}

	return null;
};

const colorTheme = getColorTheme(ColorTheme.DARK) as IDarkTheme;

colorTheme.backgroundColor;
colorTheme.color


// greeting('sdsds')
// greeting(1)
// greeting(jain);

enum STATUSES {
	OK,
	NOT_OK,
	WRONG,
	ERROR
}

// console.log(STATUSES.OK);
// console.log(STATUSES.NOT_OK);
// console.log(STATUSES.WRONG);
// console.log(STATUSES.ERROR);

const handleRequest = (status: STATUSES): string => {
	switch (status) {
		case STATUSES.OK:
			return 'handle ok'
		case STATUSES.NOT_OK:
			return 'handle bad'
		default:
			return 'unknown'
	}
}

const response = handleRequest(STATUSES.OK);

console.log(response);

class ServiceUser {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

type Entry = {
	id: number;
	updatedAt: string;
	deletedAt: string;
}

type DeletedAt = Entry['deletedAt'];
type UpdatedAt = Entry['updatedAt'];

type EntryKey = keyof Entry;

type IdOnlyEntry = Pick<Entry, 'id'>
type IdAndUpdateEntry = Pick<Entry, 'id' | 'updatedAt'>
type IdAndDeleteEntry = Omit<Entry, 'updatedAt'>

const getEntryRow = (entry: Entry, key: EntryKey) => {
	return entry[key];
};



const today: Entry = {
	id: 2,
	updatedAt: new Date().toDateString(),
	deletedAt: new Date().toDateString()
}

const entryId = getEntryRow(today, 'id');


const getSumOfKeys = (obj: Record<PropertyKey, number>): number => {
	let sum = 0;

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			const element = obj[key];
			
			sum += element;
		}
	}

	return sum;
};

type ReturnOfGetSumOfKeys = ReturnType<typeof getSumOfKeys>
type ParametersOfGetSumOfKeys = Parameters<typeof getSumOfKeys>

const target = {
	john: 20,
	brad: 30,
	peter: 40,
	andrew: 50
};

const sum = getSumOfKeys(target);

console.log("sum", sum)



// abstract class DBEntry {
// 	serialize(entry: Entry): string {
// 		return `must implement, ${entry} serialize`
// 	}
// 	destroy() {}
// }

// class UserEntry implements DBEntry {
// 	serialize(entry: Entry): string {
// 		return JSON.stringify(entry);
// 	}

// 	destroy(): void {
			
// 	}
// }

// interface IDBEntry {
// 	serialize(entry: Entry): string;
// 	destroy(): void
// }

// class ExtendedDBEntry implements IDBEntry {
// 	serialize(entry: Entry): string {
// 		return JSON.stringify(entry);
// 	}

// 	destroy(): void {
			
// 	}
// }

// const userEntry = new ExtendedDBEntry();

// userEntry.destroy();

// const hanna = new ServiceUser('Hanna', 'Montana');

// class Select {
// 	private readonly name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}

// 	static getVersion(): string {
// 		return '1.1.1'
// 	}

// 	public handleSelect(event: Event) {
// 		const target = event.target;

// 		console.log(this.name);

// 		this.name = 'dsdsd'

// 		if (target) {
// 			this.doPositioning(target);
// 		}

// 		console.log(target);
// 	}

// 	private doPositioning(target: EventTarget) {
// 		console.log(target);
// 	}
// }

// const select = new Select('my select');

// const select2 = new Select('my other select');


// select.handleSelect(new Event('select'));

// select.name;

// Select.getVersion();


// select.doPositioning();

type AlertStatus = {
	status: number;
}

type AlertType<MessageType> = {
	message: MessageType,
} & AlertStatus;

const throwAlert = <T>(alert: AlertType<T>): void => {
	console.log(alert)
};

throwAlert({
	message: 'stringAlert',
	status: 400
});

throwAlert({
	message: 400,
	status: 400
});

throwAlert({
	message: false,
	status: 500
});

const throwNumberAlert = (err: AlertType<number>): never => {
	throw err;
};

const throwBooleanAlert = (err: AlertType<boolean>): void => {
	console.log(err);
};

const throwStringAlert = (err: AlertType<string>): void => {
	console.log(err);
};

throwNumberAlert({
	status: 400,
	message: 500
})

throwBooleanAlert({
	status: 400,
	message: false
})

throwStringAlert({
	status: 400,
	message: 'error message'
})

const isObject = (target: unknown): boolean => {
	return typeof target === 'object' && target !== null && !Array.isArray(target)
}

isObject(undefined);

