<template>
    <component
        :is="tag"
        class="queso-clickable"
        :class="clickableClasses"
        :rel="clickableRel"
        :href="clickableHref"
        :to="clickableTo"
        :target="clickableTarget"
        :disabled="clickableDisabled"
        :aria-disabled="clickableDisabled"
        :aria-label="ariaLabel"
    >
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Props
type TagOptions = "button" | "a" | "router-link" | "div" | "span";

interface Props {
    tag?: TagOptions;
    url?: string;
    isDisabled?: boolean;
    isExternal?: boolean;
    ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
});

// Computeds
const clickableClasses = computed(() => ({
    "is-disabled": props.isDisabled,
}));

const clickableHref = computed(() => (props.tag === "a" ? props.url : null));
const clickableTo = computed(() => (props.tag === "router-link" ? props.url : null));

const isExternal = computed(() => (props.isExternal ? "_blank" : "_self"));
const clickableTarget = computed(() => (props.tag === "a" ? isExternal.value : null));

const clickableDisabled = computed(() => (props.isDisabled ? true : null));

const clickableRel = computed(() => (props.tag === "a" ? "noopener" : null));
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
