<template>
    <div
        v-if="options.length > 0"
        ref="dropdown"
        class="queso-dropdown"
        :class="dropdownClasses"
        @focusout="handleFocusout($event)"
    >
        <div
            ref="selector"
            class="queso-dropdown__selector"
            role="combobox"
            aria-haspopup="listbox"
            :aria-expanded="isDropdownOpen"
            :aria-controls="listboxId"
            :aria-activedescendant="activeDescendant"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            :aria-required="isRequired || undefined"
            :aria-invalid="isError || undefined"
            :aria-disabled="isDisabled || undefined"
            :tabindex="isDisabled ? -1 : 0"
            @click="handleClickToggleDropdown()"
            @keydown="handleKeydown($event)"
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

        <div class="queso-dropdown__popover" :inert="!isDropdownOpen">
            <div v-if="$slots.popoverHeader" class="queso-dropdown__popover__header">
                <slot name="popoverHeader" v-bind="{ options, activeOptions }"></slot>
            </div>
            <div class="queso-dropdown__popover__scroll" :class="dropdownPopoverClasses">
                <ul
                    ref="dropdownPopover"
                    class="queso-dropdown__popover__options-list"
                    role="listbox"
                    :id="listboxId"
                    :aria-label="ariaLabel"
                    :aria-labelledby="ariaLabelledby"
                    :aria-multiselectable="multiple || undefined"
                    tabindex="-1"
                    @focus="focusSelector()"
                    @mousedown.prevent
                >
                    <li
                        v-for="(option, index) in options"
                        :key="option.value"
                        class="queso-dropdown__popover__options-list__item"
                        :class="{
                            'is-option-active': model.includes(option.value),
                            'is-option-selected': model.includes(option.value),
                            'is-option-focused': isOptionFocused(index),
                        }"
                        role="option"
                        :id="getOptionId(index)"
                        :aria-selected="model.includes(option.value)"
                        @click="handleClickOption(index)"
                        @pointermove="handlePointerMoveOption(index)"
                    >
                        <slot
                            name="popoverItem"
                            v-bind="{
                                index,
                                ...option,
                                isSelected: model.includes(option.value),
                                isFocused: isOptionFocused(index),
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
import { computed, nextTick, ref, toRefs, useId, watch } from "vue";
import { onClickOutside, useScroll } from "@vueuse/core";

import type { QuesoDropdownModel, QuesoDropdownProps, QuesoDropdownOptions } from "./types";

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
const selector = ref<HTMLElement | null>(null);
const dropdownPopover = ref<HTMLElement | null>(null);
const isDropdownOpen = ref<boolean>(false);
const focusedIndex = ref<number>(-1);

// Variables
const { options } = toRefs(props);
const listboxId = "queso-dropdown__" + useId();
const activeOptions = computed<QuesoDropdownOptions<TOptionData>>(() => {
    return options.value.filter((option) => model.value.includes(option.value));
});
const dropdownClasses = computed(() => ({
    "is-multiple": props.multiple,
    "is-dropdown-open": isDropdownOpen.value,
    "is-dropdown-close": !isDropdownOpen.value,
    "is-disabled": props.isDisabled,
}));

/**
 * OPTIONS
 */

const getOptionId = (index: number): string => `${listboxId}-option-${index}`;

const getSelectedIndex = (): number => options.value.findIndex((option) => model.value.includes(option.value));

const isOptionFocused = (index: number): boolean => isDropdownOpen.value && focusedIndex.value === index;

const activeDescendant = computed<string | undefined>(() => {
    return isDropdownOpen.value && focusedIndex.value >= 0 ? getOptionId(focusedIndex.value) : undefined;
});

// Scroll the options list only, so the page itself never jumps
const scrollOptionIntoView = (index: number) => {
    const list = dropdownPopover.value;
    const option = list?.querySelector<HTMLElement>(`[id="${getOptionId(index)}"]`);
    if (!list || !option) return;

    const listRect = list.getBoundingClientRect();
    const optionRect = option.getBoundingClientRect();

    if (optionRect.top < listRect.top) {
        list.scrollTop -= listRect.top - optionRect.top;
    } else if (optionRect.bottom > listRect.bottom) {
        list.scrollTop += optionRect.bottom - listRect.bottom;
    }
};

const setFocusedIndex = (index: number) => {
    focusedIndex.value = Math.min(Math.max(index, 0), options.value.length - 1);
    nextTick(() => scrollOptionIntoView(focusedIndex.value));
};

const selectOption = (index: number) => {
    const option = options.value[index];
    if (!option) return;

    if (props.multiple) {
        // If multiple: if option present in array remove it, otherwise add it
        if (model.value.includes(option.value)) {
            model.value = model.value.filter((value) => value !== option.value);
        } else {
            model.value = [...model.value, option.value];
        }
    } else {
        // If not multiple: just update completely the array
        model.value = [option.value];

        if (!props.stayOpenOnSelection) closeDropdown();
    }
};

const handleClickOption = (index: number) => {
    focusedIndex.value = index;
    selectOption(index);
};

