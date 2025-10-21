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
                :class="{
                    'is-radio-hover': hoveredChoice === choice.value,
                    'is-selected': model === choice.value,
                }"
                :for="!isReadOnly ? `${fieldID}-${choice.value}` : null"
                @mouseover="
                    hoveredChoice = choice.value;
                    toggleIsHover(true);
                "
                @mouseleave="
                    hoveredChoice = null;
                    toggleIsHover(false);
                "
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
import { ref } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoRadioModel, QuesoRadioProps, QuesoRadioChoice } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoRadioProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoRadioModel>({ required: true, default: "" });

const hoveredChoice = ref<QuesoRadioChoice["value"] | null>(null);
</script>

<style lang="scss">
.queso-radio {
    --queso-radio-box-symbol-opacity: 0;
    cursor: var(--queso-radio-cursor, pointer);
    position: var(--queso-radio-position, relative);

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
        top: 100%;
        left: 0;
    }

    // Read-only
    @at-root div#{&} {
        --queso-radio-cursor: auto;
    }
}
</style>
