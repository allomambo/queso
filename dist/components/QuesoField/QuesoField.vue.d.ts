export interface Props {
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    isAutocomplete?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {
    fieldID: string;
    fieldName: string | undefined;
    fieldValue: any;
    fieldLabel: string | undefined;
    fieldAutocomplete: string | undefined;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    label?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
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
    }): any;
    beforeField?(_: {}): any;
    field?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
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
    }): any;
    afterField?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
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
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
