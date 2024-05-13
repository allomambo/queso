<template>
    <div class="queso-modal__overlay" @click="close"></div>
</template>

<script setup lang="ts">
import { inject } from "vue";

import { QuesoModalMethodsKey } from "../../types";

const methods = inject(QuesoModalMethodsKey);
const close = methods?.close;
</script>

<style lang="scss">
.queso-modal__overlay {
    @include fullscreen;
    z-index: 1;
}
</style>
