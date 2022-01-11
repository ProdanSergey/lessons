// Types:

// 1. String
// 2. Number
// 3. Undefined
// 4. Null
// 5. Boolean

// Type Undefined

// console.log('before init', toBeKnownLater);

// var toBeKnownLater = 'Hello World';

// console.log();

// Type Null;

// console.log(typeof 'John Snow');
// console.log(typeof 5);
// console.log(typeof undefined);
// console.log(typeof null);

// var user = null;

// console.log(user);

// var firstName = prompt('Enter your name');
// var lastName = prompt('Enter your surname');

// user = firstName + ' ' + lastName;

// console.log(user);

// var firstName = 'John';
// var lastName = 0;

// var firstCase = false;
// var secondCase = false;
// var thirdCase = false;
// var lastCase = 'John';

// var fullName = firstName + ' ' + (lastName || 'Unknown');

// console.log(fullName);

// || -> стоп на первом true

// console.log(null || undefined || 'String' || 0)


// && -> стоп на первом false

// console.log(null && undefined && 'String' && 0)


// ! -> отрицание. Обратный тип булевого значения
// console.log(!true) -> false
// console.log(!false) -> true


// FALSE значения

// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(false)
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// var money = 0;

// console.log(money ?? 'мы не знаем сколько у тебя денег');

// console.log(Boolean(234324))
// console.log(Boolean('wsdewdqwdqw'))
// console.log(true)
// console.log(Boolean('undefined'))
// console.log(Boolean('null'))
// console.log(Boolean('NaN'))
// console.log(Boolean(-12312312312))
// console.log(Boolean(Infinity))
// console.log(Boolean(console.log))

// 0
// ''
// false
// undefined
// null
// NaN

// ?? FALSE NULLISH 
// undefined
// null

// ??

// var fullName = firstName + ' ' + (lastName ?? 'Unknown');

// TRUE значения

// все остальное

// Операторы сравнения
// >, <, >=, <=, ==, ===, !=, !==


// Сравнение двух строк 

// Unicode

// A = 97 in unicode
// s = 115 in unicode

// let role = 'Admin';
// let requirment = 'su';

// console.log(role > requirment);


// Сравнение всего остального приводится к числу

// console.log(undefined > 30);
// console.log(25 < 30);
// console.log(50 >= 25);
// console.log('50' > 25); -> 50 приводится к числу

// == === != !==
// let age = 25;

// console.log(25 === 25);
// console.log(25 !== 25);

// Логические конструкции

// if (условие) {
// 	если правда
// } else if (условие) {
// 	если предидущее не правда а текущее правда 
// } else {
// 	если все предидущие не правда
// }

// var userAge = 13;
// var permission = 'SUPER_ADMIN';

// if ((userAge >= 18 && userAge <= 50) || permission === 'SUPER_ADMIN') {
// 	console.log('Вход разрешен');
// } else if (userAge >= 16 && userAge <= 50) {
// 	console.log('Вход разрешен с позволения родителей');
// } else {
// 	console.log('Вход запрещен');
// }

// Switch/Case

// var simonSays = 'hello';

// // Пример с return показал рано, он работает только внутри функций.
// switch (simonSays) {
// 	case 'welcome':
// 		console.log('Say Welcome');
// 		break;
// 	case 'bye':
// 		console.log('Say Byu');
// 		break;
// 	case 'hello':
// 		console.log('Say Hello');
// 		break;
// 	case 'how are you':
// 		console.log('Say How Are You?');
// 		break;		
// 	default:
// 		console.log('Nothing')
// 		break;
// }

// Обработка ошибок

// try {
// 	var myUser = 18;

// 	if (myUser <= 18) {
// 		throw new Error('Вход запрещен, мало лет');
// 	}

// 	if (myUser >= 50) {
// 		throw new Error('Вход запрещен, много лет');
// 	}
// } catch(error) {
// 	console.log(error)
// }

// console.log('Hello After Error')