<template>
    <field-base>
        <template #field="{ fieldID, fieldName, fieldValue, updateValue, toggleIsActive, toggleIsHover, isReadOnly }">
            <div v-if="isReadOnly" class="tt-select__read-only">
                <span class="tt-select__read-only__label">
                    {{ fieldValue[0].data.label || placeholder }}
                </span>
            </div>

            <dropdown-base
                v-else
                class="tt-select"
                :options="options"
                :default-options="fieldValue || []"
                :multiple="multiple"
                @update:options="(v) => updateValue(v)"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <template #placeholder>
                    {{ placeholder }}
                </template>
                <template #selector="{ activeOptions }">
                    <slot name="selector" v-bind="{ activeOptions }">
                        <span v-for="active in activeOptions" :key="active.key">{{ active.data.label }}</span>
                    </slot>
                </template>
                <template #icon>
                    <slot name="icon">↓</slot>
                </template>
                <template #item="{ key, data }">
                    <slot name="item" v-bind="{ key, data }">
                        <span class="text">{{ data.label }}</span>
                    </slot>
                </template>
            </dropdown-base>

            <select
                :name="fieldName"
                :id="fieldID"
                class="tt-select__select-native"
                @focus="toggleIsActive(true)"
                @blur="toggleIsActive(false)"
                :multiple="multiple"
            >
                <option></option>
                <option
                    v-for="option in options"
                    :value="option.key"
                    :key="option.key"
                    :selected="isSelected(fieldValue, option)"
                >
                    {{ option.data.label }}
                </option>
            </select>
        </template>
    </field-base>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import FieldBase from "@components/FieldBase";
import DropdownBase from "@components/DropdownBase";
import { Option } from "@components/DropdownBase/types";
import AppSelectLabelMultiple from "./components/AppSelectLabelMultiple.vue";

const props = defineProps({
    options: {
        type: Array as PropType<Option[]>,
        required: true,
        default: () => [],
    },
    placeholder: {
        type: String,
        required: false,
        default: "Sélectionner...",
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false,
    },
});

// Check if option in select is in active values
const isSelected = (values, option: Option) => {
    if (!Array.isArray(values)) return;
    return values.find((o: Option) => o.key === option.key);
};
</script>

<style lang="scss">
.tt-select {
    // Native select
    &__select-native {
        position: absolute;
        width: 1px;
        height: 1px;
        white-space: nowrap;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
    }
}
</style>
