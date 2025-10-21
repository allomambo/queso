<template>
    <queso-field class="-checkbox" has-static-label v-bind="extendedProps">
        <template #beforeLabel="exposedData">
            <slot name="beforeLabel" v-bind="exposedData"></slot>
        </template>
        <template #label="exposedData">
            <slot name="label" v-bind="exposedData"></slot>
        </template>
        <template #required="exposedData">
            <slot name="required" v-bind="exposedData"></slot>
        </template>
        <template #afterLabel="exposedData">
            <slot name="afterLabel" v-bind="exposedData"></slot>
        </template>

        <template #beforeInput="exposedData">
            <slot name="beforeInput" v-bind="exposedData"></slot>
        </template>
        <template #input="exposedData">
            <component
                :is="exposedData.isReadOnly ? 'div' : 'label'"
                class="queso-checkbox"
                :class="{ 'is-checkbox-hover': isHovered, 'is-checked': isChecked }"
                :for="!exposedData.isReadOnly ? exposedData.fieldID : null"
                @mouseover="
                    isHovered = true;
                    exposedData.toggleIsHover(true);
                "
                @mouseleave="
                    isHovered = false;
                    exposedData.toggleIsHover(false);
                "
            >
                <input
                    v-if="!exposedData.isReadOnly"
                    class="queso-checkbox__native"
                    type="checkbox"
                    :id="exposedData.fieldID"
                    :name="exposedData.fieldName"
                    :required="exposedData.isRequired"
                    :disabled="exposedData.isDisabled"
                    @focus="exposedData.toggleIsActive(true)"
                    @blur="exposedData.toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />

                <slot name="checkbox" v-bind="{ ...exposedData, isHovered, isChecked }">
                    <slot name="checkboxBox" v-bind="{ ...exposedData, isHovered, isChecked }">
                        <span class="queso-checkbox__box">
                            <span class="queso-checkbox__box__symbol">
                                <slot name="checkboxBoxSymbol" v-bind="{ ...exposedData, isHovered, isChecked }"
                                    >✔︎</slot
                                >
                            </span>
                        </span>
                    </slot>

                    <slot name="checkboxLabel" v-bind="{ ...exposedData, isHovered, isChecked }">
                        <span class="queso-checkbox__label">
                            <span class="queso-checkbox__label__text" v-html="boxLabel"></span>
                            <slot
                                v-if="exposedData.isRequired"
                                name="checkboxLabelRequired"
                                v-bind="{ ...exposedData, isHovered, isChecked }"
                            >
                                <span class="queso-checkbox__label__required">*</span>
                            </slot>
                        </span>
                    </slot>
                </slot>
            </component>
        </template>
        <template #afterInput="exposedData">
            <slot name="afterInput" v-bind="exposedData"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="exposedData"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoCheckboxModel, QuesoCheckboxProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoCheckboxProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoCheckboxModel>({ required: true, default: false });

const isChecked = computed<boolean>(() => !!model.value);
const isHovered = ref<boolean>(false);
</script>

<style lang="scss">
.queso-checkbox {
    --queso-checkbox-box-symbol-opacity: 0;
    cursor: var(--queso-checkbox-cursor, pointer);
    position: var(--queso-checkbox-position, relative);

    &.is-checked {
        --queso-checkbox-box-symbol-opacity: 1;
    }

    &__box {
        user-select: none;

        &__symbol {
            opacity: var(--queso-checkbox-box-symbol-opacity);
        }
    }

    &__native {
        @include accessible-item;
        top: 100%;
        left: 0;
    }

    // Read-only
    @at-root div#{&} {
        --queso-checkbox-cursor: auto;
    }
}
</style>
