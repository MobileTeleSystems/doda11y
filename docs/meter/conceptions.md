---
outline: deep
---

# Meter

![An image](/meter.png)

**Meter** - элемент, отображающий числовое значение в определенном диапазоне.   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)

## A11Y

Для реализации Meter рекомендуется использовать нативный элемент `meter`. 

Однако, если ваша реализация является кастомной - необходимо использовать хук `useMeter`.

## Пример

Реализация доступного компонента Meter достигается за счет хука `useMeter`, обеспечивающего необходимые свойства.

**Meter.tsx**

```tsx
export interface TMeterProps {
	valueNow: number
	valueMin: number
	valueMax: number
	valueText?: string
	labelledBy?: string
	label?: string
}

export const Meter = forwardRef<HTMLDivElement, TMeterProps>(({ valueMax, valueMin, valueText, valueNow, labelledBy, label, ...props }, ref) => {
        const { meterProps } = useMeter({ valueMax, valueMin, valueText, valueNow, labelledBy, label })

        return (
            <Styled.Meter {...meterProps}>
              <Styled.MeterLine></Styled.MeterLine>
            </Styled.Meter>
        )
    }
)

Meter.displayName = 'Meter'
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
