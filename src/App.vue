<template>
    <h3>QuesoClickable</h3>
    <QuesoClickable>Clickable</QuesoClickable>

    <h3>QuesoDropdown</h3>
    <h5>Single choice</h5>
    <QuesoDropdown :options="dataOptions" />
    <h5>Multiple choice</h5>
    <QuesoDropdown :options="dataOptions" multiple />
</template>

<script setup lang="ts">
import { QuesoClickable, QuesoDropdown } from "./components";

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
