export interface Props {
    expandOnMount?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    expandOnMount: {
        type: import("vue").PropType<boolean>;
    };
}, {
    isCollapsibleOpen: import("vue").Ref<boolean>;
    open: () => void;
    close: () => void;
    toggle: (bool?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "toggle")[], "open" | "close" | "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expandOnMount: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onToggle?: (...args: any[]) => any;
}, {}>, {
    beforeHeader?(_: {}): any;
    headerPrefix?(_: {}): any;
    headerText?(_: {}): any;
    headerSuffix?(_: {}): any;
    headerIcon?(_: {}): any;
    afterHeader?(_: {}): any;
    beforeContent?(_: {}): any;
    content?(_: {}): any;
    afterContent?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
