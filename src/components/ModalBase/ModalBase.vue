<template>
    <Teleport to="body">
        <div class="c-modal" :class="{ 'is-open': isOpen }">
            <div class="c-modal__inner">
                <modal-base-header :title="title" />
                <modal-base-content>
                    <slot></slot>
                </modal-base-content>
            </div>

            <modal-base-overlay />
        </div>
    </Teleport>
</template>

<script lang="ts">
import { ModalMethodsKey } from "./symbols";
</script>

<script setup lang="ts">
import { ref, watch, onMounted, provide } from "vue";

import ModalBaseHeader from "./components/ModalBaseHeader.vue";
import ModalBaseContent from "./components/ModalBaseContent.vue";
import ModalBaseOverlay from "./components/ModalBaseOverlay.vue";

export interface Props {
    title?: string;
}

const props = defineProps<Props>();

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
const isModalOpenClass = "is-scroll-locked";
const toggleModalOpenClass = (bool: boolean = true) => {
    if (bool) {
        document.documentElement.classList.add(isModalOpenClass);
    } else {
        document.documentElement.classList.remove(isModalOpenClass);
    }
};

watch(isOpen, (isOpened) => {
    if (isOpened) {
        toggleModalOpenClass(true);
        emit("modal:open");
    } else {
        toggleModalOpenClass(false);
        emit("modal:close");
    }
});

onMounted(() => {
    if (isOpen.value) {
        toggleModalOpenClass(true);
    }
});

// Provide and Expose open/close methods
provide(ModalMethodsKey, { open, close });

defineExpose({ open, close });
</script>

<style lang="scss">
.c-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--tt-modal-z, 400);
    opacity: var(--tt-modal-opacity, 0);
    pointer-events: var(--tt-modal-pointer-events, none);
    user-select: var(--tt-modal-user-select, none);

    &__inner {
        max-width: 140rem;
        position: relative;
        z-index: 2;
        background-color: white;
    }

    &.is-open {
        --tt-modal-pointer-events: auto;
        --tt-modal-user-select: auto;
        --tt-modal-opacity: 1;
    }
}
</style>
