<template>
    <span v-if="svg" :class="iconClasses" aria-hidden="true" v-html="svg"></span>
    <span v-else :class="iconClasses" aria-hidden="true">
        <slot v-bind="{ ...props, width, rotation, iconID }">
            <svg>
                <use :href="iconID" />
            </svg>
        </slot>
    </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { QuesoIconProps } from "./types";

const props = withDefaults(defineProps<QuesoIconProps>(), {
    size: 1,
    sizeUnit: "rem",
    rotation: 0,
});

const iconID = computed<string>(() => {
    const prefix = props.prefix ? `${props.prefix}-` : "";
    return `#${prefix}${props.name}`;
});

const iconClasses = computed(() => {
    let classes: string[] = ["queso-icon"];

    if (props.name) classes.push(`-${props.name}`);

    return classes;
});

// Visual
const width = computed<string>(() => `${props.size}${props.sizeUnit}`);
const rotation = computed<string>(() => `${props.rotation}deg`);
</script>

<style lang="scss">
.queso-icon {
    display: var(--queso-icon-display, inline-flex);
    align-items: var(--queso-icon-align, center);
    justify-content: var(--queso-icon-justify, center);
    vertical-align: var(--queso-icon-vertical-align, middle);

    svg {
        display: block;
        width: var(--queso-icon-width, v-bind("width"));
        height: calc(var(--queso-icon-height, var(--queso-icon-width, v-bind("width"))) * var(--queso-icon-ratio, 1));
        fill: var(--queso-icon-fill, currentColor);
        transform: rotate(var(--queso-icon-rotation, v-bind("rotation")));
    }
}
</style>
