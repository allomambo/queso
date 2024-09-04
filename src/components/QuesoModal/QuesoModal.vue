<template>
    <Teleport to="body">
        <div
            class="queso-modal"
            :class="{ 'is-modal-open': isModalOpen }"
            :aria-expanded="isModalOpen"
            v-bind="$attrs"
            ref="target"
        >
            <slot name="beforeContent"></slot>

            <div class="queso-modal__content">
                <slot></slot>
            </div>

            <slot name="afterContent"></slot>

            <slot name="overlay">
                <queso-modal-overlay />
            </slot>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, provide } from "vue";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

import { QuesoModalMethodsKey } from "./types";
import type { QuesoModalMethods, QuesoModalOpen, QuesoModalClose } from "./types";

import QuesoModalOverlay from "./components/QuesoModalOverlay";

const emit = defineEmits(["modal:open", "modal:close"]);

const target = ref();
const containsFocusable = ref<boolean>(false);
const { activate, deactivate } = useFocusTrap(target);

// Active/Deactive Focus Trap
// Active or deactivate focus trap only if the modal contains focusable elements
const focusableSelectors = [
    "a[href]",
    "area[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "iframe",
    "object",
    "embed",
    '[tabindex]:not([tabindex="-1"])',
    "[contenteditable]",
];

const hasFocusableElements = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    return focusableSelectors.some((selector) => element.querySelector(selector) !== null);
};

// Open/Close modal
const isModalOpen = ref<boolean>(false);

const open: QuesoModalOpen = () => {
    isModalOpen.value = true;
};

const close: QuesoModalClose = () => {
    isModalOpen.value = false;
};

// Lock scrolling when modal is open
const toggleOverflowOnDocument = (bool: boolean = true) => {
    document.documentElement.style.overflow = bool ? "hidden" : "";
};

// Update opened state
watch(isModalOpen, (isOpen) => {
    if (isOpen) {
        toggleOverflowOnDocument(true);

        if (containsFocusable.value) {
            activate();
        }

        emit("modal:open");
    } else {
        toggleOverflowOnDocument(false);

        if (containsFocusable.value) {
            deactivate();
        }

        emit("modal:close");
    }
});

onMounted(() => {
    containsFocusable.value = hasFocusableElements(target.value);
    if (isModalOpen.value) {
        toggleOverflowOnDocument(true);
    }
});

// Provide and Expose open/close methods
provide(QuesoModalMethodsKey, { open, close } as QuesoModalMethods);

defineExpose({ isModalOpen, open, close });
</script>

<style lang="scss">
.queso-modal {
    --queso-modal-opacity: 0;
    --queso-modal-max-width: 80%;
    --queso-modal-max-height: 80%;

    @include unselectable;
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

    &__content {
        max-width: var(--queso-modal-max-width);
        max-height: var(--queso-modal-max-height);
        position: relative;
        z-index: 2;
        overflow: auto;
    }

    &.is-modal-open {
        --queso-modal-opacity: 1;
        @include unselectable(false);
    }
}
</style>
