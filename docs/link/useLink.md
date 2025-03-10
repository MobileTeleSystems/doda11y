---
outline: deep
---

# useLink

**useLink** - хук, предоставляющий доступность для элементов ссылки. 

## API

|       |                                      |
| ----: |:-------------------------------------|
| Type: | `(options: UseLinkOptions): UseLink` |

### `UseLinkOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onRedirect`  | `() => void`   | Обработчик на редирект (нажатие `enter`)  | 
| `onOpenContextMenu`  | `() => void`   | Обработчик на открытие контекстного меню (`shift + f10`)  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 

### `UseLinkUnionLinkProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"link"`   | Роль link  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseLink`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `linkProps`  | `UseLinkUnionLinkProps`   | Свойства, необходимые для доступности link  |

## Пример

Использование `useLinkProps()` рекомендуется тогда, когда элемент ссылки сделан не с помощью нативного элемента `<a>`.

Тогда пользователь может не понять, что перед ним - ссылка, имеющая возможность при нажатии перейти на другую страницу.

Представим, что у нас есть кнопка, отвечающая за редирект на другую страницу. 

**Link.tsx**

```tsx
export const Link: FC<PropsWithChildren> = ({ children }) => {
	const { linkProps } = useLinkProps({ onRedirect: () => location.href = '#' }) // [!code focus]

	return (
        <button {...linkProps}>
            {children}
        </button>
	)
}
```
