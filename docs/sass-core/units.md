# Units

Unit conversion and manipulation functions for CSS values. These functions help you work with different CSS units, convert between them, and perform unit-related operations in your Sass code.

## `strip-units()`

Removes units from a number.

| Parameter | Type     | Default&nbsp;Value | Description                    |
| --------- | -------- | ------------------ | ------------------------------ |
| `$number` | `number` | -                  | The number with units to strip |

::: code-group

```scss [Usage]
$unitless: strip-units(16px);
// Returns: 16
```

```scss [Result]
16
```

:::

## `units-are-same()`

Determines whether two values have the same units.

| Parameter | Type     | Default&nbsp;Value | Description                 |
| --------- | -------- | ------------------ | --------------------------- |
| `$value1` | `number` | -                  | The first value to compare  |
| `$value2` | `number` | -                  | The second value to compare |

::: code-group

```scss [Usage]
$same: units-are-same(10px, 20px);
// Returns: true
```

```scss [Result]
true
```

:::

## `rem()`

Converts pixels to rem units.

| Parameter | Type     | Default&nbsp;Value | Description                   |
| --------- | -------- | ------------------ | ----------------------------- |
| `$value`  | `number` | -                  | The pixel value to convert    |
| `$ratio`  | `number` | `10`               | The base ratio for conversion |

::: code-group

```scss [Usage]
$rem: rem(16px);
// Returns: 1.6rem
```

```scss [Result]
1.6rem
```

:::

## `em()`

Converts pixels to em units.

| Parameter | Type     | Default&nbsp;Value | Description                   |
| --------- | -------- | ------------------ | ----------------------------- |
| `$value`  | `number` | -                  | The pixel value to convert    |
| `$ratio`  | `number` | `10`               | The base ratio for conversion |

::: code-group

```scss [Usage]
$em: em(16px);
// Returns: 1.6em
```

```scss [Result]
1.6em
```

:::

## `vh()`

Calculates viewport height percentage using CSS custom properties.

| Parameter | Type     | Default&nbsp;Value | Description           |
| --------- | -------- | ------------------ | --------------------- |
| `$number` | `number` | -                  | The percentage number |

::: code-group

```scss [Usage]
$height: vh(50);
// Returns: calc(50 * var(--vh, 1vh))
```

```scss [Result]
calc(50 * var(--vh, 1vh))
```

:::
