<template>
    <div class="queso-field" :class="fieldClasses">
        <slot name="labelComplete" v-bind="{ ...exposedData }">
            <label v-if="label" :for="fieldID" class="queso-field__label">
                <slot name="beforeLabel"></slot>
                <slot name="label" v-bind="{ label }">
                    <span class="queso-field__label__text" v-html="label"></span>
                </slot>
                <slot v-if="isRequired" name="required" v-bind="{ isRequired }">
                    <span class="queso-field__label__required">*</span>
                </slot>
                <slot name="afterLabel"></slot>
            </label>
        </slot>

        <div class="queso-field__input">
            <slot name="beforeInput"></slot>
            <slot name="input" v-bind="{ ...exposedData }"></slot>
            <slot name="afterInput"></slot>
        </div>

        <div v-if="isError && $slots.error" class="queso-field__error">
            <slot name="error" v-bind="{ ...exposedData }"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, toRefs, reactive } from "vue";

import type { HTMLAttributes } from "vue";
import type { QuesoFieldProps } from "./types";

// Props
const props = defineProps<QuesoFieldProps>();

// const emit = defineemit(["update:modelValue"]);

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

const isFilled = computed<boolean>(() => (fieldValue.value ? true : false));
const updateValue = (data: any): void => {
    fieldValue.value = data.target ? data.target.value : data;
};

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
const fieldValue = computed<any>({
    get() {
        return props.modelValue;
    },
    set(value) {
        // emit("update:modelValue", value);
    },
});

const fieldID = computed<string>(() => props.id || props.name || "");
const fieldName = toRef(props, "name");
const fieldLabel = toRef(props, "label");

const fieldClasses = computed<HTMLAttributes["class"]>(() => ({
    "is-disabled": isDisabled.value,
    "is-error": isError.value,
    "has-value": isFilled.value,
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
    fieldValue,
    fieldLabel,
    // States
    isRequired,
    isActive,
    isHover,
    isFilled,
    isDisabled,
    isError,
    isReadOnly,
    // Methods
    updateValue,
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
