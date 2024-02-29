<template>
    <queso-field>
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
                    :type="localType.value"
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
                <button v-if="type === 'password'" @click="togglePasswordVisibility">
                    <slot name="passwordToggle">x</slot>
                </button>
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
import { reactive } from "vue";
import QuesoField from "@components/QuesoField";

export type FieldTypes = "text" | "url" | "tel" | "email" | "password";

export interface Props {
    type?: FieldTypes;
    placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: "text",
    placeholder: "",
});

const localType = reactive({ value: props.type });

const togglePasswordVisibility = () => {
    localType.value = localType.value === "password" ? "text" : "password";
};
</script>

<style lang="scss">
.queso-text-field {
}
</style>
