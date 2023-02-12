<template>
    <label :for="id" class="field-label" :class="`-position-${position}`">
        <span class="field-label__text">
            <slot></slot>
            <span v-if="isRequired" class="field-label__required">*</span>
        </span>
    </label>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    isRequired: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.field-label {
    $_: &;
    display: flex;
    align-items: center;
    margin-bottom: var(--grid-gap-third);

    &__text {
        @include label;
    }

    &__required {
        margin-left: 0.2em;
    }

    // When fake placeholder position
    &.-position-placeholder {
        height: var(--field-height);
        margin-bottom: 0;
        position: absolute;
        top: 0;
        left: var(--label-left-offset, 2rem);
        right: var(--label-right-offset, 1rem);
        bottom: 0;
        z-index: 5;
        pointer-events: none;

        #{$_}__text {
            @include ellipsis;
            font-size: var(--fs-regular);
            white-space: nowrap;
            transform-origin: top left;
            transform: var(--label-scale) var(--label-translate);
            transition: transform 0.2s ease;
        }
    }
}
</style>
