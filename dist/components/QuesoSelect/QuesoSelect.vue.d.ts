import { Option } from '../QuesoDropdown/types';
export interface Props {
    options: Option[];
    multiple?: boolean;
    placeholder?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    options: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    options: () => never[];
}>>>, {
    options: Option[];
}, {}>, {
    label?(_: {}): any;
    placeholder?(_: {
        placeholder: string | undefined;
    }): any;
    selector?(_: {
        activeOptions: Option[];
    }): any;
    icon?(_: {}): any;
    item?(_: {
        key: string | number;
        data: any;
    }): any;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
