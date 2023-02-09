<template>
    <div class="dropdown" ref="dropdown" :class="dropdownClasses">
        <div class="dropdown__selector" @click="toggleDropdown(!isDropdownOpen)">
            <slot name="prefix"></slot>
            <div class="dropdown__selector__text">
                <div v-if="activeOptions.length < 1" class="dropdown__selector__placeholder">
                    <slot name="placeholder"></slot>
                </div>
                <div v-else class="dropdown__selector__active-label">
                    <slot name="activeLabel" v-bind="{ activeOptions }">
                        {{ activeOptions }}
                    </slot>
                </div>
            </div>
            <slot name="suffix"></slot>
            <div class="dropdown__selector__icon">
                <slot name="icon">↓</slot>
            </div>
        </div>

        <div class="dropdown__popover">
            <div v-if="$slots.popoverHeader" class="dropdown__popover__header">
                <slot name="popoverHeader" v-bind="{ openDropdown, closeDropdown }"></slot>
            </div>
            <div class="dropdown__popover__scroll" :class="dropdownPopoverClasses">
                <ul ref="dropdownPopover" class="dropdown__popover__options-list">
                    <li
                        v-for="option in options"
                        :key="option.key"
                        @click="updateOption(option)"
                        class="dropdown__popover__options-list__item"
                        :class="{ 'is-active': activeOptions.find((o) => o.key === option.key) }"
                    >
                        <slot name="item" v-bind="{ ...option, openDropdown, closeDropdown }">
                            {{ option }}
                        </slot>
                    </li>
                </ul>
            </div>
            <div v-if="$slots.popoverFooter" class="dropdown__popover__footer">
                <slot name="popoverFooter" v-bind="{ openDropdown, closeDropdown }"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, onMounted } from "vue";
import { onClickOutside, useScroll } from "@vueuse/core";

import { Option } from "./types";

// Props / Emits
const props = defineProps({
    defaultOptions: {
        type: Array as PropType<Option[]>,
        required: false,
        default: () => [],
    },
    options: {
        type: Array as PropType<Option[]>,
        required: true,
        default: () => [],
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false,
    },
    stayOpenOnSelection: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const emit = defineEmits(["update:options", "open:dropdown", "close:dropdown"]);

// Computeds
// const dropdown = ref<HTMLDivElement | null>(null);
// const dropdownPopover = ref<HTMLUListElement | null>(null);
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
    "is-open": isDropdownOpen.value,
    "is-close": !isDropdownOpen.value,
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
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;

    /*=================================
    =            Selector             =
    =================================*/

    &__selector {
        display: flex;
        align-items: var(--dropdown-selector-align, center);
        justify-content: var(--dropdown-selector-justify, flex-start);
        cursor: pointer;

        &__icon {
            margin-left: auto;
        }
    }

    /*=================================
    =             Popover             =
    =================================*/

    &__popover {
        position: absolute;
        top: var(--dropdown-popover-pos-top, 100%);
        bottom: var(--dropdown-popover-pos-bottom, auto);
        left: var(--dropdown-popover-pos-left, 0);
        right: var(--dropdown-popover-pos-right, 0);
        z-index: var(--dropdown-popover-z, 300);
        overflow: hidden;
        opacity: var(--dropdown-popover-opacity, 0);
        pointer-events: var(--dropdown-popover-pointer-events, none);

        // Options list
        &__options-list {
            display: var(--dropdown-popover-display, flex);
            flex-direction: var(--dropdown-popover-direction, column);
            align-items: var(--dropdown-popover-align, stretch);
            justify-content: var(--dropdown-popover-justify, flex-start);
            flex-wrap: var(--dropdown-popover-wrap, nowrap);
            max-height: var(--dropdown-popover-max-height, 25rem);
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: none;
            scrollbar-width: none;

            &__item {
                cursor: pointer;
            }
        }
    }

    /*=================================
    =             States              =
    =================================*/

    &.is-open {
        --dropdown-popover-opacity: 1;
        --dropdown-popover-pointer-events: all;
    }
}
</style>
