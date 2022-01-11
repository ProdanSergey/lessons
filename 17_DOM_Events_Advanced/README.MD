## События

1. Что такое фаза события.
2. Три фазы события:
   1. Погружение - `Event.CAPTURING_PHASE` (1).
   2. Достижение цели - `Event.AT_TARGET` (2).
   3. Всплытие - `Event.BUBBLING_PHASE` (3).

### Всплытие

1. `event.eventPhase === 3`.
2. `event.target`.
3. `event.currentTarget`.
4. `event.bubbles`.
5. `event.stopPropagation()` - запретить всплытие по вертикали.
6. `event.stopImmediatePropagation()` - запретить всплытие по горизонтали и вертикали.

### Погружение

1. `addEventListener(type, callback, true)`.
2. `addEventListener(type, callback, { capture: true })`.
3. `eventPhase === 1`.
4. `event.target`.
5. `event.currentTarget`.

### Действие по умолчанию

1. Что такое действие по умолчанию.
2. `event.preventDefault()`.
3. `event.cancelable`.
4. `return false`. 
5. Пассивные слушатели.

### Делегирование события

1. Что такое делегирование события.

### Генерация события

1. Конструкторы событий.
2. `element.dispatchEvent(type, [options])`.
3. Пользовательские события.
4. Действия по умолчанию для пользовательских событий.
