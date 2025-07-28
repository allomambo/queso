# Grid

CSS Grid mixins for responsive layouts that use the `$grid` variable to determine grid columns and gaps. These mixins automatically generate the appropriate CSS Grid styles based on the grid configuration defined in your `$grid` map.

## Configuration

The grid is defined in the `$grid` map. The map structure follows the pattern `(breakpoint: columns gap)` where:

-   **breakpoint**: A breakpoint name from your `$breakpoints` map (e.g., `xs`, `sm`, `md`)
-   **columns**: The number of columns for this breakpoint
-   **gap**: The gap size (can be any CSS unit like `px`, `rem`, `em`)

### Customizing Grid

To use your own grid configuration, define the `$grid` map **before** importing the Queso Sass core:

```scss
// Define your custom grid
$grid: (
    xs: 4 20px,
    md: 8 25px,
    lg: 12 30px,
    xl: 16 40px,
);

// Import Queso Sass core (your grid will be used)
@import "@allomambo/queso/styles/core";
```

### Important Notes

-   **Breakpoints**: Grid breakpoints must match those defined in your `$breakpoints` map
-   **Columns**: Use positive integers for the number of columns
-   **Gap**: Can use any CSS unit (`px`, `rem`, `em`, etc.)
-   **Order**: Define grid before importing Queso Sass core
-   **Naming**: Breakpoint names should match your breakpoint configuration

::: details `$grid` Default Value

```scss
$grid: (
    xs: 4 20px,
    lg: 8 30px,
    xl: 12 30px,
) !default;
```

:::

## `grid()`

Creates a CSS Grid container with responsive column classes.

| Parameter     | Type     | Default&nbsp;Value | Description                                   |
| ------------- | -------- | ------------------ | --------------------------------------------- |
| `$columns`    | `number` | `null`             | The number of columns (auto-detected if null) |
| `$rows`       | `number` | `1`                | The number of rows                            |
| `$gap`        | `number` | `null`             | The gap size (auto-detected if null)          |
| `$var-prefix` | `string` | `"grid"`           | The CSS variable prefix                       |
| `$bps`        | `map`    | `$breakpoints`     | The breakpoints map to use                    |

::: code-group

```scss [Usage]
.grid {
    @include grid(12, 1, 20px);
}
```

```css [Rendered CSS]
.grid {
    display: var(--grid-display, grid);
    grid-template-rows: repeat(var(--grid-rows, 1), minmax(0, 1fr));
    grid-template-columns: repeat(var(--grid-columns, 12), minmax(0, 1fr));
    column-gap: var(--grid-col-gap, var(--grid-gap, 20px));
    row-gap: var(--grid-row-gap, var(--grid-gap, 20px));
}
.grid > * {
    grid-column-start: var(--grid-col-start, 1);
    grid-column-end: var(--grid-col-end, -1);
}
```

:::
