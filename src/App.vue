<template>
    <text-field label="Prénom" name="firstname" is-error>
        <template #error> salut </template>
    </text-field>
</template>

<script setup lang="ts">
import TextField from "@components/TextField";
</script>

<style lang="scss" scoped></style>
