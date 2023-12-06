<template>
    <Story title="Clickable" :init-state="initState" icon="mdi:button-pointer">
        <template #default="{ state }">
            <queso-clickable :is-disabled="state.isDisabled">
                {{ state.label }}
            </queso-clickable>
        </template>
    </Story>
</template>

<script setup lang="ts">
import QuesoClickable from "./QuesoClickable.vue";

const initState = () => {
    return {
        isDisabled: true,
        label: "Default button",
    };
};
</script>
