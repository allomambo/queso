<template>
    <Story title="Clickable" :init-state="initState" icon="mdi:button-pointer">
        <template #default="{ state }">
            <clickable-base :is-disabled="state.isDisabled">
                {{ state.label }}
            </clickable-base>
        </template>
    </Story>
</template>

<script setup lang="ts">
import ClickableBase from "./ClickableBase.vue";

const initState = () => {
    return {
        isDisabled: true,
        label: "Default button",
    };
};
</script>
