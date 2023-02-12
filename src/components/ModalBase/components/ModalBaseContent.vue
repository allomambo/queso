<template>
    <div class="c-modal-content" :class="contentClasses">
        <div ref="contentOverflow" class="c-modal-content__overflow">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useScroll } from "@vueuse/core";

const contentOverflow = ref<HTMLElement>();

const { arrivedState } = useScroll(contentOverflow, {
    offset: { top: 20, bottom: 20 },
});

const contentIsOverflowing = computed<boolean>(() => {
    // Check manually if content is overflowing because arrivedState.bottom is false when not.
    if (contentOverflow.value) {
        return contentOverflow.value?.scrollHeight > contentOverflow.value?.clientHeight;
    }

    return false;
});

const contentClasses = computed(() => ({
    "is-scrolled-top": arrivedState.top,
    "is-scrolled-bottom": arrivedState.bottom || !contentIsOverflowing.value,
}));
</script>

<style lang="scss">
.c-modal-content {
    height: 100%;
    position: relative;
    overflow: hidden;

    &__overflow {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
}
</style>
