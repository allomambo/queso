<template>
    <queso-field class="-text-area" v-bind="extendedProps">
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
        <template
            #input="{
                fieldID,
                fieldName,
                fieldValue,
                isRequired,
                isDisabled,
                isReadOnly,
                toggleIsActive,
                toggleIsHover,
            }"
        >
            <div class="queso-text-area">
                <slot name="beforeTextAreaInput"></slot>

                <span v-if="isReadOnly" class="queso-text-area__readonly" v-html="fieldValue"></span>

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

import type { QuesoTextAreaProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoTextAreaProps>();

const model = defineModel<string>({ required: true, default: "" });

const extendedProps = useExtendedFieldProps(props);
</script>

<style lang="scss">
.queso-text-area {
}
</style>
