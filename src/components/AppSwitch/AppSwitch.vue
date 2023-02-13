<template>
    <field-base>
        <template #label>
            <span class="switch-hidden-label"></span>
        </template>

        <template #field="fieldProps">
            <component
                :is="fieldProps?.isReadOnly ? 'div' : 'label'"
                class="switch"
                :for="fieldProps?.fieldID"
                :class="{ 'is-selected': fieldProps?.fieldValue }"
                @mouseover="fieldProps.toggleIsHover(true)"
                @mouseleave="fieldProps.toggleIsHover(false)"
            >
                <span class="switch__box">
                    <span class="switch__box__circle"></span>
                </span>
                <span v-if="fieldProps?.label" class="switch__label">
                    <span class="switch__label__text" v-html="fieldProps?.label"></span>
                    <span v-if="fieldProps?.isRequired" class="switch__label__required"> *</span>
                </span>
            </component>

            <input
                v-if="!fieldProps?.isReadOnly"
                type="checkbox"
                class="switch__native"
                :checked="fieldProps?.fieldValue"
                :name="fieldProps?.fieldName"
                :id="fieldProps?.fieldID"
                :required="fieldProps?.isRequired"
                :disabled="fieldProps?.isDisabled"
                @change="getCheckboxState($event, fieldProps?.updateValue)"
                @focus="fieldProps.toggleIsActive(true)"
                @blur="fieldProps.toggleIsActive(false)"
            />
        </template>
    </field-base>
</template>

<script setup lang="ts">
import FieldBase from "@components/FieldBase";

const getCheckboxState = (event: any, fieldCallback: (a: boolean) => void) => {
    fieldCallback(event.target.checked);
};
</script>

<style lang="scss">
.switch {
    --switch-padding: 0.2rem;
    --switch-circle-size: 1.2rem;
    --switch-circle-color: var(--color-grey-faded);
    --switch-bg-color: transparent;
    --switch-border-color: var(--color-grey-faded);
    --switch-selected-circle-color: var(--color-white);
    --switch-selected-bg-color: var(--color-black);
    --switch-selected-border-color: var(--color-black);

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--grid-gap-third);
    cursor: pointer;

    &.is-selected {
        --switch-circle-translate: calc(var(--switch-circle-size) + var(--switch-padding) - 1px);
        --switch-circle-color: var(--switch-selected-circle-color);
        --switch-bg-color: var(--switch-selected-bg-color);
        --switch-border-color: var(--switch-selected-border-color);
        --tt-field-border-color: var(--switch-border-color);

        .is-disabled & {
            --switch-bg-color: var(--color-grey-faded);
            --switch-border-color: var(--color-grey-faded);
        }

        .is-read-only & {
            --switch-bg-color: var(--color-black-pale);
            --switch-border-color: var(--color-black-pale);
        }
    }

    &__box {
        @include field;
        --tt-field-width: calc(var(--switch-circle-size) * 2 + var(--switch-padding) * 3 + 2px);
        --tt-field-height: calc(var(--switch-circle-size) + var(--switch-padding) * 2 + 2px);
        --tt-field-padding-x: 0.3rem;
        --tt-field-padding-y: 0.3rem;
        --tt-field-bg-color: var(--switch-bg-color);
        --tt-field-radius: var(--switch-circle-size);

        &__circle {
            display: block;
            width: var(--switch-circle-size);
            height: var(--switch-circle-size);
            background-color: var(--switch-circle-color);
            border-radius: var(--switch-circle-size);
            transform: translateX(var(--switch-circle-translate, 0));
            transition: transform 0.2s ease;
        }
    }

    &__label {
        color: var(--tt-field-txt-color);
        font-size: var(--fs-small);
        user-select: none;
    }

    @at-root div#{&} {
        cursor: auto;
        pointer-events: none;
    }

    &__native {
        @include accessible-item;
    }
}

.switch-hidden-label {
    display: none;
}
</style>
