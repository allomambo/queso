import { QuesoCollapsibleProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<QuesoCollapsibleProps>, {
    isCollapsibleOpen: import('vue').Ref<boolean>;
    open: () => void;
    close: () => void;
    toggle: (bool?: boolean) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "collapsible:open": () => void;
    "collapsible:close": () => void;
    "collapsible:toggle": (args_0: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<QuesoCollapsibleProps>>> & {
    "onCollapsible:open"?: (() => any) | undefined;
    "onCollapsible:close"?: (() => any) | undefined;
    "onCollapsible:toggle"?: ((args_0: boolean) => any) | undefined;
}, {}, {}>, {
    beforeHeader?(_: {}): any;
    header?(_: {
        isCollapsibleOpen: boolean;
    }): any;
    headerPrefix?(_: {}): any;
    headerText?(_: {
        isCollapsibleOpen: boolean;
    }): any;
    headerSuffix?(_: {}): any;
    headerIcon?(_: {
        isCollapsibleOpen: boolean;
    }): any;
    afterHeader?(_: {}): any;
    beforeContent?(_: {}): any;
    content?(_: {}): any;
    afterContent?(_: {}): any;
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
