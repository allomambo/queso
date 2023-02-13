<template>
    <field-base v-bind="$props">
        <template #label>
            <slot name="label"></slot>
        </template>

        <template #field="fieldProps">
            <div class="tt-text-field">
                <slot name="before"></slot>

                <span
                    v-if="fieldProps?.isReadOnly"
                    class="tt-text-field__readonly"
                    v-html="fieldProps?.modelValue"
                ></span>

                <input
                    v-else
                    :type="type"
                    :value="fieldProps?.fieldValue"
                    :name="fieldProps?.name"
                    :id="fieldProps?.fieldID"
                    class="tt-text-field__input"
                    :required="fieldProps?.isRequired"
                    :disabled="fieldProps?.isDisabled"
                    @input="fieldProps?.updateValue"
                    @mouseover="fieldProps.toggleIsHover(true)"
                    @mouseleave="fieldProps.toggleIsHover(false)"
                    @focus="fieldProps.toggleIsActive(true)"
                    @blur="fieldProps.toggleIsActive(false)"
                />

                <slot name="after"></slot>
            </div>
        </template>

        <template #error>
            <slot name="error"></slot>
        </template>
    </field-base>
</template>

<script setup lang="ts">
import FieldBase from "@components/FieldBase";

export type FieldTypes = "text" | "url" | "tel" | "email" | "password";

export interface Props {
    type?: FieldTypes;
}

const props = withDefaults(defineProps<Props>(), {
    type: "text",
});
</script>

<style lang="scss">
.tt-text-field {
}
</style>
