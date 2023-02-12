<template>
    <div class="field" :class="fieldClasses">
        <slot name="label">
            <field-base-label v-if="label" :id="fieldID" :position="labelPosition" :isRequired="isRequired">
                {{ label }}
            </field-base-label>
        </slot>

        <div v-if="hasFieldSlot" class="field__input">
            <slot name="beforeField"></slot>
            <slot
                name="field"
                v-bind="{ ...$props, fieldID, fieldValue, updateValue, toggleIsActive, toggleIsHover }"
            ></slot>
            <slot name="afterField"></slot>
        </div>

        <field-base-error v-if="isError">{{ errorMessage }}</field-base-error>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

import FieldBaseLabel from "./components/FieldBaseLabel.vue";
import FieldBaseError from "./components/FieldBaseError.vue";

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

    // CUSTOMIZATION
    labelPosition: {
        type: String,
        required: false,
        default: "top",
        validator(pos: string) {
            return ["top", "placeholder"].includes(pos);
        },
    },
    errorMessage: {
        type: String,
        required: false,
        default: "Champ invalide", // TODO Translate this?
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
    // Visual
    `has-label-${props.labelPosition}`,
]);

const fieldID = computed<string>(() => {
    return `field-${props.id || props.name}`;
});

/**
 * SLOTS
 */
const slots = useSlots();

const hasFieldSlot = computed<boolean>(() => slots.field && slots.field().length > 0);
</script>

<style lang="scss">
.field {
    --field-height: 5rem;
    position: relative;

    &.is-active {
        --label-scale: scale(0.5);
        --label-translate: translateY(-110%);
    }

    &.is-active,
    &.is-hover {
        --field-txt-color: var(--color-black);
        --field-border-color: var(--color-black-pale);
    }

    &.is-disabled {
        --field-txt-color: var(--color-grey);
        --field-border-color: var(--color-grey-faded);
        pointer-events: none;
        user-select: none;
    }

    &.is-error {
        --field-border-color: var(--color-warning);
    }

    &.is-read-only {
        --field-txt-color: var(--color-black-pale);
        --field-bg-color: var(--color-grey-pale);
        --field-border-color: var(--color-grey-pale);
    }

    &__input {
        position: relative;
    }
}
</style>
