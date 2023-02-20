import type { PropType as __PropType } from 'vue';
type TagOptions = "button" | "a" | "router-link" | "div" | "span";
declare const _sfc_main: import("vue").DefineComponent<{
    tag: {
        type: __PropType<TagOptions>;
        required: false;
        default: string;
    };
    url: {
        type: __PropType<string>;
        required: false;
    };
    isDisabled: {
        type: __PropType<boolean>;
        required: false;
    };
    isTargetBlank: {
        type: __PropType<boolean>;
        required: false;
    };
    ariaLabel: {
        type: __PropType<string>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: __PropType<TagOptions>;
        required: false;
        default: string;
    };
    url: {
        type: __PropType<string>;
        required: false;
    };
    isDisabled: {
        type: __PropType<boolean>;
        required: false;
    };
    isTargetBlank: {
        type: __PropType<boolean>;
        required: false;
    };
    ariaLabel: {
        type: __PropType<string>;
        required: false;
    };
}>>, {
    tag: TagOptions;
}>;
export default _sfc_main;
