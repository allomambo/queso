# Layout

Layout mixins for positioning and overflow management.

## `fullscreen()`

Creates a fullscreen element with customizable positioning.

| Parameter     | Type     | Default&nbsp;Value | Description             |
| ------------- | -------- | ------------------ | ----------------------- |
| `$position`   | `string` | `absolute`         | The position value      |
| `$top`        | `number` | `0`                | The top value           |
| `$right`      | `number` | `0`                | The right value         |
| `$bottom`     | `number` | `0`                | The bottom value        |
| `$left`       | `number` | `0`                | The left value          |
| `$var-prefix` | `string` | `"fullscreen"`     | The CSS variable prefix |

::: code-group

```scss [Usage]
.overlay {
    @include fullscreen();
}
```

```css [Rendered CSS]
.overlay {
    position: var(--fullscreen-position, absolute);
    top: var(--fullscreen-top, 0);
    right: var(--fullscreen-right, 0);
    bottom: var(--fullscreen-bottom, 0);
    left: var(--fullscreen-left, 0);
}
```

:::

## `center-viewport()`

Centers an element horizontally in the viewport.

| Parameter | Type     | Default&nbsp;Value | Description              |
| --------- | -------- | ------------------ | ------------------------ |
| `$width`  | `number` | `100vw`            | The width of the element |

::: code-group

```scss [Usage]
.modal {
    @include center-viewport(500px);
}
```

```css [Rendered CSS]
.modal {
    left: calc(50% - 500px);
    width: 500px;
}
```

:::

## `clearfix()`

Clears floated elements within a container.

::: code-group

```scss [Usage]
.container {
    @include clearfix();
}
```

```css [Rendered CSS]
.container:after {
    content: "";
    display: block;
    height: 1px;
    clear: both;
}
```

:::

## `hide-scrollbar()`

Hides scrollbars while maintaining scroll functionality.

::: code-group

```scss [Usage]
.scrollable {
    @include hide-scrollbar();
}
```

```css [Rendered CSS]
.scrollable {
    scrollbar-width: none;
    scrollbar-height: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
}
.scrollable::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
}
```

:::

## `overflow()`

Creates scrollable overflow with hidden scrollbars.

| Parameter      | Type     | Default&nbsp;Value | Description                                         |
| -------------- | -------- | ------------------ | --------------------------------------------------- |
| `$orientation` | `string` | `"vertical"`       | The overflow direction (horizontal, vertical, both) |

::: code-group

```scss [Usage]
.content {
    @include overflow(vertical);
}
```

```css [Rendered CSS]
.content {
    overflow-y: auto;
    scrollbar-width: none;
    scrollbar-height: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
}
.content::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
}
```

:::

## `min-aspect-ratio()`

Creates an element that maintains a minimum aspect ratio using the padding-bottom hack.

| Parameter | Type     | Default&nbsp;Value | Description                             |
| --------- | -------- | ------------------ | --------------------------------------- |
| `$min`    | `number` | `1`                | The minimum aspect ratio (width/height) |

::: code-group

```scss [Usage]
.image-container {
    @include min-aspect-ratio(16/9);
}
```

```css [Rendered CSS]
.image-container:before {
    content: "";
    float: left;
    padding-bottom: var(--min-aspect-ratio, 177.7777777778%);
}
.image-container:after {
    content: "";
    display: table;
    clear: both;
}
```

:::
