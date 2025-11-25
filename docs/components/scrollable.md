# QuesoScrollable

A scrollable container component that provides scroll detection, overflow shadows, and event emission when reaching scroll boundaries. It automatically detects when content overflows and provides visual feedback through optional automatic shadows or custom indicator slots.

## Basic Usage

```vue
<template>
    <queso-scrollable :offset="20" shadows>
        <!-- Your scrollable content here -->
    </queso-scrollable>

    <queso-scrollable :offset="20">
        <template #topIndicator>
            <!-- Your top indicator content here -->
        </template>

        <!-- Your scrollable content here -->

        <template #bottomIndicator>
            <!-- Your bottom indicator content here -->
        </template>
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
-   **Description:** Enables automatic overflow shadows that appear when content is scrollable. Shadows fade when reaching scroll boundaries. When enabled, custom indicator slots are not displayed.

## Slots

### `topIndicator`

-   **Description:** Custom indicator content displayed at the top of the scrollable container. Automatically hidden when scrolled to the top. Only displayed when `shadows` prop is `false`.

### `bottomIndicator`

-   **Description:** Custom indicator content displayed at the bottom of the scrollable container. Automatically hidden when scrolled to the bottom. Only displayed when `shadows` prop is `false`.

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
-   **Visual Feedback:** Optional automatic shadows or custom indicators that fade when reaching boundaries
-   **Responsive:** Adapts to content size changes through resize observation

## Accessibility

The component provides:

-   **Semantic Structure:** Proper container structure for scrollable content
-   **Visual Indicators:** Optional automatic shadows or custom indicators provide visual feedback about scroll state
-   **Event Handling:** Events can be used to implement infinite scrolling or other accessibility features

## CSS

### Classes

The component applies the following CSS classes:

-   `.queso-scrollable` - Base container class
-   `.queso-scrollable__content` - Content wrapper
-   `.queso-scrollable__top-indicator` - Container for top indicator slot
-   `.queso-scrollable__bottom-indicator` - Container for bottom indicator slot
-   `.has-shadows` - Applied when automatic shadows are enabled
-   `.is-scrolled-top` - Applied when scrolled to the top
-   `.is-scrolled-bottom` - Applied when scrolled to the bottom

### Custom Properties

-   `--queso-scrollable-height` - Container height (default: auto)
-   `--queso-scrollable-content-height` - Content height (default: 100%)

**Indicator Slot Properties:**

-   `--queso-scrollable-indicator-position` - Position property (default: absolute)
-   `--queso-scrollable-indicator-z` - Z-index (default: 9)
-   `--queso-scrollable-indicator-offset` - Global offset for left and right (default: 0)
-   `--queso-scrollable-indicator-offset-left` - Left offset (default: uses `--queso-scrollable-indicator-offset`)
-   `--queso-scrollable-indicator-offset-right` - Right offset (default: uses `--queso-scrollable-indicator-offset`)
-   `--queso-scrollable-indicator-color` - Color used in default gradient (default: white)
-   `--queso-scrollable-indicator-direction` - Gradient direction (automatically set: 180deg for top, 0deg for bottom)
-   `--queso-scrollable-indicator-before-top` - Top position offset for top indicator (default: 0)
-   `--queso-scrollable-top-indicator-opacity` - Top indicator opacity (default: 1, set to 0 when hidden)
-   `--queso-scrollable-top-indicator-background` - Top indicator background override (default: gradient using `--queso-scrollable-indicator-color`)
-   `--queso-scrollable-indicator-after-bottom` - Bottom position offset for bottom indicator (default: 0)
-   `--queso-scrollable-bottom-indicator-opacity` - Bottom indicator opacity (default: 1, set to 0 when hidden)
-   `--queso-scrollable-bottom-indicator-background` - Bottom indicator background override (default: gradient using `--queso-scrollable-indicator-color`)

**Automatic Shadow Properties (when using `shadows` prop):**

-   `--overflow-shadow-before-opacity` - Top shadow opacity (controlled by component)
-   `--overflow-shadow-after-opacity` - Bottom shadow opacity (controlled by component)
