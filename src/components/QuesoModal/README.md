## How to use modal

**In parent component :**

```
<template>
    <button @click="openModal()">Open modal</button>

    <queso-modal ref="myModal">
        <!-- CONTENT HERE -->
    </queso-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

import QuesoModal from "@components/QuesoModal";

const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.open();
};

const closeModal = () => {
    myModal.value?.close();
};
</script>
```

**Available slots :**

```
<template>
    ...
    <queso-modal ref="myModal">
        <template #before-content></template>
        <template #default></template>
        <template #after-content></template>
        <template #overlay></template>
    </queso-modal>
    ...
</template>
```
