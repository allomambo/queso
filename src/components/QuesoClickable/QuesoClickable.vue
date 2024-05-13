<template>
    <component
        :is="markup"
        class="queso-clickable"
        :class="clickableClasses"
        :href="clickableHref"
        :to="clickableTo"
        :target="clickableTarget"
        :download="clickableDownload"
        :disabled="clickableDisabled"
        :aria-disabled="clickableDisabled"
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
const isRouter = computed<boolean>(() => markup.value === "router-link");

// Computeds
const clickableHref = computed(() => (isAnchor.value || isRouter.value ? url.value : null));
const clickableTo = computed(() => (isRouter.value ? url.value : null));
const clickableTarget = computed(() => (isAnchor.value && isExternal.value ? "_blank" : null));

const clickableDisabled = computed(() => (isDisabled.value ? true : null));
const clickableDownload = computed(() => (isAnchor.value && isDownload.value ? "" : null));

// CSS classes
const clickableClasses = computed(() => ({
    "is-download": clickableDownload.value !== null,
    "is-disabled": isDisabled.value,
}));
</script>

<style lang="scss">
.queso-clickable {
    //--- State: Disabled ---//
    &.is-disabled {
        @include unselectable;
    }
}
</style>
