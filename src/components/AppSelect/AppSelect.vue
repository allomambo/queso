<template>
    <field-base>
        <template #label>
            <slot name="label"></slot>
        </template>

        <template
            #field="{
                fieldID,
                fieldName,
                fieldValue,
                fieldAutocomplete,
                updateValue,
                toggleIsActive,
                toggleIsHover,
                isRequired,
                isReadOnly,
            }"
        >
            <div v-if="isReadOnly" class="queso-select__read-only">
                <span class="queso-select__read-only__label">
                    {{ fieldValue[0].data.label || placeholder }}
                </span>
            </div>

            <dropdown-base
                v-else
                class="queso-select"
                :options="options"
                :default-options="fieldValue || []"
                :multiple="multiple"
                @update:options="(v) => updateValue(v)"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <template #placeholder>
                    <slot name="placeholder" v-bind="{ placeholder }">{{ placeholder }}</slot>
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
                class="queso-select__select-native"
                @focus="toggleIsActive(true)"
                @blur="toggleIsActive(false)"
                :required="isRequired"
                :autocomplete="fieldAutocomplete"
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
import FieldBase from "@components/FieldBase";
import DropdownBase from "@components/DropdownBase";
import { Option } from "@components/DropdownBase/types";

export interface Props {
    options: Option[];
    multiple?: boolean;
    placeholder?: string;
}

// const props = defineProps<Props>();

const props = withDefaults(defineProps<Props>(), {
    options: () => [],
});

// Check if option in select is in active values
const isSelected = (values, option: Option) => {
    if (!Array.isArray(values)) return;
    return values.find((o: Option) => o.key === option.key);
};
</script>

<style lang="scss">
.queso-select {
    &__select-native {
        @include accessible-item;
    }
}
</style>
