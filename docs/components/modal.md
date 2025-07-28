# QuesoModal

A modal component with comprehensive accessibility support, focus management, and automatic body scroll locking. It uses Vue's Teleport to render at the document body level and provides automatic ARIA attributes and keyboard navigation.

## Basic Usage

```vue
<template>
    <button @click="openModal()">Open modal</button>

    <queso-modal ref="myModal">
        <p>This is the modal content.</p>
    </queso-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { QuesoModal } from "@components/QuesoModal";

const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.open();
};

const closeModal = () => {
    myModal.value?.close();
};
</script>
```

## Emits

### `modal:open`

-   **Payload:** `void`
-   **Description:** Emitted when the modal is opened.

### `modal:close`

-   **Payload:** `void`
-   **Description:** Emitted when the modal is closed.

## Slots

### `default`

-   **Description:** The main modal content.

### `beforeContent`

-   **Description:** Content to display before the main modal content.

### `afterContent`

-   **Description:** Content to display after the main modal content.

### `overlay`

-   **Description:** Custom overlay component. Defaults to `<queso-modal-overlay />`.

## Exposed Methods

### `open()`

Opens the modal and activates focus trapping.

### `close()`

Closes the modal and deactivates focus trapping.

### `isModalOpen`

Reactive boolean indicating the current open state.

## Behavior

-   **Teleport to Body:** Modal is automatically teleported to the document body
-   **Scroll Locking:** Automatically prevents body scrolling when modal is open
-   **Keyboard Support:** Escape key closes the modal
-   **Accessibility:** Complete ARIA attributes and screen reader support
-   **Overlay:** Default overlay component with click-to-close functionality

## Accessibility

The component automatically handles:

-   `aria-expanded` attribute for screen readers
-   Focus trapping within the modal when it contains focusable elements
-   Escape key support for closing
-   Proper semantic structure
-   Body scroll locking to prevent background interaction

### Focus Management

The modal automatically detects if it contains focusable elements and manages focus accordingly:

-   **With focusable elements:** Activates focus trap to keep focus within the modal
-   **Without focusable elements:** No focus trap activation
-   **Focusable selectors:** Includes links, inputs, buttons, and other interactive elements

## CSS

### Classes

The component applies the following CSS classes:

-   `.queso-modal` - Base class
-   `.is-modal-open` - Applied when modal is open
-   `.queso-modal__content` - Content container

### Custom Properties

-   `--queso-modal-opacity` - Modal opacity (default: 0, changes to 1 when open)
-   `--queso-modal-max-width` - Content max width (default: 80%)
-   `--queso-modal-max-height` - Content max height (default: 80%)
-   `--queso-modal-z` - Modal z-index (default: 400)
