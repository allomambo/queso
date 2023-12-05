<template>
    <h2>QuesoDropdown</h2>
    <QuesoDropdown :options="dataOptions" multiple>test</QuesoDropdown>
</template>

<script setup lang="ts">
import { QuesoDropdown } from "./components";

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
