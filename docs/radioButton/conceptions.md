---
outline: deep
---

# Radio button

![An image](/radio.png)

**Radio button (радиокнопка)** — это элемент интерфейса, который позволяет пользователю выбрать одну из нескольких взаимно исключающих опций. Радиокнопки обычно представлены в виде небольших кругов, которые заполняются при выборе. Они используются в случаях, когда из группы опций можно выбрать только одну.

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

## Пример

**RadioButton.tsx**

```tsx
export const RadioButton: FC<PropsWithChildren<RadioButtonProps>> = ({ children, checked, ...props }) => {
	const { radioProps } = useRadio({ checked })

	return (
        <div {...props} {...radioProps} onClick={onPress}>
	        {children}
        </div>
	)
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
