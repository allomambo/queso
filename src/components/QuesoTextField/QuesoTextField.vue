<template>
    <queso-field v-bind="$props">
        <template #label="fieldProps">
            <slot name="label" v-bind="{ ...fieldProps }"></slot>
        </template>

        <template #beforeField>
            <slot name="beforeField"></slot>
        </template>

        <template
            #field="{
                fieldID,
                fieldName,
                fieldValue,
                fieldAutocomplete,
                updateValue,
                toggleIsActive,
                toggleIsHover,
                isRequired,
                isDisabled,
                isReadOnly,
            }"
        >
            <div class="queso-text-field">
                <span v-if="isReadOnly" class="queso-text-field__readonly" v-html="fieldValue"></span>

                <input
                    v-else
                    :type="type"
                    :value="fieldValue"
                    :name="fieldName"
                    :id="fieldID"
                    :placeholder="placeholder"
                    class="queso-text-field__input"
                    :required="isRequired"
                    :autocomplete="fieldAutocomplete"
                    :disabled="isDisabled"
                    @input="updateValue"
                    @mouseover="toggleIsHover(true)"
                    @mouseleave="toggleIsHover(false)"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                />

                <slot name="after"></slot>
            </div>
        </template>

        <template #afterField>
            <slot name="afterField"></slot>
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
</script>

<style lang="scss">
.queso-text-field {
}
</style>
