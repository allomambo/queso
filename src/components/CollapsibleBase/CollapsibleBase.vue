<template>
    <div class="queso-collapsible" :class="collapsibleClasses">
        <div class="queso-collapsible__header" @click="toggleCollapsible(!isCollapsibleOpen)">
            <slot name="headerPrefix"></slot>
            <div class="queso-collapsible__header__text">
                <slot name="headerText"></slot>
            </div>
            <slot name="headerSuffix"></slot>
            <div class="queso-collapsible__header__icon">
                <slot name="headerIcon">↓</slot>
            </div>
        </div>

        <div class="queso-collapsible__content">
            <div ref="collapsibleContent" class="queso-collapsible__content__inner">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount } from "vue";
import { useElementBounding } from "@vueuse/core";

// Props / Emits
export interface Props {
    isExpanded?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["open:collapsible", "close:collapsible"]);

// Computeds
// const collapsibleContent = ref<HTMLDivElement | null>(null);
const collapsibleContent = ref<HTMLElement>();
const isCollapsibleOpen = ref<boolean>(false);

onBeforeMount(() => {
    if (props.isExpanded) {
        isCollapsibleOpen.value = true;
    }
});

const collapsibleClasses = computed(() => ({
    "is-collapsible-open": isCollapsibleOpen.value,
    "is-collapsible-close": !isCollapsibleOpen.value,
}));

/**
 * OPEN/CLOSE DROPDOWN
 */

const openCollapsible = () => {
    isCollapsibleOpen.value = true;
    emit("open:collapsible");
};

const closeCollapsible = () => {
    isCollapsibleOpen.value = false;
    emit("close:collapsible");
};

const toggleCollapsible = (bool: boolean = false) => {
    if (bool) openCollapsible();
    else closeCollapsible();
};

/**
 * CHOICES OVERFLOW
 */
const { width, height } = useElementBounding(collapsibleContent);
const contentHeight = computed<string>(() => (isCollapsibleOpen.value ? `${height.value}px` : "0px"));
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
        background-color: aquamarine;

        &__icon {
            margin-left: auto;
        }
    }

    /*=================================
    =             Popover             =
    =================================*/

    &__content {
        @include unselectable;
        max-height: v-bind("contentHeight");
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        will-change: max-height;
        transition: max-height var(--queso-collapsible-duration, 0.5s) var(--queso-collapsible-ease, ease);
        background-color: rgb(59, 217, 164);

        &__scroll {
            @include overflow;
            max-height: var(--queso-collapsible-popover-max-height, 20rem);
        }
    }

    /*=================================
    =             States              =
    =================================*/

    &.is-open {
        --queso-collapsible-popover-opacity: 1;

        #{$_}__content {
            @include unselectable(false);
        }
    }
}
</style>
