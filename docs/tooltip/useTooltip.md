---
outline: deep
---

# useTooltip

**useTooltip** - хук, предоставляющий доступность для элемента всплывающей подсказки.

## API

|       |                                                                      |
| ----: |:---------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseTooltipOptions): UseTooltip<T>` |

### `UseTooltipOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `description`  | `string`   | Свойство, позволяющее добавить текстовое описание (например, его предназначение) к элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `describedBy`  | `string`   | Аналогично `aria-description`, позволяет добавить описание (например, его предназначение) к элементу, однако ссылается на описание с помощью id  | 
| `onClose`  | `() => void`   | Метод, вызываемый на close  | 

### `UseTooltipUnionTooltipProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"tooltip"`   | Роль tooltip  | 

### `UseTooltipUnionTooltipTriggerProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-description`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-describedby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseTooltipUnionTooltipContainerProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseTooltip<T extends HTMLElement>`

| Имя               | Тип                                       | Описание    |
|:-------------------|:------------------------------------------|:-----------|
| `tooltipProps`  | `UseTooltipUnionTooltipProps<T>`          | Свойства, необходимые для доступности tooltip  | 
| `tooltipTriggerProps`  | `TooltipTriggerProps<T>`                  | Свойства, необходимые для доступности tooltip trigger  | 
| `tooltipContainerProps`  | `UseTooltipUnionTooltipContainerProps<T>` | Свойства, необходимые для доступности tooltip container  | 

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
