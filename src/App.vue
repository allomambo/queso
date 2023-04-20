<template>
    <p>App</p>
    <CollapsibleBase>
        <template #headerText>Ouvrir</template>
        <template #content>
            <p>Lorem ipsum dolor sit amet</p>
        </template>
    </CollapsibleBase>
</template>

<script setup lang="ts">
import CollapsibleBase from "./components/CollapsibleBase";
</script>

<style lang="scss" scoped></style>
