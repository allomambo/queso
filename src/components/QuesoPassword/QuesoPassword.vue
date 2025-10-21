<template>
    <queso-field class="-password" v-bind="extendedProps">
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
            <div class="queso-password">
                <slot
                    name="beforePasswordInput"
                    v-bind="{ ...exposedData, isPasswordShow, togglePasswordVisibility, showPassword, hidePassword }"
                ></slot>

                <span v-if="exposedData.isReadOnly" class="queso-password__readonly" v-html="model"></span>

                <input
                    v-else
                    class="queso-password__input"
                    :type="type"
                    :id="exposedData.fieldID"
                    :name="exposedData.fieldName"
                    :placeholder="placeholder"
                    :required="exposedData.isRequired"
                    :disabled="exposedData.isDisabled"
                    @mouseover="exposedData.toggleIsHover(true)"
                    @mouseleave="exposedData.toggleIsHover(false)"
                    @focus="exposedData.toggleIsActive(true)"
                    @blur="exposedData.toggleIsActive(false)"
                    v-bind="extraAttributes"
                    v-model="model"
                />

                <slot
                    name="afterPasswordInput"
                    v-bind="{ ...exposedData, isPasswordShow, togglePasswordVisibility, showPassword, hidePassword }"
                ></slot>

                <slot
                    name="toggleVisibilityButton"
                    v-bind="{ ...exposedData, isPasswordShow, togglePasswordVisibility, showPassword, hidePassword }"
                >
                    <button class="queso-password__visibility-button" @click="togglePasswordVisibility()">
                        <slot
                            name="toggleVisibilityButtonIcon"
                            v-bind="{
                                ...exposedData,
                                isPasswordShow,
                                togglePasswordVisibility,
                                showPassword,
                                hidePassword,
                            }"
                            >◎</slot
                        >
                    </button>
                </slot>
            </div>
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
