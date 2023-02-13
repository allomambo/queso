<template>
    <div class="tt-field" :class="fieldClasses">
        <label v-if="label" :for="fieldID" class="tt-field-label">
            <slot name="label">{{ label }}</slot>
        </label>

        <div v-if="$slots.field" class="tt-field__input">
            <slot name="beforeField"></slot>
            <slot
                name="field"
                v-bind="{ ...$props, fieldID, fieldValue, updateValue, toggleIsActive, toggleIsHover }"
            ></slot>
            <slot name="afterField"></slot>
        </div>

        <div v-if="isError" class="tt-field__error">
            <slot name="error"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, HTMLAttributes } from "vue";

export interface Props {
    // BASE
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;
    // STATES
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

/**
 * STATES
 */
const isActive = ref<boolean>(false);
const isHover = ref<boolean>(false);
const isFilled = computed<boolean>(() => (fieldValue.value !== null ? true : false));

const toggleIsActive = (bool: boolean) => {
    isActive.value = bool;
};

const toggleIsHover = (bool: boolean) => {
    isHover.value = bool;
};

const updateValue = (data: any) => {
    fieldValue.value = data.target ? data.target.value : data;
    emit("update:modelValue", fieldValue.value);
};

/**
 * COMPUTEDS
 */
const fieldValue = ref<any>(props.modelValue ?? null);

const fieldClasses = computed<HTMLAttributes["class"]>(() => ({
    "is-disabled": props.isDisabled,
    "is-error": props.isError,
    "has-value": isFilled.value,
    "is-active": isActive.value,
    "is-hover": isHover.value,
    "is-read-only": props.isReadOnly,
}));

const fieldID = computed<string>(() => props.id || props.name);
</script>

<style lang="scss">
.tt-field {
    --tt-field-height: 5rem;
    position: relative;

    &.is-active {
        --label-scale: scale(0.5);
        --label-translate: translateY(-110%);
    }

    &.is-active,
    &.is-hover {
        --tt-field-txt-color: var(--color-black);
        --tt-field-border-color: var(--color-black-pale);
    }

    &.is-disabled {
        --tt-field-txt-color: var(--color-grey);
        --tt-field-border-color: var(--color-grey-faded);
        pointer-events: none;
        user-select: none;
    }

    &.is-error {
        --tt-field-border-color: var(--color-warning);
    }

    &.is-read-only {
        --tt-field-txt-color: var(--color-black-pale);
        --tt-field-bg-color: var(--color-grey-pale);
        --tt-field-border-color: var(--color-grey-pale);
    }

    &__input {
        position: relative;
    }
}
</style>
