<template>
    <field-base>
        <template #field="fieldProps">
            <div v-if="fieldProps?.isReadOnly" class="select__read-only">
                <span class="select__read-only__label">
                    {{ fieldProps?.fieldValue[0].data.label || placeholder }}
                </span>
            </div>

            <app-dropdown
                v-else
                class="select"
                :options="options"
                :default-options="fieldProps?.fieldValue || []"
                :multiple="multiple"
                @update:options="(v) => fieldProps?.updateValue(v)"
                @mouseover="fieldProps.toggleIsHover(true)"
                @mouseleave="fieldProps.toggleIsHover(false)"
            >
                <template #placeholder>
                    {{ placeholder }}
                </template>
                <template #activeLabel="{ activeOptions }">
                    <app-select-label-multiple v-if="multiple" :options="activeOptions" />
                    <span v-else>{{ activeOptions[0].data.label }}</span>
                </template>
                <template #icon>
                    <app-icon name="chevron" :rotate="90" bg-color="grey" />
                </template>
                <template #item="{ key, data }">
                    <span class="text">{{ data.label }}</span>
                    <app-icon name="check_mark" txt-color="white" bg-color="black" />
                </template>
            </app-dropdown>

            <select
                :name="fieldProps?.name"
                :id="fieldProps?.fieldID"
                class="select__select-native"
                @focus="fieldProps.toggleIsActive(true)"
                @blur="fieldProps.toggleIsActive(false)"
                :multiple="multiple"
            >
                <option></option>
                <option
                    v-for="option in options"
                    :value="option.key"
                    :key="option.key"
                    :selected="isSelected(fieldProps?.fieldValue, option)"
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
import AppDropdown from "@components/AppDropdown";
import { Option } from "@components/AppDropdown/types";
import AppSelectLabelMultiple from "./components/AppSelectLabelMultiple.vue";

import AppIcon from "@components/AppIcon";

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
.select {
    // Selector
    &:deep(.dropdown__selector),
    &__read-only {
        @include field;
    }

    &:deep(.dropdown__selector__placeholder) {
        color: var(--color-black-pale);

        .has-label-placeholder:not(.is-active) & {
            opacity: 0;
        }
    }

    // Popover Item
    &:deep(.dropdown__popover__options-list__item) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
            color: var(--choice-txt-color, var(--color-black-pale));
            transition: color 0.2s ease;
        }

        .icon {
            opacity: var(--choice-icon-opacity, 0);
        }

        &.is-active,
        &:hover {
            --choice-txt-color: var(--color-black);
        }

        &.is-active {
            --choice-icon-opacity: 1;
        }
    }

    // Native select
    &__select-native {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        z-index: 1;
    }
}
</style>
