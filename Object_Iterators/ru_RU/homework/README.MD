Дан объект с набором данных:

```javascript
const warehouse = {
	gadgets: [
		{id: 1, title: "Apple IPad Pro", price: 2000},
		{id: 2, title: "Lenovo IdeaPad", price: 1000},
	],
	sport: [
		{id: 1, title: "Fitness PRO", price: 500},
		{id: 2, title: "Nike x200", price: 400},
	],
	kids: [
		{id: 1, title: "Lego Builder", price: 100},
		{id: 2, title: "Pokemon X", price: 200},
	]
}
```

Сделать данный объект итерируемым, путем присвоения ему метода `[Symbol.iterator]()`, который в свою очередь реализует следующую логику перебора:

1. Каждая итерация в цикле for..of должна возвращать массив с 2 элементами:
	* название категории товаров
	* общая сумма всех товаров категории

```javascript
for (const iterator of warehouse) {
	console.log(iterator[0]) // gadgets ... sports ... kids
	console.log(iterator[1]) // 3000 ... 900 ... 300
}
```

2. Spread оператор добавляет в массив пары значений
	* название категории товаров
	* общая сумма всех товаров категории

```javascript
const categories = [...warehouse]; // [['gadgets', 3000], ['sports', 900], ['kids', 300]]
```
