<template>
    <div class="queso-scrollable" :class="scrollableClasses">
        <div
            v-if="hasTopIndicatorSlot"
            class="queso-scrollable__indicator -top"
            :class="{ 'is-hidden': isArrivedAtTop, 'is-visible': !isArrivedAtTop }"
            role="presentation"
        >
            <slot name="topIndicator"></slot>
        </div>

        <div ref="content" class="queso-scrollable__content">
            <slot></slot>
        </div>

        <div
            v-if="hasBottomIndicatorSlot"
            class="queso-scrollable__indicator -bottom"
            :class="{ 'is-hidden': isArrivedAtBottom, 'is-visible': !isArrivedAtBottom }"
            role="presentation"
        >
            <slot name="bottomIndicator"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useSlots, watchEffect } from "vue";
import { useScroll, useResizeObserver } from "@vueuse/core";

import type { QuesoScrollableProps } from "./types";

const props = withDefaults(defineProps<QuesoScrollableProps>(), {
    offset: 0,
});

const emit = defineEmits<{
    "scrollable:top:reached": [];
    "scrollable:bottom:reached": [];
}>();

const slots = useSlots();
const content = ref<HTMLElement>();

const { arrivedState } = useScroll(content, {
    offset: { top: props.offset, bottom: props.offset },
});

// Check manually if content is overflowing because arrivedState doesn't update on resize
const contentScrollHeight = ref<number>(0);
const contentClientHeight = ref<number>(0);

const updateContentDimensions = () => {
    if (content.value) {
        contentScrollHeight.value = content.value.scrollHeight;
        contentClientHeight.value = content.value.clientHeight;
    }
};

useResizeObserver(content, () => {
    updateContentDimensions();
});

onMounted(() => {
    nextTick(() => {
        updateContentDimensions();
    });
});

const contentIsOverflowingVertically = computed<boolean>(() => contentScrollHeight.value > contentClientHeight.value);

const isArrivedAtTop = computed(() => arrivedState.top);
const isArrivedAtBottom = computed(() => {
    if (contentIsOverflowingVertically.value && arrivedState.top) {
        return false;
    } else if (!contentIsOverflowingVertically.value && arrivedState.top) {
        return true;
    }
    return arrivedState.bottom;
});

const hasTopIndicatorSlot = computed(() => !!(slots.topIndicator && !props.shadows));
const hasBottomIndicatorSlot = computed(() => !!(slots.bottomIndicator && !props.shadows));

const scrollableClasses = computed(() => ({
    "has-shadows": props.shadows,
    "has-indicators": hasTopIndicatorSlot.value || hasBottomIndicatorSlot.value,
    "is-scrolled-top": isArrivedAtTop.value,
    "is-scrolled-bottom": isArrivedAtBottom.value,
}));

watchEffect(() => {
    if (isArrivedAtTop.value) {
        emit("scrollable:top:reached");
    }
    if (isArrivedAtBottom.value) {
        emit("scrollable:bottom:reached");
    }
});
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

    //--- INDICATOR SLOTS ---//

    &__indicator {
        @include unselectable;

        position: var(--queso-scrollable-indicator-position, absolute);
        left: var(--queso-scrollable-indicator-offset-left, var(--queso-scrollable-indicator-offset, 0));
        right: var(--queso-scrollable-indicator-offset-right, var(--queso-scrollable-indicator-offset, 0));
        z-index: var(--queso-scrollable-indicator-z, 9);

        &.-top {
            top: var(--queso-scrollable-indicator-before-top, 0);
            opacity: var(--queso-scrollable-top-indicator-opacity, 1);

            &.is-hidden {
                --queso-scrollable-top-indicator-opacity: 0;
            }
        }

        &.-bottom {
            bottom: var(--queso-scrollable-indicator-after-bottom, 0);
            opacity: var(--queso-scrollable-bottom-indicator-opacity, 1);

            &.is-hidden {
                --queso-scrollable-bottom-indicator-opacity: 0;
            }
        }
    }

    //--- GRADIENT SHADOWS ---//

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
