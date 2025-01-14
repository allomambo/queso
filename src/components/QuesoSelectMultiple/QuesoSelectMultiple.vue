<template>
    <queso-field class="-select-multiple" v-bind="extendedProps">
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
            <div v-if="isReadOnly" class="queso-select__read-only">
                <span class="queso-select__read-only__label">
                    {{ model || placeholder }}
                </span>
            </div>

            <queso-dropdown
                v-else
                class="queso-select"
                :options="options"
                multiple
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
                v-model="model"
            >
                <template #selectorPlaceholder>
                    <slot name="placeholder" v-bind="{ placeholder }">{{ placeholder }}</slot>
                </template>
                <template #selectorActiveOptions="{ activeOptions }">
                    <slot name="selector" v-bind="{ activeOptions }">
                        <span v-for="active in activeOptions" :key="active.value">{{ active.label }}</span>
                    </slot>
                </template>
                <template #selectorIcon>
                    <slot name="icon">+</slot>
                </template>
                <template #item="{ value, label, data }">
                    <slot name="item" v-bind="{ value, label, data }">
                        <span class="text">{{ label }}</span>
                    </slot>
                </template>
            </queso-dropdown>

            <select
                class="queso-select__select-native"
                :id="fieldID"
                :name="fieldName"
                :required="isRequired"
                :disabled="isDisabled"
                multiple
                @focus="toggleIsActive(true)"
                @blur="toggleIsActive(false)"
                v-bind="extraAttributes"
                v-model="model"
            >
                <option></option>
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
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
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoSelectMultipleModel, QuesoSelectMultipleProps } from "./types";

import QuesoField from "@components/QuesoField";
import QuesoDropdown from "@components/QuesoDropdown";

const props = defineProps<QuesoSelectMultipleProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoSelectMultipleModel>({ required: true, default: [] });
</script>

<style lang="scss">
// Styles for select comes from QuesoSelect
</style>
