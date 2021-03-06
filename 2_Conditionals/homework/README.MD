1. Запросить у пользователя имя - (например: John).
2. Запросить у пользователя фамилию - (например: Doe). 
3. Запросить у пользователя отдельно, число/месяц/год рождения - (например: 12, 11, 1988) - (каждое значение должно быть записано в отдельную переменную и явно приведено к числу).
4. Вычислить кто пользователь по гороскопу (использовать таблицу 1).
5. Вычислить родился ли пользователь в високосный год (использовать алгоритм 1).
6. Вывести на страницу в браузере результирующую строку следующего содержания:

   ```
   // Если юзер родился в високосный год
   User Bio: John Doe, 33 years old (leap year), Scorpio ♏;

   // ИНАЧЕ
   // Обратите внимание, не должно быть дополнительных пробелов.
   User Bio: John Doe, 33 years old, Scorpio ♏;
   ```

> * Для расчета возраста используем константу равную числу 2021. Не обращаем внимание на погрешность.

Таблица 1.

| From day     | Until day    | Symbol | Astrological Zodiac symbol name |
| -------------- | -------------- | -------- | --------------------------------- |
| January 20   | February 18  | ♒     | Aquarius                        |
| February 19  | March 20     | ♓     | Pisces                          |
| March 21     | April 19     | ♈     | Aries                           |
| April 20     | May 20       | ♉     | Taurus                          |
| May 21       | June 20      | ♊     | Gemini                          |
| June 21      | July 22      | ♋     | Cancer                          |
| July 23      | August 22    | ♌     | Leo                             |
| August 23    | September 22 | ♍     | Virgo                           |
| September 23 | October 22   | ♎     | Libra                           |
| October 23   | November 21  | ♏     | Scorpio                         |
| November 22  | December 21  | ♐     | Sagittarius                     |
| December 22  | January 19   | ♑     | Capricorn                       |

Алгоритм 1. [ссылка](https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4)

```
1. год, который делится на 400 без остатка, — високосный;
2. остальные годы, которые делятся без остатка на 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
3. остальные годы, которые делятся без остатка на 4, — високосные.
4. все остальные не високосные
```

Или другими словами:

```
1. год, который делится на 400 без остатка, — високосный;
2. год, который делится на 100 с остатком и которые делится без остатка на 4, — високосный.
4. иначе невисокосный;
```
Примеры високосных лет:

```
1764, 1768, 1772, 1776, 1780, 1784, 1788, 1792, 1796, 1804, 1808, 1904, 1912, 1916, 1920, 1988, 1992, 1996, 2000, 2004, 2016, 2020, 2044, 2048, 2052, 2096, 2104, 2116
```