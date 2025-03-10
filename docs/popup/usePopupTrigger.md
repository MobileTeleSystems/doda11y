---
outline: deep
---

# usePopupTrigger

**usePopupTrigger** - хук, предоставляющий свойства для триггера Popup.

## API

|       |                                                                                |
| ----: |:-------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UsePopupTriggerOptions): UsePopupTrigger<T>` |

### `UsePopupTriggerOptions<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `type`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `isOpen`  | `any`   | Признак, определяющий, открыт ли popup  | 
| `popupId`  | `string`   | id popup  | 
| `isOpenOnEnterOrSpace`  | `boolean`   | Признак, определяющий, нужно ли открывать popup на нажатие `Enter` или `Space`  | 
| `isFocusFirstOnEnterOrSpace`  | `boolean`   | Признак, определяющий, нужно ли фокусироваться на первом элементе при нажатии `Enter` или `Space`  | 
| `closeOnEsc`  | `boolean`   | Признак, определяющий, нужно ли закрывать popup на нажатие `Esc`  | 
| `preventDefault`  | `boolean`   | Признак, определяющий, нужно предотвращать поведение по умолчанию  | 
| `onOpen`  | `() => void`   | Обработчик на открытие  | 
| `onClose`  | `() => void`   | Обработчик на закрытие  | 
| `onFocusFirst`  | `() => void`   | Обработчик на фокус первого элемента popup  | 
| `onFocusLast`  | `() => void`   | Обработчик на фокус последнего элемента popup  | 

### `UsePopupTriggerUnionTriggerProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UsePopupTrigger<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `triggerProps`  | `UsePopupTriggerUnionTriggerProps<T>`   | Свойства, необходимые для доступности trigger popup  | 

## Пример

`usePopupTrigger()` обеспечивает доступность для триггера popup элемента.

**UserMenu.tsx**

```tsx{5,10}
const UserMenu: FC = () => {
	const id = useId()

	const { open, close, isOpen } = useVisibility()
	const { triggerProps } = usePopupTrigger<HTMLButtonElement>({ popupId: id, isOpen, type: 'menu', onFocusFirst: () => console.log('focus first param'), onFocusLast: () => console.log('focus last param'), isOpen, onOpen: open, closeOnEsc: true, onClose: close })

	return (
			<>
				<button {...triggerProps}>{isOpen ? 'Закрыть меню' : 'Открыть меню'}</button>
				{isOpen && (
						<menu id={id}>
							<h2>Hello, user!</h2>
						</menu>
				)}
			</>
	)
}
```
