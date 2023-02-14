<template>
    <field-base>
        <template #label>
            <span class="tt-checkbox-hidden-label"></span>
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
                class="tt-checkbox"
                :for="fieldID"
                :class="{ 'is-checked': fieldValue }"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <span class="tt-checkbox__box">
                    <span class="tt-checkbox__box__symbol">
                        <slot name="symbol">✔︎</slot>
                    </span>
                </span>
                <span class="tt-checkbox__label">
                    <span class="tt-checkbox__label__text" v-html="fieldLabel"></span>
                </span>
            </component>

            <input
                v-if="!isReadOnly"
                type="checkbox"
                class="tt-checkbox__native"
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

<style lang="scss">
.tt-checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &.is-checked {
        --tt-checkbox-symbol-opacity: 1;
    }

    &__box {
        user-select: none;

        &__symbol {
            opacity: var(--tt-checkbox-symbol-opacity, 0);
        }
    }

    &__label {
        color: var(--tt-field-txt-color);
        font-size: var(--fs-small);
        padding-top: 0.15em;
    }

    @at-root div#{&} {
        cursor: auto;
        pointer-events: none;
    }

    &__native {
        position: absolute;
        width: 1px;
        height: 1px;
        white-space: nowrap;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
    }
}

.tt-checkbox-hidden-label {
    display: none !important;
}
</style>
