// undefined

var pos;
var lastName;

console.log(pos);

pos = "1:1:0";
lastName = undefined;
// lastName = void 0;

console.log(lastName)

// null

var home = null;

console.log(home);

home = "Serhii" + " " + "Prodan" + ", " + "Ukraine";

console.log(home);

console.log(typeof undefined);
console.log(typeof null);

// Boolean;

// true/false 1/0

var isActive = false;

console.log(isActive)

isActive = true;

console.log(isActive);

isActive = 1;

console.log(Boolean(isActive));

console.log(Boolean(" "));

console.log('-----------');

var userCount = 2;

console.log(!userCount);

console.log('-----------');

// >, <, >=, <=, ==, ===, !=, !==

var johnApples = 5;
var annyApples = 10;

console.log(johnApples <= annyApples);

console.log('-----------');

console.log(1 === Number("1"));
console.log(1 !== 1);

// &&
// ||

console.log(0 || "John");
console.log("apple" || "orange");
console.log(0 || false);

console.log('-----------');

console.log(0 && "John");
console.log("apple" && "orange");
console.log(0 && false);
console.log("0" && "");

console.log('-----------');

console.log("1" || 1 || false);
console.log(undefined || 0 || "1");
console.log(null || 5 || undefined);
console.log("" || 0 || NaN);
console.log(void 0 || -1 || true);

console.log('-----------');

console.log(5 && "5" && -1);
console.log(-1 && 25 && null && "john");
console.log("0" && 0 && "hallo world" && false);

console.log('-----------');

console.log(5 || false && "5");
console.log(5 || (false || 25));
console.log("" || (false || 25));
console.log("" || (false && 25));

console.log('-----------');

var isUserAuthenticatedToPerformeALoggin = true;

isUserAuthenticatedToPerformeALoggin && console.log('2000 lines of to logging to my site');

console.log('-----------');

// ??
// console.log("" ?? "dsds");
// console.log(false ?? 55);
// console.log(null ?? 1);
// console.log(undefined ?? 22);

// var myCount = 5;

// var isValid = myCount && myDate > 5 || (isAdmin && isPowerAdmin) || isUser;

// if (isValid) {
// 	var x = 5;
// 	var y = 5;

// 	console.log("sum:", x + y);
// }

// var isConfirmed = true;
// var isActive = true;

// var permission = 'ADMIN'; // A001

// var isLoggerEnabled = true;

// if (isConfirmed && isActive) {
// 	console.log('Log in...');

// 	// if (permission === 'ADMIN') {
// 	// 	console.log('As Admin');
// 	// } else {
// 	// 	console.log('As User');
// 	// }

// 	switch (permission) {
// 		// permission === 'ADMIN'
// 		case 'ADMIN': {
// 			var count = 2;
			
// 			if (count > 3) {
// 				break;
// 			}

// 			console.log('As Admin');

// 			break;
// 		}
// 		// permission === 'POWER_USER'
// 		case 'POWER_USER': {
// 			console.log('As Power User');
// 			break;
// 		}
// 		// permission === 'USER'
// 		case 'USER': {
// 			console.log('As User');
// 			break;
// 		}
// 		// Else
// 		default: {
// 			console.log('Unknown role');
// 		}
// 	}
// } else if (isLoggerEnabled) {
// 	console.log('Log the failed attempt to the server', 'try again');
// } else {
// 	console.log('Sorry you are not authorized');
// }

// var userPermission = 'ADMIN';

// var isEnabled = userPermission === 'ADMIN' ? true : false;

// var statusCode = 404;

// var message = statusCode >= 400 ? "Bad request" : "Ok";

// var message;

// if (statusCode >= 400) {
// 	message = "Bad Request";
// } else {
// 	message = "Ok";
// }

// console.log( 50 + (statusCode >= 400 ? 50 : 1000));

// try {
// 	var sum = 0;

// 	sum = 100 + 55;
// } catch (error) {
// 	console.log('Error ocurred', error);
// } finally {
// 	console.log('Suspicious code done');
// }

// console.log('Some other code goes here');

// var isLeapYear = false;

// document.write(isLeapYear ? 'Leap Year' : '')

// document.write("User info: " + firstName + " " + age + "")

// "User bio: John Snow, 34 (leap year), Scorpio";
// "User bio: John Snow, 32, Scorpio";