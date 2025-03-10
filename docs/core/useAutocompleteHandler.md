---
outline: deep
---

# useAutocomplete

**useAutocomplete** - хук для модуля автозаполнения полей (таких как input/textarea).

## API

|       |                                                                                                            |
| ----: |:-----------------------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLInputElement \| HTMLTextAreaElement>(options: UseAutocompleteOptions): UseAutocomplete<T>` |

### `UseAutocompleteOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `findCallback`  | `(value: string) => string`   | Функция, вызываемая для нахождения дополняющего значения  | 

### `UseAutocomplete<T extends HTMLInputElement | HTMLTextAreaElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onInput`  | `FormEventHandler<T>`   | Обработчик на input  | 
