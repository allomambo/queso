import type { InjectionKey } from "vue";

export type QuesoModalProps = {
    hasOverlay?: boolean;
    isScrollLocked?: boolean;
};

/**
 * Methods
 */
export type QuesoModalOpen = () => void;
export type QuesoModalClose = () => void;

export interface QuesoModalMethods {
    openModal: QuesoModalOpen;
    closeModal: QuesoModalClose;
}

export const QuesoModalMethodsKey: InjectionKey<QuesoModalMethods> = Symbol();
