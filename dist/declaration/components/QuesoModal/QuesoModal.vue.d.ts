import { QuesoModalProps, QuesoModalOpen, QuesoModalClose } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<QuesoModalProps>, {
    hasOverlay: boolean;
    isScrollLocked: boolean;
}>, {
    isModalOpen: boolean;
    openModal: QuesoModalOpen;
    closeModal: QuesoModalClose;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "modal:open": (...args: any[]) => void;
    "modal:close": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<QuesoModalProps>, {
    hasOverlay: boolean;
    isScrollLocked: boolean;
}>>> & {
    "onModal:open"?: ((...args: any[]) => any) | undefined;
    "onModal:close"?: ((...args: any[]) => any) | undefined;
}, {
    hasOverlay: boolean;
    isScrollLocked: boolean;
}, {}>, {
    trigger?(_: {
        isModalOpen: boolean;
        openModal: QuesoModalOpen;
        closeModal: QuesoModalClose;
    }): any;
    beforeContent?(_: {
        isModalOpen: boolean;
        openModal: QuesoModalOpen;
        closeModal: QuesoModalClose;
    }): any;
    content?(_: {
        isModalOpen: boolean;
        openModal: QuesoModalOpen;
        closeModal: QuesoModalClose;
    }): any;
    default?(_: {
        isModalOpen: boolean;
        openModal: QuesoModalOpen;
        closeModal: QuesoModalClose;
    }): any;
    afterContent?(_: {
        isModalOpen: boolean;
        openModal: QuesoModalOpen;
        closeModal: QuesoModalClose;
    }): any;
    overlay?(_: {
        isModalOpen: boolean;
        openModal: QuesoModalOpen;
        closeModal: QuesoModalClose;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
