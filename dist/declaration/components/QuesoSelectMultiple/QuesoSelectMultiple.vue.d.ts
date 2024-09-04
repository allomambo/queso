declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: {
        required: true;
        type: import('vue').PropType<import('../QuesoDropdown').QuesoDropdownOptionValues>;
    };
    options: {
        type: import('vue').PropType<import('../QuesoDropdown').QuesoDropdownOptions>;
        required: true;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    id: {
        type: import('vue').PropType<string>;
    };
    name: {
        type: import('vue').PropType<string>;
        required: true;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    isError: {
        type: import('vue').PropType<boolean>;
    };
    isRequired: {
        type: import('vue').PropType<boolean>;
    };
    isDisabled: {
        type: import('vue').PropType<boolean>;
    };
    isReadOnly: {
        type: import('vue').PropType<boolean>;
    };
    extraAttributes: {
        type: import('vue').PropType<import('../QuesoField').QuesoFieldBaseExtraAttributes>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        required: true;
        type: import('vue').PropType<import('../QuesoDropdown').QuesoDropdownOptionValues>;
    };
    options: {
        type: import('vue').PropType<import('../QuesoDropdown').QuesoDropdownOptions>;
        required: true;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    id: {
        type: import('vue').PropType<string>;
    };
    name: {
        type: import('vue').PropType<string>;
        required: true;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    isError: {
        type: import('vue').PropType<boolean>;
    };
    isRequired: {
        type: import('vue').PropType<boolean>;
    };
    isDisabled: {
        type: import('vue').PropType<boolean>;
    };
    isReadOnly: {
        type: import('vue').PropType<boolean>;
    };
    extraAttributes: {
        type: import('vue').PropType<import('../QuesoField').QuesoFieldBaseExtraAttributes>;
    };
}>>, {}, {}>, {
    beforeLabel?(_: {}): any;
    label?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    required?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    placeholder?(_: {
        placeholder: string | undefined;
    }): any;
    selector?(_: {
        activeOptions: import('../QuesoDropdown').QuesoDropdownOptions;
    }): any;
    icon?(_: {}): any;
    item?(_: {
        value: string;
        label: string;
        data: object | undefined;
    }): any;
    afterInput?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
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
