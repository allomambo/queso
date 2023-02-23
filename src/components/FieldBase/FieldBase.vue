<template>
    <div class="queso-field" :class="fieldClasses">
        <slot name="label" v-bind="{ ...exposedData }">
            <label v-if="label" :for="fieldID" class="queso-field__label">
                {{ label }}
            </label>
        </slot>

        <div v-if="$slots.field" class="queso-field__input">
            <slot name="beforeField"></slot>
            <slot name="field" v-bind="{ ...exposedData }"></slot>
            <slot name="afterField"></slot>
        </div>

        <div v-if="isError" class="queso-field__error">
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
    isAutocomplete?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

/**
 * STATES
 */
const isActive = ref<boolean>(false);
const isHover = ref<boolean>(false);
const isFilled = computed<boolean>(() => (fieldValue.value ? true : false));
const { isRequired, isDisabled, isError, isReadOnly, isAutocomplete } = toRefs(props);

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
const fieldAutocomplete = computed<string>(() => (isAutocomplete.value ? "on" : null));

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
    fieldAutocomplete,
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
    position: relative;

    &.is-disabled {
        @include unselectable;
    }
}
</style>
