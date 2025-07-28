# QuesoClickable

A unified component for all clickable elements that automatically adapts its behavior based on the markup type. Instead of using different components for buttons, links, and router links, QuesoClickable handles the appropriate attributes and behavior for each type - from accessibility attributes to external link handling and download functionality.

## Basic Usage

```vue
<template>
    <queso-clickable>Click me</queso-clickable>
</template>

<script setup>
import { QuesoClickable } from "@allomambo/queso";
</script>
```

## Props

### `markup`

-   **Type:** `"button" | "a" | "router-link" | "div" | "span"`
-   **Default:** `"button"`
-   **Description:** Determines the HTML element or Vue Router component to render.

### `url`

-   **Type:** `string | object`
-   **Default:** `undefined`
-   **Description:** The URL or route object to navigate to. Required when `markup` is `"a"` or `"router-link"`. When using `"router-link"` markup, this prop accepts the same values as Vue Router's `to` prop. See the [Vue Router documentation](https://router.vuejs.org/api/interfaces/UseLinkOptions.html) for more details.

### `isDisabled`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Disables the clickable element and adds appropriate accessibility attributes.

### `isExternal`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true` and `markup` is `"a"`, adds `target="_blank"` for external links.

### `isDownload`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true` and `markup` is `"a"`, adds the `download` attribute for file downloads.

### Type Declaration

```ts
export type QuesoClickableMarkup =
    | "button"
    | "a"
    | "router-link"
    | "div"
    | "span";

export interface QuesoClickableProps {
    markup?: QuesoClickableMarkup;
    url?: string | object;
    isDisabled?: boolean;
    isExternal?: boolean;
    isDownload?: boolean;
}
```

## Examples

### Button (Default)

::: code-group

```vue [Vue Template]
<template>
    <queso-clickable @click="handleClick"> Click me </queso-clickable>
</template>
```

```html [Rendered HTML]
<button class="queso-clickable">Click me</button>
```

:::

### External Link

::: code-group

```vue [Vue Template]
<template>
    <queso-clickable markup="a" url="https://example.com" is-external>
        Visit external site
    </queso-clickable>
</template>
```

```html [Rendered HTML]
<a class="queso-clickable" href="https://example.com" target="_blank">
    Visit external site
</a>
```

:::

### Router Link

```vue
<template>
    <queso-clickable markup="router-link" :url="{ name: 'about' }">
        About page
    </queso-clickable>
</template>
```

### Download Link

::: code-group

```vue [Vue Template]
<template>
    <queso-clickable markup="a" url="/files/document.pdf" is-download>
        Download PDF
    </queso-clickable>
</template>
```

```html [Rendered HTML]
<a class="queso-clickable is-download" href="/files/document.pdf" download>
    Download PDF
</a>
```

:::

### Disabled State

::: code-group

```vue [Vue Template]
<template>
    <queso-clickable is-disabled> Disabled button </queso-clickable>
</template>
```

```html [Rendered HTML]
<button class="queso-clickable is-disabled" disabled aria-disabled="true">
    Disabled button
</button>
```

:::

## Behavior

-   **Button (default):** Renders as a `<button>` element with proper accessibility attributes
-   **Anchor (`a`):** Renders as an `<a>` element with `href`, `target`, and `download` attributes as needed
-   **Router Link (`router-link`):** Renders as a Vue Router link with `to` prop
-   **Div/Span:** Renders as the specified element for custom styling scenarios. Note that `url`, `isExternal`, and `isDownload` props are ignored when using these markup types

## Accessibility

The component automatically handles:

-   `disabled` attribute for disabled state
-   `aria-disabled` attribute for screen readers
-   `target="_blank"` for external links
-   Proper semantic HTML elements

## CSS Classes

The component applies the following CSS classes:

-   `.queso-clickable` - Base class
-   `.is-disabled` - Applied when `isDisabled` is `true`
-   `.is-download` - Applied when `isDownload` is `true` and markup is `"a"`
