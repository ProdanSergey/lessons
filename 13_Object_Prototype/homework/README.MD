## Вспомогательные классы

1. Создать супер класс Account:
```javascript
function Account() {
	// public 
	this.email //тип String
  // public
	this.password // тип String
  // public 
	this.firstName // тип String
  // public
	this.lastName // тип String
}

// getter возвращает полное имя владельца аккаунта.
Account.prototype.fullName;
```
2. Создать класс AdminAccount наследуемый от Account:
```javascript
function AdminAccount() {
	// public 
	this.type = 'Admin'
  // public
	this.password = ['WRITE', 'READ']
}
```

3. Создать класс GuestAccount наследуемый от Account:
```javascript
function AdminAccount() {
	// public 
	this.type = 'Guest'
  // public
	this.password = ['READ']
}
```

## Авторизатор

Создать объект/класс/фабрику (на свое усмотрение) AUTH,

```javascript
const Authenticator = {
	// Экземпляр фабрики archiveFabric
	// Содержит по умолчанию AdminAccount со следующим набором данных 
	// # email: admin@example.com
	// # password: admin
	// # firstName: John
	// # lastName: Doe
	
	// private
	accounts,
	// Запрашивает у пользователя через prompt email (должен содержать знак '@') и password (должен быть длиной минимум в 5 символов), 
	// после чего ищет аккаунт по email в accounts, 
	// Если аккаунт не найден - спрашивает через confirm, хочет ли пользователя повторить ввод email, password.
	// Если пользователя нажал отмену, спрашивает через confirm хочет ли юзер зарегистрироваться.
	// Если нажал ok, регистрирует пользователя при помощи метода signUp().
	// Возвращает аккаунт.

	// public
	signIn()
	// Запрашивает у пользователя через prompt email (должен содержать знак '@' И не должен повторятся в массиве accounts) 
	// и password (должен быть длиной минимум в 5 символов), после чего сохраняет пользователя как экземпляр GuestAccount в массиве accounts. 
	// Возвращает аккаунт.
	
	// public
	signUp()
}
```

## Расширить функционал объекта APP (Object Advanced)

```javascript
const APP = {
	//...
	// экземпляр Account, по умолчанию null
	account: null,
	/* 
		При помощи authenticator.signIn() авторизует пользователя и сохраняет его аккаунт в account.

		Спрашивает пользователя о том, какую операцию с архивом он желает выполнить, до тех пор пока тот не пожелает завершить выполнение программы.

		Набор операций для account.permissions === ['READ', 'WRITE']

		['EXIT', 'ADD', 'DELETE', 'SHOW_ALL']

		Набор операций для account.permissions === ['READ']

		['EXIT', 'SHOW_ALL'].
	*/
	run()
}
```
