1. Дана форма (в index.html) / создать форму где:
	1. email - текстовое поле.
	2. password - текстовое поле.
	3. remember - чекбокс.
2. При вводе комбинации email/password система проверяет данные (где email: admin@example.com, а password: admin).
	1. При правдивости данных и нажатии на кнопку Login, форма меняется на секцию где:
		1. содержится информация о текущем пользователе системы (User: admin@example.com)
3. Если при логине юзер выбрал чекбокс remember. Вы должны запомнить email пользователя в cookie, которое будет автоматически удалено через 24 часа.
4. При повторном визите, и наличии в cookie пользователя, вместо формы на странице сразу показывается секция с информацией о пользователе. 
