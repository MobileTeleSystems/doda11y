---
outline: deep
---

# Switch

![An image](/switch.png)

**Switch (переключатель)** — это элемент интерфейса, который позволяет пользователю включать или выключать определенную функцию или опцию. Визуально switch обычно представлен в виде ползунка, который можно перемещать между двумя состояниями: включено и выключено. Он используется для бинарного выбора, где возможны только два состояния.

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)

## Пример

**Switch.tsx**

```tsx
export const Switch: FC<PropsWithChildren> = ({ children, checked, onToggle, ...props }) => {
	const { switchProps } = useSwitch({ onToggle, checked })

	return (
        <div {...switchProps} {...props} onClick={onToggle}>
	        {children}
        </div>
	)
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
- Возможность активации кнопки с помощью нажатия `enter` и `space`
