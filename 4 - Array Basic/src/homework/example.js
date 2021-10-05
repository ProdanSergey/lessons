const USERS = [];
const ALLOWED_OPERATIONS = [0, 1, 2, 3];
const Y_INDEX = 0, Y_TYPE_INDEX = 1, M_INDEX = 2, D_INDEX = 3;

do {
	console.clear();

	let operation;

	do {
		operation = +prompt('Enter operation: 1 - add, 2 - delete, 3 - show');
	} while (!ALLOWED_OPERATIONS.includes(operation))
	
	switch (operation) {
		case 1: {
			const user = [];

			do {
				user[Y_INDEX] = prompt('Enter data');
			} while(isNaN(user[Y_INDEX]));

			do {
				user[M_INDEX] = prompt('Enter data');
			} while(isNaN(user[M_INDEX]));

			do {
				user[D_INDEX] = prompt('Enter data');
			} while(isNaN(user[D_INDEX]));

			USERS.push(user); // -> USERS[]

			break;
		}
		
		case 2: {
			let indexToDelete;

			do {
				indexToDelete = +prompt('Enter index');
			} while(indexToDelete < 0 && indexToDelete >= USERS.length)

			USERS.splice(indexToDelete, 1);

			break;
		}
		
		case 3: {
			for (const user of USERS) {
				console.log(user);
			}

			break;
		}
	
		default:
			break;
	}

} while(confirm('Do you want to another operation?'))