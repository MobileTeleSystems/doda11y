---
outline: deep
---

# TextField

![An image](/textfield.png)

**TextField** - интерактивный элемент, обрабатывающий пользовательский ввод.   

## A11Y

Для верной реализации `TextField` рекомендуется использовать семантически верные `input` и `textarea`. Они позволяют достичь хорошей доступности без использования излишних aria-* свойств.

## Пример

Реализация доступного компонента TextField достигается за счет хука `useTextField`, обеспечивающего необходимые свойства.

**TextField.tsx**

```tsx
export const TextField = forwardRef<HTMLInputElement, TTextFieldProps>(({...props}, ref) => {
    const [isValid, setIsValid] = useState(true)

    const id = useId()
    const errorId = useId()
    const { inputProps, labelProps } = useTextField({textFieldId: id, isInvalid: !isValid, errorId })

    return (
      <div>
        <label {...labelProps}>Имя</label>
        <input {...props} {...inputProps} id={id}/>
        {!isValid && <span className='error' id={errorId} hidden>Невалидное имя</span>}
      </div>
    )
  }
)
```

В случае, если помимо ошибки у нас есть еще текстовая подсказка под полем ввода, необходимо привязать ее

```tsx
export const TextField = forwardRef<HTMLInputElement, TTextFieldProps>(({...props}, ref) => {
    const id = useId()
    const descId = useId()
    const { inputProps, labelProps } = useTextField({ textFieldId: id, describedBy: descId })

    return (
      <div>
        <label {...labelProps}>Имя</label>
        <input {...props} {...inputProps} id={id} />
        <span id={descId}>Введите Ваше полное имя для индентификации</span>
      </div>
    )
  }
)
```

## Особенности

- Поддержка необходимых `aria` аттрибутов для доступности
