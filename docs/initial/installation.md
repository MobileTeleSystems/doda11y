---
outline: deep
---

## Установка пакета
После настройки реестра вы можете установить библиотеку, используя ваш менеджер пакетов:

```bash
npm install @dowa/react
```

Если вы используете yarn

```bash
yarn add @dowa/react
```


## Использование

После установки вы можете начать использовать хуки в ваших компонентах React для повышения доступности.

Пример использования `useButton`:

```tsx
export const PrintButton: FC<PropsWithChildren> = ({ children, ...props }) => {
    const onPress = () => {
        print()
    }
    
    const { buttonProps } = useButton({ onPress })
    
    return (
        <div {...props} {...buttonProps} onClick={onPress}>
            {children}
        </div>
    )
}
```
