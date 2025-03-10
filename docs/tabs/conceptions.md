---
outline: deep
---

# Tree

![An image](/tabs.png)

**Tabs (вкладки)** — это интерфейсный элемент, который позволяет пользователям переключаться между несколькими панелями контента, не покидая текущей страницы. Вкладки обычно располагаются горизонтально или вертикально и каждой вкладке соответствует отдельная панель контента. Это удобно для группировки связанного контента в одном месте.

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

## Пример

**Tab.tsx**

```tsx
const Tab = forwardRef<HTMLButtonElement, PropsWithChildren<{ focusable?: boolean, control: string, id?: string, active?: boolean, onActivate?: () => void }>>(({ children, focusable, control, id, active, onActivate }, ref) => {
  const { tabProps } = useTabProps({ controls: control, focusable, selected: active })

  return <button {...tabProps} onClick={onActivate} id={id} ref={ref}>{children}</button>
})
```

**TabList.tsx**

```tsx
type ItemListElement = { element: ReactElement, type: ListItemType, label: string }

const Tablist: FC<{ children: ReactElement[], onActivate?: (key: string) => void, labelledBy?: string, active?: string }> = ({ children, onActivate, labelledBy, active }) => {
  const elementToList = useCallback((child: any): any => {
    const type = listNodeTypeResolver({ itemElement: Tab })(child)
    return ({ element: child, label: child.props?.children, type })
  }, [])
  const itemsArray = Children.map(children, elementToList)

  const isInit = useRef(false)

  const itemList = useItemList<ItemListElement>({
    items: itemsArray,
    typeResolver: (el) => el.type,
    labelResolver: (el) => el.label,
    keyResolver: (el) => el.element.key!,
  })

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()

  const { set, get } = useRefMap<string, HTMLElement | null>()

  useEffect(() => {
    const isInitialized = isInit.current

    if (activeDescendant && isInitialized) {
      get(activeDescendant)?.focus()
    }

    if (!activeDescendant && !isInitialized) {
      setActiveDescendantId(itemList.getFirstNode()?.key)
    }
  }, [activeDescendant, itemList])

  useEffect(() => {
    if (!isInit.current) isInit.current = true
  }, [])

  const { tablistProps } = useTablist<ItemListElement>({
    list: itemList,
    activeDescendant,
    setActiveDescendantId,
    onActivate,
    labelledBy,
  })

  return (
    <div {...tablistProps}>
      {itemList.getNodes()?.map((item) => {
        return (
          <Tab
            {...item.payload.item.element.props}
            onActivate={() => {
              if (onActivate) {
                onActivate(item.key)
                setActiveDescendantId(item.key)
              }
            }}
            key={item.key}
            ref={(el: HTMLElement) => set(item.key, el)}
            focusable={item.key === activeDescendant}
            active={item.key === active}
          />
        )
      })}
    </div>
  )
}
```

**TabPanel.tsx**

```tsx
const TabPanel: FC<PropsWithChildren<{ open?: boolean, id?: string, labelledBy?: string }>> = ({ children, open, id, labelledBy }) => {
  const { tabPanelProps } = useTabPanel({ labelledBy })

  return <div {...tabPanelProps} id={id} hidden={!open}>{children}</div>
}
```

**Page.tsx**

```tsx
export const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vklad')

  const titleId = useId()

  const vkladId = useId()
  const depositId = useId()
  const creditId = useId()
  const ipotekaId = useId()

  const vkladIdTab = useId()
  const depositIdTab = useId()
  const creditIdTab = useId()
  const ipotekaIdTab = useId()

  return (
    <div>
      <h2 id={titleId}>Услуги</h2>
      <Tablist labelledBy={titleId} active={activeTab} onActivate={setActiveTab}>
        <Tab control={vkladId} id={vkladIdTab} key='vklad'>Вклад</Tab>
        <Tab control={depositId} id={depositIdTab} key='deposit'>Депозит</Tab>
        <Tab control={creditId} id={creditIdTab} key='credit'>Кредит</Tab>
        <Tab control={ipotekaId} id={ipotekaIdTab} key='ipoteka'>Ипотека</Tab>
      </Tablist>
      <TabPanel id={vkladId} labelledBy={vkladIdTab} open={activeTab === 'vklad'}>
        Вклад под любые цели
      </TabPanel>
      <TabPanel id={depositId} labelledBy={depositIdTab} open={activeTab === 'deposit'}>
        Депозит на самые смелые цели
      </TabPanel>
      <TabPanel id={creditId} labelledBy={creditIdTab} open={activeTab === 'credit'}>
        Кредит под маленький процент
      </TabPanel>
      <TabPanel id={ipotekaId} labelledBy={ipotekaIdTab} open={activeTab === 'ipoteka'}>
        Ипотека на дом мечты
      </TabPanel>
    </div>
  )
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
