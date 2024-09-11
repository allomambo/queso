<template>
    <div class="queso-collapsible" :class="collapsibleClasses">
        <slot name="beforeHeader"></slot>

        <div
            class="queso-collapsible__header"
            :aria-expanded="isCollapsibleOpen"
            :aria-controls="uniqueId"
            tabindex="0"
            @click="toggle()"
            @keydown="handleKeydown($event)"
        >
            <slot name="header" v-bind="{ isCollapsibleOpen }">
                <slot name="headerPrefix"></slot>
                <div class="queso-collapsible__header__text">
                    <slot name="headerText" v-bind="{ isCollapsibleOpen }"></slot>
                </div>
                <slot name="headerSuffix"></slot>
                <div class="queso-collapsible__header__icon">
                    <slot name="headerIcon" v-bind="{ isCollapsibleOpen }">↓</slot>
                </div>
            </slot>
        </div>

        <slot name="afterHeader"></slot>
        <slot name="beforeContent"></slot>

        <div class="queso-collapsible__content" :id="uniqueId">
            <div ref="collapsibleContent" class="queso-collapsible__content__inner">
                <slot name="content"></slot>
            </div>
        </div>

        <slot name="afterContent"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount, watch } from "vue";
import { useElementBounding } from "@vueuse/core";

import type { QuesoCollapsibleProps } from "./types";

// Define Props/Emits
const props = defineProps<QuesoCollapsibleProps>();

const emit = defineEmits<{
    "collapsible:open": [];
    "collapsible:close": [];
    "collapsible:toggle": [boolean];
}>();

// Computeds
const collapsibleContent = ref<HTMLElement>();
const isCollapsibleOpen = ref<boolean>(false);
const isCollapsibleExpanded = ref<boolean>(props.expandOnMount);
const uniqueId = "queso-collapsible__" + Math.random().toString(36).substr(2, 9);

onBeforeMount(() => {
    if (isCollapsibleExpanded.value) {
        isCollapsibleOpen.value = true;
    }
});

const collapsibleClasses = computed(() => ({
    "is-collapsible-open": isCollapsibleOpen.value,
    "is-collapsible-close": !isCollapsibleOpen.value,
}));

// Calculate height
const { height } = useElementBounding(collapsibleContent);

const contentHeight = computed<string>(() => {
    if (isCollapsibleExpanded.value) return "none";
    return isCollapsibleOpen.value ? `${height.value}px` : "0px";
});

/**
 * OPEN/CLOSE CONTENT
 */

const open = () => {
    isCollapsibleOpen.value = true;
};

const close = () => {
    isCollapsibleExpanded.value = false;

    setTimeout(() => {
        isCollapsibleOpen.value = false;
    }, 1); // If expanded, need to set height before going to 0px
};

const toggle = () => {
    if (isCollapsibleOpen.value) {
        close();
    } else {
        open();
    }
};

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === " " || event.key === "Space") {
        event.preventDefault();
        toggle();
    }
};

/**
 * EMITS
 */
watch(isCollapsibleOpen, (newValue: boolean) => {
    if (newValue) {
        emit("collapsible:open");
    } else {
        emit("collapsible:close");
    }

    emit("collapsible:toggle", newValue);
});

/**
 * EXPOSE REF/METHODS
 */
defineExpose({ isCollapsibleOpen, open, close, toggle });
</script>

<style lang="scss">
.queso-collapsible {
    $_: &;
    position: relative;

    /*=================================
    =             Header              =
    =================================*/

    &__header {
        display: flex;
        align-items: var(--queso-collapsible-header-align, center);
        justify-content: var(--queso-collapsible-header-justify, flex-start);
        cursor: pointer;

        &__icon {
            margin-left: auto;
        }
    }

    /*=================================
    =             Content             =
    =================================*/

    &__content {
        @include unselectable;
        max-height: v-bind("contentHeight");
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        will-change: max-height;
        transition: max-height var(--queso-collapsible-duration, 0.5s) var(--queso-collapsible-ease, ease);

        &__inner {
            @include clearfix; // Prevent hidden content from margin or float
        }
    }

    /*=================================
    =             States              =
    =================================*/

    &.is-collapsible-open {
        #{$_}__content {
            @include unselectable(false);
        }
    }
}
</style>
