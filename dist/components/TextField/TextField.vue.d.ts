export type FieldTypes = "text" | "url" | "tel" | "email" | "password";
export interface Props {
    type?: FieldTypes;
    placeholder?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    type: {
        type: import("vue").PropType<FieldTypes>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    type: {
        type: import("vue").PropType<FieldTypes>;
        default: string;
    };
}>>, {
    placeholder: string;
    type: FieldTypes;
}>, {
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
    after?(_: {}): any;
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
