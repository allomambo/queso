export interface Props {
    shadows?: boolean;
    offset?: number;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    shadows: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    shadows: {
        type: import("vue").PropType<boolean>;
    };
}>>, {
    offset: number;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
