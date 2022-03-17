1. Создать генератор високосных годов, начиная с 1900 по указанный (по умолчанию текущий) год.

```javascript
const leapYear =  leapYears(2001);

console.log(leapYear.next()); // {value: 1904, done: false}
console.log(leapYear.next()); // {value: 1908, done: false}
console.log(leapYear.next()); // {value: 1912, done: false}
console.log(leapYear.next()); // {value: 2000, done: true}
```

2. Создать генератор-счетчик с динамическим интервалом. Начальное значение 0, интервал 1.
```javascript

const count =  counter();

console.log(count.next()); // {value: 0, done: false}
console.log(count.next()); // {value: 1, done: false}
console.log(count.next(10)); // {value: 11, done: false}
console.log(count.next()); // {value: 21, done: false}
console.log(count.next()); // {value: 31, done: false}
console.log(count.next(100)); // {value: 131, done: false}
```
3. Создать генератор четных чисел.
```javascript
const even =  evens();

console.log(even.next()); // {value: 2, done: false}
console.log(even.next()); // {value: 4, done: false}
console.log(even.next()); // {value: 6, done: false}
```

4. Создать генератор случайных последовательностей четных чисел (используя генератор из пункта 5). Размер последовательности от 1 до 20 элементов.
```javascript
const evens =  randomEvens();

console.log(evens.next()); // {value: [2, 4, 6], done: false}
console.log(evens.next()); // {value: [2, 4, 6, 8, 10], done: false}
console.log(evens.next()); // {value: [2], done: false}
```

