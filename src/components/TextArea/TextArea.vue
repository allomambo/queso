<template>
    <field-base>
        <template #field="fieldProps">
            <div class="text-area">
                <span v-if="fieldProps?.isReadOnly" class="text-area__readonly" v-html="fieldProps?.fieldValue"></span>

                <textarea
                    v-else
                    :name="fieldProps?.fieldName"
                    :id="fieldProps?.fieldID"
                    :value="fieldProps?.fieldValue"
                    class="text-area__input"
                    :required="fieldProps?.isRequired"
                    :disabled="fieldProps?.isDisabled"
                    @input="fieldProps?.updateValue"
                    @mouseover="fieldProps.toggleIsHover(true)"
                    @mouseleave="fieldProps.toggleIsHover(false)"
                    @focus="fieldProps.toggleIsActive(true)"
                    @blur="fieldProps.toggleIsActive(false)"
                ></textarea>
            </div>
        </template>
    </field-base>
</template>

<script setup lang="ts">
import FieldBase from "@components/FieldBase";
</script>

<style lang="scss">
.text-area {
    --tt-field-align: flex-start;
    @include field;
    height: var(--text-area-height, calc(var(--tt-field-height) * 2.6));

    &__input {
        height: 100%;
        resize: none; // should we let use resize?
    }

    &__readonly {
        padding: 1.4rem 0;
    }
}
</style>
