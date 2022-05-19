## Форма авторизации

1. Дан тестовый объект с персональными данными пользователей.
  ```javascript
  const usersTable = {
    "example@example.com": {
      firstName: "John",
      lastName: "Doe",
      email: "example@example.com",
      password: "super_secret"
    },
    "demo@demo.com": {
      firstName: "Demo",
      lastName: "User",
      email: "demo@demo.com",
      password: "super_secret"
    },
  };
  ```
2. Создать/Найти форму для авторизации:
   * email - type[email]
   * password - type[text]
   * remember - type[checkbox]
3. При `submit` формы:
  * приложение ищет в тестовом объекте пользователя по введенному `email`
  * при совпадении, сравнивает введенный `password` с тем, что находится в тестовом объекте
4. Приложение выводит на страницу ошибку:
  * если указанный `email` не найдет в тестовом объекте
  * если указанный `password` не совпадает с тестовым
5. Если пользователь отметил в форме `remember` чекбокс:
  * приложение сохраняет его `email` в cookie `USER_AUTH`
6. Если пользователь уже имеет cookie `USER_AUTH` в браузере, приложение сразу переходит к `TodoList`. 

## TodoList

1. Когда пользователь успешно авторизовался:
  * вместо формы, приложение выводит на страницу персональный `TodoList`
2. `TodoList` может:
  * создавать заметки
  * удалять заметки
  * удалять все заметки
3. Каждая операция `TodoList` сохраняет состояние в `LocalStorage` по ключу, который находится в cookie `USER_AUTH`. Каждый пользователь имеет независимое хранилище в `LocalStorage`.