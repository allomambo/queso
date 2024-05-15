import { QuesoModalOpen, QuesoModalClose } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{}, {
    isModalOpen: import('vue').Ref<boolean>;
    open: QuesoModalOpen;
    close: QuesoModalClose;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "modal:open": (...args: any[]) => void;
    "modal:close": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>> & {
    "onModal:open"?: ((...args: any[]) => any) | undefined;
    "onModal:close"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    beforeContent?(_: {}): any;
    default?(_: {}): any;
    afterContent?(_: {}): any;
    overlay?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
