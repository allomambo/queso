import type { PropType as __PropType } from 'vue';
export type FieldTypes = "text" | "url" | "tel" | "email" | "password";
export interface Props {
    type?: FieldTypes;
}
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: __PropType<FieldTypes>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: __PropType<FieldTypes>;
        required: false;
        default: string;
    };
}>>, {
    type: FieldTypes;
}>;
export default _sfc_main;
