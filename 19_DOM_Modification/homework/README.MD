1. Реализовать функционал компонента [Accordion](https://mui.com/material-ui/react-accordion/#basic-accordion).

* Создает весь HTML динамически.
* Принимает коллекцию объектов в виде массива.

```javascript
const items = [
  { title: "Accordion 1", body: "..." },
  { title: "Accordion 1", body: "..." }
];
```

* Для каждого объекта на странице браузера отображает компонент `AccordionItem` с кнопкой `title`при нажатии которой появляется/скрывается текст`body`.
* По умолчанию первый объект в массиве всегда появляется на странице с видимым текстом.
* Реализовать возможность управлять аккордионом:
  * показывать текст по порядковому номеру `AccordionItem`
  * скрывать текст по порядковому номеру `AccordionItem`

Пример:

```javascript
const accordion = new Accordion({ items });

accordion.open(1);
accordion.open(2);

accordion.close(1);
accordion.close(2);
```
