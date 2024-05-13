<template>
    <component
        :is="markup"
        class="queso-clickable"
        :class="clickableClasses"
        :disabled="clickableDisabled"
        :aria-disabled="clickableDisabled"
        v-bind="anchorAttributes"
    >
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

import type { QuesoClickableProps } from "./types";

const props = withDefaults(defineProps<QuesoClickableProps>(), {
    markup: "button",
});

const { isExternal, isDisabled, isDownload, markup, url } = toRefs(props);

const isAnchor = computed<boolean>(() => markup.value === "a");
const isRouter = computed<boolean>(() => markup.value === "router-link" && typeof url.value === "object");

// Attributes when anchor and router-link tags
const anchorAttributes = computed(() => {
    let attrs: object = {};

    if (isRouter.value) {
        attrs = {
            to: url.value,
        };
    } else if (isAnchor.value) {
        attrs = {
            href: url.value,
            target: clickableTarget.value,
            download: clickableDownload.value,
        };
    }

    return attrs;
});

// Computeds
const clickableTarget = computed(() => (isAnchor.value && isExternal.value ? "_blank" : null));
const clickableDisabled = computed(() => (isDisabled.value ? "" : null));
const clickableDownload = computed(() => (isAnchor.value && isDownload.value ? "" : null));

// CSS classes
const clickableClasses = computed(() => ({
    "is-download": clickableDownload.value !== null,
    "is-disabled": isDisabled.value,
}));
</script>

<style lang="scss">
.queso-clickable {
    &.is-disabled {
        @include unselectable;
    }
}
</style>
