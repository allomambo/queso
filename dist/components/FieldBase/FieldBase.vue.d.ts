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
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    id: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    isRequired: {
        type: import("vue").PropType<boolean>;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    isReadOnly: {
        type: import("vue").PropType<boolean>;
    };
    isError: {
        type: import("vue").PropType<boolean>;
    };
    isAutocomplete: {
        type: import("vue").PropType<boolean>;
    };
}, {
    fieldID: string;
    fieldName: string;
    fieldValue: any;
    fieldLabel: string;
    fieldAutocomplete: string;
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
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    isRequired: {
        type: import("vue").PropType<boolean>;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    isReadOnly: {
        type: import("vue").PropType<boolean>;
    };
    isError: {
        type: import("vue").PropType<boolean>;
    };
    isAutocomplete: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}>, {
    label?(_: {
        fieldID: string;
        fieldName: string;
        fieldValue: any;
        fieldLabel: string;
        fieldAutocomplete: string;
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
        fieldName: string;
        fieldValue: any;
        fieldLabel: string;
        fieldAutocomplete: string;
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
        fieldName: string;
        fieldValue: any;
        fieldLabel: string;
        fieldAutocomplete: string;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
