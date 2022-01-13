// globalVar = "Super Global Data"; // DO NOT REPEAT!!!!

// console.log(globalVar);

var firstName = "John"; // A000 // name
var lastName = "Doe"; // A001 // surname

firstName = "Andrew"; // A002

lastName = "Johnson"; // A003

console.log(firstName, lastName, "is a great man");

firstName = "Jessica";

console.log(firstName, lastName, "is a great woman");

// `+, -, ++, --`

var age = "777";

console.log(+age);
console.log(-age);

// increment postfix;
var postfix = 0;

console.log('postfix', postfix++);
console.log('postfix', postfix);
console.log('postfix', postfix);
console.log('postfix', postfix++);
console.log('postfix', postfix);
console.log('postfix', postfix);
console.log('postfix', postfix--);
console.log('postfix', postfix);
console.log('postfix', postfix--);

// increment prefix;
var prefix = 0;

console.log('prefix', ++prefix);
console.log('prefix', prefix);
console.log('prefix', prefix);
console.log('prefix', ++prefix);
console.log('prefix', prefix);
console.log('prefix', --prefix);
console.log('prefix', prefix);
console.log('prefix', --prefix);

// `+, -, *, /, %, **`;

console.log('sum', 5 + 5);
console.log('sub', 5 - 5);
console.log('sub', 5 - "3");
console.log('sub', "3" - 5);
console.log('mul', 5 * 5);
console.log('dev', 5 / 5);
console.log('dev', 5 / 0);
console.log('dev', -5 / 0);
console.log('mod', 5 % 2);
console.log('pow', 5 ** 2);

console.log(0);
console.log(-0);

console.log("55" + 5); // concat

// `=, +=, -=, *=, /=`

var output = "hello";

console.log(output += " world");

console.log(output);

var sum = 5;

console.log(sum += 5);

console.log((5 + 10) / 2);

var x = 5, y = 6, z = 8;

// x = 5;
// y = 6;

console.log(x, y, z);

var numType = 5;

console.log(String(numType));

var strType = '55';

console.log(Number(strType));

console.log(strType);

strType = Number(strType);

console.log(strType);

console.log(55 + "");

console.log(55 - "sdsdsdsdsd");
console.log(55 * "sdsdsdsdsd");
console.log(55 / "sdsdsdsdsd");

// number, string
console.log(typeof typeof strType);

// camelCase 
// snake_case
// 'kebab-case'

var CURRENT_YEAR = 2021;

