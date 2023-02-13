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
import { computed, ref } from "vue";

const props = defineProps({
    // BASE
    id: {
        type: String,
        required: false,
        default: null,
    },
    name: {
        type: String,
        required: true,
        default: null,
    },
    label: {
        type: String,
        required: false,
        default: "",
    },
    modelValue: null,

    // STATES
    isRequired: {
        type: Boolean,
        required: false,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    isReadOnly: {
        type: Boolean,
        required: false,
        default: false,
    },
    isError: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * STATES
 */
const isActive = ref(false);
const isHover = ref(false);
const isFilled = computed(() => (fieldValue.value ? true : false));

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
const fieldValue = ref(props.modelValue ?? "");

const fieldClasses = computed<string[]>(() => [
    // States
    props.isDisabled && "is-disabled",
    props.isError && "is-error",
    (isActive.value || isFilled.value) && "is-active",
    isHover.value && "is-hover",
    props.isReadOnly && "is-read-only",
]);

const fieldID = computed<string>(() => {
    return `field-${props.id || props.name}`;
});
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
