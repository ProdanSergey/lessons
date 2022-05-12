Данн следующий набор функций:
  ```javascript
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

  // симулятор запроса в таблицу продуктов.
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

  // симулятор запроса в таблицу заказов.
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

## Error First Callback 
1. Написать функцию `getCheckoutsForUser` принимающую 2 аргумента::
	* `userId` - число.
	* callback` -  функция обратного вызов (error first callback), которая будет вызвана в следующих случаях:
		1. Если какой либо из запросом в БД вернет ошибку - callback возвращает эту ошибку.
		2. Если искомый userId отсутствует в таблице юзеров -  callback возвращает ошибку `User is not found`.
		3. Если искомый userId не имеет ни одного заказа в таблице заказов - callback возвращает ошибку `User has not added any orders yet`.
		4. Иначе - callback возвращает массив заказов для искомого userId, где в каждом заказе, ключ checkout будет содержать вместо массива c id.конкретного продукта - запись из таблицы продуктов про этому id. Например: `[{ id: 3, userId: 2, checkout: [{ id: 2, name: 'Google Pixel'}] }]`.
2. Вызвать функцию `getCheckoutsForUser`:
	* В случае ошибки передать ее в `console.error`.
	* Иначе передать искомые checkouts в `console.log`.

## Promise
1. Отдельно промисифицировать `getUsers`, `getProducts`, `getOrders`.
2. Написать функцию `getCheckoutsForUserAsPromise` принимающую 1 аргумент:
	* `userId` - число.
3. `getCheckoutsForUserAsPromise` возвращает цепочку промисов реализующую задачу из пункта 2.
4. Вызвать функцию `getCheckoutsForUserAsPromise`:
	1. В then передать `console.log`.
	2. В catch передать `console.error`.
