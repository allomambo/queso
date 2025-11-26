# QuesoModal

A modal component with comprehensive accessibility support, focus management, and automatic body scroll locking. It uses Vue's Teleport to render at the document body level and provides automatic ARIA attributes and keyboard navigation.

## Breaking Changes

::: danger Breaking Change
**Version:** These breaking changes are introduced in version `0.4.2`. If you're upgrading from version `0.4.1` or earlier to `0.4.2`, you must follow the migration guide to update your code.

Two breaking changes have been introduced:

1. **Method names changed:** `open()`/`close()` → `openModal()`/`closeModal()` for better clarity
2. **New recommended approach:** Use the `trigger` slot instead of `ref` for simpler code

**Migration required:** Update all references from `open` → `openModal` and `close` → `closeModal`, and consider migrating to the `trigger` slot approach. See the [QuesoModal migration guide](/components/modal-migration) for full examples and steps.
:::

## Basic Usage

```vue
<template>
    <queso-modal>
        <template #trigger="{ openModal }">
            <button @click="openModal">Open modal</button>
        </template>

        <p>This is the modal content.</p>
    </queso-modal>
</template>

<script setup lang="ts">
import { QuesoModal } from "@components/QuesoModal";
</script>
```

### Legacy Usage

::: warning Warning
The method below is still supported for backward compatibility, but the `trigger` slot approach is preferred for new code. Use it only if you need programmatic control from multiple places or complex conditional logic.

See the [QuesoModal migration guide](/components/modal-migration) for detailed examples and migration steps.
:::

<details>
<summary><strong>Show example code</strong></summary>

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
    myModal.value?.openModal();
};

const closeModal = () => {
    myModal.value?.closeModal();
};
</script>
```

</details>

## Emits

### `modal:open`

-   **Payload:** `void`
-   **Description:** Emitted when the modal is opened.

### `modal:close`

-   **Payload:** `void`
-   **Description:** Emitted when the modal is closed.

## Slots

### `trigger`

-   **Props:** `{ openModal: () => void }`
-   **Description:** The trigger element that opens the modal. This slot is rendered outside the Teleport, allowing you to place the trigger anywhere in your component. Use the `openModal` function to open the modal when the trigger is clicked.

### `default`

-   **Props:** `{ isModalOpen: boolean, openModal: () => void, closeModal: () => void }`
-   **Description:** The main modal content.

### `beforeContent`

-   **Props:** `{ isModalOpen: boolean, openModal: () => void, closeModal: () => void }`
-   **Description:** Content to display before the main modal content.

### `content` (alias for `default`)

-   **Props:** `{ isModalOpen: boolean, openModal: () => void, closeModal: () => void }`
-   **Description:** The main modal content. This slot is an alias for the default slot - you can use either `#content` or `#default` slot.

### `afterContent`

-   **Props:** `{ isModalOpen: boolean, openModal: () => void, closeModal: () => void }`
-   **Description:** Content to display after the main modal content.

### `overlay`

-   **Props:** `{ isModalOpen: boolean, openModal: () => void, closeModal: () => void }`
-   **Description:** Custom overlay component. Defaults to `<queso-modal-overlay />`.

## Exposed Methods

### `openModal()`

Opens the modal and activates focus trapping.

### `closeModal()`

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
