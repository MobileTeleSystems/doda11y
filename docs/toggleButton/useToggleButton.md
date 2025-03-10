---
outline: deep
---

# useToggleButton

**useToggleButton** - хук, предоставляющий доступность для кнопок-переключателей.

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseToggleButtonOptions<T>): UseToggleButton<T>` |

### `UseToggleButtonOptions<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isDisabled`  | `boolean`   | Признак, является ли кнопка заблокированной для интерактивного взаимодействия  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `onPress`  | `(e: KeyboardEvent<T>) => void`   | Обработчик нажатия на кнопку  | 
| `isPressed`  | `boolean`   | Признак, является ли кнопка в активированном состоянии  | 

### `UseToggleButtonUnionButtonProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-pressed`  | `boolean`   | Признак, тогл состояния кнопки  | 
| `role`  | `"button"`   | Роль кнопки  | 
| `aria-disabled`  | `boolean`   | Признак, указывающий на то, можно ли изменять или как-то взаимодействовать с элементом  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик нажатия (keyDown) на кнопку  | 
| `onKeyUp`  | `KeyboardEventHandler`   | Обработчик нажатия (keyUp) на кнопку  | 

### `UseToggleButton<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `toggleButtonProps`  | `UseToggleButtonUnionButtonProps<T>`   | Свойства, необходимые для доступности toggleButton  | 

## Пример

`useToggelButton`, аналогично `useButtonProps`, используется, когда кнопка создается не с помощью тега `<button>`.

Если ваш компонент - нативный `<button>`, то стоит просто передать в качестве параметра `useToggleButtonControl()` свойство `type` со значением `button`, чтобы скринридер понимал, что перед ним - кнопка-переключатель.

**ToggleButton.tsx**

```tsx
export const ToggleButton: FC<PropsWithChildren<ToggleButtonProps>> = ({ children, onClick, isPressed = false, isDisabled = false, ...props }) => {
	const { toggleButtonProps } = useToggleButton({ onPress: onClick, isPressed, isDisabled })

	return (
        <div {...props} {...toggleButtonProps} onClick={onClick}>
            {children}
        </div>
	)
}
```
