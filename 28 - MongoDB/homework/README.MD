1. Настроить node.js проект.
2. Добавить в проект typescript.
3. Добавить в проект express.
4. Добавить в проект mongoose.
5. Настроить подключение к любой тестовой MondoDB базе данных.
6. Написать API контроллеры для следующих ресурсов:
   1. `/categories`.
   2. `/categories/:categoryId/posts`.
   3. `/categories/:categoryId/posts/:postId/comments`.
7. Для каждого контроллера реализовать методы:
	1. create
	2. update
	3. find
	4. delete
	5. list
8. Реализовать следующие модели:
   1. `category`:
      1. `name`: string, required.
   2. `post`:
      1. `title`: string, max length 60, required.
      2. `body`: string, max length 250.
      3. `category`: parent category.
      4. `userId`: authorized user id.
   3. `comment`:
      1. `body`: string, max length 120, required.
      2. `userId`: authorized user id.
9. Реализовать следующие связи:
   1. Одна `category` может иметь много `post`.
   2. Один `post` может меть много `comment`.
> Где userId берем из req.headers.authorization по аналогии с классной работой.
