<template>
    <div class="c-modal-overlay" @click="close"></div>
</template>

<script lang="ts">
import { ModalMethodsKey } from "../symbols";
import type { ModalMethods } from "../types";
</script>

<script setup lang="ts">
import { inject } from "vue";

const { close } = inject(ModalMethodsKey) as ModalMethods;
</script>

<style lang="scss">
.c-modal-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: var(--tt-modal-opacity);
    background: rgba(black, 0.1);
}
</style>
