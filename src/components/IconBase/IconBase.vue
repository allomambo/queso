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

<script lang="ts">
interface Props {
    svg?: SVGElement | string;
    name?: string;
    prefix?: string;
    size?: number;
    rotation?: number;
}
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<Props>(), {
    size: 1,
    rotation: 0,
});

const iconID = computed(() => {
    const prefix = props.prefix ? `${props.prefix}-` : "";
    return `#${prefix}${props.name}`;
});

const iconClasses = computed<string[]>(() => ["queso-icon", props.name && `-${props.name}`]);

// Visual
const width = computed<string>(() => `${props.size}rem`);
const rotation = computed<string>(() => `${props.rotation}deg`);
</script>

<style lang="scss">
.queso-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    svg {
        display: block;
        width: var(--queso-icon-width, v-bind("width"));
        height: calc(var(--queso-icon-height, var(--queso-icon-width, v-bind("width"))) * var(--queso-icon-ratio, 1));
        fill: currentColor;
        transform: rotate(var(--queso-icon-rotation, v-bind("rotation")));
    }
}
</style>
