1. Скопировать каталог з ДЗ-6 в каталог ДЗ-7.
2. Добавить !!!ОДНУ функцию из 3 на выбор:

   1. Спросить у пользователя через `prompt()` максимально допустимый возраст пользователей которые будут ему показаны из архива. Например:

      ```
      const USERS = [
        		{firstName: 'John', yearOfBirth: 1990},
        		{firstName: 'Peter', yearOfBirth: 1980},
        		{firstName: 'Emmy', yearOfBirth: 1989}
      ];

      const showFilteredUsers = function() {
        		if (!USERS.length) {
        			return...
        		}

        const maxYear = getNumberInput('Enter max birth year of a user', 1990, CURRENT_YEAR);

        // console.log() каждого юзера чей год рождения не больше чем указан в maxYear;
      }
      ```
   2. Спросить у пользователя через `prompt()` имя пользователя которого он хочет найти в архиве. Например:

      ```
        	const USERS = [
        		{firstName: 'John', yearOfBirth: 1990},
        		{firstName: 'Peter', yearOfBirth: 1980},
        		{firstName: 'Emmy', yearOfBirth: 1989}
        	];

        	const showUserByName = function() {
        		if (!USERS.length) {
        			return...
        		}

        		const userName = getStringInput('Enter user name to search');

        		// const user = find in USERS array;

        		if (user) {
        			console.log('Here is the user you've been looking for', user);
        		} else {
        			console.log('There is not such user');
        		}
        	}
      ```
   3. Показать средний возраст всех пользователей в архиве Например:

      ```
      	const USERS = [
      		{firstName: 'John', yearOfBirth: 1990},
      		{firstName: 'Peter', yearOfBirth: 1980},
      		{firstName: 'Emmy', yearOfBirth: 1989}
      	];

      	const showUserByName = function() {
      		if (!USERS.length) {
      			console.log('No users');
      		}

      		const approxAge = find approxAge for all users...

      		console.log('All users approximate age is', approxAge);
      	}
      ```
3. Рассчитать age (возраст каждого юзера в массиве USERS) при помощи объекта Date. (Убираем переменную CURRENT_YEAR);