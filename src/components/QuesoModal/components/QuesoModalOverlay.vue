<template>
    <div class="queso-modal__overlay" @click="close"></div>
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
.queso-modal__overlay {
    @include fullscreen;
    z-index: 1;
}
</style>
