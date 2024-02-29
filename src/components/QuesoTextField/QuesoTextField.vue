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

                <button
                    v-if="type === 'password'"
                    class="queso-text-field__password-toggle"
                    @click="togglePasswordVisibility"
                >
                    <slot name="passwordToggle">✔︎</slot>
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
    --queso-text-field-password-toggle-top: 0rem;
    --queso-text-field-password-toggle-right: 0rem;
    --queso-text-field-password-toggle-bottom: auto;
    --queso-text-field-password-toggle-left: auto;
    --queso-text-field-password-toggle-height: 100%;
    --queso-text-field-password-toggle-padding: 0.3rem;

    position: relative;
    width: fit-content;

    &__password-toggle {
        display: flex;
        align-items: center;
        position: absolute;

        top: var(--queso-text-field-password-toggle-top);
        right: var(--queso-text-field-password-toggle-right);
        bottom: var(--queso-text-field-password-toggle-bottom);
        left: var(--queso-text-field-password-toggle-left);
        height: var(--queso-text-field-password-toggle-height);
        padding: var(--queso-text-field-password-toggle-padding);

        background: none;
        border: 0rem;
    }
}
</style>
