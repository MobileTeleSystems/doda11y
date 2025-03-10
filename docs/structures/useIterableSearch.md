---
outline: deep
---

# useIterableSearch

**useIterableSearch** - хук, предоставляющий поиск по итерируемым коллекциям, таким как [ItemTree](/structures/itemTree) или [ItemList](/structures/itemList).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `(options?: UseIterableSearchOptions): UseIterableSearch` |

### `UseIterableSearchOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `clearAfterDelay`  | `boolean`   | Очищать поисковой ввод после задержки  | 
| `delay`  | `number`   | Время задержки в мс между окончанием ввода и вызовом  | 

### `UseIterableSearch`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `setSearched`  | `(value: string \| ((prev: string) => string)) => void`   | Функция изменения поискового запроса  | 
| `searched`  | `string`   | Поисковой запрос  |
