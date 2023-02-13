<template>
    <div class="tt-field" :class="fieldClasses">
        <slot name="label" v-bind="{ ...exposedData }">
            <label v-if="label" :for="fieldID" class="tt-field-label">
                {{ label }}
            </label>
        </slot>

        <div v-if="$slots.field" class="tt-field__input">
            <slot name="beforeField"></slot>
            <slot name="field" v-bind="{ ...exposedData }"></slot>
            <slot name="afterField"></slot>
        </div>

        <div v-if="isError" class="tt-field__error">
            <slot name="error" v-bind="{ ...exposedData }"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, HTMLAttributes, toRefs, reactive } from "vue";

export interface Props {
    // Base
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;
    // States
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
const { isRequired, isDisabled, isError, isReadOnly } = toRefs(props);

const toggleIsActive = (bool: boolean = false) => {
    isActive.value = bool;
};

const toggleIsHover = (bool: boolean = false) => {
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

const fieldID = computed<string>(() => props.id || props.name);
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
.tt-field {
    --tt-field-height: 5rem;
    --tt-field-txt-color: black;
    --tt-field-border-color: black;
    position: relative;

    &.is-active,
    &.is-hover {
        --tt-field-txt-color: green;
        --tt-field-border-color: green;
    }

    &.has-value {
        --tt-field-txt-color: rgb(0, 192, 0);
        --tt-field-border-color: #00c200;
    }

    &.is-disabled {
        --tt-field-txt-color: grey;
        --tt-field-border-color: grey;
        pointer-events: none;
        user-select: none;
    }

    &.is-error {
        --tt-field-txt-color: red;
        --tt-field-border-color: red;
    }

    &.is-read-only {
        --tt-field-txt-color: blue;
        --tt-field-border-color: blue;
    }
}
</style>
