---
outline: deep
---

# useMenuButton

**useMenuButton** - хук, предоставляющий доступность для кнопки меню.

## API

|       |                                                  |
| ----: |:-------------------------------------------------|
| Type: | `(options: UseMenuButtonOptions): UseMenuButton` |

### `UseMenuButtonOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isOpen`  | `any`   | Признак, открыто ли меню  | 
| `onOpen`  | `() => void`   | Обработчик на открытие меню  | 
| `onFocusFirst`  | `() => void`   | Обработчик на фокусирование первого элемента меню  | 
| `onFocusLast`  | `() => void`   | Обработчик на фокусирование последнего элемента  | 
| `popupType`  | `"menu" \| "listbox"`   | Свойство, обозначающее тип popup (`listbox` или `menu`)  | 
| `menuId`  | `string`   | Свойство, обозначающее id элемента меню  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseMenuButtonUnionButtonProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `role`  | `"button"`   | Роль button  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseMenuButton<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `buttonProps`  | `UseMenuButtonUnionButtonProps<T>`   | Свойства, необходимые для доступности button  | 

## Пример

`useMenuButtonProps` используется для обеспечения веб-доступности `Button`, открывающей меню. 

**Menu.tsx**

```tsx
export const Menu: FC = () => {
	const { isOpen, open } = useVisibility()
	const { buttonProps } = useMenuButtonProps({ isOpen, onOpen: open, onFocusFirst: () => {}, onFocusLast: () => {}, });
	
    return (
        <div>
          <button {...buttonProps}>Открыть меню</button>
          // Имплементация меню
		</div>
    )
)
```
