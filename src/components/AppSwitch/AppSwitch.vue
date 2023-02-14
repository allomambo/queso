<template>
    <field-base>
        <template #label>
            <span class="tt-switch-hidden-label"></span>
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
                class="tt-switch"
                :for="fieldID"
                :class="{ 'is-selected': fieldValue }"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <span class="tt-switch__box">
                    <span class="tt-switch__box__circle"></span>
                </span>
                <span v-if="fieldLabel" class="tt-switch__label">
                    <span class="tt-switch__label__text" v-html="fieldLabel"></span>
                </span>
            </component>

            <input
                v-if="!isReadOnly"
                type="checkbox"
                class="tt-switch__native"
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
.tt-switch {
    --tt-switch-circle-color: white;
    --tt-switch-bg-color: silver;
    --tt-switch-selected-circle-color: white;
    --tt-switch-selected-bg-color: black;

    --tt-switch-padding: 3px;
    --tt-switch-padding-x: var(--tt-switch-padding);
    --tt-switch-padding-y: var(--tt-switch-padding);
    --tt-switch-width: calc(var(--tt-switch-circle-size) * 2 + var(--tt-switch-padding-x) * 2);
    --tt-switch-height: calc(var(--tt-switch-circle-size) + var(--tt-switch-padding-y) * 2);
    --tt-switch-radius: var(--tt-switch-circle-size);
    --tt-switch-circle-size: 20px;
    --tt-switch-circle-radius: var(--tt-switch-circle-size);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &.is-selected {
        --tt-switch-circle-translate: var(--tt-switch-circle-size);
        --tt-switch-circle-color: var(--tt-switch-selected-circle-color);
        --tt-switch-bg-color: var(--tt-switch-selected-bg-color);
    }

    &__box {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: var(--tt-switch-width);
        height: var(--tt-switch-height);
        padding: var(--tt-switch-padding-y) var(--tt-switch-padding-x);
        background: var(--tt-switch-bg-color);
        border-radius: var(--tt-switch-radius);
        user-select: none;
        box-sizing: border-box;

        &__circle {
            display: block;
            width: var(--tt-switch-circle-size);
            height: var(--tt-switch-circle-size);
            background-color: var(--tt-switch-circle-color);
            border-radius: var(--tt-switch-circle-size);
            transform: translateX(var(--tt-switch-circle-translate, 0));
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
}

.tt-switch-hidden-label {
    display: none !important;
}
</style>
