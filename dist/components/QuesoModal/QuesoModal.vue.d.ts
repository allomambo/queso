declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {
    isModalOpen: import("vue").Ref<boolean>;
    open: () => void;
    close: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "modal:open": (...args: any[]) => void;
    "modal:close": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    "onModal:open"?: ((...args: any[]) => any) | undefined;
    "onModal:close"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    "before-content"?(_: {}): any;
    default?(_: {}): any;
    "after-content"?(_: {}): any;
    overlay?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
