---
outline: deep
---

# Tooltip

![An image](/tooltip.png)

**Tooltip** - элемент, отображающий текстовую подсказку.

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

## A11Y

Поскольку нет кастомного элемента `<tooltip>`, то реализация такого компонента полностью является кастомной.

Для правильной поддержки обработки клавиатуры, ролей и аттрибутов необходимо использовать хук `useTooltipProps`.

## Пример

**Tooltip.tsx**

```tsx
export interface ITooltipProps {
	triggerText: string
}

export const TooltipLike: FC<PropsWithChildren<ITooltipProps>> = ({ children, triggerText }) => {
	const id = useId()
  
	const { tooltipProps, tooltipTriggerProps, tooltipContainerProps } = useTooltipProps({ describedBy: id })

	return (
        <Styled.TooltipContainer {...tooltipContainerProps}>
            <button type="button" {...tooltipTriggerProps}>
                <span aria-hidden="true">{triggerText}</span>
            </button>
            <p id={id} {...tooltipProps} class="hidden">{children}</p>
        </Styled.TooltipContainer>
	)
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
