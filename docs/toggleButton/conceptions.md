---
outline: deep
---

# Toggle Button

![An image](/toggleButton.png)

**Toggle button (переключаемая кнопка)** — это элемент интерфейса, который позволяет пользователю переключать между двумя состояниями, обычно “включено” и “выключено”. Toggle button используется для бинарного выбора, где возможны только два состояния. Визуально toggle button может быть представлен как кнопка, которая меняет цвет или текст в зависимости от состояния.  

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

## A11Y

Обеспечение веб-доступности для кнопки-переключателя необходимо в таких же ситуация, когда оно нужно для [обычной кнопки](/button/conceptions#a11y)

Однако, в отличие от обычной кнопки, кнопка переключатель должна сигнализировать пользователю о своем текущем состоянии с помощью аттрибута `aria-pressed`.

## Пример

Пусть нам дана задача реализовать компонент, содержащий в себе две кнопки для смены состояния между "Пользователем" и "Сотрудником". 

Для полноценной реализации согласно условиям веб-доступности, необходимо использовать хук `useToggleButtonControl()`

**UserToggle.tsx**

```tsx
import { useState } from 'react';

export const UserToggle: FC<PropsWithChildren> = ({ children, ...props }) => {
	const [value, setValue] = useState('1')

	const onPressUser = () => {
		setValue('1')
	}

	const onPressStaff = () => {
		setValue('2')
	}

	const { buttonProps: staffButtonProps } = useToggleButtonControl({ onPress: onPressUser, isPressed: value === '1' })
	const { buttonProps: userButtonProps } = useToggleButtonControl({ onPress: onPressStaff, isPressed: value === '2' })

	return (
		<div {...props}>
            <div {...staffButtonProps} onClick={onPressUser}>
                Я - пользователь
            </div>
            <div {...userButtonProps} onClick={onPressStaff}>
                Я - сотрудник
            </div>
        </div>
	)
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
- Возможность активации кнопки с помощью нажатия `enter` и `space`
