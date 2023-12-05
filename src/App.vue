<template>
    <h3>QuesoClickable</h3>
    <QuesoClickable>Clickable</QuesoClickable>

    <h3>QuesoDropdown</h3>
    <h5>Single choice</h5>
    <QuesoDropdown :options="dataOptions" />
    <h5>Multiple choice</h5>
    <QuesoDropdown :options="dataOptions" multiple />

    <h3>QuesoModal</h3>
    <button @click="openModal()">Open modal</button>
    <QuesoModal ref="myModal">
        <p>CONTENT HERE</p>
    </QuesoModal>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { QuesoClickable, QuesoDropdown, QuesoModal } from "./components";

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

const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.open();
};
</script>

<style lang="scss" scoped></style>
