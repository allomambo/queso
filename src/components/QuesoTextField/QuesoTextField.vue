<template>
    <queso-field class="-text-field" v-bind="extendedProps">
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
            <div class="queso-text-field">
                <slot name="beforeTextFieldInput" v-bind="exposedData"></slot>

                <span v-if="exposedData.isReadOnly" class="queso-text-field__readonly" v-html="model"></span>

                <input
                    v-else
                    class="queso-text-field__input"
                    :type="type"
                    :id="exposedData.fieldID"
                    :name="exposedData.fieldName"
                    :placeholder="placeholder"
                    :required="exposedData.isRequired"
                    :disabled="exposedData.isDisabled"
                    @mouseover="exposedData.toggleIsHover(true)"
                    @mouseleave="exposedData.toggleIsHover(false)"
                    @focus="exposedData.toggleIsActive(true)"
                    @blur="exposedData.toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />

                <slot name="afterTextFieldInput" v-bind="exposedData"></slot>
            </div>
        </template>
        <template #afterInput="exposedData">
            <slot name="afterInput" v-bind="exposedData"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="exposedData"></slot>
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
