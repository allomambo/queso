<template>
    <p>App</p>

    <app-dropdown :options="dataOptions"></app-dropdown>
</template>

<script setup lang="ts">
import AppDropdown from "@components/AppDropdown";

const dataOptions = [
    {
        key: 1,
        data: {
            label: "Heavy Metal",
            icon: "bell",
        },
    },
    {
        key: 2,
        data: {
            label: "Classique",
            icon: "link",
        },
    },
    {
        key: 3,
        data: {
            label: "Funk and Disco",
            icon: "funnel",
        },
    },
    {
        key: 4,
        data: {
            label: "Folk and Acoustic",
            icon: "garbage",
        },
    },
    {
        key: 5,
        data: {
            label: "Country",
            icon: "lock",
        },
    },
    {
        key: 6,
        data: {
            label: "Dance and Electronic",
            icon: "magnify_glass",
        },
    },
];
</script>

<style lang="scss" scoped></style>
