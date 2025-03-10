import { KeyboardEventHandler } from 'react'
import { TreeItem, TreeItemPayload, TreeNode } from '../../../../lib'
import { Orientation } from '../../../../types'

export interface UseItemTreeControlOptions<I extends TreeItem = TreeItem> {
  /** Свойство, обозначающее активный элемент в коллекции */
  active?: string
  /** Свойство, развернутые узлы дерева */
  expanded: Set<string>
  /** Свойство, определяющее направление меню. По умолчанию - 'vertical' */
  orientation?: Orientation
  /** Метод, изменяющий текущий сфокусированный элемент списка */
  changeFocus?(active: string): void
  /** Метод, изменяющий активный элемент списка */
  changeActive?(active: string | undefined): void
  /** Метод, закрывающий узел дерева */
  hide(key: string): void
  /** Метод, раскрывающий узел дерева */
  expand(key: string): void
  /** Метод, вызываемый на активацию элемента */
  onActivate?(node: TreeNode<TreeItemPayload<I> | null> | null): void
}

export interface UseItemTreeControl {
  /** Обработчик на нажатие клавиш */
  onKeyDown: KeyboardEventHandler
}
