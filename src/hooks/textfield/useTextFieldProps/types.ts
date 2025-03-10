import { HTMLAttributes } from 'react'
import { DescriptionProps, UseDescriptionPropsOptions } from '../../description'

export interface UseTextPropsOptions extends UseDescriptionPropsOptions {
  /** Свойство, обозначающее id input или textarea элемента */
  textFieldId?: string
  /** Свойство, обозначающее id элемента, содержащего ошибку */
  errorId?: string
  /** Признак, невалидно ли значение, введённое пользователем */
  isInvalid?: boolean
}

export interface TextFieldProps<T extends HTMLElement> extends DescriptionProps<T> {
  /** Признак, обозначающий, невалидно ли значение, введённое пользователем */
  'aria-invalid': HTMLAttributes<T>['aria-invalid']
  /** Свойство, ссылающееся на элемент ошибки, в случае, если `isInvalid = true` */
  'aria-errormessage'?: HTMLAttributes<T>['aria-errormessage']
}

export interface TextFieldLabelProps {
  /** Аттрибут, связывающий input с его label с помощью id */
  htmlFor?: string
}

export interface UseTextFieldProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности input */
	inputProps: TextFieldProps<T>
  /** Свойства, необходимые для доступности label */
  labelProps: TextFieldLabelProps
}
