---
outline: deep
---

# ProgressBar

![An image](/progressbar.png)

**ProgressBar** - элемент, отображающий числовое значение в определенном диапазоне.

В отличие от `Meter`, используется для отображения текущего прогресса.

## A11Y

Для реализации ProgressBar рекомендуется использовать нативный элемент `progress`. 

Однако, если ваша реализация является кастомной - необходимо использовать хук `useProgressBarProps`.

## Пример

Реализация доступного компонента ProgressBar достигается за счет хука `useProgressBarProps`, обеспечивающего необходимые свойства.

**ProgressBarCircle.tsx**

```tsx
export interface TProgressBarProps {
	valueNow: number
	valueMin: number
	valueMax: number
	valueText?: string
	labelledBy?: string
	label?: string
}

export const ProgressBar = forwardRef<HTMLDivElement, TProgressBarProps>(({ valueMax, valueMin, valueText, valueNow, labelledBy, label, ...props }, ref) => {
        const { progressBarProps } = useProgressBarProps({ valueMax, valueMin, valueText, valueNow, labelledBy, label })

        return (
            <Styled.ProgressBarCircle {...progressBarProps}>
              <Styled.ProgressBarLine></Styled.ProgressBarLine>
            </Styled.ProgressBarCircle>
        )
    }
)

ProgressBar.displayName = 'ProgressBar'
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
