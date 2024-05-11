<template>
    <queso-field class="-text-field" :id="id" :name="name" :label="label">
        <template #beforeLabel>
            <slot name="beforeLabel"></slot>
        </template>
        <template #label="exposedData">
            <slot name="label" v-bind="{ ...exposedData }"></slot>
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
                toggleIsActive,
                toggleIsHover,
                isRequired,
                isDisabled,
                isReadOnly,
            }"
        >
            <div class="queso-text-field">
                <slot name="beforeTextField"></slot>

                <span v-if="isReadOnly" class="queso-text-field__readonly" v-html="fieldValue"></span>

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

                <slot name="afterTextField"></slot>
            </div>
        </template>

        <template #afterInput>
            <slot name="afterInput"></slot>
        </template>

        <template #error="fieldProps">
            <slot name="error" v-bind="{ ...fieldProps }"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import type { QuesoTextFieldProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = withDefaults(defineProps<QuesoTextFieldProps>(), {
    type: "text",
});

const model = defineModel<string>({ required: true, default: "" });
</script>

<style lang="scss">
.queso-text-field {
}
</style>
