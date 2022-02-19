## Символы
1. Что такое символ?
2. Как создание символ?
3. `typeof` symbol.
4. Symbol !== String.
5. Символы объектов.
6. Перебор объектов с символами:
	* for...in
	* [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
7. Symbol.for()
8. Symbol.keyFor().
9. Системные (глобальные) символы.

## Итераторы

1. Итератор:
	* next()
	* value
	* done
2. Встроенные итерируемые объекты:
	* String
	* Array
3. Итерируемые объекты:
	* obj[Symbol.iterator]
	* цикл `for..of`
4. Бесконечные итераторы.
5. Spread.

## Генераторы

1. Генератор как фабрика итераторов.
	* `function*`
	*	возврат при помощи return
	* порождение при помощи yield
	* сообщение генератору при помощи generator.next(message)
	* возбуждение ошибки в генераторе при помощи generator.throw(error)
2. Генератор итерируемых объекты.
3. Бесконечные генераторы.
4. Композиция генераторов.

