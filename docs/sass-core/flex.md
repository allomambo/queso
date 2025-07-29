# Flex

Flexbox layout mixin for stacking elements.

## `stack()`

Creates a flexbox container for stacking elements with customizable alignment and spacing.

| Parameter      | Type      | Default&nbsp;Value | Description                                                                                |
| -------------- | --------- | ------------------ | ------------------------------------------------------------------------------------------ |
| `$orientation` | `string`  | `"horizontal"`     | The stack orientation (horizontal, vertical)                                               |
| `$alignX`      | `string`  | `"center"`         | X-axis alignment (left, right, center, stretch, space-around, space-between, space-evenly) |
| `$alignY`      | `string`  | `"center"`         | Y-axis alignment (top, bottom, center, stretch, space-around, space-between, space-evenly) |
| `$gap`         | `number`  | `$stack-gap`       | The gap between elements                                                                   |
| `$wrap`        | `boolean` | `true`             | Whether elements can wrap to multiple lines                                                |
| `$var-prefix`  | `string`  | `"stack"`          | The CSS variable prefix                                                                    |

::: code-group

```scss [Usage]
.container {
    @include stack(horizontal, center, center, 20px);
}
```

```css [Rendered CSS]
.container {
    display: var(--stack-display, flex);
    align-items: var(--stack-align, center);
    justify-content: var(--stack-justify, center);
    flex-direction: var(--stack-direction, row);
    column-gap: var(--stack-col-gap, var(--stack-gap, 20px));
    row-gap: var(--stack-row-gap, var(--stack-gap, 20px));
    flex-wrap: var(--stack-wrap, wrap);
}
```

:::
