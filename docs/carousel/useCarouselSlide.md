---
outline: deep
---

# useCarouselSlide

**useCarouselSlide** - хук, предоставляющий доступность для слайдов карусели.

## API

|       |                                                                                  |
| ----: |:---------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseCarouselSlideOptions): UseCarouselSlide<T>` |

### `UseCarouselSlideOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `description`  | `string`   | Свойство, позволяющее добавить текстовое описание (например, его предназначение) к элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `describedBy`  | `string`   | Аналогично `aria-description`, позволяет добавить описание (например, его предназначение) к элементу, однако ссылается на описание с помощью id  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseCarouselSlideUnionCarouselProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-roledescription`  | `string`   | Свойство, описывающее роль элемента. В отличие от role, позволяет задавать собственные роли  | 

### `UseCarouselSlide<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `carouselSlideProps`  | `UseCarouselSlideUnionCarouselProps<T>`   | Свойства, необходимые для доступности Carousel  | 

## Пример

`useCarouselSlide` используется для обеспечения веб-доступности слайдеров карусели.

**CarouselSlide.tsx**

```tsx{3}
const CarouselSlide: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme()
    const { carouselSlideProps } = useCarouselSlide({ label: '1 из 3' })

    return (
        <div {...carouselSlideProps}>
            <h4>
                Slide #
            </h4>
            {children}
        </div>
    )
}
```
