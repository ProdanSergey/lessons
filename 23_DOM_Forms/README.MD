## HTMLFormElement

### Свойства формы, полезные аттрибуты, ссылки

1. form.name
2. document.forms
3. form.elements

### События формы

5. submit
6. reset

### Методы формы

1. form.submit()
2. form.reset()

### Элементы формы

1. input
2. textarea
3. select/option
4. fieldset

### Свойства элемента

1. element.name
2. element.form
3. element.value
4. element.valueAsNumber
5. element.placeholder
6. element.checked
7. element.defaultChecked
8. element.disabled
9. element.autocomplete
10. element.readonly
11. option.selected
12. option.defaultSelected

### События элемента

1. input
2. change
3. focus/blur
4. focusin/focusout

### Методы элемента

8. element.focus()
9. element.blur()

## Constraint API

### Свойства формы

1. novalidate

### Методы формы

1. form.reportValidity()

### Поддержка элементов

1. `HTMLButtonElement`
2. `HTMLFieldSetElement`
3. `HTMLInputElement`
4. `HTMLSelectElement`
5. `HTMLTextAreaElement`

### Свойства элемента

1. validity
2. validationMessage
3. willValidate

### Свойства валидаторы

1. input[type="password, search, tel, text, url"].maxlength
2. input[type="password, search, tel, text, url"].minlength
3. input[type="number"].max
4. input[type="number"].min
5. input[type="password, text, tel"].pattern
6. input.required

### События элемента

1. invalid

### Методы элемента

1. element.checkValidity()
2. element.setCustomValidity(message)

## Сериализация

1. Перебор значений form.elements
2. FormData
