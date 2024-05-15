import { QuesoIconProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<QuesoIconProps>, {
    size: number;
    sizeUnit: string;
    rotation: number;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<QuesoIconProps>, {
    size: number;
    sizeUnit: string;
    rotation: number;
}>>>, {
    size: number;
    sizeUnit: import('./types').QuesoIconSizeUnit;
    rotation: number;
}, {}>, {
    default?(_: {
        width: string;
        rotation: string;
        iconID: string;
        svg: string | SVGElement | undefined;
        name: string | undefined;
        prefix: string | undefined;
        size: number;
        sizeUnit: import('./types').QuesoIconSizeUnit;
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
