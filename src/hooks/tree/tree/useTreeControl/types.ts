import type { FocusEventHandler, KeyboardEventHandler } from 'react'

import type { SelectionControl } from '../../../selection'
import { SelectableItemTree, TreeItem } from '../../../../lib'

export interface UseTreeControlOptions<I extends TreeItem> {
	/** Экземпляр класса SelectableNodeTree */
  tree: SelectableItemTree<I>
	/** Selection методы для управления выбором */
  selection: SelectionControl
  /** Свойство, обозначающее активный элемент */
  active?: string
  /** Свойство, определяющее "раскрытые" ключи */
  expanded: Set<string>
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(id: string | undefined): void
	/** Метод на изменение активного элемента в дереве */
  changeActive(active: string | undefined): void
  /** Метод на раскрытие родительского элемента (поддерева) */
  onExpand(key: string): void
  /** Метод на закрытие родительского элемента (поддерева) */
  onHide(key: string): void
  /** Метод на закрытие всех родительских элементов */
  onHideAll(): void
  /** Метод на изменение состояние раскрытия родительского элемента (поддерева) */
  onToggleExpanded(key: string): void
}

export interface UseTreeControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
  /** Обработчик на focus */
  onFocus: FocusEventHandler
  /** Обработчик на blur */
  onBlur: FocusEventHandler
}
