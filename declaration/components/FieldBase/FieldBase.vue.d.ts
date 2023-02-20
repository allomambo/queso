import type { PropType as __PropType } from 'vue';
export interface Props {
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string>;
        required: false;
    };
    name: {
        type: __PropType<string>;
        required: false;
    };
    modelValue: {
        type: __PropType<any>;
        required: false;
    };
    label: {
        type: __PropType<string>;
        required: false;
    };
    isRequired: {
        type: __PropType<boolean>;
        required: false;
    };
    isDisabled: {
        type: __PropType<boolean>;
        required: false;
    };
    isReadOnly: {
        type: __PropType<boolean>;
        required: false;
    };
    isError: {
        type: __PropType<boolean>;
        required: false;
    };
}, {
    fieldID: string;
    fieldName: string;
    fieldValue: any;
    fieldLabel: string;
    isRequired: boolean;
    isActive: boolean;
    isHover: boolean;
    isFilled: boolean;
    isDisabled: boolean;
    isError: boolean;
    isReadOnly: boolean;
    updateValue: (data: any) => void;
    toggleIsActive: (bool?: boolean) => void;
    toggleIsHover: (bool?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string>;
        required: false;
    };
    name: {
        type: __PropType<string>;
        required: false;
    };
    modelValue: {
        type: __PropType<any>;
        required: false;
    };
    label: {
        type: __PropType<string>;
        required: false;
    };
    isRequired: {
        type: __PropType<boolean>;
        required: false;
    };
    isDisabled: {
        type: __PropType<boolean>;
        required: false;
    };
    isReadOnly: {
        type: __PropType<boolean>;
        required: false;
    };
    isError: {
        type: __PropType<boolean>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}>;
export default _sfc_main;
