<template>
    <text-field type="email" label="Prénom" name="firstname" is-disabled>
        <template #error> salut </template>
    </text-field>
</template>

<script setup lang="ts">
import TextField from "@components/TextField";
</script>

<style lang="scss" scoped></style>
