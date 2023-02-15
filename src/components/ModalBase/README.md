## How to use modal

**In parent component :**

```
<template>
    <button @click="openModal()">Open modal</button>

    <modal-base ref="myModal">
        <!-- CONTENT HERE -->
    </modal-base>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ModalBase from "@components/ModalBase";

const myModal = ref<InstanceType<typeof ModalBase> | null>(null);

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
    <modal-base ref="myModal">
        <template #before-content></template>
        <template #default></template>
        <template #after-content></template>
        <template #overlay></template>
    </modal-base>
    ...
</template>
```
