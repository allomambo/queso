declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {
    isModalOpen: import("vue").Ref<boolean>;
    open: () => void;
    close: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("modal:open" | "modal:close")[], "modal:open" | "modal:close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    "onModal:open"?: (...args: any[]) => any;
    "onModal:close"?: (...args: any[]) => any;
}, {}>, {
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
