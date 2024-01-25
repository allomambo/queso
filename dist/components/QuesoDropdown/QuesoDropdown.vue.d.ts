import { Option } from "./types";
export interface Props {
    defaultOptions?: Option[];
    options: Option[];
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    defaultOptions: () => never[];
    options: () => never[];
}>, {
    isDropdownOpen: import("vue").Ref<boolean>;
    openDropdown: () => void;
    closeDropdown: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:options": (...args: any[]) => void;
    "open:dropdown": (...args: any[]) => void;
    "close:dropdown": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    defaultOptions: () => never[];
    options: () => never[];
}>>> & {
    "onUpdate:options"?: ((...args: any[]) => any) | undefined;
    "onOpen:dropdown"?: ((...args: any[]) => any) | undefined;
    "onClose:dropdown"?: ((...args: any[]) => any) | undefined;
}, {
    defaultOptions: Option[];
    options: Option[];
}, {}>, {
    header?(_: {
        activeOptions: Option[];
    }): any;
    prefix?(_: {}): any;
    placeholder?(_: {}): any;
    selector?(_: {
        activeOptions: Option[];
    }): any;
    suffix?(_: {}): any;
    icon?(_: {}): any;
    popoverHeader?(_: {}): any;
    beforeItems?(_: {}): any;
    item?(_: {
        openDropdown: () => void;
        closeDropdown: () => void;
        key: string | number;
        data: any;
    }): any;
    afterItems?(_: {}): any;
    popoverFooter?(_: {}): any;
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
