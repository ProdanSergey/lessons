## Attributes

1. HTMLElement:
   * Дочерние типы
   * Чтение свойств
   * Изменение свойств
   * Добавление свойств
   * Свойства-обработчики событий
2. Стандартные и пользовательские атрибуты:
   * element.attributes
   * element.getAttributeNames()
   * element.hasAttribute(name)
   * element.getAttribute(name)
   * element.setAttribute(name, value)
   * element.removeAttribute(name)
3. data-атрибуты

## Styles

1. Inline стили:
  * чтение стиля
  * изменение стиля
2. Вычисление стилей для элемента `getComputedStyle(element, [pseudo])`.
3. Изменение группы стилей:
  * element.cssText
  * element.setAttribute('style', 'css')
4. Итератор

## Classes

1. свойство className
2. интерфейс DOMTokeList:
   1. element.classList.add(className)
   2. element.classList.remove(className)
   3. element.classList.toggle(className)
   4. element.classList.contains(className)
3. Итератор
