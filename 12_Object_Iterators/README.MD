## Символы
1. Что такое символ?
2. `typeof` symbol.
3. Symbol !== String.
4. Символы объектов.
5. Перебор объектов с символами:
	* for...in
	* [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
8. Глобальный реестр символов:
	* `Symbol.for()`.
	* `Symbol.keyFor()`.
9. Широкоизвестные сиволы:
	* Symbol.toPrimitive
	* Symbol.toStringTag
	* Symbol.isConcatSpreadable

## Итераторы

1. Протокол итератора:
	* next()
	* value
	* done
2. Встроенные итерируемые объекты:
	* String
	* Array
	* Map
	* Set
3. Протокол итерируемого объекта:
	* obj[Symbol.iterator]
	* цикл `for..of`
4. Бесконечные итераторы.
5. Spread.

## Генераторы

1. Генератор как фабрика итераторов.
	* `function*` синтаксис
	*	возврат при помощи return
	* порождение при помощи yield
	* исключение при помощи throw
	* сообщение генератору при помощи generator.next(message)
	* возбуждение ошибки в генераторе при помощи generator.throw(error)
2. Бесконечные генераторы.
3. Композиция генераторов.

