<template>
    <queso-field>
        <template #label>
            <span class="queso-checkbox__hidden-label"></span>
        </template>

        <template #beforeField>
            <slot name="beforeField"></slot>
        </template>

        <template
            #field="{
                fieldID,
                fieldName,
                fieldValue,
                fieldLabel,
                fieldAutocomplete,
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
                :autocomplete="fieldAutocomplete"
                :disabled="isDisabled"
                @change="getCheckboxState($event, updateValue)"
                @focus="toggleIsActive(true)"
                @blur="toggleIsActive(false)"
            />
        </template>

        <template #afterField>
            <slot name="afterField"></slot>
        </template>

        <template #error="fieldProps">
            <slot name="error" v-bind="{ ...fieldProps }"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts">
import QuesoField from "../QuesoField";

console.warn("<QuesoCheckboxLegacy> is deprecated. It will be removed on v1.0 version.");

// * Keep for future usage
// export interface TypeChoice {
//     key: string | number;
//     label: string;
// }

// export interface Props {
//     multiple?: boolean;
//     choices?: TypeChoice[];
// }

// const props = withDefaults(defineProps<Props>(), {
//     choices: () => [],
// });

const getCheckboxState = (event: any, fieldCallback: (a: boolean) => void) => {
    fieldCallback(event.target.checked);
};
</script>

<style lang="scss" scoped>
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
        cursor: default;
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
