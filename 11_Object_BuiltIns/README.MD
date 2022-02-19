## Date

1. Получить текущее время:
   * new Date().
   * Date.now().
2. Получить заданное время:
   * new Date(ms).
   * new Date(year, month, date, hours, minutes, seconds, ms).
	 * new Date(string).
3. Получение конкретного значения. Год, месяц, день, час, минута, секунда, мс, день недели.
4. Установка конкретного значения. Год, месяц, день, час, минута, секунда, мс.
5. getTime() - Получение timestamp, временной метки.
6. setTime() - Установка timestamp, временной метки.
7. getTimezoneOffset() - Получение разницы между временными поясами.
8. Автоисправление даты.
9. форматирование:
	* iso
	* utc
	* gmt (deprecated)
	* string/local string

## Map

1. Map - как объект, где ключом может быть другой объект.
2. Сравнение ключей в Map (sameValueZero).
3. Порядок ключей в Map.
4. Размер Map.
5. Object to Map. Map to Object.
6. Методы итерации Map.

## Set

1. Set - как множество уникальных значений.
2. Сравнение значений в Set (sameValueZero).
3. Array to Set. Set to Array.
4. Методы итерации Set.

## WeakMap, WeakSet

1. WeakMap, WeakSet - как способ оптимизировать затраты памяти на большие коллекции.
2. Ключи - только объекты.
3. WeakMap, WeakSet - "живые" коллекции.
4. Size отсутствует.
