<template>
    <span :class="iconClasses" :style="iconCssVars" v-html="iconSVG" aria-hidden="true"></span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import * as icons from "@/static/svg";

interface Props {
    name?: string;
    size?: number;
    rotation?: number;
}

const props = withDefaults(defineProps<Props>(), {
    size: 1,
    rotation: 0,
});

const iconSVG = computed<SVGElement>(() => icons[props.name]);

const iconClasses = computed<string[]>(() => ["queso-icon", `-${props.name}`]);

const iconCssVars = computed<any>(() => {
    return {
        "--rotation": `${props.rotation}deg`,
        "--width": `${props.size}rem`,
    };
});
</script>

<style lang="scss">
.queso-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    svg {
        display: block;
        width: var(--icon-width, var(--width));
        height: calc(var(--icon-height, var(--icon-width, var(--width))) * var(--icon-ratio, 1));
        fill: currentColor;
        transform: rotate(var(--icon-rotation, var(--rotation)));
    }

    //--- Visual variations ---//

    &.has-txt-color {
        color: var(--icon-txt-color, var(--txt-color));
    }

    &.has-bg-color {
        width: var(--icon-bg-width, var(--bg-width));
        height: calc(var(--icon-bg-height, var(--icon-bg-width, var(--bg-width))) * var(--icon-bg-ratio, 1));
        background-color: var(--icon-bg-color, var(--bg-color));
        border-radius: var(--icon-bg-radius, var(--border-radius-xs));
    }
}
</style>
