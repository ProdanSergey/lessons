### Error First Callback

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
1. Написать функцию `getCheckoutForUser` принимающую 2 аргумента:
  * `userId` - число.
  * `callback` - функция обратного вызов (error first callback), которая будет вызвана в следующих случаях:
    * если какой либо из запросом в БД вернет ошибку - `callback` возвращает эту ошибку.
    * если искомый `userId` отсутствует в таблице `user` - `callback` возвращает ошибку `User is not found`.
    * если искомый `userId` не имеет ни одного заказа в таблице `order` - `callback` возвращает ошибку `User has not added any orders yet`.
    * иначе - `callback` возвращает `checkouts` для искомого `userId`.
2. Вызвать функцию `getCheckoutForUser`:
 * в случае ошибки передать ее в `console.error`.
 * иначе передать `checkout` в `console.log`.

```javascript
  getCheckoutForUser(1, (err, checkout) => {
    if (err) {
      console.error(err);
    } else {
      console.log(checkout);
    }
  });

  // checkout example
  {
    id: 1, 
    name: "Bob",
    orders: [
      {
        id: 1, 
        userId: 1, 
        checkout: [
          { id: 1, name: "iPad" }, 
          { id: 6, name: "Sherlock holmes" }
        ],
      },
      {
        id: 2, 
        userId: 1,
        checkout: [
          { id: 3, name: "War and Peace" }
        ]
      }
    ]
  };
```

### Promise

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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = randomizeError();
      error ? reject(error): resolve(USERS);
    }, 2000);
  })
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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = randomizeError();
      error ? reject(error): resolve(PRODUCTS);
    }, 2000);
  })
};

// симулятор запроса в таблицу заказов.
const getOrders = (callback) => {
  const ORDERS = [
    {id: 1, userId: 1, checkout: [1, 6]},
    {id: 2, userId: 1, checkout: [3]},
    {id: 3, userId: 2, checkout: [2, 4]},
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = randomizeError();
      error ? reject(error): resolve(ORDERS);
    }, 2000);
  })
};
```

1. Написать функцию `getCheckoutForUserPromise` принимающую 1 аргумент:
  * `userId` - число.
    * если какой либо из запросом в БД вернет ошибку - `callback` бросить эту ошибку.
    * если искомый `userId` отсутствует в таблице `user` - `callback` бросить ошибку `User is not found`.
    * если искомый `userId` не имеет ни одного заказа в таблице `order` - `callback` бросить ошибку `User has not added any orders yet`.
    * иначе - `promise` завершается со значением `checkout` для искомого `userId`.
2. Вызвать функцию `getCheckoutForUserPromise`:
 * в случае отказа передать ошибку в `console.error`.
 * в случае успеха передать `checkout` в `console.log`.

```javascript
  getCheckoutForUserPromise(1).then(console.log).catch(console.error);

  // checkout example
  {
    id: 1, 
    name: "Bob",
    orders: [
      {
        id: 1, 
        userId: 1, 
        checkout: [
          { id: 1, name: "iPad" }, 
          { id: 6, name: "Sherlock holmes" }
        ],
      },
      {
        id: 2, 
        userId: 1,
        checkout: [
          { id: 3, name: "War and Peace" }
        ]
      }
    ]
  };
```