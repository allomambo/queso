<template>
    <div class="c-modal-header">
        <button @click="close">X</button>
    </div>
</template>

<script lang="ts">
import { ModalMethodsKey } from "../symbols";
import type { ModalMethods } from "../types";
</script>

<script setup lang="ts">
import { inject } from "vue";

const { close } = inject(ModalMethodsKey) as ModalMethods;
</script>

<style lang="scss"></style>
