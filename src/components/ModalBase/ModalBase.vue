<template>
    <Teleport to="body">
        <div class="queso-modal" :class="{ 'is-open': isOpen }">
            <slot name="before-content"></slot>

            <div class="queso-modal__inner">
                <slot></slot>
            </div>

            <slot name="after-content"></slot>

            <slot name="overlay">
                <modal-base-overlay />
            </slot>
        </div>
    </Teleport>
</template>

<script lang="ts">
import { ModalMethodsKey } from "./symbols";
</script>

<script setup lang="ts">
import { ref, watch, onMounted, provide } from "vue";

import ModalBaseOverlay from "./components/ModalBaseOverlay.vue";

const emit = defineEmits(["modal:open", "modal:close"]);

// Open/Close modal
const isOpen = ref<boolean>(false);

const open = () => {
    isOpen.value = true;
};

const close = () => {
    isOpen.value = false;
};

// Lock scrolling when modal isOpen
const toggleOverflowOnDocument = (bool: boolean = true) => {
    document.documentElement.style.overflow = bool ? "hidden" : null;
};

// Update opened state
watch(isOpen, (isOpened) => {
    if (isOpened) {
        toggleOverflowOnDocument(true);
        emit("modal:open");
    } else {
        toggleOverflowOnDocument(false);
        emit("modal:close");
    }
});

onMounted(() => {
    if (isOpen.value) {
        toggleOverflowOnDocument(true);
    }
});

// Provide and Expose open/close methods
provide(ModalMethodsKey, { open, close });

defineExpose({ open, close });
</script>

<style lang="scss">
.queso-modal {
    --queso-modal-opacity: 0;
    --queso-modal-max-width: 80%;
    --queso-modal-max-height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--queso-modal-z, 400);
    opacity: var(--queso-modal-opacity);
    pointer-events: var(--queso-modal-pointer-events, none);
    user-select: var(--queso-modal-user-select, none);

    &__inner {
        max-width: var(--queso-modal-max-width);
        max-height: var(--queso-modal-max-height);
        position: relative;
        z-index: 2;
        overflow: auto;
    }

    &.is-open {
        --queso-modal-pointer-events: auto;
        --queso-modal-user-select: auto;
        --queso-modal-opacity: 1;
    }
}
</style>
