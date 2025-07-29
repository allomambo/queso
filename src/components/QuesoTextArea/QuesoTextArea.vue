<template>
    <queso-field class="-text-area" v-bind="extendedProps">
        <template #beforeLabel="exposedData">
            <slot name="beforeLabel" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #label="exposedData">
            <slot name="label" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #required="exposedData">
            <slot name="required" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #afterLabel="exposedData">
            <slot name="afterLabel" v-bind="{ ...exposedData }"></slot>
        </template>

        <template #beforeInput="exposedData">
            <slot name="beforeInput" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #input="{ fieldID, fieldName, isRequired, isDisabled, isReadOnly, toggleIsActive, toggleIsHover }">
            <div class="queso-text-area">
                <slot name="beforeTextAreaInput"></slot>

                <span v-if="isReadOnly" class="queso-text-area__readonly" v-html="model"></span>

                <textarea
                    v-else
                    class="queso-text-area__input"
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
                ></textarea>

                <slot name="afterTextAreaInput"></slot>
            </div>
        </template>
        <template #afterInput="exposedData">
            <slot name="afterInput" v-bind="{ ...exposedData }"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="{ ...exposedData }"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoTextAreaModel, QuesoTextAreaProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoTextAreaProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoTextAreaModel>({ required: true, default: "" });
</script>

<style lang="scss">
.queso-text-area {
}
</style>
