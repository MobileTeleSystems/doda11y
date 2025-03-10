---
outline: deep
---

# useActiveDescendant

**useActiveDescendant** - хук для взаимодействия с фокусом элементов с помощью `aria-activedescendant`.

## API

|       |                                                    |
| ----: |:---------------------------------------------------|
| Type: | `(options?: UseActiveDescendantOptions): UseActiveDescendant` |

### `UseActiveDescendantOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isFocusOnActive`  | `boolean`   | Признак, означающий, должен ли меняться фокус на активный элемент  | 

### `UseActiveDescendant`

| Имя               | Тип                                 | Описание    |
|:-------------------|:------------------------------------|:-----------|
| `activeDescendant`  | `string \| undefined`                           | Свойство, обозначающее активный элемент  | 
| `setActiveDescendantId`  | `(id: string \| undefined) => void` | Метод, изменяющий активный элемент  | 