// The pointer moves the highlight too, so only one option looks highlighted (no scroll: the option is visible)
const handlePointerMoveOption = (index: number) => {
    if (isDropdownOpen.value) focusedIndex.value = index;
};

/**
 * OPEN/CLOSE DROPDOWN
 */

let scrollResetTimeout: ReturnType<typeof setTimeout> | undefined;

const focusSelector = () => {
    selector.value?.focus();
};

const showDropdown = (index: number) => {
    if (props.isDisabled) return;

    setFocusedIndex(index);

    if (isDropdownOpen.value) return;

    clearTimeout(scrollResetTimeout);
    isDropdownOpen.value = true;
    emit("dropdown:open");
};

const openDropdown = () => {
    showDropdown(Math.max(getSelectedIndex(), 0));
    focusSelector();
};

const closeDropdown = () => {
    if (!isDropdownOpen.value) return;

    isDropdownOpen.value = false;
    focusedIndex.value = -1;

    // Reset the list scroll once the closing transition is over
    scrollResetTimeout = setTimeout(() => {
        y.value = 0;
    }, 210);

    emit("dropdown:close");
};

const handleClickToggleDropdown = () => {
    if (isDropdownOpen.value) {
        closeDropdown();
    } else {
        openDropdown();
    }
};

/**
 * KEYBOARD
 */

const TYPEAHEAD_DELAY = 500;
let typeaheadBuffer = "";
let typeaheadTimeout: ReturnType<typeof setTimeout> | undefined;

const matchesTypeahead = (label: string, search: string): boolean => {
    const start = label.trim().slice(0, search.length);
    return start.localeCompare(search, undefined, { sensitivity: "base" }) === 0;
};

// Focus the next option whose label starts with the typed characters
const typeahead = (character: string) => {
    clearTimeout(typeaheadTimeout);
    typeaheadTimeout = setTimeout(() => {
        typeaheadBuffer = "";
    }, TYPEAHEAD_DELAY);

    typeaheadBuffer += character.toLowerCase();

    // Repeating the same character cycles through the options starting with it
    const isRepeatedCharacter = [...typeaheadBuffer].every((char) => char === typeaheadBuffer[0]);
    const search = isRepeatedCharacter ? typeaheadBuffer[0] : typeaheadBuffer;

    const currentIndex = isDropdownOpen.value ? focusedIndex.value : getSelectedIndex();
    const startIndex = Math.max(currentIndex + (search.length === 1 ? 1 : 0), 0);
    const count = options.value.length;

    for (let offset = 0; offset < count; offset++) {
        const index = (startIndex + offset) % count;

        if (matchesTypeahead(options.value[index].label, search)) {
            showDropdown(index);
            return;
        }
    }
};

const isPrintableCharacter = (event: KeyboardEvent): boolean => {
    return event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
};

const handleKeydown = (event: KeyboardEvent) => {
    if (props.isDisabled) return;

    const lastIndex = options.value.length - 1;

    // A space typed while searching is part of the search
    if (isPrintableCharacter(event) && (event.key !== " " || typeaheadBuffer !== "")) {
        event.preventDefault();
        typeahead(event.key);
        return;
    }

    if (!isDropdownOpen.value) {
        switch (event.key) {
            case "ArrowDown":
            case "ArrowUp":
            case "Enter":
            case " ":
                event.preventDefault();
                showDropdown(Math.max(getSelectedIndex(), 0));
                break;
            case "Home":
                event.preventDefault();
                showDropdown(0);
                break;
            case "End":
                event.preventDefault();
                showDropdown(lastIndex);
                break;
        }
        return;
    }

    switch (event.key) {
        case "ArrowDown":
            event.preventDefault();
            if (!event.altKey) setFocusedIndex(focusedIndex.value + 1);
            break;
        case "ArrowUp":
            event.preventDefault();
            if (event.altKey) {
                closeDropdown();
            } else {
                setFocusedIndex(focusedIndex.value - 1);
            }
            break;
        case "Home":
            event.preventDefault();
            setFocusedIndex(0);
            break;
        case "End":
            event.preventDefault();
            setFocusedIndex(lastIndex);
            break;
        case "Enter":
        case " ":
            event.preventDefault();
            selectOption(focusedIndex.value);
            break;
        case "Escape":
            // Keep Escape from also closing a parent (e.g. a modal)
            event.preventDefault();
            event.stopPropagation();
            closeDropdown();
            break;
        case "Tab":
            closeDropdown();
            break;
    }
};

/**
 * CLOSE TRIGGERS
 */

// Close dropdown when focus leaves it
const handleFocusout = (event: FocusEvent) => {
    const nextFocused = event.relatedTarget as Node | null;

    if (nextFocused && !dropdown.value?.contains(nextFocused)) {
        closeDropdown();
    }
};

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

// Keep the focused option in range when options change
watch(
    () => options.value.length,
    (length) => {
        if (focusedIndex.value >= length) {
            focusedIndex.value = length - 1;
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
defineExpose({ isDropdownOpen, openDropdown, closeDropdown, focusSelector });
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
            @include unselectable;
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
