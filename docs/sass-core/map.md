# Map

Sass map helper functions for data manipulation.

## `is-map()`

Checks if a variable is a Sass map.

| Parameter | Type  | Default&nbsp;Value | Description           |
| --------- | ----- | ------------------ | --------------------- |
| `$var`    | `any` | -                  | The variable to check |

::: code-group

```scss [Usage]
$is-map: is-map(
    (
        key: value,
    )
);
// Returns: true
```

```scss [Result]
true
```

:::

## `index-exists()`

Checks if a value exists in a list.

| Parameter | Type   | Default&nbsp;Value | Description             |
| --------- | ------ | ------------------ | ----------------------- |
| `$map`    | `list` | -                  | The list to search in   |
| `$val`    | `any`  | -                  | The value to search for |

::: code-group

```scss [Usage]
$exists: index-exists((a, b, c), b);
// Returns: true
```

```scss [Result]
true
```

:::

## `getFirstKey()`

Returns the first key of a map.

| Parameter | Type  | Default&nbsp;Value | Description                       |
| --------- | ----- | ------------------ | --------------------------------- |
| `$values` | `map` | -                  | The map to get the first key from |

::: code-group

```scss [Usage]
$first: getFirstKey(
    (
        a: 1,
        b: 2,
        c: 3,
    )
);
// Returns: a
```

```scss [Result]
a
```

:::

## `getLargestValue()`

Returns the largest value from a map.

| Parameter    | Type     | Default&nbsp;Value | Description                              |
| ------------ | -------- | ------------------ | ---------------------------------------- |
| `$values`    | `map`    | -                  | The map to search in                     |
| `$sub-value` | `number` | `0`                | The index of the sub-value to compare    |
| `$return`    | `string` | `"value"`          | What to return (value, key, or complete) |

::: code-group

```scss [Usage]
$largest: getLargestValue(
    (
        a: 10,
        b: 20,
        c: 15,
    )
);
// Returns: 20
```

```scss [Result]
20
```

:::
