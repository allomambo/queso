# Visuals

Visual mixins for images, shapes, and gradients.

## `object-fit()`

Applies object-fit and object-position properties.

| Parameter     | Type     | Default&nbsp;Value | Description                                                   |
| ------------- | -------- | ------------------ | ------------------------------------------------------------- |
| `$fit`        | `string` | `cover`            | The object-fit value (cover, contain, fill, none, scale-down) |
| `$position`   | `string` | `50% 50%`          | The object-position value                                     |
| `$var-prefix` | `string` | `"obj"`            | The CSS variable prefix                                       |

::: code-group

```scss [Usage]
.image {
    @include object-fit(cover, center);
}
```

```css [Rendered CSS]
.image {
    width: var(--obj-width, 100%);
    height: var(--obj-height, 100%);
    object-fit: var(--obj-object-fit, cover);
    object-position: var(--obj-object-position, center);
}
```

:::

## `triangle()`

Creates CSS triangles using borders.

| Parameter          | Type     | Default&nbsp;Value | Description                                    |
| ------------------ | -------- | ------------------ | ---------------------------------------------- |
| `$direction`       | `string` | -                  | The triangle direction (up, right, down, left) |
| `$triangle-width`  | `number` | -                  | The width of the triangle                      |
| `$triangle-height` | `number` | -                  | The height of the triangle                     |
| `$triangle-color`  | `color`  | -                  | The color of the triangle                      |

::: code-group

```scss [Usage]
.arrow {
    @include triangle(up, 20px, 10px, #333);
}
```

```css [Rendered CSS]
.arrow {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent #333;
    border-width: 0 10px 10px;
}
```

:::

## `linear-gradient()`

Creates linear gradients with fallback colors.

| Parameter      | Type     | Default&nbsp;Value | Description                      |
| -------------- | -------- | ------------------ | -------------------------------- |
| `$direction`   | `string` | -                  | The gradient direction           |
| `$color-stops` | `list`   | -                  | The color stops for the gradient |

::: code-group

```scss [Usage]
.element {
    @include linear-gradient(to right, #ff0000, #00ff00);
}
```

```css [Rendered CSS]
.element {
    background: #ff0000;
    background: linear-gradient(to right, #ff0000, #00ff00);
}
```

:::

## `overflow-shadows()`

Adds shadows to indicate scrollable content with fade effects.

::: code-group

```scss [Usage]
.scrollable-content {
    @include overflow-shadows();
}
```

```css [Rendered CSS]
.scrollable-content {
    position: relative;
}
.scrollable-content:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
    pointer-events: none;
    z-index: 1;
    opacity: var(--overflow-shadow-before-opacity, 1);
}
.scrollable-content:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), transparent);
    pointer-events: none;
    z-index: 1;
    opacity: var(--overflow-shadow-after-opacity, 1);
}
```

:::
