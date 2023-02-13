<template>
    <field-base ref="field">
        <template #label>
            <slot name="label"></slot>
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
            <div class="tt-text-field">
                <slot name="before"></slot>

                <span v-if="isReadOnly" class="tt-text-field__readonly" v-html="fieldValue"></span>

                <input
                    v-else
                    :type="type"
                    :value="fieldValue"
                    :name="fieldName"
                    :id="fieldID"
                    class="tt-text-field__input"
                    :required="isRequired"
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

        <template #error>
            <slot name="error"></slot>
        </template>
    </field-base>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FieldBase from "@components/FieldBase";

export type FieldTypes = "text" | "url" | "tel" | "email" | "password";

export interface Props {
    type?: FieldTypes;
}

const props = withDefaults(defineProps<Props>(), {
    type: "text",
});

const field = ref<InstanceType<typeof FieldBase> | null>(null);

defineExpose({
    ...field.value,
});
</script>

<style lang="scss">
.tt-text-field {
}
</style>
