<template>
    <field-base>
        <template #label>
            <span class="queso-switch__hidden-label"></span>
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
                class="queso-switch"
                :for="fieldID"
                :class="{ 'is-selected': fieldValue }"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <span class="queso-switch__box">
                    <span class="queso-switch__box__circle"></span>
                </span>
                <span v-if="fieldLabel" class="queso-switch__label">
                    <span class="queso-switch__label__text" v-html="fieldLabel"></span>
                </span>
            </component>

            <input
                v-if="!isReadOnly"
                type="checkbox"
                class="queso-switch__native"
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

const getCheckboxState = (event: any, fieldCallback: (a: boolean) => void) => {
    fieldCallback(event.target.checked);
};
</script>

<style lang="scss">
.queso-switch {
    --queso-switch-circle-color: white;
    --queso-switch-bg-color: silver;
    --queso-switch-selected-circle-color: white;
    --queso-switch-selected-bg-color: black;

    --queso-switch-padding: 3px;
    --queso-switch-padding-x: var(--queso-switch-padding);
    --queso-switch-padding-y: var(--queso-switch-padding);
    --queso-switch-width: calc(var(--queso-switch-circle-size) * 2 + var(--queso-switch-padding-x) * 2);
    --queso-switch-height: calc(var(--queso-switch-circle-size) + var(--queso-switch-padding-y) * 2);
    --queso-switch-radius: var(--queso-switch-circle-size);
    --queso-switch-circle-size: 20px;
    --queso-switch-circle-radius: var(--queso-switch-circle-size);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &.is-selected {
        --queso-switch-circle-translate: var(--queso-switch-circle-size);
        --queso-switch-circle-color: var(--queso-switch-selected-circle-color);
        --queso-switch-bg-color: var(--queso-switch-selected-bg-color);
    }

    &__box {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: var(--queso-switch-width);
        height: var(--queso-switch-height);
        padding: var(--queso-switch-padding-y) var(--queso-switch-padding-x);
        background: var(--queso-switch-bg-color);
        border-radius: var(--queso-switch-radius);
        user-select: none;
        box-sizing: border-box;

        &__circle {
            display: block;
            width: var(--queso-switch-circle-size);
            height: var(--queso-switch-circle-size);
            background-color: var(--queso-switch-circle-color);
            border-radius: var(--queso-switch-circle-size);
            transform: translateX(var(--queso-switch-circle-translate, 0));
        }
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

    &__hidden-label {
        display: none !important;
    }
}
</style>
