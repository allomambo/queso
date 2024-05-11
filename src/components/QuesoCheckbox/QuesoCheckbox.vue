<template>
    <queso-field v-bind="$props">
        <template #label>
            <span class="queso-checkbox__hidden-label"></span>
        </template>

        <template #beforeInput>
            <slot name="beforeInput"></slot>
        </template>

        <template
            #input="{
                fieldID,
                fieldName,
                fieldValue,
                fieldLabel,
                updateValue,
                toggleIsActive,
                toggleIsHover,
                isRequired,
                isDisabled,
                isReadOnly,
            }"
        >
            <component
                :is="isReadOnly ? 'div' : 'label'"
                class="queso-checkbox"
                :for="fieldID"
                :class="{ 'is-checked': fieldValue }"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <span class="queso-checkbox__box">
                    <span class="queso-checkbox__box__symbol">
                        <slot name="symbol">✔︎</slot>
                    </span>
                </span>
                <span class="queso-checkbox__label">
                    <span class="queso-checkbox__label__text" v-html="fieldLabel"></span>
                </span>
            </component>

            <input
                v-if="!isReadOnly"
                type="checkbox"
                class="queso-checkbox__native"
                :checked="fieldValue"
                :name="fieldName"
                :id="fieldID"
                :required="isRequired"
                :disabled="isDisabled"
                @change="getCheckboxState($event, updateValue)"
                @focus="toggleIsActive(true)"
                @blur="toggleIsActive(false)"
            />
        </template>

        <template #afterInput>
            <slot name="afterInput"></slot>
        </template>

        <template #error="fieldProps">
            <slot name="error" v-bind="{ ...fieldProps }"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import type { QuesoCheckboxProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = defineProps<QuesoCheckboxProps>();

const getCheckboxState = (event: any, fieldCallback: (a: boolean) => void) => {
    fieldCallback(event.target.checked);
};
</script>

<style lang="scss">
.queso-checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &.is-checked {
        --queso-checkbox-symbol-opacity: 1;
    }

    &__box {
        user-select: none;

        &__symbol {
            line-height: 0;
            opacity: var(--queso-checkbox-symbol-opacity, 0);
        }
    }

    @at-root div#{&} {
        cursor: auto;
        pointer-events: none;
    }

    &__native {
        @include accessible-item;
    }

    &__hidden-label {
        display: none !important;
    }
}
</style>
