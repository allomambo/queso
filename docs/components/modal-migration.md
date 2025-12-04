---
next: false
---

# QuesoModal Migration Guide (0.4.1 → 0.5.0)

This guide explains how to migrate your code when upgrading `QuesoModal` from version `0.4.1` (and earlier) to `0.5.0`.

Two breaking changes have been introduced:

1. **Method names changed:** `open()`/`close()` → `openModal()`/`closeModal()` for better clarity.
2. **New recommended approach:** Use the `trigger` slot instead of `ref` for simpler code.

If you are upgrading from `0.4.1` or earlier, follow the steps below.

## Recommended: Migrate to trigger slot

**Before (with ref):**

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

**After (with trigger slot - recommended):**

```vue
<template>
    <queso-modal>
        <template #trigger="{ openModal }">
            <button @click="openModal">Open modal</button>
        </template>

        <template #content>
            <p>This is the modal content.</p>
        </template>
    </queso-modal>
</template>

<script setup lang="ts">
import { QuesoModal } from "@components/QuesoModal";
</script>
```

## Alternative: Keep using ref (update method names)

If you need to keep using `ref` for programmatic control, update the method names:

**Before:**

```vue
<template>
    <button @click="openModal()">Open modal</button>

    <queso-modal ref="myModal">
        <template #default="{ close }">
            <button @click="close">Close</button>
        </template>
    </queso-modal>
</template>

<script setup lang="ts">
const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.open();
};

const closeModal = () => {
    myModal.value?.close();
};
</script>
```

**After:**

```vue
<template>
    <button @click="openModal()">Open modal</button>

    <queso-modal ref="myModal">
        <template #default="{ closeModal }">
            <button @click="closeModal">Close</button>
        </template>
    </queso-modal>
</template>

<script setup lang="ts">
const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.openModal();
};

const closeModal = () => {
    myModal.value?.closeModal();
};
</script>
```
