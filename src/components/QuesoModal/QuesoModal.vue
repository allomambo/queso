<template>
    <slot name="trigger" v-bind="exposedData"></slot>

    <Teleport to="body">
        <div
            ref="modalContainer"
            class="queso-modal"
            :class="{ 'is-modal-open': isModalOpen }"
            :aria-expanded="isModalOpen"
            v-bind="$attrs"
        >
            <slot name="beforeContent" v-bind="exposedData"></slot>

            <div class="queso-modal__content">
                <slot name="content" v-bind="exposedData">
                    <slot v-bind="exposedData"></slot>
                </slot>
            </div>

            <slot name="afterContent" v-bind="exposedData"></slot>

            <slot v-if="hasOverlay" name="overlay" v-bind="exposedData">
                <queso-modal-overlay />
            </slot>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, provide, computed, reactive } from "vue";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import { onKeyStroke } from "@vueuse/core";

import QuesoModalOverlay from "./components/QuesoModalOverlay";

import { QuesoModalMethodsKey } from "./types";
import type { QuesoModalProps, QuesoModalOpen, QuesoModalClose } from "./types";

const props = withDefaults(defineProps<QuesoModalProps>(), {
    hasOverlay: true,
    isScrollLocked: true,
});

const emit = defineEmits(["modal:open", "modal:close"]);

const modalContainer = ref<HTMLElement | null>(null);
const { activate: activeFocus, deactivate: deactivateFocus } = useFocusTrap(modalContainer);

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

const hasFocusableElement = computed<boolean>(() => {
    if (modalContainer.value === null) return false;
    return focusableSelectors.some((selector) => modalContainer.value!.querySelector(selector) !== null);
});

const toggleFocusable = (isOpen: boolean) => {
    if (hasFocusableElement.value) {
        isOpen ? activeFocus() : deactivateFocus();
    }
};

// Open/Close modal
const isModalOpen = ref<boolean>(false);

const openModal: QuesoModalOpen = () => {
    isModalOpen.value = true;
};

const closeModal: QuesoModalClose = () => {
    isModalOpen.value = false;
};

// Provide open/close methods
provide(QuesoModalMethodsKey, { openModal, closeModal });

// Lock scrolling when modal is open
const toggleOverflowOnDocument = (bool: boolean = true) => {
    if (props.isScrollLocked) {
        document.documentElement.style.overflow = bool ? "hidden" : "";
    }
};

// Update opened state and focus trap
watch(isModalOpen, (isOpen) => {
    if (isOpen) {
        toggleFocusable(true);
        toggleOverflowOnDocument(true);
        emit("modal:open");
    } else {
        toggleFocusable(false);
        toggleOverflowOnDocument(false);
        emit("modal:close");
    }
});

onMounted(() => {
    if (isModalOpen.value) {
        toggleFocusable(true);
        toggleOverflowOnDocument(true);
    }
});

onKeyStroke("Escape", () => {
    if (isModalOpen.value) {
        isModalOpen.value = false;
    }
});

// Exposed data
const exposedData = reactive({
    // States
    isModalOpen,
    // Methods
    openModal,
    closeModal,
});

defineExpose({ ...exposedData });
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
