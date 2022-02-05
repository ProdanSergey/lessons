## Attributes

1. DOM Element - как объект:
   1. Тип определяет наличие свойств.
   2. Чтение свойств.
   3. Запись свойств.
   4. Добавление свойств.
2. Стандартные и не стандартные атрибуты.
3. Чтение/запись/удаление атрибутов:
   1. element.attributes.
   2. element.getAttributeNames().
   3. element.hasAttribute(name).
   4. element.getAttribute(name).
   5. element.setAttribute(name, value).
   6. element.removeAttribute(name).
4. DATA атрибуты.

## Styles

1. Получить значение inline стиля.
2. Изменить значение inline стиля.
3. Изменить значение составного inline стиля.
4. Вычисление значения css свойства для элемента:
   1. getComputedStyle(element, [pseudo]).
5. Итератор по стилям.
6. element.cssText / element.setAttribute('style', 'css').

## Classes

1. Свойство className.
2. Объект classList:
   1. element.classList.add(className).
   2. element.classList.remove(className).
   3. element.classList.toggle(className).
   4. element.classList.contains(className).
   5. Итератор по классам.
