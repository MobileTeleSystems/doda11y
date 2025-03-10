export interface UseIterableSearchOptions {
	/** Очищать поисковой ввод после задержки */
  clearAfterDelay?: boolean
	/** Время задержки в мс между окончанием ввода и вызовом */
  delay?: number
}

export interface UseIterableSearch {
	/** Функция изменения поискового запроса */
  setSearched: (value: string | ((prev: string) => string)) => void
	/** Поисковой запрос */
	searched: string
}
