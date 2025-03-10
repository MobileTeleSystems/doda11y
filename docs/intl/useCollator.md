---
outline: deep
---

# useCollator

**useCollator** - хук, предоставляющий возможность взаимодействия с объектом `Collator` `Intl` класса.

## API

|       |                                            |
| ----: | :----------------------------------------- |
| Type: | `(locale?: CollatorLocale, options?: CollatorOptions): UseCollator` |

### `UseCollator`

| Имя	         | Type	           | Описание	                                       |
|:-------------|:----------------|:------------------------------------------------|
| `collator`	 | `Intl.Collator` | 	  `Collator`, предоставляемый из класса `Intl`. |


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
