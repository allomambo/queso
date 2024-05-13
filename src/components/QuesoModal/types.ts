import type { InjectionKey } from "vue";

export type QuesoModalOpen = () => void;
export type QuesoModalClose = () => void;

export interface QuesoModalMethods {
    open: QuesoModalOpen;
    close: QuesoModalClose;
}

export const QuesoModalMethodsKey: InjectionKey<QuesoModalMethods> = Symbol();
