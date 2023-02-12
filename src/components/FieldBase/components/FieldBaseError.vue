<template>
    <div class="field-error">
        <!-- <app-icon class="field-error__icon" name="warning" bg-color="warning" /> -->
        <span class="field-error__text">
            <slot></slot>
        </span>
    </div>
</template>

<script setup lang="ts">
// import AppIcon from "@components/AppIcon";
</script>

<style lang="scss" scoped>
.field-error {
    display: flex;
    margin-top: var(--grid-gap-third);

    &__icon {
        --icon-bg-radius: 100%;
        flex-shrink: 0;
        margin-right: 0.7rem;
    }

    &__text {
        @include label;
        padding-top: 0.2em;
    }
}
</style>
