---
outline: deep
---

# useMeter

**useMeter** - хук, предоставляющий доступность для элементов индикации.

## API

|       |                                                                  |
| ----: |:-----------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseMeterOptions): UseMeter<T>` |

### `UseMeterOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `valueNow`  | `number`   | Текущее значение meter  | 
| `valueMin`  | `number`   | Минимальное значение meter  | 
| `valueMax`  | `number`   | Максимальное значение meter  | 
| `valueText`  | `string`   | Текстовое описание значения meter  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseMeterUnionMeterProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"meter"`   | Роль meter  | 
| `aria-valuemax`  | `number`   | Максимальное значение  | 
| `aria-valuemin`  | `number`   | Минимальное значение  | 
| `aria-valuenow`  | `number`   | Текущее значение meter  | 
| `aria-valuetext`  | `string`   | Текстовое описание значения  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseMeter<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `meterProps`  | `UseMeterUnionMeterProps<T>`   | Свойства, необходимые для доступности meter  | 

## Пример

Реализация доступного компонента Meter достигается за счет хука `useCarouselSlideProps`, обеспечивающего необходимые свойства.

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
        const { meterProps } = useCarouselSlideProps({ valueMax, valueMin, valueText, valueNow, labelledBy, label })

        return (
            <Styled.Meter {...meterProps}>
              <Styled.MeterLine></Styled.MeterLine>
            </Styled.Meter>
        )
    }
)

Meter.displayName = 'Meter'
```
