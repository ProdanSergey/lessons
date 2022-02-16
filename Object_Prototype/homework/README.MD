1. Создать супер класс Account:
   1. реализовать следующие поля:
    * public email - тип String
    * public password - тип String
    * public firstName - тип String
    * public lastName - тип String
   2. реализовать следующий прототип:
    * get fullName() - возвращает полное имя владельца аккаунта.
2. Создать класс AdminAccount наследуемый от Account:
   1. реализовать следующие поля:
    * public type: `'Admin'`
    * public permissions: `['WRITE', 'READ']`
3. Создать класс GuestAccount наследуемый от Account.
   1. реализовать следующие поля:
    * public type: `'Guest'`
    * public permissions: `['READ']`
4. Создать объект/класс/фабрику (на свое усмотрение) AUTH,
   1. реализовать следующие поля:
    * private accounts - экземпляр фабрики archiveFabric

```
Добавить AdminAccount по умолчанию со следующим набором данных 

# email: admin@example.com
# password: admin
# firstName: John
# lastName: Doe
```

2. реализовать следующие методы:
* private signIn()

```
# Запрашивает у пользователя через prompt email (должен содержать знак '@') и password (должен быть длиной минимум в 5 символов), после чего ищет аккаунт по email в accounts, 

# Если аккаунт не найден - спрашивает через confirm, хочет ли пользователя повторить ввод email, password.

# Если пользователя нажал отмену, спрашивает через confirm хочет ли юзер зарегистрироваться.

# Если нажал ok, регистрирует пользователя при помощи метода signUp().

# Возвращает аккаунт.
```
* signUp()

```
# Запрашивает у пользователя через prompt email (должен содержать знак '@' И не должен повторятся в массиве accounts) и password (должен быть длиной минимум в 5 символов), после чего сохраняет пользователя как экземпляр GuestAccount в массиве accounts. 

# Возвращает аккаунт.
```
5. Расширить функционал объекта APP (Object Advanced)

```javascript
const APP = {
	//...
	// экземпляр Account, по умолчанию null
	account,
	/* 
		При помощи AUTH.signIn() авторизует пользователя и сохраняет его аккаунт в account.

		Спрашивает пользователя о том, какую операцию с архивом он желает выполнить, до тех пор пока тот не пожелает завершить выполнение программы.

		Набор операций для account.permissions === ['READ', 'WRITE']

		['EXIT', 'ADD', 'DELETE', 'SHOW_ALL']

		Набор операций для account.permissions === ['READ']

		['EXIT', 'SHOW_ALL'].
	*/
	run()
}
```
