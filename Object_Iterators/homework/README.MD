1. Создать объект итератор:
```javascript
{
	items: ['hello', 1, 0, null, 'world', 'baz', {foo: 'bar'}, Infinity, NaN]
}
```
* реализовать перебор нечетных элементов в `items`.

2. Создать объект итератор:
```javascript
{
	items: ['hello', 1, 0, null, 'world', 'baz', {foo: 'bar'}, Infinity, NaN]
}
```
* реализовать перебор четных элементов в `items`.

3. Создать генератор високосных годов, начиная с 1900 по указанный (по умолчанию текущий) год.

4. Создать генератор счетчиков с изменяемым интервалом. Начальное значение счетчика 0, интервала 1.
```javascript
console.log(counter.next()); // 0
console.log(counter.next()); // 1
console.log(counter.next(10)); // 10
console.log(counter.next()); // 20
console.log(counter.next()); // 30
console.log(counter.next(100)); // 300
```
5. Создать генератор четных чисел.
```javascript
console.log(evens.next()); // 2
console.log(evens.next()); // 4
console.log(evens.next()); // 6
```

6. Создать генератор последовательностей четных чисел (используя генератор из пункта 5). Размер последовательности от 1 до 20 элементов.
```javascript
console.log(randomEvens.next()); // [2, 4, 6]
console.log(randomEvens.next()); // [2, 4, 6, 8, 10]
console.log(randomEvens.next()); // [2]
```

