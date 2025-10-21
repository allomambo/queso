<template>
    <queso-field class="-checkbox-multiple" static-label v-bind="extendedProps">
        <template #beforeLabel>
            <slot name="beforeLabel"></slot>
        </template>
        <template #label="exposedData">
            <slot name="label" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #required="exposedData">
            <slot name="required" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #afterLabel>
            <slot name="afterLabel"></slot>
        </template>

        <template #beforeInput>
            <slot name="beforeInput"></slot>
        </template>
        <template #input="{ fieldID, fieldName, isRequired, isDisabled, isReadOnly, toggleIsActive, toggleIsHover }">
            <component
                v-for="choice in choices"
                :is="isReadOnly ? 'div' : 'label'"
                class="queso-checkbox"
                :class="{ 'is-checkbox-hover': hoveredChoice === choice.value, 'is-checked': choice.isChecked }"
                :for="!isReadOnly ? `${fieldID}-${choice.value}` : null"
                @mouseover="
                    hoveredChoice = choice.value;
                    toggleIsHover(true);
                "
                @mouseleave="
                    hoveredChoice = null;
                    toggleIsHover(false);
                "
            >
                <slot name="checkboxBox">
                    <span class="queso-checkbox__box">
                        <span class="queso-checkbox__box__symbol">
                            <slot name="checkboxBoxSymbol">✔︎</slot>
                        </span>
                    </span>
                </slot>

                <slot name="checkboxLabel">
                    <span class="queso-checkbox__label">
                        <span class="queso-checkbox__label__text" v-html="choice.label"></span>
                    </span>
                </slot>

                <input
                    v-if="!isReadOnly"
                    ref="checkboxInputs"
                    class="queso-checkbox__native"
                    type="checkbox"
                    :id="`${fieldID}-${choice.value}`"
                    :name="`${fieldName}[]`"
                    :required="isRequired && !hasAtLeastOneChecked"
                    :disabled="isDisabled"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="choice.isChecked"
                />
            </component>
        </template>
        <template #afterInput>
            <slot name="afterInput"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="{ ...exposedData }"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import { computed, ref, reactive, watch } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoCheckboxMultipleModel, QuesoCheckboxMultipleProps, QuesoCheckboxMultipleChoices } from "./types";

import QuesoField from "@components/QuesoField";

const props = withDefaults(defineProps<QuesoCheckboxMultipleProps>(), {
    validationMessage: "Please select at least one option",
});
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoCheckboxMultipleModel>({ required: true, default: [] });

const hoveredChoice = ref<QuesoCheckboxMultipleChoices[number]["value"] | null>(null);

// Convert the choices to reactive objects
// Add the isChecked property to each choice if not present
const choices: QuesoCheckboxMultipleChoices = reactive(
    props.choices.map((choice) => ({ isChecked: model.value.includes(choice.value), ...choice })),
);
const checkedChoices = computed<QuesoCheckboxMultipleModel>(() =>
    choices.filter((choice) => choice.isChecked).map((choice) => choice.value),
);

// Update the model when checked choices change
watch(
    checkedChoices,
    (value) => {
        // Only update the model if the value has changed to prevent infinite loop
        // (using JSON.stringify for deep comparison)
        if (JSON.stringify(value) !== JSON.stringify(model.value)) {
            model.value = value;
        }
    },
    { immediate: true },
);

// Watch for external model changes and update choices accordingly
watch(
    model,
    (newValue) => {
        choices.forEach((choice) => {
            choice.isChecked = newValue.includes(choice.value);
        });
    },
    { immediate: true },
);

/**
 * Validation error
 */

const checkboxInputs = ref<HTMLInputElement[]>([]);

// If the field is required, the choices must have at least one checked
const hasAtLeastOneChecked = computed<boolean>(() => checkedChoices.value.length > 0);
const displayValidationMessage = computed<boolean>(() => props.isRequired && !hasAtLeastOneChecked.value);

// Set a custom validation message if the field is required and no choices are checked
watch(
    displayValidationMessage,
    (value) => {
        checkboxInputs.value.forEach((input) => {
            if (value) {
                input.setCustomValidity(props.validationMessage);
            } else {
                input.setCustomValidity("");
            }
        });
    },
    { immediate: true },
);
</script>

<style lang="scss">
// Styles for each checkbox comes from QuesoCheckbox
</style>
