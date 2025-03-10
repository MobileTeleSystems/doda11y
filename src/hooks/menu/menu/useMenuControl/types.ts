import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemTree, TreeItem, TreeItemPayload, TreeNode } from '../../../../lib'
import { Orientation } from '../../../../types'

export interface UseMenuControlOptions<I extends TreeItem = TreeItem> {
  /** Экземпляр класса SelectableNodeTree */
  tree: ItemTree<I>
  /** Свойство, обозначающее активный элемент в списке */
  active?: string
  /** Функция, возвращающая ссылка на триггер меню Node в DOM дереве */
  triggerElement?: HTMLElement | null
  /** Метод на изменение активного элемента в списке */
  changeActive(active: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(id: string | undefined): void
  /** Метод на раскрытие родительского элемента (подменю) */
  onExpand?(key: string): void
  /** Метод на закрытие родительского элемента (подменю) */
  onHide?(key: string): void
  /** Метод, вызываемый на активацию элемента меню */
  onActivate?(node: TreeNode<TreeItemPayload<I> | null> | null): void
  /** Метод, вызываемый на закрытие меню */
  onClose?(): void
  /** Свойство, определяющее "раскрытые" ключи */
  expanded?: Set<string>
  /** Свойство, определяющее направление меню. По умолчанию - 'vertical' */
  orientation?: Orientation
  /** Признак, определяющий, надо ли закрывать поддерево на нажатие `Esc`. По умолчанию - `true` */
  closeOnEsc?: boolean
}

export interface UseMenuControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
  /** Обработчик на blur */
  onBlur: FocusEventHandler
}
