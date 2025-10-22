declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: {
        required: true;
        type: import('vue').PropType<boolean>;
    };
    boxLabel: {
        type: import('vue').PropType<string>;
        required: true;
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
        type: import('vue').PropType<boolean>;
    };
    boxLabel: {
        type: import('vue').PropType<string>;
        required: true;
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
    beforeLabel?(_: {
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
    afterLabel?(_: {
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
    beforeInput?(_: {
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
    checkbox?(_: {
        isHovered: boolean;
        isChecked: boolean;
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
    checkboxBox?(_: {
        isHovered: boolean;
        isChecked: boolean;
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
    checkboxBoxSymbol?(_: {
        isHovered: boolean;
        isChecked: boolean;
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
    checkboxLabel?(_: {
        isHovered: boolean;
        isChecked: boolean;
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
    checkboxLabelRequired?(_: {
        isHovered: boolean;
        isChecked: boolean;
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
    afterInput?(_: {
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
