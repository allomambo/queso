<template>
    <queso-field v-bind="$props">
        <template #label="fieldProps">
            <slot name="label" v-bind="{ ...fieldProps }"></slot>
        </template>

        <template #beforeInput>
            <slot name="beforeInput"></slot>
        </template>

        <template
            #input="{
                fieldID,
                fieldName,
                fieldValue,
                updateValue,
                toggleIsActive,
                toggleIsHover,
                isRequired,
                isDisabled,
                isReadOnly,
            }"
        >
            <div class="queso-text-area">
                <span v-if="isReadOnly" class="queso-text-area__readonly" v-html="fieldValue"></span>

                <textarea
                    v-else
                    :name="fieldName"
                    :id="fieldID"
                    :value="fieldValue"
                    class="queso-text-area__input"
                    :placeholder="placeholder"
                    :required="isRequired"
                    :disabled="isDisabled"
                    @input="updateValue"
                    @mouseover="toggleIsHover(true)"
                    @mouseleave="toggleIsHover(false)"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                ></textarea>
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
import type { QuesoTextAreaProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoTextAreaProps>();
</script>

<style lang="scss">
.queso-text-area {
}
</style>
