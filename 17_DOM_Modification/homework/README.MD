Написать скрипт для воссоздания при помощи JS - `<body/>` из статического файла index.html в ДЗ-14.

Обязательные требования:

1. Создать фабрику для создания элементов:
	1. Должна создавать любые валидные HTML элементы.
	2. Должна уметь назначать созданным элементам любые аттрибуты.
	3. Должна уметь назначать детей созданным элементам:
		1. типа строка.
		2. типа HTML строка.
		3. типа HTMLElement.
2. Воссоздать в точности структуру `<body/>` тега HTML файла со всеми аттрибутами.
3. Реализовать все пункты из ДЗ-14, не используя селекторы или траверс по элементам.
4. Разрешается найти только `<div id='root' />` элемент при помощи `getElementById`.
