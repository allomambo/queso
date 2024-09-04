<template>
    <queso-field class="-radio" static-label v-bind="extendedProps">
        <template #beforeLabel>
            <slot name="beforeLabel"></slot>
        </template>
        <template #label="exposedData">
            <slot name="label" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #required="exposedData">
            <slot name="required" v-bind="{ ...exposedData }"></slot>
        </template>
        <template #afterLabel>
            <slot name="afterLabel"></slot>
        </template>

        <template #beforeInput>
            <slot name="beforeInput"></slot>
        </template>
        <template #input="{ fieldID, fieldName, isRequired, isDisabled, isReadOnly, toggleIsActive, toggleIsHover }">
            <component
                v-for="choice in choices"
                :is="isReadOnly ? 'div' : 'label'"
                class="queso-radio"
                :class="{ 'is-selected': model === choice.value }"
                :for="!isReadOnly ? `${fieldID}-${choice.value}` : null"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <slot name="radioBox">
                    <span class="queso-radio__box">
                        <span class="queso-radio__box__symbol">
                            <slot name="radioBoxSymbol">✔︎</slot>
                        </span>
                    </span>
                </slot>

                <slot name="radioLabel">
                    <span class="queso-radio__label">
                        <span class="queso-radio__label__text" v-html="choice.label"></span>
                    </span>
                </slot>

                <input
                    v-if="!isReadOnly"
                    class="queso-radio__native"
                    type="radio"
                    :id="`${fieldID}-${choice.value}`"
                    :name="fieldName"
                    :required="isRequired"
                    :disabled="isDisabled"
                    :value="choice.value"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />
            </component>
        </template>
        <template #afterInput>
            <slot name="afterInput"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="{ ...exposedData }"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoRadioModel, QuesoRadioProps, QuesoRadioChoices } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoRadioProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoRadioModel>({ required: true, default: "" });

// // Convert the choices to reactive objects
// // Add the isChecked property to each choice if not present
// const choices: QuesoRadioChoices = reactive(
//     props.choices.map((choice) => ({ isChecked: model.value.includes(choice.value), ...choice })),
// );
// const checkedChoices = computed<QuesoRadioModel>(() =>
//     choices.filter((choice) => choice.isChecked).map((choice) => choice.value),
// );

// // Update the model when the checked choices change
// watch(
//     checkedChoices,
//     (value) => {
//         model.value = value;
//     },
//     { immediate: true },
// );
</script>

<style lang="scss">
.queso-radio {
    --queso-radio-box-symbol-opacity: 0;
    cursor: var(--queso-radio-cursor, pointer);

    &.is-selected {
        --queso-radio-box-symbol-opacity: 1;
    }

    &__box {
        user-select: none;

        &__symbol {
            opacity: var(--queso-radio-box-symbol-opacity);
        }
    }

    &__native {
        @include accessible-item;
    }

    // Read-only
    @at-root div#{&} {
        --queso-radio-cursor: auto;
    }
}
</style>
