# Breakpoints

Breakpoint mixins for responsive design that use the `$breakpoints` variable to determine media query breakpoints. These mixins automatically generate the appropriate CSS media queries based on the breakpoint names and widths defined in your `$breakpoints` map.

## Configuration

The breakpoints are defined in the `$breakpoints` map. The map structure follows the pattern `(name: width)` where:

-   **name**: A string identifier for the breakpoint (e.g., `xs`, `sm`, `md`)
-   **width**: The width in pixels where this breakpoint becomes active

### Customizing Breakpoints

To use your own breakpoints, define the `$breakpoints` map **before** importing the Queso Sass core:

```scss
// Define your custom breakpoints
$breakpoints: (
    mobile: 0,
    tablet: 768px,
    desktop: 1024px,
    wide: 1440px,
    ultra: 1920px,
);

// Import Queso Sass core (your breakpoints will be used)
@import "@allomambo/queso/styles/core";
```

### Important Notes

-   **Mobile First**: The smallest breakpoint should always be `0` to follow mobile-first principles
-   **Pixel Units**: Use `px` units for consistency and clarity
-   **Order**: Breakpoints should be ordered from smallest to largest
-   **Naming**: Choose descriptive names that match your design system
-   **Timing**: Define breakpoints before importing Queso Sass core

::: details `$breakpoints` Default Value

```scss
$breakpoints: (
    xxs: 0,
    xs: 420px,
    sm: 576px,
    md: 768px,
    lg: 1024px,
    xl: 1280px,
    2xl: 1536px,
    3xl: 1920px,
) !default;
```

:::

## `min()`

Applies styles for the given breakpoint and wider.

| Parameter | Type     | Default&nbsp;Value | Description                |
| --------- | -------- | ------------------ | -------------------------- |
| `$name`   | `string` | -                  | The breakpoint name        |
| `$bps`    | `map`    | `$breakpoints`     | The breakpoints map to use |

::: code-group

```scss [Usage]
.container {
    @include min(md) {
        padding: 2rem;
    }
}
```

```css [Rendered CSS]
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}
```

:::

## `max()`

Applies styles for the given breakpoint and narrower.

| Parameter | Type     | Default&nbsp;Value | Description                |
| --------- | -------- | ------------------ | -------------------------- |
| `$name`   | `string` | -                  | The breakpoint name        |
| `$bps`    | `map`    | `$breakpoints`     | The breakpoints map to use |

::: code-group

```scss [Usage]
.container {
    @include max(lg) {
        padding: 1rem;
    }
}
```

```css [Rendered CSS]
@media (max-width: 1023.98px) {
    .container {
        padding: 1rem;
    }
}
```

:::

## `between()`

Applies styles between two breakpoints.

| Parameter | Type     | Default&nbsp;Value | Description                |
| --------- | -------- | ------------------ | -------------------------- |
| `$lower`  | `string` | -                  | The lower breakpoint name  |
| `$upper`  | `string` | -                  | The upper breakpoint name  |
| `$bps`    | `map`    | `$breakpoints`     | The breakpoints map to use |

::: code-group

```scss [Usage]
.container {
    @include between(md, lg) {
        padding: 1.5rem;
    }
}
```

```css [Rendered CSS]
@media (min-width: 768px) and (max-width: 1023.98px) {
    .container {
        padding: 1.5rem;
    }
}
```

:::

## `only()`

Applies styles only for the given breakpoint.

| Parameter | Type     | Default&nbsp;Value | Description                |
| --------- | -------- | ------------------ | -------------------------- |
| `$name`   | `string` | -                  | The breakpoint name        |
| `$bps`    | `map`    | `$breakpoints`     | The breakpoints map to use |

::: code-group

```scss [Usage]
.container {
    @include only(md) {
        padding: 1.5rem;
    }
}
```

```css [Rendered CSS]
@media (min-width: 768px) and (max-width: 1023.98px) {
    .container {
        padding: 1.5rem;
    }
}
```

:::

## `min-custom()`

Applies styles for custom minimum width.

| Parameter | Type     | Default&nbsp;Value | Description             |
| --------- | -------- | ------------------ | ----------------------- |
| `$min`    | `number` | -                  | The minimum width value |

::: code-group

```scss [Usage]
.container {
    @include min-custom(600px) {
        padding: 2rem;
    }
}
```

```css [Rendered CSS]
@media (min-width: 600px) {
    .container {
        padding: 2rem;
    }
}
```

:::

## `max-custom()`

Applies styles for custom maximum width.

| Parameter | Type     | Default&nbsp;Value | Description             |
| --------- | -------- | ------------------ | ----------------------- |
| `$max`    | `number` | -                  | The maximum width value |

::: code-group

```scss [Usage]
.container {
    @include max-custom(900px) {
        padding: 1rem;
    }
}
```

```css [Rendered CSS]
@media (max-width: 900px) {
    .container {
        padding: 1rem;
    }
}
```

:::

## `between-custom()`

Applies styles between custom minimum and maximum widths.

| Parameter | Type     | Default&nbsp;Value | Description             |
| --------- | -------- | ------------------ | ----------------------- |
| `$min`    | `number` | -                  | The minimum width value |
| `$max`    | `number` | -                  | The maximum width value |

::: code-group

```scss [Usage]
.container {
    @include between-custom(600px, 900px) {
        padding: 1.5rem;
    }
}
```

```css [Rendered CSS]
@media (min-width: 600px) and (max-width: 899px) {
    .container {
        padding: 1.5rem;
    }
}
```

:::
