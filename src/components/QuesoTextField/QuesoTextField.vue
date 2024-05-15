<template>
    <queso-field class="-text-field" v-bind="extendedProps">
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
            <div class="queso-text-field">
                <slot name="beforeTextFieldInput"></slot>

                <span v-if="isReadOnly" class="queso-text-field__readonly" v-html="model"></span>

                <input
                    v-else
                    class="queso-text-field__input"
                    :type="type"
                    :id="fieldID"
                    :name="fieldName"
                    :placeholder="placeholder"
                    :required="isRequired"
                    :disabled="isDisabled"
                    @mouseover="toggleIsHover(true)"
                    @mouseleave="toggleIsHover(false)"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />

                <slot name="afterTextFieldInput"></slot>
            </div>
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
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoTextFieldModel, QuesoTextFieldProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = withDefaults(defineProps<QuesoTextFieldProps>(), {
    type: "text",
});
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoTextFieldModel>({ required: true, default: "" });
</script>

<style lang="scss">
.queso-text-field {
}
</style>
