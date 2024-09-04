<template>
    <div class="queso-field" :class="fieldClasses">
        <component
            v-if="label"
            :is="hasStaticLabel ? 'div' : 'label'"
            :for="!hasStaticLabel ? fieldID : null"
            class="queso-field__label"
        >
            <slot name="beforeLabel" v-bind="{ ...exposedData }"></slot>
            <slot name="label" v-bind="{ label, ...exposedData }">
                <span class="queso-field__label__text" v-html="label"></span>
            </slot>
            <slot v-if="isRequired" name="required" v-bind="{ ...exposedData }">
                <span class="queso-field__label__required">*</span>
            </slot>
            <slot name="afterLabel" v-bind="{ ...exposedData }"></slot>
        </component>

        <div class="queso-field__input">
            <slot name="beforeInput" v-bind="{ ...exposedData }"></slot>
            <slot name="input" v-bind="{ ...exposedData }"></slot>
            <slot name="afterInput" v-bind="{ ...exposedData }"></slot>
        </div>

        <div v-if="isError && $slots.error" class="queso-field__error">
            <slot name="error" v-bind="{ ...exposedData }"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs, reactive } from "vue";

import type { HTMLAttributes } from "vue";
import type { QuesoFieldPrivateProps } from "./types";

// Props
const props = defineProps<QuesoFieldPrivateProps>();

// Emits
const emit = defineEmits<{
    "input:hover": [boolean];
    "input:hover:enter": [];
    "input:hover:leave": [];
    "input:active": [boolean];
    "input:active:focus": [];
    "input:active:blur": [];
}>();

/**
 * STATES
 */
const { isRequired, isDisabled, isError, isReadOnly } = toRefs(props);

// Active
const isActive = ref<boolean>(false);

const toggleIsActive = (bool: boolean = false): void => {
    isActive.value = bool;
    emit("input:active", bool);

    if (bool) {
        emit("input:active:focus");
    } else {
        emit("input:active:blur");
    }
};

// Hover
const isHover = ref<boolean>(false);

const toggleIsHover = (bool: boolean = false): void => {
    isHover.value = bool;
    emit("input:hover", bool);

    if (bool) {
        emit("input:hover:enter");
    } else {
        emit("input:hover:leave");
    }
};

/**
 * COMPUTEDS
 */

const fieldID = computed<string>(() => props.id || props.name || "");
const { name: fieldName, label: fieldLabel } = toRefs(props);

const fieldClasses = computed<HTMLAttributes["class"]>(() => ({
    "is-disabled": isDisabled.value,
    "is-error": isError.value,
    "is-active": isActive.value,
    "is-hover": isHover.value,
    "is-read-only": isReadOnly.value,
}));

/**
 * EXPOSE REFS/METHODS/STATES
 */

const exposedData = reactive({
    // Base
    fieldID,
    fieldName,
    fieldLabel,
    // States
    isRequired,
    isActive,
    isHover,
    isDisabled,
    isError,
    isReadOnly,
    // Methods
    toggleIsActive,
    toggleIsHover,
});

defineExpose({ ...exposedData });
</script>

<style lang="scss">
.queso-field {
    &.is-disabled {
        @include unselectable;
    }
}
</style>
