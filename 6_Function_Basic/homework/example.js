const USERS = [];
const ALLOWED_OPERATIONS = [0, 1, 2, 3];
const CURRENT_YEAR = 2021;

const getNumberInput = function(message, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
	// вернуть число, запрошенное у пользователя при помощи prompt() (ВАЛИДАЦИЯ)
} 

const getStringInput = function(message, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
	// вернуть строку, запрошенную у пользователя при помощи prompt() (ВАЛИДАЦИЯ)
} 

const getOperationInput = function() {
	// вернуть номер операции, запрошенный у пользователя при помощи prompt() (ВАЛИДАЦИЯ)
}

const addUser = function() {
	// написать функцию для операции 1 - добавление в массив нового юзера
	const user = {}

	// ...

	USERS.push(user);
}

const deleteUser = function() {
	// написать функцию для операции 2 - удаление из массива юзера по индексу
	if (USERS.length < 1) {
		// ...
	};
	// ...
	const indexToDelete = getNumberInput()
}

const showUsers = function() {
	// написать функцию для операции 3 - листинг массива юзеров с выводом в консоль
	if (USERS.length < 1) {
		return console.log('There are no users yet');
	};
	// ...
}

do {
	console.clear();

	let operation = getOperationInput();
	
	switch (operation) {
		case 1: {
			addUser();
			break;
		}
		
		case 2: {
			deleteUser();
			break;
		}
		
		case 3: {
			showUsers();
			break;
		}
	
		default:
			break;
	}

} while(confirm('Do you want to another operation?'));

console.log('Byu, Byu!!')