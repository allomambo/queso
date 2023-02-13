<template>
    <field-base>
        <template #label>
            <span v-if="!multiple" class="checkbox-hidden-label"></span>
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
                class="checkbox"
                :for="fieldID"
                @mouseover="toggleIsHover(true)"
                @mouseleave="toggleIsHover(false)"
            >
                <span class="checkbox__box">
                    <app-icon
                        v-if="fieldValue"
                        name="check_mark"
                        :size="1.2"
                        txt-color="white"
                        :bg-color="boxColor(isReadOnly, isDisabled)"
                    />
                </span>
                <span class="checkbox__label">
                    <span class="checkbox__label__text" v-html="fieldLabel"></span>
                    <span v-if="isRequired" class="checkbox__label__required"> *</span>
                </span>
            </component>

            <input
                v-if="!isReadOnly"
                type="checkbox"
                class="checkbox__native"
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
    </field-base>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import FieldBase from "@components/FieldBase";
// import AppIcon from "@components/AppIcon";

interface TypeChoice {
    id: string | number;
    label: string;
}

const props = defineProps({
    multiple: {
        type: Boolean,
        required: false,
        default: false,
    },
    choices: {
        type: Array as PropType<TypeChoice[]>,
        required: false,
        default: () => [],
    },
});

const getCheckboxState = (event: any, fieldCallback: (a: boolean) => void) => {
    fieldCallback(event.target.checked);
};

const boxColor = (isReadOnly: boolean, isDisabled: boolean) => {
    if (isReadOnly) return "black-pale";
    if (isDisabled) return "grey-faded";
    return "black";
};
</script>

<style lang="scss">
.checkbox-hidden-label {
    @include accessible-item;
}

.checkbox {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--grid-gap-third);
    cursor: pointer;

    &__box {
        --tt-field-width: 2rem;
        --tt-field-height: var(--tt-field-width);
        --tt-field-padding-x: 0;
        --tt-field-radius: var(--border-radius-xs);
        @include field;
        flex-shrink: 0;

        .icon {
            --icon-bg-width: var(--tt-field-width);
            flex-shrink: 0;
            margin: -1px; // To prevent border showing
        }
    }

    &__label {
        color: var(--tt-field-txt-color);
        font-size: var(--fs-small);
        padding-top: 0.15em;
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
</style>
