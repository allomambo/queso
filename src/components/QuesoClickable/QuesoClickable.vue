<template>
    <component
        :is="markup"
        class="queso-clickable"
        :class="clickableClasses"
        :rel="clickableRel"
        :href="clickableHref"
        :to="clickableTo"
        :target="clickableTarget"
        :download="clickableDownload"
        :disabled="clickableDisabled"
        :aria-disabled="clickableDisabled"
        :aria-label="ariaLabel"
    >
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { QuesoClickableProps } from "./types";

// Props
const props = withDefaults(defineProps<QuesoClickableProps>(), {
    markup: "button",
});

// Computeds
const clickableClasses = computed(() => ({
    "is-disabled": props.isDisabled,
}));

const clickableDisabled = computed(() => (props.isDisabled ? true : null));

const clickableHref = computed(() => (props.markup === "a" || props.markup === "router-link" ? props.url : null));
const clickableTo = computed(() => (props.markup === "router-link" ? props.url : null));

const isExternal = computed(() => (props.isExternal ? "_blank" : "_self"));
const clickableTarget = computed(() => (props.markup === "a" ? isExternal.value : null));
const clickableRel = computed(() => (props.markup === "a" ? "noopener" : null));
const clickableDownload = computed(() => (props.markup === "a" && props.isDownload ? "" : null));
</script>

<style lang="scss">
.queso-clickable {
    display: var(--queso-clickable-display, inline-flex);
    align-items: var(--queso-clickable-align, center);
    justify-content: var(--queso-clickable-justify, center);
    cursor: pointer;

    /*==============================
    =           STATES             =
    ==============================*/

    //--- DISABLED ---//
    &[disabled],
    &[aria-disabled="true"] {
        @include unselectable;
    }
}
</style>
