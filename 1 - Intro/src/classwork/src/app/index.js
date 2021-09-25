/* Types */

// 1. Number

// var x = 10;
// var y = 2;

// var sum = x + y;
// var mul = x * y;
// var division = x / y;
// var sub = x - y;
// var mod = x % y;
// var pow = x ** y;

// console.log('X', x, 'Y', y);

// console.log('');
// console.log('MUL:', mul);
// console.log('DIV:', division);
// console.log('SUB:', sub);
// console.log('MOD:', mod);
// console.log('POW:', pow);

// 2. String

// var firstName = 'John';
// var lastName = 'Snow';
// var age = '10';

// var fullName = firstName + " " + lastName;

// console.log('FIRST_NAME:', firstName);
// console.log('LAST_NAME:', lastName);
// console.log('AGE:', age, 10);

// console.log(fullName);
// console.log('LENGTH: ', fullName.length);

// 3. String + Number

// var x = 10;
// var y = '20';

// console.log('SUM: ', x + y); // -> String


// console.log('MULT:', x * y); // -> Number
// console.log('DIV:', x / y); // -> Number
// console.log('SUB:', x - y); // -> Number
// console.log('MOD:', x % y); // -> Number
// console.log('POW:', x ** y); // -> Number

// NaN -> NotANumber

// NaN + Nan = NaN
// NaN * Nan = NaN
// 10 + NaN = NaN
// NaN * 10 = NaN

// Implicit -> Неявно -> 
// Explicit -> Явно -> Number() ИЛИ parseInt() ИЛИ parseFloat() ИЛИ +

// var sum = x + parseInt(y);
// var mul = x * Number(y);
// var division = x / Number(y);
// var sub = x - y;
// var mod = x % y;
// var pow = x ** y;

// console.log('MULT:', sum); // -> Number
// console.log('MULT:', mul); // -> Number
// console.log('DIV:', division); // -> Number
// console.log('SUB:', sub); // -> Number
// console.log('MOD:', mod); // -> Number
// console.log('POW:', pow); // -> Number

// Унарный +

// console.log(+'100')
// console.log(+'john')

// Унарный -

// var x = 100;

// console.log(x);
// console.log(-x);

// console.log(x + -x);

// Погрешность при рассчетах чисел с плавающей точкой. 

// console.log(0.1 + 0.2);

// Присваивание

// var x = 10;
// var y = 20;

// console.log('x before operation = ', x);
// console.log('y before operation = ', y);

// x += y;

// console.log('x after operation = ', x);
// console.log('y after operation = ', y);

// // x += y; // -> x = x + y;
// // x *= y; // -> x = x * y;
// // y /= x; // -> y = y / x;

// console.log('sum x + y = ', x + y);

// var zero = 0;
// var negativeZero = -0;

// console.log(zero)
// console.log(negativeZero)
// console.log(zero === negativeZero)

// TypeOf

// var x = 10;
// var y = '20';

// console.log(typeof x); // -> String -> 'number';
// console.log(typeof y); // -> String -> 'string';

// var firstResult = typeof x;
// var secondResult = typeof firstResult;

// console.log('first',firstResult);
// console.log('second', secondResult);

// Types Primitives

// 1. String = 'str'
// 2. Number/Infinity/NaN = 10; 


// 3. undefined = undefined
// 4. null = null
// 5. Boolean -> true/false = false true
// 6. Symbol -> uniq string - Symbol()
// 7. BigInt -> 64bit - 23123123213123n

// Types Referral

// 1. Object
//   1.1 Function
//   1.2 Array


// var CURRENT_YEAR = 2021;