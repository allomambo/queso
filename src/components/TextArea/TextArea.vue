<template>
    <field-base ref="field">
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
            <div class="tt-text-area">
                <span v-if="isReadOnly" class="tt-text-area__readonly" v-html="fieldValue"></span>

                <textarea
                    v-else
                    :name="fieldName"
                    :id="fieldID"
                    :value="fieldValue"
                    class="tt-text-area__input"
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
    </field-base>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FieldBase from "@components/FieldBase";

const field = ref<InstanceType<typeof FieldBase> | null>(null);

defineExpose({
    ...field.value,
});
</script>

<style lang="scss">
.tt-text-area {
}
</style>
