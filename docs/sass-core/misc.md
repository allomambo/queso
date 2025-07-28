# Miscellaneous

## `make-variations()`

Creates CSS custom properties with various size variations based on a base value.

| Parameter   | Type      | Default&nbsp;Value | Description                             |
| ----------- | --------- | ------------------ | --------------------------------------- |
| `$name`     | `string`  | -                  | The name of the variable                |
| `$size`     | `number`  | -                  | The base size to create variations from |
| `$advanced` | `boolean` | `false`            | Whether to generate advanced variations |
| `$minus`    | `boolean` | `false`            | Whether to generate negative variations |

::: code-group

```scss [Usage]
.element {
    @include make-variations(spacing, 20px, true, true);
}
```

```css [Rendered CSS]
.element {
    --spacing: 20px;
    --spacing-half: calc(var(--spacing) / 2);
    --spacing-third: calc(var(--spacing) / 3);
    --spacing-2X: calc(var(--spacing) * 2);
    --spacing-4X: calc(var(--spacing) * 4);
    --spacing-two-third: calc((var(--spacing) / 3) * 2);
    --spacing-quarter: calc(var(--spacing) / 4);
    --spacing-three-quarter: calc((var(--spacing) / 4) * 3);
    --spacing-fifth: calc(var(--spacing) / 5);
    --spacing-sixth: calc(var(--spacing) / 6);
    --spacing-1-25X: calc(var(--spacing) * 1.25);
    --spacing-1-5X: calc(var(--spacing) * 1.5);
    --spacing-1-75X: calc(var(--spacing) * 1.75);
    --spacing-3X: calc(var(--spacing) * 3);
    --spacing-5X: calc(var(--spacing) * 5);
    --spacing-6X: calc(var(--spacing) * 6);
    --spacing-minus: calc(var(--spacing) * -1);
    --spacing-minus-half: calc(var(--spacing) / -2);
    --spacing-minus-third: calc(var(--spacing) / -3);
    --spacing-minus-2X: calc(var(--spacing) * -2);
    --spacing-minus-4X: calc(var(--spacing) * -4);
    --spacing-minus-two-third: calc((var(--spacing) / 3) * -2);
    --spacing-minus-quarter: calc(var(--spacing) / -4);
    --spacing-minus-three-quarter: calc((var(--spacing) / 4) * -3);
    --spacing-minus-1-25X: calc(var(--spacing) * -1.25);
    --spacing-minus-1-5X: calc(var(--spacing) * -1.5);
    --spacing-minus-1-75X: calc(var(--spacing) * -1.75);
    --spacing-minus-3X: calc(var(--spacing) * -3);
    --spacing-minus-5X: calc(var(--spacing) * -5);
    --spacing-minus-6X: calc(var(--spacing) * -6);
}
```

:::
