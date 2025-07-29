# QuesoScrollable

A scrollable container component that provides scroll detection, overflow shadows, and event emission when reaching scroll boundaries. It automatically detects when content overflows and provides visual feedback through optional shadows.

## Basic Usage

```vue
<template>
    <queso-scrollable :offset="20" shadows>
        <!-- Your scrollable content here -->
    </queso-scrollable>
</template>

<script setup lang="ts">
import { QuesoScrollable } from "@components/QuesoScrollable";
</script>
```

## Props

### `offset`

-   **Type:** `number`
-   **Default:** `0`
-   **Description:** Distance from the top and bottom edges to trigger arrival events. Useful for pre-loading content or triggering actions before reaching the exact boundary.

### `shadows`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Enables overflow shadows that appear when content is scrollable. Shadows fade when reaching scroll boundaries.

## Emits

### `scrollable:top:reached`

-   **Payload:** `void`
-   **Description:** Emitted when the scroll position reaches the top boundary (considering the offset).

### `scrollable:bottom:reached`

-   **Payload:** `void`
-   **Description:** Emitted when the scroll position reaches the bottom boundary (considering the offset).

## Behavior

-   **Overflow Detection:** Automatically detects when content overflows vertically
-   **Scroll Boundaries:** Tracks arrival at top and bottom boundaries with configurable offset
-   **Event Emission:** Emits events when reaching scroll boundaries
-   **Visual Feedback:** Optional shadows that fade when reaching boundaries
-   **Responsive:** Adapts to content size changes through resize observation

## Accessibility

The component provides:

-   **Semantic Structure:** Proper container structure for scrollable content
-   **Visual Indicators:** Optional shadows provide visual feedback about scroll state
-   **Event Handling:** Events can be used to implement infinite scrolling or other accessibility features

## CSS

### Classes

The component applies the following CSS classes:

-   `.queso-scrollable` - Base container class
-   `.queso-scrollable__content` - Content wrapper
-   `.has-shadows` - Applied when shadows are enabled
-   `.is-scrolled-top` - Applied when scrolled to the top
-   `.is-scrolled-bottom` - Applied when scrolled to the bottom

### Custom Properties

-   `--queso-scrollable-height` - Container height (default: auto)
-   `--queso-scrollable-content-height` - Content height (default: 100%)
-   `--overflow-shadow-before-opacity` - Top shadow opacity (controlled by component)
-   `--overflow-shadow-after-opacity` - Bottom shadow opacity (controlled by component)
