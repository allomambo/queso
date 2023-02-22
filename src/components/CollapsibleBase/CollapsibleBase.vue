<template>
    <div class="queso-collapsible" :class="collapsibleClasses">
        <slot name="beforeHeader"></slot>

        <div class="queso-collapsible__header" @click="toggle(!isCollapsibleOpen)">
            <slot name="headerPrefix"></slot>
            <div class="queso-collapsible__header__text">
                <slot name="headerText"></slot>
            </div>
            <slot name="headerSuffix"></slot>
            <div class="queso-collapsible__header__icon">
                <slot name="headerIcon">↓</slot>
            </div>
        </div>

        <slot name="afterHeader"></slot>
        <slot name="beforeContent"></slot>

        <div class="queso-collapsible__content">
            <div ref="collapsibleContent" class="queso-collapsible__content__inner">
                <slot name="content"></slot>
            </div>
        </div>

        <slot name="afterContent"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount } from "vue";
import { useElementBounding } from "@vueuse/core";

// Props / Emits
export interface Props {
    expandOnMount?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["open:collapsible", "close:collapsible"]);

// Computeds
const collapsibleContent = ref<HTMLElement>();
const isCollapsibleOpen = ref<boolean>(false);
const isCollapsibleExpanded = ref<boolean>(props.expandOnMount);

onBeforeMount(() => {
    if (isCollapsibleExpanded.value) {
        isCollapsibleOpen.value = true;
    }
});

const collapsibleClasses = computed(() => ({
    "is-collapsible-open": isCollapsibleOpen.value,
    "is-collapsible-close": !isCollapsibleOpen.value,
}));

/**
 * OPEN/CLOSE CONTENT
 */

const open = () => {
    isCollapsibleOpen.value = true;
    emit("open:collapsible");
};

const close = () => {
    isCollapsibleExpanded.value = false;

    setTimeout(() => {
        isCollapsibleOpen.value = false;
        emit("close:collapsible");
    }, 1); // If expanded, need to set height before going to 0px
};

const toggle = (bool: boolean = false) => {
    if (bool) open();
    else close();
};

// Calculate height
const { height } = useElementBounding(collapsibleContent);
const contentHeight = computed<string>(() => {
    if (isCollapsibleExpanded.value) return "none";
    return isCollapsibleOpen.value ? `${height.value}px` : "0px";
});

/**
 * EXPOSE METHODS
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
