<template>
    <queso-field class="-checkbox-multiple" has-static-label v-bind="extendedProps">
        <template #beforeLabel="exposedData">
            <slot name="beforeLabel" v-bind="exposedData"></slot>
        </template>
        <template #label="exposedData">
            <slot name="label" v-bind="exposedData"></slot>
        </template>
        <template #required="exposedData">
            <slot name="required" v-bind="exposedData"></slot>
        </template>
        <template #afterLabel="exposedData">
            <slot name="afterLabel" v-bind="exposedData"></slot>
        </template>

        <template #beforeInput="exposedData">
            <slot name="beforeInput" v-bind="exposedData"></slot>
        </template>
        <template #input="exposedData">
            <component
                v-for="choice in choices"
                :is="exposedData.isReadOnly ? 'div' : 'label'"
                class="queso-checkbox"
                :class="{ 'is-checkbox-hover': hoveredChoice === choice.value, 'is-checked': choice.isChecked }"
                :for="!exposedData.isReadOnly ? `${exposedData.fieldID}-${choice.value}` : null"
                @mouseover="
                    hoveredChoice = choice.value;
                    exposedData.toggleIsHover(true);
                "
                @mouseleave="
                    hoveredChoice = null;
                    exposedData.toggleIsHover(false);
                "
            >
                <input
                    v-if="!exposedData.isReadOnly"
                    ref="checkboxInputs"
                    class="queso-checkbox__native"
                    type="checkbox"
                    :id="`${exposedData.fieldID}-${choice.value}`"
                    :name="`${exposedData.fieldName}[]`"
                    :required="exposedData.isRequired && !hasAtLeastOneChecked"
                    :disabled="exposedData.isDisabled"
                    @focus="exposedData.toggleIsActive(true)"
                    @blur="exposedData.toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="choice.isChecked"
                />

                <slot
                    name="checkbox"
                    v-bind="{
                        ...exposedData,
                        ...choice,
                        isHovered: hoveredChoice === choice.value,
                        isSelected: choice.isChecked,
                    }"
                >
                    <slot
                        name="checkboxBox"
                        v-bind="{
                            ...exposedData,
                            ...choice,
                            isHovered: hoveredChoice === choice.value,
                            isSelected: choice.isChecked,
                        }"
                    >
                        <span class="queso-checkbox__box">
                            <span class="queso-checkbox__box__symbol">
                                <slot
                                    name="checkboxBoxSymbol"
                                    v-bind="{
                                        ...exposedData,
                                        ...choice,
                                        isHovered: hoveredChoice === choice.value,
                                        isSelected: choice.isChecked,
                                    }"
                                    >✔︎</slot
                                >
                            </span>
                        </span>
                    </slot>

                    <slot
                        name="checkboxLabel"
                        v-bind="{
                            ...exposedData,
                            ...choice,
                            isHovered: hoveredChoice === choice.value,
                            isSelected: choice.isChecked,
                        }"
                    >
                        <span class="queso-checkbox__label">
                            <span class="queso-checkbox__label__text" v-html="choice.label"></span>
                        </span>
                    </slot>
                </slot>
            </component>
        </template>
        <template #afterInput="exposedData">
            <slot name="afterInput" v-bind="exposedData"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="exposedData"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts" generic="TChoiceData extends Record<string, any> = Record<string, any>">
import { computed, ref, reactive, watch } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoCheckboxMultipleModel, QuesoCheckboxMultipleProps, QuesoCheckboxMultipleChoices } from "./types";

import QuesoField from "@components/QuesoField";

const props = withDefaults(defineProps<QuesoCheckboxMultipleProps<TChoiceData>>(), {
    validationMessage: "Please select at least one option",
});
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoCheckboxMultipleModel>({ required: true, default: [] });

const hoveredChoice = ref<QuesoCheckboxMultipleChoices<TChoiceData>[number]["value"] | null>(null);

// Convert the choices to reactive objects
// Add the isChecked property to each choice if not present
const choices = reactive<QuesoCheckboxMultipleChoices<TChoiceData>>(
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
