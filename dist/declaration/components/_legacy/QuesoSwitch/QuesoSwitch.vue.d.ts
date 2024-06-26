declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>, {
    beforeField?(_: {}): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
