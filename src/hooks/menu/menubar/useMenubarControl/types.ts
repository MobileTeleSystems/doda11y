import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemTree, TreeItem, TreeItemPayload, TreeNode } from '../../../../lib'
import { Orientation } from '../../../../types'

export interface UseMenubarControlOptions<I extends TreeItem = TreeItem> {
  /** Экземпляр класса SelectableNodeTree */
  tree: ItemTree<I>
  /** Свойство, обозначающее активный элемент в списке */
  active?: string
  /** Свойство, определяющее "раскрытые" ключи */
  expanded: Set<string>
  /** Свойство, определяющее направление меню. По умолчанию - 'vertical' */
  orientation?: Orientation
  /** Признак, определяющий, надо ли закрывать поддерево на нажатие `Esc`. По умолчанию - `true` */
  closeOnEsc?: boolean
  /** Метод на изменение активного элемента в списке */
  changeActive(active: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(id: string | undefined): void
  /** Метод на раскрытие родительского элемента (подменю) */
  onExpand(key: string): void
  /** Метод на закрытие родительского элемента (подменю) */
  onHide(key: string): void
  /** Метод на закрытие всех родительских элементов (подменю) */
  onHideAll(): void
  /** Метод, вызываемый на активацию элемента меню */
  onActivate?(node: TreeNode<TreeItemPayload<I> | null> | null): void
}

export interface UseMenubarControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
  /** Обработчик на focus */
  onFocus: FocusEventHandler
  /** Обработчик на blur */
  onBlur: FocusEventHandler
}
