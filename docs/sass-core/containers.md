# Containers

Container mixins for responsive layout management that use the `$containers` variable to determine container dimensions and behavior. These mixins automatically generate the appropriate CSS container styles based on the container names and properties defined in your `$containers` map.

## Configuration

The containers are defined in the `$containers` map. The map structure follows the pattern `(name: width gap fluid)` where:

-   **name**: A string identifier for the container (e.g., `default`, `fluid`, `small`)
-   **width**: The container width (can be any CSS unit like `px`, `rem`, `%`, or `none` for full width)
-   **gap**: The container gap (can be any CSS unit like `px`, `rem`, `em`)
-   **fluid**: Optional `fluid` keyword for responsive container behavior

### Fluid Containers

When you add the `fluid` keyword to a container definition, it creates a responsive container that scales with the viewport width. The container will use the larger value between:

-   The specified width
-   A calculated percentage of the viewport width

This ensures the container is never smaller than your specified width but can grow larger on bigger screens.

The fluid calculation uses the `$containers-screen-size-base` variable (default: `1440px`) as the reference point. The formula calculates what percentage of the viewport the container should occupy based on the ratio of your container width to the base screen size.

### Customizing Containers

To use your own containers, define the `$containers` map and `$containers-screen-size-base` **before** importing the Queso Sass core:

```scss
// Define your custom containers
$containers-screen-size-base: 1200px;
$containers: (
    default: 1200px 40px,
    fluid: 1200px 40px fluid,
    small: 600px 20px,
    large: 1600px 80px,
    full: none 0px,
);

// Import Queso Sass core (your containers will be used)
@import "@allomambo/queso/styles/core";
```

### Important Notes

-   **Width**: Can use any CSS unit (`px`, `rem`, `%`, etc.) or `none` for full-width containers
-   **Gap**: Can use any CSS unit (`px`, `rem`, `em`, etc.)
-   **Fluid**: Add the `fluid` keyword as the third value for responsive containers that scale with viewport
-   **Base Screen Size**: The `$containers-screen-size-base` variable (default: `1440px`) is used for fluid calculations
-   **Order**: Define containers before importing Queso Sass core
-   **Naming**: Choose descriptive names that match your design system

::: details Default Values of Variables

```scss
$containers-screen-size-base: 1440px !default;

$containers: (
    default: 1920px 60px,
    fluid: 1920px 60px fluid,
    small: 420px 60px,
    medium: 870px 60px,
    full: none 60px,
) !default;
```

:::

## `container()`

Generates container styles for responsive layouts.

| Parameter  | Type     | Default&nbsp;Value | Description                                                           |
| ---------- | -------- | ------------------ | --------------------------------------------------------------------- |
| `$variant` | `string` | `"default"`        | The container variant to generate. Use 'all' to generate all variants |

::: code-group

```scss [Usage]
.container {
    @include container();
}
```

```css [Rendered CSS]
.container {
    --container-display-default: block;
    --container-width-default: 1920px;
    --container-max-width-default: calc(100% - (var(--container-gap) * 2));
    --container-gap-default: 60px;
    --container-margin-left-default: auto;
    --container-margin-right-default: auto;
    display: var(--container-display, block);
    width: var(--container-width, 1920px);
    max-width: var(
        --container-max-width,
        calc(100% - (var(--container-gap) * 2))
    );
    margin-left: var(--container-margin-left, auto);
    margin-right: var(--container-margin-right, auto);
}
```

:::
