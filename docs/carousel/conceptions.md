---
outline: deep
---

# Carousel

![An image](/carousel.png)

**Carousel** - интерактивный элемент, автоматического либо в результате взаимодействия с пользователем показывающий в определенном порядке картинки либо другой интерактивный контент.   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)

::: info
На данный момент реализована поддержка только базовой карусели. Поддержка группированной карусели и карусели с режимом вкладок будем реализована в будущем.
:::

## A11Y

Для реализации карусели нет общих рекомендаций по семантике, поскольку на данный момент нет нативных семантических тегов HTML.

## Пример

Реализация доступного компонента Carousel достигается за счет использования нескольких хуков: [`useCarousel`](/carousel/useCarousel) - для самой карусели, [`useCarouselSlide`](/carousel/useCarouselSlide) - для обеспечения доступности слайдов.

**CarouselSlide.tsx**

```tsx
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

**Carousel.tsx**

```tsx
const Carousel: FC<PropsWithChildren> = ({ children }) => {
    const { carouselProps } = useCarousel()
    
    /**
     * Здесь логика для карусели
     * элементов может быть реализована любым
     * доступным способом
     */

    return (
        <div {...carouselProps}>
            {children}
        </div>
    )
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
- Необходимое управление с помощью клавиатуры
