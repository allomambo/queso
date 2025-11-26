<template>
    <div v-if="options.length > 0" ref="dropdown" class="queso-dropdown" :class="dropdownClasses">
        <div
            class="queso-dropdown__selector"
            :aria-expanded="isDropdownOpen"
            :aria-controls="uniqueId"
            :tabindex="props.isDisabled ? -1 : 0"
            @click="handleClickToggleDropdown()"
            @keydown="handleKeydownToggleDropdown($event)"
        >
            <slot name="selector" v-bind="{ isDropdownOpen, options, activeOptions }">
                <slot name="selectorBeforeText" v-bind="{ isDropdownOpen, options, activeOptions }"></slot>
                <div class="queso-dropdown__selector__text">
                    <div v-if="activeOptions.length < 1" class="queso-dropdown__selector__text__placeholder">
                        <slot name="selectorPlaceholder" v-bind="{ isDropdownOpen }"></slot>
                    </div>
                    <div v-else class="queso-dropdown__selector__text__active-label">
                        <slot name="selectorActiveOptions" v-bind="{ isDropdownOpen, activeOptions }">
                            {{ activeOptions }}
                        </slot>
                    </div>
                </div>
                <slot name="selectorAfterText" v-bind="{ isDropdownOpen, options, activeOptions }"></slot>
                <div class="queso-dropdown__selector__icon">
                    <slot name="selectorIcon" v-bind="{ isDropdownOpen }">↓</slot>
                </div>
            </slot>
        </div>

        <div class="queso-dropdown__popover" :id="uniqueId">
            <div v-if="$slots.popoverHeader" class="queso-dropdown__popover__header">
                <slot name="popoverHeader" v-bind="{ options, activeOptions }"></slot>
            </div>
            <div class="queso-dropdown__popover__scroll" :class="dropdownPopoverClasses">
                <ul ref="dropdownPopover" class="queso-dropdown__popover__options-list">
                    <li
                        v-for="(option, index) in options"
                        :key="option.value"
                        ref="optionsRefs"
                        class="queso-dropdown__popover__options-list__item"
                        :class="{
                            'is-option-active': model.includes(option.value),
                            'is-option-selected': model.includes(option.value),
                        }"
                        :tabindex="isDropdownOpen ? '0' : '-1'"
                        @click="updateOption(option.value)"
                        @keydown="handleKeydownUpdateOption(option.value, $event)"
                    >
                        <slot
                            name="popoverItem"
                            v-bind="{
                                index,
                                ...option,
                                isSelected: model.includes(option.value),
                                openDropdown,
                                closeDropdown,
                            }"
                        >
                            {{ option }}
                        </slot>
                    </li>
                </ul>
            </div>
            <div v-if="$slots.popoverFooter" class="queso-dropdown__popover__footer">
                <slot name="popoverFooter" v-bind="{ options, activeOptions }"></slot>
            </div>
        </div>

        <slot name="afterDropdown"></slot>
    </div>
</template>

<script setup lang="ts" generic="TOptionData extends Record<string, any> = Record<string, any>">
import { computed, ref, toRefs, watch } from "vue";
import { onClickOutside, useScroll } from "@vueuse/core";
import { onKeyStroke } from "@vueuse/core";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

import { QuesoDropdownModel, QuesoDropdownProps, QuesoDropdownOptions, QuesoDropdownOptionValue } from "./types";

// Props / Emits
const props = defineProps<QuesoDropdownProps<TOptionData>>();

const emit = defineEmits<{
    "dropdown:open": [];
    "dropdown:close": [];
}>();

// Model
const model = defineModel<QuesoDropdownModel>({ default: () => [] });

// Refs
const dropdown = ref<HTMLElement | null>(null);
const optionsRefs = ref<HTMLElement[]>([]);
const dropdownPopover = ref<HTMLElement | null>(null);
const isDropdownOpen = ref<boolean>(false);

// Variables
const { options } = toRefs(props);
const uniqueId = "queso-collapsible__" + Math.random().toString(36).substring(2, 9);
const activeOptions = computed<QuesoDropdownOptions<TOptionData>>(() => {
    return options.value.filter((option) => model.value.includes(option.value));
});
const dropdownClasses = computed(() => ({
    "is-multiple": props.multiple,
    "is-dropdown-open": isDropdownOpen.value,
    "is-dropdown-close": !isDropdownOpen.value,
    "is-disabled": props.isDisabled,
}));

// Focus Trap
const { activate: activeFocus, deactivate: deactivateFocus } = useFocusTrap(dropdown);

/**
 * ON OPTION CHANGE
 */

const updateOption = (option: QuesoDropdownOptionValue) => {
    if (props.multiple) {
        // If multiple: if option present in array remove it, otherwise add it
        if (model.value.includes(option)) {
            model.value = model.value.filter((value) => value !== option);
        } else {
            model.value = [...model.value, option];
        }
    } else {
        // If not multiple: just update completely the array
        model.value = [option];
    }

    if (!props.multiple) {
        if (!props.stayOpenOnSelection) closeDropdown();
    }
};

// Navigate through options with keyboard
const handleKeydownUpdateOption = (option: QuesoDropdownOptionValue, event: KeyboardEvent) => {
    event.preventDefault();

    const currentIndex = optionsRefs.value.findIndex((el) => el === event.target);
    const nextIndex = (currentIndex + 1) % optionsRefs.value.length;
    const prevIndex = (currentIndex - 1 + optionsRefs.value.length) % optionsRefs.value.length;
    const optionNext = optionsRefs.value[nextIndex];
    const optionPrev = optionsRefs.value[prevIndex];

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        optionNext.focus();
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        optionPrev.focus();
    } else if (event.key === "Enter") {
        updateOption(option);
    } else if (event.key === " " || event.key === "Space") {
        updateOption(option);
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
    const option = optionsRefs.value[0];

    activeFocus();
    if (option) {
        option.focus();
    }

    emit("dropdown:open");
};

const closeDropdown = () => {
    isDropdownOpen.value = false;

    deactivateFocus();
    scrollToTop();

    emit("dropdown:close");
};

const toggleDropdown = () => {
    if (isDropdownOpen.value) {
        closeDropdown();
    } else {
        openDropdown();
    }
};

const handleClickToggleDropdown = () => {
    if (!props.isDisabled) {
        toggleDropdown();
    }
};

// Open dropdown on space key
const handleKeydownToggleDropdown = (event: KeyboardEvent) => {
    if (props.isDisabled) {
        return;
    }
    if (event.key === " " || event.key === "Space") {
        event.preventDefault();
        toggleDropdown();
    }
};

// Close dropdown on space key
onKeyStroke("Escape", () => {
    if (isDropdownOpen.value) {
        closeDropdown();
    }
});

// Close dropdown on click outside
onClickOutside(dropdown, () => closeDropdown());

// Close dropdown when disabled
watch(
    () => props.isDisabled,
    (isDisabled) => {
        if (isDisabled && isDropdownOpen.value) {
            closeDropdown();
        }
    },
);

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

    &.is-disabled {
        #{$_}__selector {
            cursor: not-allowed;
            pointer-events: none;
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
