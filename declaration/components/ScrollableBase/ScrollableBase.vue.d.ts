import type { PropType as __PropType } from 'vue';
export interface Props {
    shadows?: boolean;
    offset?: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    shadows: {
        type: __PropType<boolean>;
        required: false;
    };
    offset: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shadows: {
        type: __PropType<boolean>;
        required: false;
    };
    offset: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
}>>, {
    offset: number;
}>;
export default _sfc_main;
