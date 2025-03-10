---
outline: deep
---

# Alert

![An image](/alert.png)

**Alert** - элемент, отображающий какую-либо важную информацию.   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

## A11Y

Для реализации Alert нет общих рекомендаций по семантике

## Пример

Реализация доступного компонента Alert достигается за счет хука `useAlert`, обеспечивающего необходимые свойства.

**Alert.tsx**

```tsx
export const Alert = forwardRef<HTMLDivElement, TMeterProps>(({ children }, ref) => {
        const { alertProps } = useAlert()

        return (
            <div {...alertProps}>
              {children}
            </div>
        )
    }
)

Alert.displayName = 'Alert'
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
