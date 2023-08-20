declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    name: {
        type: import("vue").PropType<string>;
    };
    svg: {
        type: import("vue").PropType<string | SVGElement>;
    };
    prefix: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: import("vue").PropType<string>;
    };
    svg: {
        type: import("vue").PropType<string | SVGElement>;
    };
    prefix: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {
    size: number;
    rotation: number;
}>, {
    default?(_: {
        width: string;
        rotation: never;
        iconID: string;
        svg?: string | SVGElement;
        name?: string;
        prefix?: string;
        size: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
