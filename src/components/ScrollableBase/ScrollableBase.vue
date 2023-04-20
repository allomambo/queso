<template>
    <div class="queso-scrollable" :class="scrollableClasses">
        <div ref="content" class="queso-scrollable__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useScroll, useResizeObserver } from "@vueuse/core";

// Props / Emits
export interface Props {
    offset?: number;
}

const props = withDefaults(defineProps<Props>(), {
    offset: 0,
});

const content = ref<HTMLElement>();

const { arrivedState } = useScroll(content, {
    offset: { top: props.offset, bottom: props.offset },
});

const contentScrollHeight = ref<number>(0);
const contentClientHeight = ref<number>(0);

useResizeObserver(content, (entries) => {
    const entry = entries[0];
    contentScrollHeight.value = entry.target.scrollHeight;
    contentClientHeight.value = entry.target.clientHeight;
});

const contentIsOverflowing = computed<boolean>(() => {
    // Check manually if content is overflowing because arrivedState.bottom is false when not.
    return contentScrollHeight.value > contentClientHeight.value;
});

const scrollableClasses = computed(() => ({
    "is-scrolled-top": arrivedState.top,
    "is-scrolled-bottom": arrivedState.bottom || !contentIsOverflowing.value,
}));
</script>

<style lang="scss">
.queso-scrollable {
    height: var(--queso-scrollable-height, auto);
    position: relative;
    overflow: hidden;

    &__content {
        @include clearfix;
        @include overflow;
        height: var(--queso-scrollable-content-height, 100%);
    }
}
</style>
