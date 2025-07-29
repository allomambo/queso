# QuesoCollapsible

A collapsible content component with smooth animations and comprehensive accessibility support. It provides a header that can be clicked to expand/collapse content with automatic ARIA attributes and keyboard navigation.

## Basic Usage

```vue
<template>
    <queso-collapsible>
        <template #headerText> Click to expand </template>
        <template #content>
            <p>This content can be expanded and collapsed.</p>
        </template>
    </queso-collapsible>
</template>

<script setup>
import { QuesoCollapsible } from "@allomambo/queso";
</script>
```

## Props

### `expandOnMount`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true`, the collapsible content will be expanded when the component is first mounted.

## Emits

### `collapsible:open`

-   **Payload:** `void`
-   **Description:** Emitted when the collapsible is opened.

### `collapsible:close`

-   **Payload:** `void`
-   **Description:** Emitted when the collapsible is closed.

### `collapsible:toggle`

-   **Payload:** `boolean`
-   **Description:** Emitted when the collapsible state changes. The boolean indicates if it's now open.

## Slots

### `header`

-   **Props:** `{ isCollapsibleOpen: boolean }`
-   **Description:** Completely replaces the entire header content.

### `headerPrefix`

-   **Description:** Content to display before `#headerText`.

### `headerText`

-   **Props:** `{ isCollapsibleOpen: boolean }`
-   **Description:** The main text content of the header.

### `headerSuffix`

-   **Description:** Content to display after `#headerText`.

### `headerIcon`

-   **Props:** `{ isCollapsibleOpen: boolean }`
-   **Description:** The icon displayed in the header. Defaults to "↓".

### `beforeHeader`

-   **Description:** Content to display before the header.

### `afterHeader`

-   **Description:** Content to display after the header.

### `content`

-   **Description:** The collapsible content that will be shown/hidden.

### `beforeContent`

-   **Description:** Content to display before the collapsible content.

### `afterContent`

-   **Description:** Content to display after the collapsible content.

## Examples

### Basic Collapsible

::: code-group

```vue [Vue Template]
<template>
    <queso-collapsible>
        <template #headerText> Click to expand </template>
        <template #content>
            <p>This content can be expanded and collapsed.</p>
        </template>
    </queso-collapsible>
</template>
```

```html [Rendered HTML]
<div class="queso-collapsible is-collapsible-close">
    <div
        class="queso-collapsible__header"
        aria-expanded="false"
        aria-controls="queso-collapsible__abc123"
        tabindex="0"
    >
        <div class="queso-collapsible__header__text">Click to expand</div>
        <div class="queso-collapsible__header__icon">↓</div>
    </div>
    <div class="queso-collapsible__content" id="queso-collapsible__abc123">
        <div class="queso-collapsible__content__inner">
            <p>This content can be expanded and collapsed.</p>
        </div>
    </div>
</div>
```

:::

### Expanded on Mount

```vue
<template>
    <queso-collapsible expand-on-mount>
        <template #headerText> Already expanded </template>
        <template #content>
            <p>This content starts expanded.</p>
        </template>
    </queso-collapsible>
</template>
```

### Custom Header with Slots

::: code-group

```vue [Vue Template]
<template>
    <queso-collapsible>
        <template #headerPrefix>
            <span class="icon">📁</span>
        </template>
        <template #headerText="{ isCollapsibleOpen }">
            {{ isCollapsibleOpen ? "Hide details" : "Show details" }}
        </template>
        <template #headerSuffix>
            <span class="badge">3 items</span>
        </template>
        <template #headerIcon="{ isCollapsibleOpen }">
            {{ isCollapsibleOpen ? "↑" : "↓" }}
        </template>
        <template #content>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </template>
    </queso-collapsible>
</template>
```

```html [Rendered Closed State]
<div class="queso-collapsible is-collapsible-close">
    <div
        class="queso-collapsible__header"
        aria-expanded="false"
        aria-controls="queso-collapsible__abc123"
        tabindex="0"
    >
        <span class="icon">📁</span>
        <div class="queso-collapsible__header__text">Show details</div>
        <span class="badge">3 items</span>
        <div class="queso-collapsible__header__icon">↓</div>
    </div>
    <div class="queso-collapsible__content" id="queso-collapsible__abc123">
        <div class="queso-collapsible__content__inner">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>
</div>
```

```html [Rendered Open State]
<div class="queso-collapsible is-collapsible-open">
    <div
        class="queso-collapsible__header"
        aria-expanded="true"
        aria-controls="queso-collapsible__abc123"
        tabindex="0"
    >
        <span class="icon">📁</span>
        <div class="queso-collapsible__header__text">Hide details</div>
        <span class="badge">3 items</span>
        <div class="queso-collapsible__header__icon">↑</div>
    </div>
    <div class="queso-collapsible__content" id="queso-collapsible__abc123">
        <div class="queso-collapsible__content__inner">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>
</div>
```

:::

### With Event Handling

```vue
<template>
    <queso-collapsible
        @collapsible:open="handleOpen"
        @collapsible:close="handleClose"
        @collapsible:toggle="handleToggle"
    >
        <template #headerText> Interactive collapsible </template>
        <template #content>
            <p>This collapsible triggers events when opened/closed.</p>
        </template>
    </queso-collapsible>
</template>

<script setup>
const handleOpen = () => {
    console.log("Collapsible opened");
};

const handleClose = () => {
    console.log("Collapsible closed");
};

const handleToggle = (isOpen) => {
    console.log("Collapsible toggled:", isOpen);
};
</script>
```

## Exposed Methods

### `open()`

Opens the collapsible content.

### `close()`

Closes the collapsible content.

### `toggle()`

Toggles the collapsible content between open and closed states.

### `isCollapsibleOpen`

Reactive boolean indicating the current open state.

## Behavior

-   **Smooth Animation:** Content expands/collapses with CSS transitions
-   **Keyboard Navigation:** Supports Space key to toggle
-   **Accessibility:** Automatic ARIA attributes (`aria-expanded`, `aria-controls`)
-   **Height Calculation:** Automatically calculates content height for smooth animations
-   **CSS Customization:** Uses CSS custom properties for timing and easing

## Accessibility

The component automatically handles:

-   `aria-expanded` attribute for screen readers
-   `aria-controls` attribute linking to the content
-   `tabindex="0"` for keyboard navigation
-   Space key support for toggling
-   Proper semantic structure

## CSS

### Classes

The component applies the following CSS classes:

-   `.queso-collapsible` - Base class
-   `.is-collapsible-open` - Applied when content is expanded
-   `.is-collapsible-close` - Applied when content is collapsed
-   `.queso-collapsible__header` - Header container
-   `.queso-collapsible__content` - Content container
-   `.queso-collapsible__content__inner` - Inner content wrapper

### Custom Properties

-   `--queso-collapsible-duration` - Animation duration (default: 0.5s)
-   `--queso-collapsible-ease` - Animation easing (default: ease)
-   `--queso-collapsible-header-align` - Header alignment (default: center)
-   `--queso-collapsible-header-justify` - Header justification (default: flex-start)

## Type Declaration

```ts
export interface QuesoCollapsibleProps {
    expandOnMount?: boolean;
}
```
