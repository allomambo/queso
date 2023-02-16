<template>
    <component
        :is="tag"
        :href="btnHref"
        :to="btnTo"
        :rel="tag == 'a' ? 'noopener' : null"
        class="queso-button"
        :class="buttonClasses"
        :aria-disabled="isDisabled ? true : null"
        :disabled="isDisabled ? true : null"
        :target="btnTarget"
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

const buttonClasses = computed(() => ({
    "is-disabled": props.isDisabled,
}));

const btnHref = computed(() =>
    (props.tag == "a" || props.tag == "router-link") && props.href !== null ? props.href : null
);
const btnTo = computed(() => (props.tag == "router-link" && props.href !== null ? props.href : null));

const isTargetBlank = computed(() => (props.isTargetBlank ? "_blank" : "_self"));
const btnTarget = computed(() => (props.tag === "a" ? isTargetBlank.value : null));
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
