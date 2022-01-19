/*** TASK 1 ***/
/*** ЗАДАНИЕ 1 ***/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* initializing a recursion, wrap a value by n depth object */
/* инициализировать процесс рекурсии, обернуть value в объект глубиной в n уровней */
const wrap = (n, value) => {
	// you must have some object to store all the nested objects inside.
	// необходимо иметь объект, который будет содержать все вложенные объекты.
	const target = {};
	
	// recursively fill up a cursor with appropriate value key.
	// рекурсивно записывать значение по ключу value согласно условию задачи.
	const wrapper = function(depth, cursor) {
		if (depth < 1) {
			// do some logic if you reach the bottom of recursion.
			// выполнить некие действия, в случае достижения базы рекурсии.
			
			// return the target.
			// вернуть target.
		}

		// call the recursion otherwise.
		// иначе выполнить рекурсию.
		return wrapper(/*...*/);
	};
	
	// run the recursion here but be careful! you must provide initial depth and cursor (current level object).
	// there should be depth levels of nesting, pay attention to it.
	// Инициализировать рекурсию тут, будьте осторожны. необходимо передать все аргументы для правильной инициализации depth и cursor (объект текущего уровня).
	// Обратите внимания, на количество вложенных объектов, их должно быть равно depth.
	return wrapper(/*...*/);
};

// Execute 1 task.
// Вызов первого задания.
const target = wrap(getRandomInt(5, 10), '🙃');

// Log a result.
// Показать результат.
console.log(target);

/*** TASK 2 ***/
/*** ЗАДАНИЕ 2 ***/

/* returns true if value is smt like object structure and false if not */
/* вернуть true если value похож на объект, иначе вернуть false */
const isBase = (value) => { }

/* Do recursion */
/* Инициализировать рекурсию */
const unwrap = (target) => {
	return !isBase(target) 
		? (/*...*/) /* if condition true return target */ /* Если target удовлетворяет условию - вернуть target */
		: (/*...*/) /* otherwise do recursion */ /* Иначе - выполнить рекурсию */
};

// Execute 2 task.
// Вызов второго задания.
const value = unwrap(target);

// Log a result.
// Показать результат.
console.log(value);