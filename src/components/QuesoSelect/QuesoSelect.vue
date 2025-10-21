<template>
    <queso-field class="-select" v-bind="extendedProps">
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
            <div v-if="exposedData.isReadOnly" class="queso-select__read-only">
                <span class="queso-select__read-only__label">
                    {{ model || placeholder }}
                </span>
            </div>

            <queso-dropdown
                v-else
                class="queso-select"
                :options="options"
                @mouseover="exposedData.toggleIsHover(true)"
                @mouseleave="exposedData.toggleIsHover(false)"
                v-model="dropdownModel"
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
                        @focus="exposedData.toggleIsActive(true)"
                        @blur="exposedData.toggleIsActive(false)"
                        v-bind="extraAttributes"
                        v-model="model"
                        tabindex="-1"
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

<script setup lang="ts">
import { computed } from "vue";
import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoSelectModel, QuesoSelectProps } from "./types";
import type { QuesoDropdownOptionValues } from "@components/QuesoDropdown/types";

import QuesoField from "@components/QuesoField";
import QuesoDropdown from "@components/QuesoDropdown";

const props = defineProps<QuesoSelectProps>();
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoSelectModel>({ required: true });

// Writable computed because QuesoDropdown expects an array
const dropdownModel = computed<QuesoDropdownOptionValues>({
    get() {
        return model.value ? [model.value] : [];
    },
    set(newDropdownValue) {
        model.value = newDropdownValue[0];
    },
});
</script>

<style lang="scss">
.queso-select {
    position: var(--queso-select-position, relative);

    &__select-native {
        @include accessible-item;
        top: 100%;
        left: 0;
    }
}
</style>
