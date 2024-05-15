import { InjectionKey } from 'vue';

export type QuesoModalOpen = () => void;
export type QuesoModalClose = () => void;
export interface QuesoModalMethods {
    open: QuesoModalOpen;
    close: QuesoModalClose;
}
export declare const QuesoModalMethodsKey: InjectionKey<QuesoModalMethods>;
