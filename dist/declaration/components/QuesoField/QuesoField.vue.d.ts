import { QuesoFieldPrivateProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<QuesoFieldPrivateProps>, {
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
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "input:hover": (args_0: boolean) => void;
    "input:hover:enter": () => void;
    "input:hover:leave": () => void;
    "input:active": (args_0: boolean) => void;
    "input:active:focus": () => void;
    "input:active:blur": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<QuesoFieldPrivateProps>>> & {
    "onInput:hover"?: ((args_0: boolean) => any) | undefined;
    "onInput:hover:enter"?: (() => any) | undefined;
    "onInput:hover:leave"?: (() => any) | undefined;
    "onInput:active"?: ((args_0: boolean) => any) | undefined;
    "onInput:active:focus"?: (() => any) | undefined;
    "onInput:active:blur"?: (() => any) | undefined;
}, {}, {}>, {
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
    input?(_: {
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
