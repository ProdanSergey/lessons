## Async/Await

1. Асинхронная функция.
2. Что возвращает асинхронная функция?
3. Примеры: 
  * sleep()
  * getArtist()
  * ImageReader()
3. Асинхронные методы.
4. Асинхронные циклы:
  * array.forEach(), array.map()
  * for...of


[Taming the async beast with es7](https://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html)

5. for await of
6. Примеры:
  * ReadLoudly

> "a scenario where I have an array of promises" - it's too late when you already have all the promises (a fixed number of them) in an array; in that case, you should not use for await … of. Asynchronous iteration is only useful where the promises are created one after another, e.g. when it depends on the result of the previous item, and it allows you to start processing the first without seeing the end. –
> [Bergi](//https://stackoverflow.com/users/1048572/bergi)

[Some useful stackoverflow post](https://stackoverflow.com/a/67446252)
[JavaScript async iterators](https://www.nodejsdesignpatterns.com/blog/javascript-async-iterators/)
[ES2018: asynchronous iteration][https://2ality.com/2016/10/asynchronous-iteration.html]