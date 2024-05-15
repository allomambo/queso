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
    beforeLabel?(_: {}): any;
    label?(_: {
        label: string;
    }): any;
    required?(_: {
        isRequired: true;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    checkboxBox?(_: {}): any;
    checkboxBoxSymbol?(_: {}): any;
    checkboxLabel?(_: {}): any;
    checkboxLabelRequired?(_: {
        isRequired: true;
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
