<template>
    <component
        :is="tag"
        class="queso-button"
        :class="buttonClasses"
        :rel="btnRel"
        :href="btnHref"
        :to="btnTo"
        :target="btnTarget"
        :aria-disabled="btnDisabled"
        :disabled="btnDisabled"
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
    href?: string;
    isDisabled?: boolean;
    isTargetBlank?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
});

// Computeds
const buttonClasses = computed(() => ({
    "is-disabled": props.isDisabled,
}));

const btnHref = computed(() => (props.tag === "a" ? props.href : null));
const btnTo = computed(() => (props.tag === "router-link" ? props.href : null));

const isTargetBlank = computed(() => (props.isTargetBlank ? "_blank" : "_self"));
const btnTarget = computed(() => (props.tag === "a" ? isTargetBlank.value : null));

const btnDisabled = computed(() => (props.isDisabled ? true : null));

const btnRel = computed(() => (props.tag === "a" ? "noopener" : null));
</script>

<style lang="scss">
.queso-button {
    display: var(--queso-button-display, inline-flex);
    align-items: var(--queso-button-align, center);
    justify-content: var(--queso-button-justify, center);
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
