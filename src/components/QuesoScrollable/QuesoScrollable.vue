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

import type { QuesoScrollableProps } from "./types";

const props = withDefaults(defineProps<QuesoScrollableProps>(), {
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
    "has-shadows": props.shadows,
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

    //--- SHADOWS ---//
    &.has-shadows {
        @include overflow-shadows;

        &.is-scrolled-top {
            --overflow-shadow-before-opacity: 0;
        }
        &.is-scrolled-bottom {
            --overflow-shadow-after-opacity: 0;
        }
    }
}
</style>
