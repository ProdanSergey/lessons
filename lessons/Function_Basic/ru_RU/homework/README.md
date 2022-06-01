1. Создать функцию-фабрику
   1. принимает следующие аргументы: почтовый индекс, город, страна, улица, номер дома, дробь (необязательный).
   2. возвращает объект типа Address с преобразованными полями:
      1. почтовый индекс - строка.
      2. город - строка, нижний регистр.
      3. страна - строка, нижний регистр.
      4. улица - строка, нижний регистр.
      5. номер дома - целое число.
      6. дробь - целое число (если есть).
2. Создать функцию форматирования:
   1. принимает объект типа Address.
   2. каждое поле Address преобразовать к строке с большой буквы.
   3. возвращает строку формата: `<street> St, <number> @ <postcode>, <city>, <country>`.
3. Создать функцию-парсер:
   1. принимает строку формата: `<street> St, <number> @ <postcode>, <city>, <country>`.
   2. используя функцию-фабрику из пункта 1 возвращает объект типа Address.

> Для реализации перечисленных функций можно и НУЖНО создавать и использовать необходимые функции самостоятельно.

### Пример использования

```
const address = getAddress('02000', 'Kyiv', 'Ukraine', 'Khreshatyk', 17);

console.log(address.city) // -> 'kyiv';
console.log(address.buildingNumber) // -> 17;

const stringAddress = addressToString(point);

console.log(stringAddress) // -> 'Khreschatyk St, 17 @ 02000, Kyiv, Ukraine';

const parsedAddress = stringToAddress(stringAddress);

console.log(parsedAddress.city) // -> 'kyiv';
console.log(parsedAddress.buildingNumber) // -> 17

```
