<template>
    <queso-field class="-checkbox" static-label v-bind="extendedProps">
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
                :is="isReadOnly ? 'div' : 'label'"
                class="queso-checkbox"
                :class="{ 'is-checked': isChecked }"
                :for="!isReadOnly ? fieldID : null"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
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
                        <span class="queso-checkbox__label__text" v-html="boxLabel"></span>
                        <slot v-if="isRequired" name="checkboxLabelRequired" v-bind="{ isRequired }">
                            <span class="queso-checkbox__label__required">*</span>
                        </slot>
                    </span>
                </slot>

                <input
                    v-if="!isReadOnly"
                    class="queso-checkbox__native"
                    type="checkbox"
                    :id="fieldID"
                    :name="fieldName"
                    :required="isRequired"
                    :disabled="isDisabled"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
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
import { computed } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoCheckboxMultipleModel, QuesoCheckboxMultipleProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoCheckboxMultipleProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoCheckboxMultipleModel>({ required: true, default: [] });
const isChecked = computed<boolean>(() => !!model.value);
</script>

<style lang="scss">
// Styles for each checkbox comes from QuesoCheckbox
</style>
