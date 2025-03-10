---
outline: deep
---

# useAlert

**useAlert** - хук, предоставляющий доступность для элементов индикации.

## API

|       |                                                                  |
| ----: |:-----------------------------------------------------------------|
| Type: | `(options?: UseAlertOptions): UseAlert` |

### `UseAlertUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"alert"`   | Роль alert  | 
| `aria-live`  | `"polite" \| "assertive" \| "off"`   | Свойство, указывающее на то, что при появлении alert необходимо прочитать его содержимое  | 

### `UseAlert<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `alertProps`  | `AlertProps<T>`   | Свойства, необходимые для доступности alert  | 

## Пример

Реализация доступного компонента Alert достигается за счет хука `useAlert`, обеспечивающего необходимые свойства.

**Alert.tsx**

```tsx
export const Alert = forwardRef<HTMLDivElement, TAlertProps>(({ children }, ref) => {
        const { alertProps } = useAlert()

        return (
            <div {...alertProps}>
              {children}
            </div>
        )
    }
)
```
