<template>
    <field-base>
        <template #label>
            <slot name="label"></slot>
        </template>

        <template #field="fieldProps">
            <div class="text-field">
                <slot name="before"></slot>

                <span v-if="fieldProps?.isReadOnly" class="text-field__readonly" v-html="fieldProps?.modelValue"></span>

                <input
                    v-else
                    :type="type"
                    :value="fieldProps?.fieldValue"
                    :name="fieldProps?.name"
                    :id="fieldProps?.fieldID"
                    class="text-field__input"
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

const props = defineProps({
    type: {
        type: String,
        required: false,
        default: "text",
        validator(t: string) {
            return ["text", "url", "tel", "email", "password"].includes(t);
        },
    },
});
</script>

<style lang="scss">
.text-field {
    // @include field;

    :deep(.icon) {
        &:not(.has-txt-color) {
            color: var(--tt-field-txt-color);
        }
    }
}
</style>
