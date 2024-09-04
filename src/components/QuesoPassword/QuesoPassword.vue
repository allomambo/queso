<template>
    <queso-field class="-password" v-bind="extendedProps">
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
            <div class="queso-password">
                <slot name="beforePasswordInput"></slot>

                <span v-if="isReadOnly" class="queso-password__readonly" v-html="model"></span>

                <input
                    v-else
                    class="queso-password__input"
                    :type="type"
                    :id="fieldID"
                    :name="fieldName"
                    :placeholder="placeholder"
                    :required="isRequired"
                    :disabled="isDisabled"
                    @mouseover="toggleIsHover(true)"
                    @mouseleave="toggleIsHover(false)"
                    @focus="toggleIsActive(true)"
                    @blur="toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />

                <slot name="afterPasswordInput"> </slot>

                <slot name="toggleVisibilityButton" v-bind="{ togglePasswordVisibility, showPassword, hidePassword }">
                    <button class="queso-password__visibility-button" @click="togglePasswordVisibility()">
                        <slot name="toggleVisibilityButtonIcon">◎</slot>
                    </button>
                </slot>
            </div>
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
import { computed, ref } from "vue";

import { useExtendedFieldProps } from "@composables/fields";

import type { QuesoPasswordModel, QuesoPasswordProps } from "./types";

import QuesoField from "@components/QuesoField";

const props = withDefaults(defineProps<QuesoPasswordProps>(), {});
const extendedProps = useExtendedFieldProps(props);

const model = defineModel<QuesoPasswordModel>({ required: true, default: "" });

const isPasswordShow = ref<boolean>(false);
const type = computed(() => (isPasswordShow.value ? "text" : "password"));

const showPassword = () => {
    isPasswordShow.value = true;
};

const hidePassword = () => {
    isPasswordShow.value = false;
};

const togglePasswordVisibility = () => {
    isPasswordShow.value = !isPasswordShow.value;
};
</script>

<style lang="scss">
.queso-password {
}
</style>
