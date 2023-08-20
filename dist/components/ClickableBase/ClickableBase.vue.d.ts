type TagOptions = "button" | "a" | "router-link" | "div" | "span";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    tag: {
        type: import("vue").PropType<TagOptions>;
        default: string;
    };
    url: {
        type: import("vue").PropType<string>;
    };
    isExternal: {
        type: import("vue").PropType<boolean>;
    };
    isDownload: {
        type: import("vue").PropType<boolean>;
    };
    ariaLabel: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    tag: {
        type: import("vue").PropType<TagOptions>;
        default: string;
    };
    url: {
        type: import("vue").PropType<string>;
    };
    isExternal: {
        type: import("vue").PropType<boolean>;
    };
    isDownload: {
        type: import("vue").PropType<boolean>;
    };
    ariaLabel: {
        type: import("vue").PropType<string>;
    };
}>>, {
    tag: TagOptions;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
