---
outline: deep
---

# useProgressBar

**useProgressBar** - хук, предоставляющий доступность для элемента отображения прогресса.

## API

|       |                                                                              |
| ----: |:-----------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseProgressBarOptions): UseProgressBar<T>` |

### `UseProgressBarOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `valueNow`  | `number`   | Текущее значение meter  | 
| `valueMin`  | `number`   | Минимальное значение meter  | 
| `valueMax`  | `number`   | Максимальное значение meter  | 
| `valueText`  | `string`   | Текстовое описание значения meter  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseProgressBarUnionOptions<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"progressbar"`   | Роль progressbar  | 
| `aria-valuemax`  | `number`   | Максимальное значение  | 
| `aria-valuemin`  | `number`   | Минимальное значение  | 
| `aria-valuenow`  | `number`   | Текущее значение meter  | 
| `aria-valuetext`  | `string`   | Текстовое описание значения  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseProgressBar<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `progressBarProps`  | `UseProgressBarUnionOptions<T>`   | Свойства, необходимые для доступности progress bar  | 

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
