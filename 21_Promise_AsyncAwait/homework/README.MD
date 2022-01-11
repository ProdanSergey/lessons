1. Данн следующий набор функций:
   ```
   // симулятор ошибок
   const randomizeError = () => {
   	const random = RANDOM.integer(1, 100);

   	if (random > 90) {
   		return new Error('Bad Request');
   	}

   	return null;
   };

   // симулятор запроса в БД в таблицу юзеров.
   const getUsers = (callback) => {
   	const USERS = [
   		{id: 1, name: 'Bob'},
   		{id: 2, name: 'Andy'},
   		{id: 3, name: 'John'},
   	];

   	setTimeout(() => {
   		callback(randomizeError(), USERS);
   	}, 2000);
   };

   // симулятор запроса в БД в таблицу продуктов.
   const getProducts = (callback) => {
   	const PRODUCTS = [
   		{id: 1, name: 'iPad'},
   		{id: 2, name: 'Google Pixel'},
   		{id: 3, name: 'War and Peace'},
   		{id: 4, name: 'iPad'},
   		{id: 5, name: 'Kaizen'},
   		{id: 6, name: 'Sherlock Holmes'},
   	];

   	setTimeout(() => {
   		callback(randomizeError(), PRODUCTS);
   	}, 2000);
   };

   // симулятор запроса в БД в таблицу заказов.
   const getOrders = (callback) => {
   	const ORDERS = [
   		{id: 1, userId: 1, checkout: [1, 6]},
   		{id: 2, userId: 1, checkout: [3]},
   		{id: 3, userId: 2, checkout: [2, 4]},
   	];

   	setTimeout(() => {
   		callback(randomizeError(), ORDERS);
   	}, 2000);
   };
   ```
2. Написать функцию `getCheckoutsForUser` принимающую 2 аргумента: 1 - userId, 2 - callback:
	1. Где userId это число.
	2. Где callback - это функция обратного вызов (error first callback), которая будет вызвана в следующих случаях.
		1. Если какой либо из запросом в БД вернет ошибку - callback возвращает эту ошибку.
		2. Если искомый userId отсутствует в таблице юзеров -  callback возвращает ошибку `User is not found`.
		3. Если искомый userId не имеет ни одного заказа в таблице заказов - callback возвращает ошибку `User has not added any orders yet`.
		4. Иначе - callback возвращает массив заказов для искомого userId, где в каждом заказе, ключ checkout будет содержать вместо массива c id.конкретного продукта - запись из таблицы продуктов про этому id. Например: `[{ id: 3, userId: 2, checkout: [{ id: 2, name: 'Google Pixel'}] }]`.
3. Вызвать функцию `getCheckoutsForUser`:
	1. В случае ошибки передать ее в `console.error`.
	2. Иначе передать искомые checkouts в `console.log`.
4. Отдельно промисифицировать все селекторы в БД.
5. Написать функцию `getCheckoutsForUserAsPromise` принимающую 1 аргумент: 1 - userId:
	1. Где userId это число.
	2. Возвращает цепочку промисов реализующую задачу функции `getCheckoutsForUser` из пункта 2.
6. Вызвать функцию `getCheckoutsForUserAsPromise`:
	1. В then передать `console.log`.
	2. В catch передать `console.error`.
7. Написать функцию `getCheckoutsForUserAsPseudoSync` принимающую 1 аргумент: 1 - userId:
	1. Где userId это число.
	2. Используя async/await написать псевдо-синхронный реализующий задачу функции `getCheckoutsForUser` из пункта 2.
8. Вызвать функцию `getCheckoutsForUserAsPseudoSync`:
	1. В then передать `console.log`.
	2. В catch передать `console.error`.
