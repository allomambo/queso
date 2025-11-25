<template>
    <queso-field class="-select-multiple" v-bind="extendedProps">
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
            <slot v-if="exposedData.isReadOnly" name="readOnly" v-bind="exposedData">
                <div class="queso-select__read-only">
                    <span class="queso-select__read-only__label" v-html="model"></span>
                </div>
            </slot>

            <queso-dropdown
                v-else
                class="queso-select"
                :options="options"
                multiple
                @mouseover="exposedData.toggleIsHover(true)"
                @mouseleave="exposedData.toggleIsHover(false)"
                v-model="model"
            >
                <template #selectorPlaceholder="exposedDropdownData">
                    <slot name="placeholder" v-bind="{ ...exposedData, ...exposedDropdownData }">
                        {{ placeholder }}
                    </slot>
                </template>
                <template #selectorActiveOptions="exposedDropdownData">
                    <slot name="selector" v-bind="{ ...exposedData, ...exposedDropdownData }">
                        <span v-for="active in exposedDropdownData.activeOptions" :key="active.value">
                            {{ active.label }}
                        </span>
                    </slot>
                </template>
                <template #selectorIcon="exposedDropdownData">
                    <slot name="icon" v-bind="{ ...exposedData, ...exposedDropdownData }">+</slot>
                </template>
                <template #popoverItem="exposedDropdownData">
                    <slot name="item" v-bind="{ ...exposedData, ...exposedDropdownData }">
                        <span class="text">{{ exposedDropdownData.label }}</span>
                    </slot>
                </template>
                <template #afterDropdown>
                    <select
                        class="queso-select__select-native"
                        :id="exposedData.fieldID"
                        :name="exposedData.fieldName"
                        :required="exposedData.isRequired"
                        :disabled="exposedData.isDisabled"
                        multiple
                        @focus="exposedData.toggleIsActive(true)"
                        @blur="exposedData.toggleIsActive(false)"
                        v-bind="extraAttributes"
                        v-model="model"
                    >
                        <option></option>
                        <option v-for="option in options" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </template>
            </queso-dropdown>
        </template>
        <template #afterInput="exposedData">
            <slot name="afterInput" v-bind="exposedData"></slot>
        </template>

        <template #error="exposedData">
            <slot name="error" v-bind="exposedData"></slot>
        </template>
    </queso-field>
</template>

<script setup lang="ts" generic="TOptionData extends Record<string, any> = Record<string, any>">
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoSelectMultipleModel, QuesoSelectMultipleProps } from "./types";

import QuesoField from "@components/QuesoField";
import QuesoDropdown from "@components/QuesoDropdown";

const props = defineProps<QuesoSelectMultipleProps<TOptionData>>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoSelectMultipleModel>({ required: true, default: [] });
</script>

<style lang="scss">
// Styles for select comes from QuesoSelect
</style>
