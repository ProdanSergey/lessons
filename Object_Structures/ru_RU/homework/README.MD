Написать функцию difference(from, to).

1. from - UTC string.
2. to - UTC string.
3. возвращает объект типа Difference с полями:

* ms - число, разница между from и to в миллисекундах.
* s - число, разница между from и to в секундах.
* m - число, разница между from и to в минутах.
* h - число, разница между from и to в часах.
* d - число, разница между from и to в днях.
* M - число, разница между from и to в месяцах.
* y - число, разница между from и to в годах.

```javascript
const MS_IN_A_DAY = 1000 * 60 * 60 * 24;
const MS_IN_A_HOUR = 1000 * 60 * 60;
const MS_IN_A_MINUTE = 1000 * 60;
const MS_IN_A_SECOND = 1000;
```
