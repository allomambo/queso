<template>
    <queso-field class="-radio" has-static-label v-bind="extendedProps">
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
                v-for="choice in choices"
                :is="exposedData.isReadOnly ? 'div' : 'label'"
                class="queso-radio"
                :class="{
                    'is-radio-hover': hoveredChoice === choice.value,
                    'is-selected': model === choice.value,
                }"
                :for="!exposedData.isReadOnly ? `${exposedData.fieldID}-${choice.value}` : null"
                @mouseover="
                    hoveredChoice = choice.value;
                    exposedData.toggleIsHover(true);
                "
                @mouseleave="
                    hoveredChoice = null;
                    exposedData.toggleIsHover(false);
                "
            >
                <input
                    v-if="!exposedData.isReadOnly"
                    class="queso-radio__native"
                    type="radio"
                    :id="`${exposedData.fieldID}-${choice.value}`"
                    :name="exposedData.fieldName"
                    :required="exposedData.isRequired"
                    :disabled="exposedData.isDisabled"
                    :value="choice.value"
                    @focus="exposedData.toggleIsActive(true)"
                    @blur="exposedData.toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />

                <slot
                    name="radio"
                    v-bind="{
                        ...exposedData,
                        ...choice,
                        isHovered: hoveredChoice === choice.value,
                        isSelected: model === choice.value,
                    }"
                >
                    <slot
                        name="radioBox"
                        v-bind="{
                            ...exposedData,
                            ...choice,
                            isHovered: hoveredChoice === choice.value,
                            isSelected: model === choice.value,
                        }"
                    >
                        <span class="queso-radio__box">
                            <span class="queso-radio__box__symbol">
                                <slot
                                    name="radioBoxSymbol"
                                    v-bind="{
                                        ...exposedData,
                                        ...choice,
                                        isHovered: hoveredChoice === choice.value,
                                        isSelected: model === choice.value,
                                    }"
                                    >✔︎</slot
                                >
                            </span>
                        </span>
                    </slot>

                    <slot
                        name="radioLabel"
                        v-bind="{
                            ...exposedData,
                            ...choice,
                            isHovered: hoveredChoice === choice.value,
                            isSelected: model === choice.value,
                        }"
                    >
                        <span class="queso-radio__label">
                            <span class="queso-radio__label__text" v-html="choice.label"></span>
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
