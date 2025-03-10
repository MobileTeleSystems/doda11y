import React, { FC, type KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './style.css'
import { useActiveDescendant, useMatrixSelectionControl, useRefMap, useSelection } from '../hooks'
import { useItemMatrix, useItemMatrixControl } from '../hooks/structures/itemMatrix'
import { SpecialKeys } from '../constants'

export const Playground: FC = () => {
	const [year, setYear] = useState(2025)
	const [month, setMonth] = useState(1)

	const tableRef = useRef<HTMLTableElement>(null)

	const getDates = useCallback((year: number, month: number) => Array.from({ length: new Date(year, month, 0).getDate() }, (_, index) => new Date(year, month - 1, index + 1)), [])

	const dates = useMemo(() => getDates(year, month), [year, month, getDates])

	const [startDays, endDays] = useMemo(() => {
		const firstDayIndex = dates[0].getDay() === 0 ? 6 : dates[0].getDay() - 1
		const startDays = getDates(month === 1 ? year - 1 : year, month === 1  ? 12 : month - 1)
		const slicedStartDays = startDays.slice(startDays.length - firstDayIndex)
		const endDays = getDates(month === 12 ? year + 1 : year, month === 12  ? 1 : month + 1)
		const slicedEndDates = endDays.slice(0, 42 - (slicedStartDays.length + dates.length))

		return [slicedStartDays, slicedEndDates]
	}, [dates, getDates, year, month])

	const calendarDates = useMemo(() => {
		const calendarDates = [...startDays, ...dates, ...endDays]

		return calendarDates.map((date) => ({ key: date.toDateString(), label: date.getDate() }))
	}, [dates, month, year, startDays, endDays])

	const disabledDates = useMemo(() => new Set([...startDays, ...endDays].map((date) => date.toDateString())), [month, year, getDates, startDays, endDays])

	const itemMatrix = useItemMatrix({ items: calendarDates, rowCount: 6, columnCount: 7, labelResolver: (item) => item.label, disabledKeys: disabledDates })
	const { activeDescendant: active, setActiveDescendantId: setActive } = useActiveDescendant()
	const { set, get } = useRefMap<string, HTMLDivElement | null>()
	const prevMonthRef = useRef<number>()

	useEffect(() => {
		if (!prevMonthRef.current || !active) return

		if (prevMonthRef.current <= month) {
			setActive(itemMatrix.getFirstNode()!.key)
			get(itemMatrix.getFirstNode()!.key)?.focus()
			prevMonthRef.current = undefined

			return
		}

		if (prevMonthRef.current > month) {
			setActive(itemMatrix.getLastNode()!.key)
			get(itemMatrix.getLastNode()!.key)?.focus()

			prevMonthRef.current = undefined

			return
		}
	}, [month, itemMatrix])

	const { multiple, select, isSelected, selectedKeys } = useSelection({
		multiple: true,
		keys: Array.from(itemMatrix.keys),
		disabledKeys: disabledDates,
		limit: 2,
	})

	const { onKeyDown: onKeyDownSelection } = useMatrixSelectionControl({
		multiple,
		select,
		selectedKeys,
		active,
		getDownKey: (key) => itemMatrix.getBelowNode(key)?.key,
		getUpKey: (key) => itemMatrix.getAboveNode(key)?.key,
		getRightKey: (key) => itemMatrix.getRightNode(key)?.key,
		getLeftKey: (key) => itemMatrix.getLeftNode(key)?.key,
		getLastKey: () => itemMatrix.getLastNode()?.key,
		getFirstKey: () => itemMatrix.getFirstNode()?.key
	})

	const { onKeyDown } = useItemMatrixControl(itemMatrix, {
		changeFocus(key: string) {
			get(key)?.focus()
		},
		changeActive: setActive,
		active
	})

	const prevMonth = useCallback(() => {
		if (month === 1) setYear(p => p - 1)
		setMonth((p) => p === 1 ? 12 : p - 1)
	}, [month])

	const nextMonth = useCallback(() => {
		if (month === 12) setYear(p => p + 1)
		setMonth((p) => p === 12 ? 1 : p + 1 )
	}, [month, itemMatrix])

	const onKeyDownTable = useCallback((e: KeyboardEvent) => {
		if (!active) return

		switch (e.key) {
		case SpecialKeys.ARROW_UP: {
			if (!itemMatrix.getAboveNode(active)) {
				prevMonthRef.current = month
				prevMonth()
			}

			return
		}
		case SpecialKeys.ARROW_DOWN:
		{
			if (!itemMatrix.getBelowNode(active)) {
				prevMonthRef.current = month
				nextMonth()
			}

			return
		}
		case SpecialKeys.ARROW_RIGHT: {
			if (!itemMatrix.getRightNode(active)) {
				prevMonthRef.current = month
				nextMonth()
			}

			return
		}
		case SpecialKeys.ARROW_LEFT: {
			if (!itemMatrix.getLeftNode(active)) {
				prevMonthRef.current = month
				prevMonth()
			}

			return
		}
		}
	}, [itemMatrix, active, nextMonth, prevMonth])

	return (
		<div>
			<select aria-label='Выберите год' value={year} onChange={(e) => setYear(parseInt(e.currentTarget.value))}>
				<option value='2020'>2020</option>
				<option value='2021'>2021</option>
				<option value='2022'>2022</option>
				<option value='2023'>2023</option>
				<option value='2024'>2024</option>
				<option value='2025'>2025</option>
				<option value='2026'>2026</option>
				<option value='2027'>2027</option>
				<option value='2028'>2028</option>
				<option value='2029'>2029</option>
				<option value='2030'>2030</option>
			</select>
			<p>{month}</p>
			<button aria-label='Предыдущий месяц' onClick={() => {
				prevMonth()
			}}>Предыдущий</button>
			<button aria-label='Следующий месяц' onClick={() => {
				nextMonth()
			}}>Следующий</button>
			<table
				ref={tableRef}
				aria-label="Appointment date, октябрь 2024 г."
				role="grid"
				tabIndex={!active ? 0 : -1}
				onFocus={() => {
					if (!active && itemMatrix.getMatrix()[0][0]?.key) {
						setActive(itemMatrix.getFirstNode()!.key)
						get(itemMatrix.getFirstNode()!.key)?.focus()
					}
				}}
				onKeyDown={(e) => {
					onKeyDown(e)
					onKeyDownSelection(e)
					onKeyDownTable(e)
				}}
			>
				<thead aria-hidden="true">
					<tr>
						<th>П</th>
						<th>В</th>
						<th>С</th>
						<th>Ч</th>
						<th>П</th>
						<th>С</th>
						<th>В</th>
					</tr>
				</thead>
				<tbody>
					{itemMatrix.getMatrix().map((row, index) => (
						<tr key={index}>
							{row.map((item, index) => (
								<td key={index} role="gridcell" aria-disabled="true">
									<div
										ref={(el) => set(item!.key, el)}
										tabIndex={item?.key === active ? 0 : -1}
										data-key={item?.key}
										style={{ background: isSelected(item!.key) ? 'red' : 'initial' }}
										role="button"
										aria-disabled={disabledDates.has(item!.key)}
										aria-label={item?.payload.key}
										className="data-button"
									>
										{item?.payload.label}
									</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
