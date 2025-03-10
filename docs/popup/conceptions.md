---
outline: deep
---

# Popup

![An image](/popup.png)

**Popup** - элемент, всплывающий в следствие какого-либо действия.

## A11Y

Обеспечение веб-доступности для popup элементом обеспечивается за счет передачи правильной роли, а также обеспечения правильного взаимодействия с клавиатурой для триггера.

Открытие Popup должно происходить за счет стрелочек, кнопки или на нажатие кнопок `Enter` или `Space` (в зависимости от реализации).

Закрытие же, в зависимости от реализации, может происходить на `Escape` или другие триггеры.

## Пример

Для реализации Popup, соответствующих условиям веб-доступности, необходимо использовать хуки `useVisibility()`, `usePopupTriggerProps()` и `usePopup()`.

**UserMenu.tsx**

```tsx
const UserMenu: FC = () => {
	const id = useId()

	const { open, close, isOpen } = useVisibility()
	const { triggerProps } = usePopupTriggerProps<HTMLButtonElement>({ popupId: id, isOpen, type: 'menu' })
	const { onKeyDown } = usePopupTriggerControl({ onFocusFirst: () => console.log('focus first param'), onFocusLast: () => console.log('focus last param'), isOpen, onOpen: open, closeOnEsc: true, onClose: close })

	return (
        <>
            <button onKeyDown={onKeyDown} {...triggerProps}>{isOpen ? 'Закрыть меню' : 'Открыть меню'}</button>
            {isOpen && (
                <menu id={id}>
                    <h2>Hello, user!</h2>
                </menu>
            )}
        </>
	)
}
```

## Особенности

- Поддержка состояния для управления popup
- Поддержка необходимых `aria` аттрибутов для доступности
- Поддержка управления с клавиатуры
