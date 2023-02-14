<template>
    <field-base>
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

        <template #afterField>
            <slot name="afterField"></slot>
        </template>

        <template #error="fieldProps">
            <slot name="error" v-bind="{ ...fieldProps }"></slot>
        </template>
    </field-base>
</template>

<script setup lang="ts">
import FieldBase from "@components/FieldBase";
</script>

<style lang="scss">
.queso-text-area {
}
</style>
