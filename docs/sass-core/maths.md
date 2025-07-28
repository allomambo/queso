# Maths

Mathematical utility functions for calculations.

## `minus()`

Returns the negative value of a number.

| Parameter | Type     | Default&nbsp;Value | Description                |
| --------- | -------- | ------------------ | -------------------------- |
| `$value`  | `number` | -                  | The value to make negative |

```scss
$result: minus(10px);
// Returns: calc(10px * -1)
```

## `divide()`

Performs division between two numbers.

| Parameter | Type     | Default&nbsp;Value | Description     |
| --------- | -------- | ------------------ | --------------- |
| `$den`    | `number` | -                  | The denominator |
| `$num`    | `number` | -                  | The numerator   |

```scss
$result: divide(20, 4);
// Returns: 5
```

## `multiply()`

Multiplies a value by a factor using CSS calc().

| Parameter | Type     | Default&nbsp;Value | Description                   |
| --------- | -------- | ------------------ | ----------------------------- |
| `$factor` | `number` | `1`                | The multiplier factor         |
| `$var`    | `string` | `var(--spacer)`    | The base variable to multiply |

```scss
$result: multiply(2);
// Returns: calc(var(--spacer) * 2)
```
