<template>
    <div class="queso-scrollable" :class="scrollableClasses">
        <div ref="scrollableContent" class="queso-scrollable__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { computed, ref, onBeforeMount } from "vue";
// import { useElementBounding } from "@vueuse/core";
</script>

<style lang="scss">
.queso-scrollable {
}
</style>
