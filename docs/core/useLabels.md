---
outline: deep
---

# useLabels

**useLabels** - хук, предоставляющий `aria-label`  и `aria-labelledby` для элементов.

## API

|       |                                                                    |
| ----: |:-------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseLabelsOptions): UseLabels<T>` |

### `UseLabelsOptions`

| Имя	               | Type	      | Описание	                                                                                                                                                                                                    |
|:-------------------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `label`	   | `string`   | 	  скрытое от пользователей имя элемента для скринридеров.                                                                                                                                                   |
| 	   `labelledBy` | `string` 	 | 	                                аналогично `label` предоставляет скрытое имя элемента для скринридеров, однако привязывается к элементу с текстом с помощью передачи ему в качестве значения `id` элемента. |

### `UseLabels<T extends HTMLElement>`

| Имя	          | Type	           | Описание	                                                                                                         |
|:--------------|:----------------|:------------------------------------------------------------------------------------------------------------------|
| `labelProps`	 | `LabelProps<T>` | 	  `props`, необходимые для обеспечения доступности с помощью передачи `aria-label` и `aria-labelledby` элементу. |

### `LabelProps<T extends HTMLElement>`

| Имя	               | Type	    | Описание	                                                                                                         |
|:-------------------|:---------|:------------------------------------------------------------------------------------------------------------------|
| `aria-label`	      | `string` | 	  скрытое от пользователей имя элемента для скринридеров.                |
| `aria-labelledBy`	 | `string` | 	  аналогично `label` предоставляет скрытое имя элемента для скринридеров, однако привязывается к элементу с текстом с помощью передачи ему в качестве значения `id` элемента. |


## Пример

`useLabels` используются для того, чтобы четко обозначить предназначение элемента.

Представим, что нам необходимо реализовать кнопку, содержащую в себе иконку. Ее предназначение - копировать содержимое поля. Обычный пользователь сможет интуитивно понять по иконке предназначение кнопки, однако люди с ограничениями могут не понять, что будет, если они нажмут на кнопку. Чтобы четко определить предназначение кнопки необходимо задать `label` для элемента.

**CopyButton.tsx**

```tsx
interface CopyButtonProps {
	onClick: VoidFunction
    fieldName: string 
    fieldValue: string
}

export const CopyButton: FC<PropsWithChildren<CopyButtonProps>> = ({ children, onClick, fieldName, fieldValue, ...props }) => {
	const { labelProps } = useLabels({ label: `Скопировать поле ${fieldValue}` })
  
	return (
        <button {...props} {...labelProps} onClick={onClick}>
	        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 442 442" xml:space="preserve">
                <g>
                    <polygon points="291,0 51,0 51,332 121,332 121,80 291,80  "/>
                    <polygon points="306,125 306,195 376,195  "/>
                    <polygon points="276,225 276,110 151,110 151,442 391,442 391,225  "/>
                </g>
            </svg>
        </button>
	)
}
```

В отличие от `label`, `labelledBy` используется, когда необходимо описать элемент текстовым содержимым другого элемента.

```tsx
import { useId } from 'react';

interface CopyButtonProps {
	onClick: VoidFunction
	fieldName: string
	fieldValue: string
}

export const CopyButton: FC<PropsWithChildren<CopyButtonProps>> = ({ onClick, fieldName, fieldValue, ...props }) => {
	const id = useId()
	const { labelProps } = useDescription({ labelledBy:  id })

	return (
			<div>
				<p id={id}>{`Скопировать поле ${fieldValue}`}</p>
				<button {...props} {...labelProps} onClick={onClick}>
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"
					     height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 442 442" xml:space="preserve">
                        <g>
                            <polygon points="291,0 51,0 51,332 121,332 121,80 291,80  "/>
                            <polygon points="306,125 306,195 376,195  "/>
                            <polygon points="276,225 276,110 151,110 151,442 391,442 391,225  "/>
                        </g>
                    </svg>
				</button>
			</div>
	)
}
```
