<template>
    <div v-if="options.length > 0" class="queso-dropdown" ref="dropdown" :class="dropdownClasses">
        <div class="queso-dropdown__selector" @click="toggleDropdown(!isDropdownOpen)">
            <slot name="header" v-bind="{ activeOptions }">
                <slot name="prefix"></slot>
                <div class="queso-dropdown__selector__text">
                    <div v-if="activeOptions.length < 1" class="queso-dropdown__selector__placeholder">
                        <slot name="placeholder"></slot>
                    </div>
                    <div v-else class="queso-dropdown__selector__active-label">
                        <slot name="selector" v-bind="{ activeOptions }">
                            {{ activeOptions }}
                        </slot>
                    </div>
                </div>
                <slot name="suffix"></slot>
                <div class="queso-dropdown__selector__icon">
                    <slot name="icon">↓</slot>
                </div>
            </slot>
        </div>

        <div class="queso-dropdown__popover" :aria-expanded="isDropdownOpen">
            <div v-if="$slots.popoverHeader" class="queso-dropdown__popover__header">
                <slot name="popoverHeader"></slot>
            </div>
            <div class="queso-dropdown__popover__scroll" :class="dropdownPopoverClasses">
                <ul ref="dropdownPopover" class="queso-dropdown__popover__options-list">
                    <slot name="beforeItems"></slot>
                    <li
                        v-for="option in options"
                        :key="option.key"
                        @click="updateOption(option)"
                        class="queso-dropdown__popover__options-list__item"
                        :class="{ 'is-active': activeOptions.find((o) => o.key === option.key) }"
                    >
                        <slot name="item" v-bind="{ ...option, openDropdown, closeDropdown }">
                            {{ option }}
                        </slot>
                    </li>
                    <slot name="afterItems"></slot>
                </ul>
            </div>
            <div v-if="$slots.popoverFooter" class="queso-dropdown__popover__footer">
                <slot name="popoverFooter"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { onClickOutside, useScroll } from "@vueuse/core";

import { Option } from "./types";

console.warn("<QuesoDropdownLegacy> is deprecated. It will be removed on v1.0 version.");

// Props / Emits
export interface Props {
    defaultOptions?: Option[];
    options: Option[];
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    defaultOptions: () => [],
    options: () => [],
});

const emit = defineEmits(["update:options", "open:dropdown", "close:dropdown"]);

// Computeds
const dropdown = ref<HTMLElement>();
const dropdownPopover = ref<HTMLElement>();
const isDropdownOpen = ref<boolean>(false);

const updatedOptions = ref<Option[]>([]);
const activeOptions = computed<Option[]>(() => {
    if (updatedOptions.value.length > 0) return updatedOptions.value;
    return props.defaultOptions;
});

onMounted(() => {
    if (props.multiple) {
        updatedOptions.value = props.defaultOptions;
    }
});

const dropdownClasses = computed(() => ({
    "is-dropdown-open": isDropdownOpen.value,
    "is-dropdown-close": !isDropdownOpen.value,
    "has-value": activeOptions.value.length >= 1,
    "has-no-value": activeOptions.value.length < 1,
    "is-multiple": props.multiple,
}));

/**
 * ON OPTION CHANGE
 */

const updateOption = (option: Option) => {
    if (props.multiple) {
        // If multiple: if option present in array add it, otherwise remove it
        let existingOption: number = 0;

        updatedOptions.value = updatedOptions.value.filter((o: Option) => {
            const optionExist = o.key === option.key ? false : true;
            if (!optionExist) existingOption++;
            return optionExist;
        });

        if (existingOption < 1) {
            updatedOptions.value.push(option);
        }
    } else {
        // If not multiple: just update completely the array
        updatedOptions.value = [option];
    }

    emit("update:options", activeOptions.value);

    if (!props.multiple) {
        if (!props.stayOpenOnSelection) closeDropdown();
    }
};

/**
 * OPEN/CLOSE DROPDOWN
 */

const scrollToTop = () => {
    setTimeout(() => {
        y.value = 0;
    }, 210);
};

const openDropdown = () => {
    isDropdownOpen.value = true;
    emit("open:dropdown");
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
    emit("close:dropdown");
    scrollToTop();
};

const toggleDropdown = (bool: boolean = false) => {
    if (bool) openDropdown();
    else closeDropdown();
};

onClickOutside(dropdown, () => closeDropdown());

/**
 * CHOICES OVERFLOW
 */
const { y, arrivedState } = useScroll(dropdownPopover, {
    offset: { top: 15, bottom: 15 },
});

const dropdownPopoverIsOverflowing = computed<boolean>(() => {
    // Check manually if content is overflowing because arrivedState.bottom is false when not.
    if (dropdownPopover.value) {
        return dropdownPopover.value?.scrollHeight > dropdownPopover.value?.clientHeight;
    }

    return false;
});

const dropdownPopoverClasses = computed(() => ({
    "is-scrolled-top": arrivedState.top,
    "is-scrolled-bottom": arrivedState.bottom || !dropdownPopoverIsOverflowing.value,
}));

/**
 * EXPOSE
 */
defineExpose({ isDropdownOpen, openDropdown, closeDropdown });
</script>

<style lang="scss">
.queso-dropdown {
    $_: &;
    position: relative;

    /*=================================
    =            Selector             =
    =================================*/

    &__selector {
        display: flex;
        align-items: var(--queso-dropdown-selector-align, center);
        justify-content: var(--queso-dropdown-selector-justify, flex-start);
        cursor: pointer;

        &__icon {
            margin-left: auto;
        }
    }

    /*=================================
    =             Popover             =
    =================================*/

    &__popover {
        @include unselectable;
        position: absolute;
        top: var(--queso-dropdown-popover-pos-top, 100%);
        bottom: var(--queso-dropdown-popover-pos-bottom, auto);
        left: var(--queso-dropdown-popover-pos-left, 0);
        right: var(--queso-dropdown-popover-pos-right, 0);
        z-index: var(--queso-dropdown-popover-z, 300);
        overflow: hidden;
        opacity: var(--queso-dropdown-popover-opacity, 0);

        &__options-list {
            @include overflow;
            display: var(--queso-dropdown-popover-display, flex);
            flex-direction: var(--queso-dropdown-popover-direction, column);
            align-items: var(--queso-dropdown-popover-align, stretch);
            justify-content: var(--queso-dropdown-popover-justify, flex-start);
            flex-wrap: var(--queso-dropdown-popover-wrap, nowrap);
            max-height: var(--queso-dropdown-popover-max-height, 20rem);

            &__item {
                cursor: pointer;
            }
        }
    }

    /*=================================
    =             States              =
    =================================*/

    &.is-dropdown-open {
        --queso-dropdown-popover-opacity: 1;

        #{$_}__popover {
            @include unselectable(false);
        }
    }
}
</style>
