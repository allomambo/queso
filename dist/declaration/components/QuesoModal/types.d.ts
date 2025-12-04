import { InjectionKey } from 'vue';

export type QuesoModalProps = {
    hasOverlay?: boolean;
    isScrollLocked?: boolean;
};
export type QuesoModalOpen = () => void;
export type QuesoModalClose = () => void;
export interface QuesoModalMethods {
    openModal: QuesoModalOpen;
    closeModal: QuesoModalClose;
}
export declare const QuesoModalMethodsKey: InjectionKey<QuesoModalMethods>;
