---
outline: deep
---

# useFilter

**useFilter** - хук, предоставляющий методы для сравнения строк. В основе лежит пакет `Intl` и хук `useCollator`.

## API

|       |                                                                                      |
| ----: |:-------------------------------------------------------------------------------------|
| Type: | `(locale?: CollatorLocale, options?: CollatorOptions): UseFilter` |

### `UseFilter`

| Имя	         | Type	           | Описание	                                            |
|:-------------|:----------------|:-----------------------------------------------------|
| `contains`	 | `(string: string, substring: string) => boolean` | 	  содержит ли строка подстроку.                     |
| `startsWith`	 | `(string: string, substring: string) => boolean` | 	  содержит ли переданная строка подстроку в начале. |
| `endsWith`	 | `(string: string, substring: string) => boolean` | 	  содержит ли переданная строка подстроку в конце.  |
| `equal`	 | `(x: string, y: string) => boolean` | 	  равны ли строки между собой.                      |


### `CollatorLocale`

|           |                                              |
|----------:|:---------------------------------------------|
|     Type: | `'string'`                                   |
| Описание: | локаль для объекта `Collator`, [подробнее](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator#%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B) |

### `CollatorLocale`

|           |                                                                                                                                                                                               |
|----------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     Type: | `'Intl.CollatorOptions'`                                                                                                                                                                      |
| Описание: | опции для объекта `Collator`, [подробнее](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator#%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B) |
