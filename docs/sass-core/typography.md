# Typography

Typography mixins for text styling and font management.

## `h()`

Applies typographic styles to an element from a headings map.

| Parameter | Type     | Default&nbsp;Value | Description                     |
| --------- | -------- | ------------------ | ------------------------------- |
| `$t`      | `string` | -                  | The name of the heading element |
| `$titles` | `map`    | `$headings`        | The headings map to use         |

::: code-group

```scss [Usage]
h1 {
    @include h(h1);
}
```

```css [Rendered CSS]
h1 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.2;
}
```

:::

## `fontfaces()`

Generates @font-face declarations for web fonts.

| Parameter   | Type     | Default&nbsp;Value | Description                   |
| ----------- | -------- | ------------------ | ----------------------------- |
| `$webfonts` | `list`   | -                  | List of font configurations   |
| `$dir`      | `string` | -                  | Directory path for font files |

::: code-group

```scss [Usage]
@include fontfaces((("Roboto", "roboto-regular", 400, normal)), "/fonts/");
```

```css [Rendered CSS]
@font-face {
    font-family: "Roboto";
    src:
        url("/fonts/roboto-regular.woff2") format("woff2"),
        url("/fonts/roboto-regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

:::

## `selection()`

Styles text selection.

::: code-group

```scss [Usage]
@include selection {
    background-color: yellow;
    color: black;
}
```

```css [Rendered CSS]
::selection {
    text-shadow: none;
    background-color: yellow;
    color: black;
}
```

:::

## `ellipsis()`

Creates text ellipsis for overflowing text.

::: code-group

```scss [Usage]
.text {
    @include ellipsis();
}
```

```css [Rendered CSS]
.text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
```

:::

## `hyphenate()`

Enables automatic hyphenation for long words.

::: code-group

```scss [Usage]
.text {
    @include hyphenate();
}
```

```css [Rendered CSS]
.text {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
}
```

:::

## `underline()`

Creates an underline effect with customizable styling.

| Parameter        | Type     | Default&nbsp;Value | Description                         |
| ---------------- | -------- | ------------------ | ----------------------------------- |
| `$line-display`  | `string` | `none`             | The display value for the underline |
| `$color-line`    | `color`  | `$color-light`     | The color of the underline          |
| `$padding`       | `number` | `2em`              | The padding around the underline    |
| `$margin-bottom` | `number` | `0.4em`            | The bottom margin of the underline  |

::: code-group

```scss [Usage]
.link {
    @include underline(block, #333, 1em, 0.2em);
}
```

```css [Rendered CSS]
.link:after {
    display: block;
    content: " ";
    position: absolute;
    height: 1px;
    background-color: #333;
    left: 1em;
    bottom: 0.2em;
    right: 1em;
}
```

:::

## `antialiased()`

Applies better font rendering for smoother text.

::: code-group

```scss [Usage]
.text {
    @include antialiased();
}
```

```css [Rendered CSS]
.text {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-osx-font-smoothing: antialiased;
}
```

:::
