<template>
    <p>App</p>
    <app-select :options="mockedSelect">
        <template #label>test</template>
    </app-select>
</template>

<script setup lang="ts">
import AppSelect from "@components/AppSelect";

const mockedSelect = [
    {
        key: 1,
        data: { label: "Option 1" },
    },

    {
        key: 2,
        data: { label: "Option 2" },
    },
];
</script>

<style lang="scss" scoped></style>
